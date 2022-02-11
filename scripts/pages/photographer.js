//Mettre le code JavaScript lié à la page photographer.html
const queryString = window.location.search
const urlparams = new URLSearchParams (queryString)
const id = urlparams.get ('id')
const photographer = data.photographers.find ((el)=>el.id == id)
const medias = data.media.filter ((el)=>el.photographerId == id)

const photographerModel = photographerFactory(photographer);

const photographersSection = document.querySelector(".photographer_section");
const userInfoDOM = photographerModel.getUserInfoDOM();
photographersSection.appendChild(userInfoDOM);

const photographersPicture = document.querySelector(".photographer_image");
const userPicDOM = photographerModel.getUserPicDOM();
photographersPicture.appendChild(userPicDOM);

const mediaSection = document.querySelector(".medias");

medias.forEach((media) => {
    const mediaModel = mediaFactory(media);
    const mediaCardDOM = mediaModel.getMediaCardDOM();
    mediaSection.appendChild(mediaCardDOM);
});

