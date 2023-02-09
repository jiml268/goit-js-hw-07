import { galleryItems } from './gallery-items.js';
// Change code below this line
let pictureGallary = "";

const galleryClass = document.querySelector(".gallery");
galleryClass.addEventListener("click", selectimage);

function createGallary(){
    const creatPictureGallary = galleryItems.map((element) =>{
      pictureGallary += `<a class="gallery__item" href="${element.original}">
  <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
</a>`
    }).join('')

    const allPictures = document.querySelector('.gallery');
    allPictures.insertAdjacentHTML("afterbegin",pictureGallary);
    }

    function selectimage(event){
        event.preventDefault();
        if (event.target.nodeName !== "IMG") {
            return;
          } else {
        const lightbox = new SimpleLightbox('.gallery a', { captionsData:"alt",captionDelay: 250, captionPosition: "bottom",});
        lightbox.on('show.simplelightbox', function () {})        
    }
}


    createGallary()

