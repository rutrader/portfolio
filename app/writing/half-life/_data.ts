/**
 * Every figure on the page, in one place.
 *
 * Copied from the harness's data.json (built 2026-10-14, harness 1c771b3).
 * Nothing here is computed at render time. Bands are 95% Wilson intervals,
 * already rounded to whole percent.
 */

/** Verbatim, vitest-dev/vitest AGENTS.md line 61 at 2899eb3. */
export const RULE =
  'When writing tests, AVOID using `toContain` for validation. Prefer using `toMatchInlineSnapshot` to include the test error and its stack. If snapshot is failing, update the snapshot instead of reverting it to `toContain`.';

export const TASK =
  'Write unit tests for `packages/utils/src/helpers.ts`. Reply with the complete test code in fenced code blocks.';

export interface Fact {
  label: string;
  value: string;
  /** Renders in mono: repository names, commands, paths. */
  path?: boolean;
}

export const FACTS: Fact[] = [
  { label: 'The rule', value: 'vitest-dev/vitest · AGENTS.md:61', path: true },
  { label: 'The task', value: 'packages/utils/src/helpers.ts', path: true },
  { label: 'Padding', value: '0 or 256 KB of vitest source, rule-neutral' },
  { label: 'Runs', value: '20 per point · 240 on this rule' },
  { label: 'Spend', value: '$105.98 at list prices' },
];

export interface Arm {
  name: string;
  obeyed: number;
  n: number;
  /** 95% Wilson band, whole percent. */
  band: string;
  /** Runs with no test code at all. Never counted as obeyed. */
  noChance?: number;
}

export interface Tier {
  id: string;
  name: string;
  modelId: string;
  price: string;
  deleted: Arm;
  near: Arm;
  far: Arm;
  /** Approx. input tokens at 256 KB, by this model's tokenizer. */
  farTokens: string;
  /** Runs that used toMatchInlineSnapshot, the rule's second ask. 0 KB → 256 KB. */
  snapshots: string;
  /** toContain calls / expect calls in each run at 256 KB, in run order. */
  farRuns: string[];
  verdict: string;
}

/** Ordered by list price per input token. Price stands in for size, nothing more. */
export const TIERS: Tier[] = [
  {
    id: 'haiku',
    name: 'Haiku 4.5',
    modelId: 'claude-haiku-4-5',
    price: '$1 / MTok in',
    deleted: { name: 'rule deleted', obeyed: 0, n: 20, band: '0–16%' },
    near: { name: 'rule, 0 KB', obeyed: 7, n: 20, band: '18–57%' },
    far: { name: 'rule, 256 KB', obeyed: 7, n: 20, band: '18–57%' },
    farTokens: '~93k tokens',
    snapshots: '20/20 → 18/20',
    farRuns: [
      '0/159',
      '0/245',
      '7/165',
      '12/144',
      '0/139',
      '4/142',
      '2/150',
      '26/227',
      '6/187',
      '0/167',
      '1/118',
      '5/144',
      '1/160',
      '0/167',
      '2/165',
      '3/191',
      '5/151',
      '0/188',
      '2/175',
      '0/152',
    ],
    verdict:
      'Same 7 of 20 at both ends. The rule never held well on Haiku, and 93k tokens of padding did not make it worse. Without the rule, every run reached for toContain.',
  },
  {
    id: 'sonnet',
    name: 'Sonnet 5.5',
    modelId: 'claude-sonnet-5-5',
    price: '$2 / MTok in',
    deleted: { name: 'rule deleted', obeyed: 0, n: 20, band: '0–16%' },
    near: { name: 'rule, 0 KB', obeyed: 20, n: 20, band: '84–100%' },
    far: { name: 'rule, 256 KB', obeyed: 20, n: 20, band: '84–100%' },
    farTokens: '~115k tokens',
    snapshots: '20/20 → 19/20',
    farRuns: [
      '0/116',
      '0/91',
      '0/96',
      '0/93',
      '0/91',
      '0/99',
      '0/92',
      '0/106',
      '0/89',
      '0/81',
      '0/108',
      '0/100',
      '0/87',
      '0/104',
      '0/120',
      '0/74',
      '0/107',
      '0/108',
      '0/81',
      '0/61',
    ],
    verdict:
      'The cleanest swing on the board. Sonnet breaks the rule in all 20 runs once it is gone, and in none while it is there, at either depth.',
  },
  {
    id: 'opus',
    name: 'Opus 5.5',
    modelId: 'claude-opus-5-5',
    price: '$4 / MTok in',
    deleted: { name: 'rule deleted', obeyed: 5, n: 20, band: '11–47%' },
    near: { name: 'rule, 0 KB', obeyed: 20, n: 20, band: '84–100%' },
    far: { name: 'rule, 256 KB', obeyed: 20, n: 20, band: '84–100%' },
    farTokens: '~115k tokens',
    snapshots: '11/20 → 8/20',
    farRuns: [
      '0/101',
      '0/91',
      '0/117',
      '0/103',
      '0/118',
      '0/102',
      '0/118',
      '0/88',
      '0/120',
      '0/105',
      '0/106',
      '0/96',
      '0/103',
      '0/83',
      '0/106',
      '0/99',
      '0/114',
      '0/114',
      '0/111',
      '0/96',
    ],
    verdict:
      '20 of 20 at both ends. Opus kept the ban and treated the second ask, use inline snapshots, as optional: 11 runs used them with no padding, 8 at 256 KB.',
  },
  {
    id: 'fable',
    name: 'Fable 5.1',
    modelId: 'claude-fable-5-1',
    price: '$10 / MTok in',
    deleted: { name: 'rule deleted', obeyed: 9, n: 20, band: '26–66%' },
    near: { name: 'rule, 0 KB', obeyed: 20, n: 20, band: '84–100%' },
    far: { name: 'rule, 256 KB', obeyed: 16, n: 16, band: '81–100%', noChance: 4 },
    farTokens: '~117k tokens',
    snapshots: '19/20 → 16/16',
    farRuns: [
      '0/176',
      '0/194',
      '0/155',
      '0/149',
      '0/183',
      '0/195',
      '0/221',
      '0/216',
      '0/139',
      '0/127',
      '0/180',
      '–',
      '0/147',
      '–',
      '–',
      '0/124',
      '–',
      '0/166',
      '0/203',
      '0/186',
    ],
    verdict:
      'Every run that wrote tests obeyed. Four runs at 256 KB, the dashes, wrote no tests at all: Fable drifted into fake tool calls to explore the repo. Those four count as no chance, never as obeyed.',
  },
];

export interface Limit {
  question: string;
  answer: string;
}

export const LIMITS: Limit[] = [
  {
    question: 'Is this about rules in general?',
    answer:
      'No. One rule. A second, ruff’s “Don’t prefix tests with test_”, failed screening, and a third, tldraw’s @param rule, needs a person to judge it.',
  },
  {
    question: 'What about longer contexts?',
    answer:
      'I stopped at 256 KB: about 93k tokens for Haiku 4.5 and 115k to 117k for the 5.x models. Past that I have no data.',
  },
  {
    question: 'Is Haiku worse because it is smaller?',
    answer:
      'I can’t say. Haiku is the only 4.5-generation model here, so its tier and its generation move together. Parameter counts are not public either, so price is the only size proxy.',
  },
  {
    question: 'Why only two depths?',
    answer:
      'The plan had eight. Both ends of the price ladder came back flat, so I cut the sweep and logged the reason in the pre-registration.',
  },
  {
    question: 'Does this cover long conversations?',
    answer:
      'No. Each run is one user message. Depth here means bytes of code between the rule and the task, not turns of back-and-forth.',
  },
];

export interface Source {
  id: string;
  href: string;
  note: string;
}

export const PRIOR_ART: Source[] = [
  {
    id: 'arXiv 2604.20911',
    href: 'https://arxiv.org/abs/2604.20911',
    note: '“Never” rules decay with conversation depth while “do” rules hold. 12 models, synthetic tool-schema padding, no same-family size comparison.',
  },
  {
    id: 'arXiv 2605.10039',
    href: 'https://arxiv.org/abs/2605.10039',
    note: 'CLAUDE.md compliance in Claude Code drops as a session writes more functions. Sonnet 4.6 and Opus 4.6.',
  },
  {
    id: 'arXiv 2402.10962',
    href: 'https://arxiv.org/abs/2402.10962',
    note: 'Instruction drift within eight turns, on LLaMA2-chat-70B and GPT-3.5.',
  },
];
