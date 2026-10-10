import ArticleShell from '../_components/ArticleShell';
import { articleMetadata } from '../_articles';
import { M1_MESSAGE, M1_PATCH, M2_MESSAGE, M3_COMMANDS, SCORES } from './_data';

const SLUG = 'the-delegation-tax';

export const metadata = articleMetadata(SLUG);

export default function Page() {
  return (
    <ArticleShell slug={SLUG}>
      <p>
        I expected the orchestrator to win, or at worst to cost more for nothing. It lost on both tasks that separated
        the two arms, and I can point to the sentence behind each loss.
      </p>
      <p>
        Both arms ran the same model, Opus 5.5, with the same tools: Bash, Edit, Read, Write, Grep and Glob. The
        orchestrator had one extra tool, which let it spawn subagents and hand them a piece of the task. Hidden tests
        judged every task. No model graded another model&rsquo;s work.
      </p>

      <h2>The mechanism</h2>
      <p>
        A subagent never sees the original spec. It sees the orchestrator&rsquo;s summary of it, a message of prose and
        Bash commands written under time pressure by the same kind of model that will carry it out. The subagent follows
        that summary, mistakes and all.
      </p>
      <p>Three moments in the transcripts show it, each specific enough to rule out noise.</p>

      <p className="artLabel">Moment 1</p>
      <h2>An invented rule</h2>
      <p>
        The task was to implement a method that pulls one field out of a structured pandas column. The spec is precise
        about naming. For a string, bytes or integer selector, the result takes the selected field&rsquo;s name. The
        spec says nothing about decoding.
      </p>
      <div className="articleWide">
        <p className="artLabel">Orchestrator to worker, the message as sent (excerpt)</p>
        <pre className="artMutation">
          {M1_MESSAGE.map((seg) => (seg.hot ? <strong key={seg.text}>{seg.text}</strong> : seg.text))}
        </pre>
      </div>
      <p>
        That parenthetical, &ldquo;for bytes, decode,&rdquo; appears nowhere in the spec. The worker built it anyway:
      </p>
      <div className="articleWide">
        <p className="artLabel">The worker&rsquo;s patch</p>
        <pre className="artMutation">{M1_PATCH}</pre>
        <p className="artVerdict">
          <b>Result</b>
          The hidden test <code>test_struct_accessor_field_expanded[string_col-string_col]</code> expects the raw bytes
          value <code>b&quot;string_col&quot;</code> back. The run fails 11 of 12. Both solo runs on this task left
          bytes alone, matched the spec and passed 12 of 12.
        </p>
      </div>

      <p className="artLabel">Moment 2</p>
      <h2>A paraphrased algorithm</h2>
      <p>
        Same task, another run. This time the orchestrator skipped the rule and wrote the implementation out as
        pseudocode for the worker to transcribe:
      </p>
      <div className="articleWide">
        <p className="artLabel">Orchestrator to worker, the message as sent (excerpt)</p>
        <pre className="artMutation">{M2_MESSAGE}</pre>
      </div>
      <p>
        In the branch that handles a list of nested selectors, nothing ever sets <code>name</code> to the final
        field&rsquo;s real name. The orchestrator dropped that step somewhere between the upstream logic and this prose.
        The worker copied it line for line, bug included.
      </p>
      <p className="artVerdict">
        <b>Result</b>
        Fails <code>test_struct_accessor_field_expanded[indices5-string_col]</code>, 11 of 12. Both solo runs and the
        reference implementation compute the name from the resolved field object, and all three pass.
      </p>
      <blockquote>
        Two reps on the same task produced two different paraphrase bugs. Solo won this task 2 of 2. Orchestration won
        it 0 of 2.
      </blockquote>

      <p className="artLabel">Moment 3</p>
      <h2>The handoff that never returned</h2>
      <p>
        A different task failed a different way. The orchestrator asked its worker to verify the change by
        &ldquo;running the existing test suites&rdquo; for the area it touched. The worker escalated on its own, from a
        few relevant test files to the whole pandas test suite:
      </p>
      <div className="articleWide">
        <p className="artLabel">The worker&rsquo;s own commands, in order</p>
        <pre className="artMutation">{M3_COMMANDS}</pre>
      </div>
      <p>
        That makes ten escalating full-suite runs under emulation, each eating minutes. The run hit its 45-minute cap
        with the worker still mid-loop, and the orchestrator never got control back to report anything.
      </p>
      <blockquote>
        <strong>This run also exposed a bug in my scoring.</strong> The harness recorded it as a pass, because it
        salvaged a code patch from disk after the timeout. My rules already counted a timeout as a fail, so I corrected
        the record. The orchestrator&rsquo;s score on this task drops from an apparent 2 of 2 to 1 of 2.
      </blockquote>

      <h2>What didn&rsquo;t move</h2>
      <p>
        On 6 of the 10 tasks, solo and orchestrator landed on the same pass or fail: the same missing code, the same
        under-scoped fix, however the work was split. Two of those tasks were unfair to both arms. One had a masked spec
        that also stripped unrelated functions the fix depended on. The other&rsquo;s description named the wrong class
        for the missing piece, and every run in both arms hit that wall.
      </p>

      <dl className="artFacts articleWide">
        {SCORES.map((score) => (
          <div key={score.label} className="artFact">
            <dt className="artFactLabel">{score.label}</dt>
            <dd className="artFactValue">{score.value}</dd>
          </div>
        ))}
      </dl>
      <p className="artCaption">Hidden-test passes per arm, two reps each. Ten tasks in all.</p>

      <p>
        Token cost came out about even. The orchestrators mostly delegated once per task, so they duplicated little
        context. On the clock, orchestration ran slower on most tasks. Nothing on the efficiency side makes up for the
        lost passes.
      </p>

      <h2>How far this reaches</h2>
      <p>
        This is a small run. Two of the ten tasks separated the arms, and both came from the same codebase. I
        won&rsquo;t put a percentage on it, and &ldquo;orchestration loses by X%&rdquo; is no part of the claim.
      </p>
      <p>The claim is the mechanism. It held up when I read the transcripts, as well as on the scoreboard.</p>
      <blockquote>
        Splitting a task adds a retelling of the spec, and each retelling gives the instruction a chance to drift from
        what was asked. Nobody sees the drift until a test or a person catches it.
      </blockquote>

      <div className="artColophon">
        <p>
          The hidden tests come from FeatureBench. Both arms ran Opus 5.5 with the same tool access. The three failures
          come from two tasks, so read them as a mechanism and draw no statistic from them.
        </p>
      </div>
    </ArticleShell>
  );
}
