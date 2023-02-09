import { galleryItems } from './gallery-items.js';
// Change code below this line

let pictureGallary = "";
let largeImage ="";

const galleryClass = document.querySelector(".gallery");
galleryClass.addEventListener("click", selectimage);





function createGallary(){
const creatPictureGallary = galleryItems.map((element) =>{
  pictureGallary += `<div class="gallery__item"><a class="gallery__link" href="${element.original}">
  <img
    class="gallery__image"
    src="${element.preview}"
    data-source="${element.original}"
    alt="${element.description}"
  />
</a></div>`
}).join('')
const allPictures = document.querySelector('.gallery');
allPictures.insertAdjacentHTML("afterbegin",pictureGallary);
}

function selectimage(event){
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
      return;
    } else {
      largeImage = event.target.dataset.source
      CreateModel()
  }
  }
  
  function CreateModel(event){
    const instance = basicLightbox.create(`<img src = "${largeImage}">`)
  instance.show()
  galleryClass.addEventListener("keydown", (e) =>{
  
  if (e.code === "Escape") {
    instance.close()
  }
  })
  }
createGallary()
