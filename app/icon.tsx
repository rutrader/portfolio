import { renderMark } from './_icon/mark';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return renderMark(size.width);
}
