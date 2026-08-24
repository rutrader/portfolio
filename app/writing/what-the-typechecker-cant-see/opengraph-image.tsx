import { getArticle } from '../_articles';
import { renderArticleImage } from '../_og/articleImage';

export { size, contentType } from '../_og/articleImage';

export const alt = getArticle('what-the-typechecker-cant-see').title;

export default async function OpengraphImage() {
  return renderArticleImage('what-the-typechecker-cant-see');
}
