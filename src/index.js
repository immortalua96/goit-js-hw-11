import 'simplelightbox/dist/simple-lightbox.min.css';
import {
  onFormSubmit,
  onLoadMoreInfo,
} from './js/onFormSubmit____onLoadMoreInfo';
import { refs } from './js/refs';

refs.btnLoadMore.style.display = 'none';
refs.form.addEventListener('submit', onFormSubmit);
refs.btnLoadMore.addEventListener('click', onLoadMoreInfo);
