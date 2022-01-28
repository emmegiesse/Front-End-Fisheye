//Mettre le code JavaScript lié à la page photographer.html
const queryString = window.location.search
const urlparams = new URLSearchParams (queryString)
const id = urlparams.get ('id')
const photographer = data.photographers.find ((el)=>el.id == id)

const photographersSection = document.querySelector(".photographer_section");
const photographerModel = photographerFactory(photographer);
const userCardDOM = photographerModel.getUserCardDOM();
photographersSection.appendChild(userCardDOM);