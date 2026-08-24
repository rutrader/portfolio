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
  { label: 'Codebase', value: 'WordPress/gutenberg', path: true },
  { label: 'Packages', value: '102, indexed in full' },
  { label: 'Toolchain as configured', value: 'tsc --build (in CI)', path: true },
  { label: 'Breaks injected', value: '7, across four kinds' },
];

export interface Tally {
  num: string;
  unit?: string;
  note: string;
  /** Takes the accent — the counts the argument turns on. */
  hot?: boolean;
}

export const TALLY: Tally[] = [
  { num: '75', unit: '%', note: 'Of the cross-package surface carries type information' },
  { num: '25', unit: '%', note: 'Is plain JavaScript with none', hot: true },
  { num: '326', note: 'Connections made through a bare string, which no typechecker reads', hot: true },
];

export interface Arm {
  /** The tool, named as it was run. */
  name: string;
  /** Broken places it reported, out of the stratum's total. */
  got: number;
  note?: string;
}

export interface Stratum {
  id: string;
  name: string;
  blurb: string;
  /** The injected change, as a diff. Rendered pre-wrapped in mono. */
  mutation: string;
  /** Broken places this break actually caused. */
  total: number;
  arms: Arm[];
  verdict: string;
  /** The one category where nothing free reaches the damage. */
  alarm?: boolean;
}

/** The four kinds of break, ordered by distance from anything a compiler reaches. */
export const STRATA: Stratum[] = [
  {
    id: 'S1',
    name: 'A renamed export',
    blurb:
      'The plainest break there is. Something exported under one name now exports under another, and seven places still ask for the old one.',
    mutation:
      'packages/components\n\n- export { ThemeProvider }\n+ export { ThemeProviderV2 }\n\n7 places still ask for ThemeProvider.',
    total: 7,
    arms: [
      { name: 'tsc --build', got: 3, note: 'typed packages only' },
      { name: 'parser', got: 6 },
      { name: 'parser + AST', got: 6 },
      { name: 'model', got: 6, note: 'a different six' },
    ],
    verdict:
      'Nothing found all seven. The parser walked past a wildcard import. The model caught that one and walked past a different place the parser had. On the easiest category on the board, they disagree about one case in seven.',
  },
  {
    id: 'S4',
    name: 'A renamed string',
    blurb:
      'A hook or filter registered under a string name. Rename it and the connection disappears without a word. No compiler reads this.',
    mutation:
      "3 renamed hook / manifest strings\n\n- addFilter( 'editor.BlockEdit', ... )\n+ addFilter( 'editor.BlockEditor', ... )\n\n8 consumers across 8 packages.",
    total: 8,
    arms: [
      { name: 'tsc --build', got: 0, note: 'strings are opaque' },
      { name: 'parser', got: 8 },
      { name: 'parser + AST', got: 8 },
      { name: 'model', got: 6, note: 'found the recursion' },
    ],
    verdict:
      'The typechecker sees none of it. A parser taught about string channels sees all of it for nothing. The model found fewer connections, then worked out that one of the renames drives the system into infinite recursion.',
  },
  {
    id: 'S5a',
    name: 'A changed default',
    blurb:
      'Same name, same arguments, same shape. One default value moved, and every caller relying on the old one now behaves differently.',
    mutation:
      'packages/url\n\n- filterURLForDisplay( url, maxLength = null )\n+ filterURLForDisplay( url, maxLength = 50 )\n\n3 dependent packages, 7 call sites.',
    total: 3,
    arms: [
      { name: 'tsc --build', got: 0, note: 'types unchanged' },
      { name: 'parser', got: 0, note: 'no name went missing' },
      { name: 'parser + AST', got: 3, note: '2 false alarms' },
      { name: 'model', got: 3, note: 'no false alarms' },
    ],
    verdict:
      'My first draft overclaimed here. The plain parser scores zero, so this looked like model territory. A syntax tree reads the default straight out of the signature. It flags every caller though, including two that pass their own value and never break. The model reads those two and drops them.',
  },
  {
    id: 'S6',
    name: 'A changed meaning',
    blurb: 'The interface holds still. The code looks the same from outside and does something else inside.',
    mutation:
      "2 body-level changes\n\n- return 'http://' + url\n+ return 'https://' + url\n\nplus a numeric guard that now\nrejects numbers. 4 dependent places.",
    total: 4,
    arms: [
      { name: 'tsc --build', got: 0 },
      { name: 'parser', got: 0 },
      { name: 'parser + AST', got: 0, note: 'nothing to compare' },
      { name: 'model', got: 4, note: 'read the code' },
    ],
    verdict:
      'The one category where you need a language model. No name went missing, no key vanished, no default changed. Arithmetic has nothing to catch. Someone or something has to read the code and understand it.',
    alarm: true,
  },
];

export interface Rung {
  name: string;
  cost: string;
  /** Broken places found, out of TOTAL_BROKEN. */
  got: number;
  /** Percentage as reported by the saved run — not derived, so it stays honest. */
  pct: number;
  gloss: string;
  model?: boolean;
}

/** Seven injected breaks damaged twenty-two places in total. */
export const TOTAL_BROKEN = 22;

export const LADDER: Rung[] = [
  {
    name: 'The repo’s own typechecker',
    cost: 'free · already running',
    got: 3,
    pct: 14,
    gloss: 'Catches renamed exports inside the typed three-quarters of the codebase. Blind to every string connection.',
  },
  {
    name: 'A parser, no AI',
    cost: 'free · zero tokens',
    got: 14,
    pct: 64,
    gloss:
      'Adds the untyped quarter and all 326 string channels. The largest jump on the ladder, and it costs nothing.',
  },
  {
    name: 'The same parser, reading the syntax tree',
    cost: 'free · zero tokens',
    got: 17,
    pct: 77,
    gloss:
      'Adds changed default values by reading them out of the function signature. Still free, though it flags two callers that never broke.',
  },
  {
    name: 'A language model',
    cost: '192,000 tokens',
    got: 19,
    pct: 86,
    model: true,
    gloss:
      'Buys one thing nothing below it reaches at any price: changes where the shape holds still and the meaning moves. It clears the two false alarms and explains consequences.',
  },
];

export interface Limit {
  question: string;
  answer: string;
}

export const LIMITS: Limit[] = [
  {
    question: 'Is seven breaks enough?',
    answer:
      'No. Seven injected breaks in one repository give you worked cases, not a statistic. The design calls for two hundred across two codebases. Read everything above as what happened these seven times.',
  },
  {
    question: 'Does the parser catch default-value changes?',
    answer:
      'Yes, without discrimination. It flags every caller of the changed function, two of which pass their own value and never break. The model reads those two and discards them. Same recall, two false alarms, and the table scores it that way.',
  },
  {
    question: 'Is multi-agent review a bad idea?',
    answer:
      'It lost this comparison, on this task, against a parser I wrote for the same job. The claim stops there. What travels is the method: price the cheap tool before you price the expensive one.',
  },
  {
    question: 'Would this work on your codebase?',
    answer:
      'The measurement would. The figures would not. They describe how much of one codebase carries types and how much of it talks through strings, and yours will differ.',
  },
];
