import ArticleShell from '../_components/ArticleShell';
import { articleMetadata } from '../_articles';

const SLUG = 'what-the-typechecker-cant-see';

export const metadata = articleMetadata(SLUG);

export default function Page() {
  return (
    <ArticleShell slug={SLUG}>
      <p>
        A renamed export is the easiest break in a codebase. Seven places still asked for the old name. A parser found
        six of them. A language model found six. The two lists did not match.
      </p>
      <p>That was the easy category.</p>
    </ArticleShell>
  );
}
