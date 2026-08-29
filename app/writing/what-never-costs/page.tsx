import ArticleShell from '../_components/ArticleShell';
import { articleMetadata } from '../_articles';
import TrapPicker from './_components/TrapPicker';
import { FACTS, LADDER, LADDER_MAX, LIMITS, REMEDA, TALLY } from './_data';

const SLUG = 'what-never-costs';

export const metadata = articleMetadata(SLUG);

const STEPS = [
  'Pull every don’t-style rule out of a real instruction file, and keep the ones a script can check.',
  'Rewrite one of them to say the same thing, pointed forwards.',
  'Give an agent the same coding job 40 times under each version of the zod rule, then 20 more with the rule deleted, and 8 on the maintainer’s file untouched.',
  'Count the broken rules with the repo’s own checker, not one I wrote.',
];

export default function Page() {
  return (
    <ArticleShell slug={SLUG}>
      <p>
        The don&rsquo;t version got broken three and a half times as often. Then I tried it on a second project and got
        nothing at all, which turns out to be the more useful half of the story.
      </p>

      <h2>The problem</h2>
      <p>
        Instruction files for AI assistants are full of the word never. Never commit unless asked. Don&rsquo;t add
        comments. Do not create files unless you have to.
      </p>
      <p>
        There is an old belief that models are bad at negatives. Tell one not to do X, the theory goes, and you have
        just put X in its head. People repeat this a lot. Nobody had checked it on real work, with a real instruction
        file, using a count that needs nobody&rsquo;s opinion.
      </p>
      <p>If the belief holds, plenty of instruction files are written backwards and fixing them is free.</p>

      <h2>The method</h2>
      <p>
        Take a rule someone really wrote, in a repo people really use. Say it forwards instead of backwards. Change
        nothing else.
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
        That last step carries more weight than it looks. The rule I picked is one the maintainers cared about enough to
        write a checker for. It is a real program that reads the structure of the code, it shipped long before I
        started, and you can run it yourself. I never had to decide what counted as breaking the rule.
      </p>

      <p className="artLabel">The question everything else rests on</p>
      <h2>What makes a rewrite fair</h2>
      <p>This is where a test like this usually falls apart.</p>
      <p>
        A do-this rule tends to cover more ground than the don&rsquo;t rule it replaces. &ldquo;Never stack prose across
        comment lines&rdquo; says nothing about whether you write comments at all. &ldquo;Write single-line
        comments&rdquo; quietly tells you to write some. Compare those two and you are testing a new rule, not the same
        rule reworded.
      </p>
      <p>
        So I gave up on making the two lines mean the same thing. You cannot do that in English, and nobody could check
        it if I claimed I had. I tied both lines to the checker instead.
      </p>
      <blockquote>
        Two lines are a <strong>fair swap</strong> when the checker marks the same code as broken for both of them.
        Nothing more than that.
      </blockquote>
      <p>
        That reverses the order of the work, which is the whole trick. You do not write the do version by rewording the
        don&rsquo;t version, because that leaves the wording up to my judgement, and my judgement is the thing under
        suspicion. You freeze the checker first. Then you write the do version as a plain reading of what the checker
        already looks for. Neither line comes from the other. Both describe the same program.
      </p>
      <p>
        Then four checks, and you can do all four by eye. The do version cannot ban anything the don&rsquo;t version
        allowed. It cannot allow anything the don&rsquo;t version banned. It cannot need the checker touched. And it has
        to match on length, position and shape, with no negative words in it. Any rule that fails one of those gets
        dropped, and how often that happens is worth reporting on its own.
      </p>

      <div className="articleWide">
        <p className="artLabel">The don&rsquo;t version, in the repo&rsquo;s own words</p>
        <pre className="artMutation">Never stack prose across consecutive `//` lines.</pre>
        <p className="artCaption">7 words. One clause. Untouched.</p>

        <p className="artLabel">The do version, the only line I wrote</p>
        <pre className="artMutation">Write prose comments as one long `//` line.</pre>
        <p className="artCaption">8 words. One clause. Same spot in the file. No negative word in it.</p>
      </div>
      <p>
        Everything else in that paragraph stays identical, character for character, in both versions: the reasoning, the
        list of exceptions, the mention of the checker.
      </p>

      <h2>What the real rule taught me</h2>
      <p>
        My plan said the don&rsquo;t version would be the repo&rsquo;s own words, so that only one of the two lines was
        mine. The real rule would not cooperate.
      </p>
      <p>
        Written out, the maintainer&rsquo;s paragraph runs like this: a don&rsquo;t, then the reasoning, then{' '}
        <strong>his own do version of the same rule</strong> (<em>write one long line instead</em>), then the
        exceptions. Both directions are already sitting in there.
      </p>
      <p>
        So a word-for-word don&rsquo;t version is not a don&rsquo;t version. It already holds the do version inside it,
        and the comparison dies before it starts. I cut that one sentence out of both versions, the same way in each, so
        direction is the only thing left that differs.
      </p>
      <p>
        I would guess this is normal rather than rare. People writing rules by hand put both directions in, because they
        are trying to be understood, not measured.
      </p>

      <p className="artLabel">Counted before anything ran</p>
      <h2>How many rules can even be checked</h2>
      <p>
        Before measuring anything, a smaller question. Of the don&rsquo;t-style rules in a real instruction file, how
        many can a script check at all?
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
        Half the don&rsquo;t rules in a working instruction file are beyond any script. &ldquo;Avoid redundant
        assertions.&rdquo; &ldquo;Don&rsquo;t hide behind passive voice.&rdquo; &ldquo;Length matches substance.&rdquo;
        Real maintainers lean on these, and you cannot count them without someone forming an opinion. I left them out
        instead of grading them loosely.
      </p>

      <p className="artLabel">Live: four ways this test could have printed a clean zero</p>
      <h2>Try it here</h2>
      <p>
        Each of these prints the same thing. No violations, in every version, which looks just like a model behaving
        itself. Two were in my plan. I found the other two by building the thing.
      </p>

      <div className="articleWide">
        <TrapPicker />
      </div>
      <p className="artCaption">
        Bars compare what the count would have said against what was really there. Every figure comes from a saved run.
      </p>

      <h2>The near miss</h2>
      <p>The fourth trap came close to handing me a tidy, confident, wrong answer.</p>
      <p>
        The plan said this: before changing anything, run the untouched instruction file a few times and watch how much
        the count moves about. If it moves a lot, one rule&rsquo;s effect gets lost in the noise, and that is the
        finding. I ran it nine times on the untouched file. Zero violations, nine times out of nine. Then eight more
        with the rule deleted. Zero again. Seventeen runs of the first job, and not one of them moved.
      </p>
      <p>
        A count that never moves. On paper that is the best thing you can get, a measurement that holds perfectly
        steady. It would have backed a clean claim that the wording makes no difference at all.
      </p>
      <p>
        It was worthless. The job I had given the agent produced one or two comments per run. You cannot stack prose
        across several comment lines if you only ever write one comment. The rule had no chance to be broken. I was
        measuring my own job, not the model.
      </p>
      <blockquote>
        A steady count is not enough. It has to be steady <em>and above zero</em>. A measurement pinned at zero looks
        the same as no measurement at all.
      </blockquote>
      <p>
        The fix was a job that needs explaining: write three functions whose obvious versions are wrong, and say why.
        That gets about seven comments per run, which gives the rule something to bite on. Every count in this write-up
        sits next to the number of chances the rule had.
      </p>

      <p className="artLabel">Before the number</p>
      <h2>How far this reaches</h2>
      <p>
        What follows is one rule, in one project, on one job, with one model. It is not a finding about instruction
        files in general.
      </p>
      <p>
        I ran the same test on a second project and got nothing. The two wordings landed on top of each other and the
        small difference pointed the wrong way. That section is further down, and it is not a footnote.
      </p>
      <p>
        One account fits both. Wording seems to matter in proportion to how much work the rule is already doing. The
        first rule cut breakages by 91% at its best. The second cut them by 29%. The rule that was doing real work
        showed a gap between its two wordings; the rule that was barely landing did not.
      </p>
      <p>
        So the number below is what turning one working rule around was worth on that rule. It is not a rate to carry
        anywhere else.
      </p>

      <p className="artLabel">
        zod, second job &middot; 108 runs &middot; 814 comments &middot; $100 reconstructed from the session logs
      </p>
      <h2>The result</h2>
      <p>
        <strong>The run is the unit.</strong> The treatment is applied per run: one run gets one version of the line,
        and the comments inside a run come from a single generation, so they are not independent of each other.
      </p>
      <p>
        Inside a run I count comments, not comment lines. One comment is one place where the agent stopped to explain
        something. Counting lines would be the wrong move, because an obedient run writes one long line where a
        disobedient one writes three, and that would bury the effect.
      </p>
      <p>
        So there are two rates, and they are not interchangeable. The headline figure is the per-run rate: take the
        share of that run&rsquo;s comments that broke the rule, then average across runs. The per-comment rate pools all
        814 comments from these 108 runs and takes the share that broke the rule. That figure is descriptive. It treats
        each comment as if it stood on its own, and it does not. The significance test permutes whole runs, not
        comments.
      </p>

      <div className="artLadder articleWide">
        {LADDER.map((rung) => (
          <div key={rung.name} className={`artRung${rung.test ? ' isTest' : ''}`}>
            <div className="artRungTop">
              <span className="artRungName">{rung.name}</span>
              <span className="artRungCost">{rung.cost}</span>
            </div>
            <div
              className="artRail"
              role="img"
              aria-label={`${rung.name}: ${rung.pct} percent of comments broke the rule, per run`}
            >
              <i style={{ width: `${Math.round((rung.pct / LADDER_MAX) * 100)}%` }} />
            </div>
            <p className="artRungScore" aria-hidden="true">
              <b>{rung.pct.toFixed(1)}%</b> of comments broke the rule, per run &middot; {rung.pooled.toFixed(1)}%
              pooled over all comments
            </p>
            <p className="artRungGloss">{rung.gloss}</p>
          </div>
        ))}
      </div>
      <p className="artCaption">Bars are per-run rates against the worst arm on the board. Longer is worse.</p>

      <p>
        The two middle rows are the test. The top and bottom rows are what make them readable. Delete the rule and the
        average run breaks it on 55.0% of its comments, so the rule earns its place in both wordings. The gap between
        the two wordings is about a quarter of what the rule does in total.
      </p>
      <blockquote>
        Per run, the don&rsquo;t version got broken <strong>3.4 times as often</strong> as the do version covering the
        same ground: 17.2% against 5.1%, a gap of 12.1 points. Pooled across all 814 comments from these 108 runs, the
        same comparison is 15.8% against 5.0%, a ratio of 3.2. The per-run gap is the one that carries the claim, and it
        holds up after correcting for every other comparison on this page.
      </blockquote>
      <p>
        One thing worth ruling out. Maybe the do version just made the model do less, and a quieter run breaks fewer
        rules by writing less. The price per run says otherwise. The two versions cost within 2.5% of each other, 99
        cents against 96, while the breakage rate moved by 239%. The do version is one word longer and produced 9% less
        output. Nobody bought the extra obedience with extra work.
      </p>

      <h2>The result I did not plan</h2>
      <p>
        One row on that chart was never meant to be part of the test. The bottom row is the maintainer&rsquo;s file
        exactly as it ships, the version with both directions in it, which I had run only to see how much the count
        moved.
      </p>
      <p>
        It sits with the do version and clearly apart from the don&rsquo;t version. Sitting with the do version is as
        far as it goes: I cannot tell the two apart, and I would not try. That row is 8 runs, 63 comments and 2
        violations, against 40-run arms either side of it. Two violations in either direction move it across the do
        version.
      </p>
      <p>
        What survives the small sample is the distance from the don&rsquo;t version, and who wrote it. I did not write a
        word of that paragraph. Taking the maintainer&rsquo;s own do sentence out and leaving the don&rsquo;t behind
        made the model obey less. A person wrote that line with none of this in mind, and it points forwards.
      </p>

      <h2>The runs I threw away</h2>
      <p>
        Partway through, an account limit killed the sweep. Thirty-three runs came back with an error, and twenty-eight
        of those had written no code at all.
      </p>
      <p>
        A run that writes nothing breaks nothing. It scores zero and sits in the table as the best-behaved run of the
        batch. Left in, those runs would have dragged both versions toward looking obedient and shrunk the gap I was
        trying to measure.
      </p>
      <p>
        I deleted all thirty-three and ran them again. Every number here comes from a run that finished and wrote at
        least one comment. The scoring script now marks a run that edits nothing as dead at the moment it writes the
        record, so nothing further down the line has to remember.
      </p>

      <p className="artLabel">The second project</p>
      <h2>Where it failed to happen again</h2>
      <p>
        One result in one project is an anecdote, so I ran the whole thing again on a second open-source project,
        remeda. The gap did not show up. That is the honest headline of this section and I am not going to bury it.
      </p>
      <p>
        The second project turned out to be a better test than I expected, for a reason I did not plan. remeda writes
        this rule <em>forwards</em>: <em>prefer this over type assertions.</em> zod wrote its rule backwards. So this
        time the project supplied the do version and <strong>I</strong> wrote the don&rsquo;t version. Authorship
        flipped.
      </p>
      <p>
        That matters, because it tests the most obvious objection to the first result. In zod, the do version was the
        one sentence I wrote. Maybe my sentence was just clearer, and clarity rather than direction is what moved the
        number. Flipping who writes which side puts that to the test.
      </p>

      <div className="artArms articleWide">
        {REMEDA.map((arm) => (
          <div key={arm.name} className="artArm">
            <span className="artArmName">{arm.name}</span>
            <span className="artRail" role="img" aria-label={`${arm.name}: ${arm.value}`}>
              <i style={{ width: `${arm.pct}%` }} />
            </span>
            <span className="artArmScore" aria-hidden="true">
              {arm.value}
            </span>
          </div>
        ))}
      </div>
      <p className="artCaption">
        54 runs on this rule, 18 per version. remeda took 71 runs in all: these 54, and 17 on a different rule, one
        banning date-based expiry on TODO comments. I dropped that rule before running any comparison. With the rule
        deleted the agents never wrote a date-based TODO at all, so no wording of it had anything to reduce.
      </p>

      <p>The difference between the two wordings is 0.11, and it points the wrong way. Nothing there.</p>
      <p>
        <strong>This is not a case of too few runs.</strong> That is the usual excuse for a result that fails to repeat,
        and it does not apply. The first project&rsquo;s threefold gap sits outside the range this second test could
        plausibly have missed. A gap that size would have shown up. It is not that I could not see it. It was not there.
      </p>
      <blockquote>
        One explanation fits both projects. The first rule was doing a lot of work: at its best it cut breakages by 91%.
        The second rule barely works at all, cutting them by 29%.{' '}
        <strong>Wording seems to matter in proportion to how much the rule is doing in the first place.</strong> A rule
        that is barely landing has little room for its phrasing to matter. Counting the rule I dropped, which had no
        room at all, that makes three rules, and the phrasing only moved the number on the one doing real work.
      </blockquote>
      <p>
        The agents did read the second rule. They doubled their use of the approved alternative when the rule was
        present. They just carried on doing the forbidden thing at the same rate under either wording.
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

      <div className="artColophon">
        <p>
          Everything here runs on a public repo, a public instruction file and a public job. The checker belongs to the
          maintainers, not to me. Both versions of the line are printed above, and they differ by their direction and
          one word of length.
        </p>
        <p>
          Both projects together come to 196 runs and about $137 on Sonnet, if you want to repeat it. zod is 125 runs
          and $110, averaging 88 cents each; remeda is 71 runs and $26.95. The two figures are not measured the same
          way: remeda&rsquo;s costs were captured as each run finished, while zod&rsquo;s were reconstructed afterwards
          from the per-run session logs, because the script that ran zod recorded only exit code and wall clock. Almost
          all of that is the repo being read into context again on every run.
        </p>
        <p>
          Turning a rule around is free to try, and on one of the two rules here it was worth about a threefold
          difference in whether the rule got followed. On the other it was worth nothing. Try it on a rule you already
          know is doing work, and measure rather than assume.
        </p>
      </div>
    </ArticleShell>
  );
}
