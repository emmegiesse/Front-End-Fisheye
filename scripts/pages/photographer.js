//Mettre le code JavaScript lié à la page photographer.html
const queryString = window.location.search;
const urlparams = new URLSearchParams (queryString);
const id = urlparams.get ('id')
const photographer = data.photographers.find ((el)=>el.id == id)
let mediaGallery = data.media.filter ((el)=>el.photographerId == id)
mediaGallery.sort ( (a,b) => {return b.likes-a.likes})

const photographerModel = photographerFactory(photographer);

const photographersSection = document.querySelector(".photographer_section");
const userInfoDOM = photographerModel.getUserInfoDOM();
photographersSection.appendChild(userInfoDOM);

const photographersPicture = document.querySelector(".photographer_image");
const userPicDOM = photographerModel.getUserPicDOM();
photographersPicture.appendChild(userPicDOM);

const totalLikes = mediaGallery.reduce((previous, next) => previous + next.likes, 0);
console.log(totalLikes);
const counter = document.getElementById("counter");
counter.innerHTML = totalLikes;

const mediaGalleryection = document.querySelector(".mediaGallery");
mediaGallery.forEach((media, index) => {
    const mediaModel = mediaFactory(media, photographer.id,mediaGallery, index);
    const mediaCardDOM = mediaModel.getMediaCardDOM();
    mediaGalleryection.appendChild(mediaCardDOM);
})