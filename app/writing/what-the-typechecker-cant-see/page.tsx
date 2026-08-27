import ArticleShell from '../_components/ArticleShell';
import { articleMetadata, formatDate } from '../_articles';
import BreakPicker from './_components/BreakPicker';
import { FACTS, LADDER, LIMITS, REVISIONS, TALLY, TOTAL_BROKEN } from './_data';

const SLUG = 'what-the-typechecker-cant-see';

export const metadata = articleMetadata(SLUG);

const STEPS = [
  'Take a real merged pull request from a real repository, at the state someone merged it.',
  'Break one thing inside it, on purpose, in a shape I know exactly.',
  'Ask four tools to find it, starting with the free one the repository already runs.',
  'Count what each one caught and what it cost.',
];

export default function Page() {
  return (
    <ArticleShell slug={SLUG}>
      <p>
        A renamed export is the easiest break in a codebase. Seven places still asked for the old name. A parser found
        six of them. A language model found six. The two lists did not match.
      </p>
      <p>That was the easy category.</p>

      <h2>The problem</h2>
      <p>
        A front-end monorepo holds a hundred packages leaning on each other. You change one, and something in another
        stops working.
      </p>
      <p>
        Your typechecker covers part of that. It misses a hook registered under a string name, a key in a JSON manifest,
        a default value moving from <code>null</code> to <code>50</code>. Rename the string and nothing complains. The
        code compiles. The behaviour is gone.
      </p>
      <p>You have a feeling about how big that gap runs. I wanted the number.</p>

      <h2>The method</h2>
      <p>
        Crash-test labs do not wait for accidents. They cause one under conditions they control, then measure the
        damage.
      </p>
      <ol className="artSteps">
        {STEPS.map((step, i) => (
          <li key={step} className="artStep">
            <span className="artStepIndex" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
      <p>
        The real pull request does more work than it looks. It carries hundreds of lines of legitimate change alongside
        my break, including other lawful edits to the same kind of thing. Strip that away and the task collapses into
        &ldquo;point at the only edit in the file&rdquo;, where every tool scores full marks for nothing.
      </p>

      <h2>How the scoring works</h2>
      <p>No opinion grades anything here.</p>
      <p>
        Every tool, the language model included, hands back the same object: a list of pairs saying{' '}
        <em>this package broke because that package changed</em>. Then I look up whether the pair I broke on purpose
        sits in the list.
      </p>
      <p>
        Let a model grade another model&rsquo;s prose and the judge&rsquo;s leniency sets the score. So I removed the
        judge.
      </p>
      <p>
        Anything a tool reports that I did not break counts against it. I run each tool on untouched code first, then
        score it against its own clean run. Never against another tool&rsquo;s.
      </p>

      <p className="artLabel">Counted before I broke anything</p>
      <h2>How much is covered</h2>
      <p>
        One question deserved an answer before any experiment ran. Of everything crossing a package boundary in this
        codebase, how much can the type system see?
      </p>

      <dl className="artFacts articleWide">
        {FACTS.map((fact) => (
          <div key={fact.label} className="artFact">
            <dt className="artFactLabel">{fact.label}</dt>
            <dd className={`artFactValue${fact.path ? ' isPath' : ''}`}>{fact.value}</dd>
          </div>
        ))}
      </dl>

      <div className="artTally articleWide">
        {TALLY.map((item) => (
          <div key={item.note}>
            <span className={`artTallyNum${item.hot ? ' isHot' : ''}`}>
              {item.num}
              {item.unit && <span className="unit">{item.unit}</span>}
            </span>
            <p className="artTallyNote">{item.note}</p>
          </div>
        ))}
      </div>

      <p>
        Three hundred and twenty-six places where one package reaches another by naming it in quotation marks. No
        compiler checks those. That count paid for the rest of the work.
      </p>

      <p className="artLabel">Live: the seven breaks, and who found them</p>
      <h2>Try it here</h2>
      <p>
        Four kinds of damage, ordered by distance from anything a compiler reaches. Pick one to see what I changed and
        who noticed.
      </p>

      <div className="articleWide">
        <BreakPicker />
      </div>
      <p className="artCaption">
        Bars show how many of the broken places each tool reported. Every figure comes from a saved run.
      </p>

      <p className="artLabel">The ladder: seven breaks, twenty-two broken places</p>
      <h2>Where it stops paying</h2>
      <p>Each rung costs more than the one above it. I wanted to know what the extra money buys.</p>

      <div className="artLadder articleWide">
        {LADDER.map((rung) => (
          <div key={rung.name} className={`artRung${rung.model ? ' isModel' : ''}`}>
            <div className="artRungTop">
              <span className="artRungName">{rung.name}</span>
              <span className="artRungCost">{rung.cost}</span>
            </div>
            <div
              className="artRail"
              role="img"
              aria-label={`${rung.got} of ${TOTAL_BROKEN} broken places found, ${rung.pct} percent`}
            >
              <i style={{ width: `${rung.pct}%` }} />
            </div>
            <p className="artRungScore" aria-hidden="true">
              <b>
                {rung.got} of {TOTAL_BROKEN}
              </b>{' '}
              broken places found &middot; {rung.pct}%
            </p>
            <p className="artRungGloss">{rung.gloss}</p>
          </div>
        ))}
      </div>
      <p className="artCaption">
        Read it top to bottom and the shape is unusual: <strong>nothing here is redundant.</strong> Each rung reaches a
        class of damage the rung above it structurally cannot. That is a far more useful result than one tool beating
        another.
      </p>

      <h2>The design I built this to test</h2>
      <p>
        Piecework started from one idea. Split the codebase into pieces. Give each piece its own agent. Let each agent
        report only on what it can see. Find the contradictions by comparing reports, so nobody needs the whole picture.
      </p>
      <p>I like that design, and it happens to be the fashionable answer.</p>
      <p>
        It lost every round I measured. On the breaks it could reach it matched the free parser&rsquo;s recall, raised
        two false alarms the parser did not raise, and spent 133,000 tokens getting there. On the last two categories
        &mdash; defaults and semantics &mdash; I ran the seat agents and they scored zero for seven, because their
        inventory does not carry defaults or body-level logic. The inventories before and after the mutation are
        identical. There is nothing for the join to collide.
      </p>
      <p>
        One defence remained. Splitting should win at scale, once a codebase stops fitting inside a single request. So I
        starved the single model of context and handed it the changed file alone. Recall held at 4 of 4. It recovered
        the affected packages from what it already knew about the codebase. Precision dropped to 4 of 6.
      </p>
      <blockquote>
        <strong>133,000 tokens</strong> for the split-agent design. <strong>247,000</strong> for one model with a clean
        prompt. <strong>Zero</strong> for the parser that beat both of them in total recall.
      </blockquote>

      <h2>Where the model earns its money</h2>
      <p>Once, and less cleanly than expected.</p>
      <p>
        A parser costing nothing handles three of the four categories. The fourth will never fall to one. A function
        used to return <code>http://</code> and now returns <code>https://</code>. A guard used to accept a number and
        now rejects it. No signature moved. No name went missing, no key vanished, no default changed. You have to read
        the code to see it.
      </p>
      <p>
        With a clean prompt, the model caught two of the four semantic breaks. It missed two consumers of the protocol
        change, judging them unaffected. With the answer baked into the prompt &mdash; &ldquo;all consumers expect this
        function to add <code>http://</code>&rdquo; &mdash; it caught all four. That delta is itself a finding: two of
        the model&rsquo;s four semantic detections were confirmation, not discovery.
      </p>
      <p>
        It also did something no list comparison can reach. On one string rename &mdash; but only when the prompt
        described the guard logic &mdash; it worked out that the rename drives the system into infinite recursion,
        because the guard and the thing it guards no longer share a name. Without the hint, it found the same broken
        consumers but missed the consequence.
      </p>
      <blockquote>
        The model isn&rsquo;t worth paying to find out <em>what broke</em>. It may be worth paying to find out{' '}
        <em>what happens next</em> &mdash; but only if the prompt gives it enough to reason from, and that prompt is
        itself a source of error.
      </blockquote>

      <h2>The mistake, and why it stays in</h2>
      <p>
        My first table put the repository&rsquo;s own toolchain at zero. Nothing at all. It flattered every number under
        it.
      </p>
      <p>
        I had run <code>tsc --noEmit</code>, which never writes the type files that let one package see into another.
        The repository&rsquo;s CI runs <code>tsc --build</code>, which writes them. Corrected, the toolchain catches 3
        of the 7 export-rename breaks, all of them inside typed packages.
      </p>
      <p>
        That correction shrank everything below it. It stays in the write-up because you should not believe a benchmark
        where the author&rsquo;s tool wins and the incumbent scores zero. I did not believe mine until I found the bug.
      </p>

      <h2>What it can&rsquo;t tell you</h2>
      <div className="artQA articleWide">
        {LIMITS.map((limit) => (
          <div key={limit.question} className="artQAItem">
            <p className="artQAQuestion">{limit.question}</p>
            <p className="artQAAnswer">{limit.answer}</p>
          </div>
        ))}
      </div>

      <h2 id="revisions">What changed since publication</h2>
      <p>
        This page is a record of runs, so a re-run rewrites it. Each revision stays listed rather than being quietly
        absorbed into the figures above.
      </p>
      <ol className="artLog articleWide">
        {REVISIONS.map((rev) => (
          <li key={rev.headline} className="artLogItem">
            <time className="artLogDate" dateTime={rev.date}>
              {formatDate(rev.date)}
            </time>
            <p className="artLogBody">
              <b>{rev.headline}</b> {rev.detail}
            </p>
          </li>
        ))}
      </ol>

      <div className="artColophon">
        <p>
          Piecework runs against public repositories. Every input is open source, every run is saved, and you can trace
          each figure above to a file in the repository it came from.
        </p>
        <p>
          Before you price a language model into a workflow, find out what a parser would have done for free. Three
          times out of four here, it did the job.
        </p>
      </div>
    </ArticleShell>
  );
}
