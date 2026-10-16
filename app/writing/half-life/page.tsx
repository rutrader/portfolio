import ArticleShell from '../_components/ArticleShell';
import { articleMetadata } from '../_articles';
import TierPicker from './_components/TierPicker';
import { FACTS, LIMITS, PRIOR_ART, RULE, TASK } from './_data';

const SLUG = 'half-life';

export const metadata = articleMetadata(SLUG);

export default function Page() {
  return (
    <ArticleShell slug={SLUG}>
      <p>
        I expected the cheap models to forget first. I wrote that down before the first run. None of the four forgot:
        each one obeyed the rule as often behind 256 KB of code as it did with nothing in the way.
      </p>
      <p>
        Instruction files sit at the top of the context. The work happens at the bottom, after the agent has read dozens
        of source files. If a &ldquo;never&rdquo; rule has a half-life, you would see it there, so I built that gap on
        purpose and measured across four Claude price tiers.
      </p>

      <h2>The rule</h2>
      <p>
        I took it word for word from vitest&rsquo;s own <code>AGENTS.md</code>, line 61, and put it alone in an
        otherwise empty <code>CLAUDE.md</code>.
      </p>
      <div className="articleWide">
        <p className="artLabel">vitest-dev/vitest · AGENTS.md:61 · 2899eb3</p>
        <pre className="artMutation">{RULE}</pre>
        <p className="artLabel">The task, which never mentions the rule</p>
        <pre className="artMutation">{TASK}</pre>
      </div>
      <p>
        A script decides every verdict. It reads the fenced TS and JS blocks in the answer. One <code>.toContain(</code>{' '}
        breaks the run. A run obeys when it has at least one <code>expect(</code> and no <code>toContain</code>. A run
        with no test code at all scores &ldquo;no chance&rdquo;, and I never count that as obeyed.
      </p>

      <dl className="artFacts articleWide">
        {FACTS.map((fact) => (
          <div key={fact.label} className="artFact">
            <dt className="artFactLabel">{fact.label}</dt>
            <dd className={`artFactValue${fact.path ? ' isPath' : ''}`}>{fact.value}</dd>
          </div>
        ))}
      </dl>

      <h2>The padding</h2>
      <p>
        Between the rule and the task I placed real files from <code>vitest/packages/*/src</code>, at the same commit.
        Each file had to pass one test first: the checker finds zero chances in it. No <code>expect(</code>, no{' '}
        <code>toContain</code>, no snapshots, no vitest imports. The padding shows the model nothing about the rule, for
        or against.
      </p>
      <p>
        Every run went through headless <code>claude -p --tools &quot;&quot;</code> with an isolated config, in a
        scratch folder outside my home directory, with no session saved.
      </p>

      <p className="artLabel">Live: four models, three conditions each</p>
      <h2>Flat on every tier</h2>
      <p>
        Pick a model. The top rail is the same model with the rule deleted, so you can see how much work the rule does.
        The bottom two are the rule with no padding and the rule behind 256 KB.
      </p>
      <div className="articleWide">
        <TierPicker />
      </div>
      <p className="artCaption">
        20 runs per condition. Rails show runs that obeyed. Tiers sort by list price per input token; parameter counts
        are not public, so price stands in for size.
      </p>

      <blockquote>
        On all four tiers, obedience at 256 KB matches obedience at zero. Haiku 4.5 sits at 7 of 20 at both ends.
        Sonnet, Opus and Fable obey every run that wrote tests.
      </blockquote>
      <p>
        The tiers differ in where they start. Haiku follows the rule a third of the time, and the 5.x models follow it
        in every run that writes tests. Haiku is also the only 4.5-generation model on the board, so I can&rsquo;t pin
        that gap on price. My pre-registered guess, that cheaper tiers forget faster, found no support.
      </p>

      <h2>What this doesn&rsquo;t show</h2>
      <div className="artQA articleWide">
        {LIMITS.map((limit) => (
          <div key={limit.question} className="artQAItem">
            <p className="artQAQuestion">{limit.question}</p>
            <p className="artQAAnswer">{limit.answer}</p>
          </div>
        ))}
      </div>

      <h2>Prior art</h2>
      <dl className="artFacts articleWide">
        {PRIOR_ART.map((source) => (
          <div key={source.id} className="artFact">
            <dt className="artFactLabel">
              <a href={source.href}>{source.id}</a>
            </dt>
            <dd className="artFactValue">{source.note}</dd>
          </div>
        ))}
      </dl>
      <p>
        In those papers the context grows with turns of conversation or with the model&rsquo;s own output. Here it grows
        with inert repo code inside one message, and nothing decays. Both results can hold at once.
      </p>

      <p className="artLabel">Found along the way</p>
      <h2>Three things I didn&rsquo;t plan to learn</h2>
      <p>
        <strong>A shipped rule that does nothing on 5.x models.</strong> ruff&rsquo;s <code>AGENTS.md</code> says
        &ldquo;Don&rsquo;t prefix tests with <code>test_</code>.&rdquo; With that rule deleted, Haiku named its tests{' '}
        <code>test_*</code> in 20 of 20 runs. Sonnet, Opus and Fable did it in 0 of 20 each. The newer models lack the
        habit the rule exists to stop, so I couldn&rsquo;t measure it fading.
      </p>
      <p>
        <strong>
          <code>claude -p</code> leaks your own instructions into a benchmark.
        </strong>{' '}
        Claude Code reads <code>.claude/CLAUDE.md</code> in every parent directory. Run it from a folder under your home
        directory and it loads <code>~/.claude/CLAUDE.md</code>, even with <code>--setting-sources project</code>. A
        canary test caught it. The fix: a scratch folder outside home and its own <code>CLAUDE_CONFIG_DIR</code>.
      </p>
      <p>
        <strong>
          <code>--tools &quot;&quot;</code> doesn&rsquo;t stop tool calls.
        </strong>{' '}
        With no tools to call, Haiku wrote its tests inside fake tool-call XML in 9 of 10 pilot runs, and a checker that
        reads fenced code sees no answer there. One format sentence in the task fixed it. Fable still drifted into fake
        tool calls in 4 of 20 runs at 256 KB, and in none with no padding.
      </p>

      <div className="artColophon">
        <p>
          240 runs on the vitest rule, plus 80 screening runs on ruff&rsquo;s, all through headless Claude Code. Total
          spend $105.98 at list prices. I pre-registered the design, and every change to it, before the first run.
        </p>
        <p>
          The rule and the padding come from vitest-dev/vitest at <code>2899eb3</code>. Harness <code>1c771b3</code>,
          data built 14 October 2026.
        </p>
      </div>
    </ArticleShell>
  );
}
