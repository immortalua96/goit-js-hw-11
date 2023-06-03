import { refs } from './refs';
export function cleanGallery() {
  refs.listInfo.innerHTML = '';
  pageNumber = 1;
  refs.btnLoadMore.style.display = 'none';
}
