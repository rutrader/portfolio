/**
 * Every figure on the page, in one place.
 *
 * These are saved-run results, not estimates. Nothing here is computed at
 * render time and nothing is rounded in the markup — if a number changes, it
 * changes because a run changed.
 */

export interface Fact {
  label: string;
  value: string;
  /** Renders in mono: repository names, commands, paths. */
  path?: boolean;
}

export const FACTS: Fact[] = [
  { label: 'Instruction file', value: 'colinhacks/zod · AGENTS.md', path: true },
  { label: 'Lines with a negative', value: '68, sorted one by one' },
  { label: 'The checker', value: 'scripts/check-comments.ts', path: true },
  { label: 'Runs on zod', value: '125 · one model, two jobs' },
];

export interface Tally {
  num: string;
  unit?: string;
  note: string;
  /** Takes the accent — the counts the argument turns on. */
  hot?: boolean;
}

export const TALLY: Tally[] = [
  {
    num: '35',
    note: 'Of the 68 lines are real rules. The other 32 describe things (27) or already point forwards (5); the 68th restates a rule counted here',
  },
  { num: '8', note: 'Of those 35 can be checked by a script in this setup, which is under a quarter', hot: true },
  {
    num: '49',
    unit: '%',
    note: 'Of the 35 need a person, or another model, to say whether they were broken at all',
    hot: true,
  },
];

export interface TrapRow {
  /** What the count would have said, or what was really there. */
  name: string;
  got: number;
  of: number;
  /** The honest figure of the pair. It takes the accent, whichever way it runs. */
  truth?: boolean;
}

export interface Trap {
  id: string;
  name: string;
  blurb: string;
  /** The mechanism, rendered pre-wrapped in mono. */
  mutation: string;
  rows: TrapRow[];
  verdict: string;
  /** Found while building rather than planned for — the ones worth the alarm. */
  alarm?: boolean;
}

/** Four ways this test could have printed a clean zero. Two were planned for. */
export const TRAPS: Trap[] = [
  {
    id: 'T1',
    name: 'The repo repairs it first',
    blurb:
      'The repo runs formatters on its own before a commit finishes. One of them joins stacked comment lines back together. Count after committing and the evidence is already gone.',
    mutation:
      '.husky/pre-commit\n\n  check:comments      <- the rule\n  lint-staged\n    biome format --write\n    biome lint   --write\n\n--write means it fixes in place.',
    rows: [
      { name: 'counted after commit', got: 0, of: 10 },
      { name: 'really written', got: 10, of: 10, truth: true },
    ],
    verdict:
      'In the plan, and the reason nothing here is ever committed. The agent gets no shell access at all, which is blunter than switching the hooks off and leaves nothing to remember. Everything is counted in the working files.',
  },
  {
    id: 'T2',
    name: 'The hook blocks on new files',
    blurb:
      'The same pre-commit step refuses to run while untracked files are sitting there. That collides with any rule about not creating files, because the hook produces the good behaviour, not the model.',
    mutation:
      'pre-commit fails if untracked\nfiles exist\n\n-> the rule about creating files\n   gets enforced by the hook,\n   not obeyed by the model',
    rows: [
      { name: 'credited to model', got: 10, of: 10 },
      { name: 'earned by model', got: 0, of: 10, truth: true },
    ],
    verdict:
      'In the plan. The same decision handles it: nothing is committed, and the job names the one file to edit, so new files never come up.',
  },
  {
    id: 'T3',
    name: 'The checker cannot see new files',
    blurb:
      'Found while building. The maintainer’s checker asks git which files exist. A file the agent has just made is not registered with git yet, so the checker walks straight past it — and that is the one file the agent actually wrote.',
    mutation:
      'check-comments.ts asks git\nfor the file list.\n\nA new file is untracked,\nso it is not in that list,\nso it never gets opened.',
    rows: [
      { name: 'as untracked file', got: 0, of: 1 },
      { name: 'after git add -N', got: 1, of: 1, truth: true },
    ],
    verdict:
      'I checked this directly. One file with an obvious two-line stacked comment scored zero while untracked, and one as soon as I registered it. The fix is to register new files without committing them, then count. No error, no warning, and the number it hands you is the same number a well-behaved model would hand you.',
    alarm: true,
  },
  {
    id: 'T4',
    name: 'The rule never gets a chance',
    blurb:
      'Found while building, and this is the dangerous one. The first job I set produced one or two comments per run. You cannot stack prose across several comment lines if you only write one comment, so every version scored zero.',
    mutation:
      'first job:  1-2 comments per run\n            0 violations, 17/17 runs\n\nsecond job: ~7 comments per run\n            the rule can finally bite',
    rows: [
      { name: 'first job runs', got: 0, of: 17 },
      { name: 'second job runs', got: 49, of: 108, truth: true },
    ],
    verdict:
      'That is a measurement of the job, not the model, and it looks just like obedience. A steady count has to be above zero as well. Every count in this write-up sits next to how many chances the rule really had.',
    alarm: true,
  },
];

export interface Rung {
  name: string;
  cost: string;
  /** Share of a run's comments that broke the rule, averaged across runs. */
  pct: number;
  /** The same comparison pooled over every comment. Descriptive only. */
  pooled: number;
  gloss: string;
  /** The two rows that are the test itself. */
  test?: boolean;
}

/** The worst rate on the board sets the rail scale, so the rungs stay comparable. */
export const LADDER_MAX = 55.0;

export const LADDER: Rung[] = [
  {
    name: 'Rule deleted',
    cost: '20 runs · 151 comments · $0.78 each',
    pct: 55.0,
    pooled: 58.9,
    gloss:
      'With no rule at all, more than half the comments break it. This is the scale that makes the other rows readable. Without it, a small gap between two wordings could mean a small effect or a dead rule.',
  },
  {
    name: '“Never stack prose…”',
    cost: '40 runs · 297 comments · $0.99 each',
    pct: 17.2,
    pooled: 15.8,
    test: true,
    gloss:
      'The don’t version, in the repo’s own words. Cuts breakages by about two thirds against having no rule, so it works. 23 of the 40 runs came back clean.',
  },
  {
    name: '“Write prose comments as…”',
    cost: '40 runs · 303 comments · $0.96 each',
    pct: 5.1,
    pooled: 5.0,
    test: true,
    gloss:
      'The same rule pointed forwards. Same checker, same job, same spot in the file, and the same number of chances to break it: 7.6 comments per run against 7.4. 28 of the 40 runs came back clean.',
  },
  {
    name: 'The file as it ships',
    cost: '8 runs · 63 comments · $0.86 each',
    pct: 2.8,
    pooled: 3.2,
    gloss:
      'Never meant to be part of the test — this one was the baseline. It is the maintainer’s untouched paragraph, which holds both directions at once, and it behaves like the do version. I did not write a word of it.',
  },
];

export interface RemedaArm {
  name: string;
  /** Violations per run, as the saved run reported them. */
  value: string;
  /** Rail width against the worst arm. */
  pct: number;
}

/** The second project, where the gap did not show up. 54 runs, 18 per version. */
export const REMEDA: RemedaArm[] = [
  { name: 'rule deleted', value: '2.50 per run', pct: 100 },
  { name: 'don’t version (mine)', value: '1.78 per run', pct: 71 },
  { name: 'do version (theirs)', value: '1.89 per run', pct: 76 },
];

export interface Limit {
  question: string;
  answer: string;
}

export const LIMITS: Limit[] = [
  {
    question: 'Is one rule enough?',
    answer:
      'No, and the second one settled that. Two rules, two projects, one gap and one null. What survives is a result about the first rule, plus a reason the second behaved differently. What does not survive is any general claim that prohibitions get obeyed less.',
  },
  {
    question: 'Could a different rewrite have changed the answer?',
    answer:
      'Yes, and it is still the soft spot. The second project was meant to close it by flipping who wrote which side, but a result of nothing cannot tell you whether the first result came from direction or from my sentence being clearer. That question is open. Closing it needs a project whose own prohibition is strong and whose positive version is written by someone who is not me.',
  },
  {
    question: 'So should you delete the word never?',
    answer:
      'Not quite, and the reason is the interesting part. The reasoning attached to this rule, the bit explaining why stacked comments are bad, is written around the thing that goes wrong. That is how explanations work. It sits in both versions. For any rule that comes with a reason, a fully forwards version might not be buildable at all, which makes 3.4x a floor rather than a ceiling.',
  },
  {
    question: 'Why not let a model judge the violations?',
    answer:
      'Then the judge’s mood sets the result. Half the rules in this file would need exactly that, which is why they are out. The rule carrying this write-up got picked because its author had already written the checker.',
  },
];
