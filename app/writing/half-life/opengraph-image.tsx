import { getArticle } from '../_articles';
import { renderArticleImage } from '../_og/articleImage';

export { size, contentType } from '../_og/articleImage';

export const alt = getArticle('half-life').title;

export default async function OpengraphImage() {
  return renderArticleImage('half-life');
}
