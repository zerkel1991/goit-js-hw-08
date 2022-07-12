// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// import "simplelightbox/css/simple-lightbox.min.css";
// Change code below this line
const galleryEl = document.querySelector(".gallery");
const frag = document.createDocumentFragment()

galleryItems.forEach(element => {
    const image = `<a class="gallery__item" href=${element.original}>
    <img class="gallery__image" src=${element.preview} alt=${element.description} />
  </a>`
  galleryEl.insertAdjacentHTML("beforeend", image);
});
galleryEl.append(frag)

var lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt",captionPosition:"bottom",captionDelay : 250 });


console.log(galleryItems);
