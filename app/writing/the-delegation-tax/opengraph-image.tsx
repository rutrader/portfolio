import { getArticle } from '../_articles';
import { renderArticleImage } from '../_og/articleImage';

export { size, contentType } from '../_og/articleImage';

export const alt = getArticle('the-delegation-tax').title;

export default async function OpengraphImage() {
  return renderArticleImage('the-delegation-tax');
}
