//Mettre le code JavaScript lié à la page photographer.html
const queryString = window.location.search;
const urlparams = new URLSearchParams (queryString);
const id = urlparams.get ('id')
const photographer = data.photographers.find ((el)=>el.id == id)
let medias = data.media.filter ((el)=>el.photographerId == id)
medias.sort ( (a,b) => {return b.likes-a.likes})

const photographerModel = photographerFactory(photographer);

const photographersSection = document.querySelector(".photographer_section");
const userInfoDOM = photographerModel.getUserInfoDOM();
photographersSection.appendChild(userInfoDOM);

const photographersPicture = document.querySelector(".photographer_image");
const userPicDOM = photographerModel.getUserPicDOM();
photographersPicture.appendChild(userPicDOM);

const mediaSection = document.querySelector(".medias");
medias.forEach((media) => {
    const mediaModel = mediaFactory(media, photographer.id);
    const mediaCardDOM = mediaModel.getMediaCardDOM();
    mediaSection.appendChild(mediaCardDOM);
});

const totalLikes = medias.reduce((previous, next) => previous + next.likes, 0);
console.log(totalLikes);