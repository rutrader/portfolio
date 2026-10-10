/**
 * Every excerpt and score on the page, in one place.
 *
 * The excerpts are copied from the run transcripts, not paraphrased — a page
 * about paraphrase bugs cannot introduce its own. Scores are hidden-test
 * results; nothing here is computed at render time.
 */

/** A span of an excerpt. `hot` marks the words the argument points at. */
export interface Segment {
  text: string;
  hot?: boolean;
}

/** Moment 1: the orchestrator invents a rule the spec never had. */
export const M1_MESSAGE: Segment[] = [
  {
    text: "Name rules: for str/bytes/int name is the selected field's name\n(for int, pa_type.field(i).name; for str, the str; ",
  },
  { text: 'for bytes, decode', hot: true },
  { text: ')' },
];

export const M1_PATCH = `if isinstance(name, bytes):
    name = name.decode()`;

/** Moment 2: the orchestrator writes pseudocode and drops a step. */
export const M2_MESSAGE = `elif is_list_like: reverse the list, iterate, popping from the reversed
list: name=get_name(popped, data); data = pc.struct_field(data,
[popped_index_or_name]) ... i.e. walk nested levels, returning the
final field name`;

/** Moment 3: the worker's own commands, in the order it ran them. */
export const M3_COMMANDS = `pytest pandas/tests/groupby pandas/tests/test_sorting.py pandas/tests/resample -q -x -n 8
...
timeout 3000 python -m pytest pandas/tests -q -n 8 -p no:cacheprovider -m "not slow..."
timeout 3000 python -m pytest pandas/tests -q -n 8 -p no:cacheprovider -m "not slow..."   (again)
timeout 3000 python -m pytest pandas/tests -q -n 8 -p no:cacheprovider -m "not slow..."   (again)
timeout 600  python -m pytest pandas/tests -q -n 8 -p no:cacheprovider -m "not slow..."
timeout 900  python -m pytest pandas/tests --collect-only -q
for d in $(ls -d pandas/tests/*/ ) pandas/tests/test_*.py; do
  timeout 1500 python -m pytest $d -q -n 8 ... ; done`;

export interface Score {
  label: string;
  value: string;
}

/** Ten tasks, two reps per arm. Only the first two rows separated the arms. */
export const SCORES: Score[] = [
  { label: 'Struct field selector', value: 'Solo 2/2 · orchestrator 0/2 · lost to delegation, moments 1 and 2' },
  { label: 'Groupby quantile', value: 'Solo 2/2 · orchestrator 1/2 · lost to delegation, moment 3' },
  { label: '6 other tasks', value: 'Same outcome in both arms · a shared cause' },
  { label: '2 remaining tasks', value: 'Mixed in both arms · inconclusive at two reps' },
];
