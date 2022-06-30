// IMPORTS
import { fetchImg } from "./js/fetch";
import { renderGallery } from "./js/renders";
import Notiflix, { Loading } from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// QS
const galleryBox = document.querySelector('.gallery');
const input = document.querySelector('input');
const loadMoreBtn = document.querySelector('.load-more');
const form = document.querySelector('form');

let lightbox = new SimpleLightbox('.gallery a');
let page;
let totalPages;
form.addEventListener('submit', searchFn);
loadMoreBtn.addEventListener('click', loadMore);

function searchFn(e) {
    e.preventDefault();
    clearFn();
    page = 1;
    query = input.value.trim();

    if (!query) {
        Notiflix.Report.failure("Sorry, there are no images matching your search query. Please try again.");
        hide();
        return
    }

        fetchImg(query, page)
        .then(({data}) => {
            if (data.totalHits === 0) {
                Notiflix.Notify.failure(
                    'Sorry, there are no images matching your search query. Please try again.');
            hide()}

                galleryBox.innerHTML = renderGallery(data.hits);
                lightbox.refresh();
                if (totalHits > 40) {
                    unhide()

        }}
        )
        .catch(error => {
            console.log(error);
          })
          .finally(() => form.reset());
    
    
}

function clearFn() {
    galleryBox.innerHTML = '';
}

function hide() {
    loadMoreBtn.classList.add('is-hidden')
}

function unhide() {
    loadMoreBtn.classList.remove('is-hidden')
}

function loadMore() {

}