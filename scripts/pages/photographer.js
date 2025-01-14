//Mettre le code JavaScript lié à la page photographer.html
const queryString = window.location.search;
const urlparams = new URLSearchParams (queryString);
const id = urlparams.get ('id');
const photographer = data.photographers.find ((el)=>el.id == id);
let mediaGallery = data.media.filter ((el)=>el.photographerId == id);
mediaGallery.sort ( (a,b) => {return b.likes-a.likes});

//création de la présenatation des photographes --> factories/photographer.js
const photographerModel = photographerFactory(photographer);
const photographersSection = document.querySelector(".photographer_section");
const userInfoDOM = photographerModel.getUserInfoDOM();
photographersSection.appendChild(userInfoDOM);
const photographersPicture = document.querySelector(".photographer_image");
const userPicDOM = photographerModel.getUserPicDOM();
photographersPicture.appendChild(userPicDOM);

//likes+prix
const totalLikes = mediaGallery.reduce((previous, next) => previous + next.likes, 0);
const counter = document.getElementById("counterTotalLikes");
counter.innerHTML = totalLikes;
const price = document.getElementById("phPrice"); 
price.innerHTML = photographer.price;

//création de la galleria des médias --> factories/media.js
const mediaGalleryection = document.querySelector(".mediaGallery");
mediaGallery.forEach((media, index) => {
    const mediaModel = mediaFactory(media, photographer.id,mediaGallery, index);
    const mediaCardDOM = mediaModel.getMediaCardDOM();
    mediaGalleryection.appendChild(mediaCardDOM);
})