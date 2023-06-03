import { refs } from './refs';
export function cleanGallery() {
  refs.listInfo.innerHTML = '';
  let pageNr = 1;
  refs.btnLoadMore.style.display = 'none';
}
