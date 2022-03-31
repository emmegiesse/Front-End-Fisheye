// Ouverture liste déroulante tri - chevron vers le bas
let dropdown = document.getElementById("pop");
dropdown.addEventListener("click", displayDropdown);
function displayDropdown() {
    let dropdownOpen = document.getElementsByClassName("sortMenuHidden");
    dropdownOpen [0].style.display = "block";
    dropdown.style.display = "none";
}

// Fermeture liste déroulante tri - chevron vers le haut
let dropdownClose = document.getElementById("popHidden");
dropdownClose.addEventListener("click", closeDropdown);
function closeDropdown() {
    let dropdownClose = document.getElementsByClassName("sortMenuHidden");
    dropdownClose [0].style.display = "none";
    dropdown.style.display = "block";
}

// Tri par date --> Affichage date+chevron à la fin du tri avec répliage 
let dropdownDateSort = document.getElementById("dateHidden");
let sortName = document.getElementById("sortName");
dropdownDateSort.addEventListener("click", dateSort);
function dateSort() {
    sortName.innerHTML = "Date";
    let dropdownHidden = document.getElementsByClassName("sortMenuHidden");
    dropdownHidden [0].style.display = "block";
    dropdown.style.display = "none";
    mediaGallery = mediaGallery.sort ( (a,b) => {return new Date(a.date).getTime() - new Date(b.date).getTime()});
    mediaGalleryection.innerHTML = "";
    mediaGallery.forEach((media) => {
        const mediaModel = mediaFactory(media, photographer.id);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        mediaGalleryection.appendChild(mediaCardDOM);
    });
closeDropdown();
}

// Tri par titre --> Affichage titre+chevron à la fin du tri avec répliage 
let dropdownTitleSort = document.getElementById("titleHidden");
dropdownTitleSort.addEventListener("click", titleSort);
function titleSort() {
    sortName.innerHTML = "Title";
    let dropdownHidden = document.getElementsByClassName("sortMenuHidden");
    dropdownHidden [0].style.display = "block";
    dropdown.style.display = "none";
    mediaGallery = mediaGallery.sort ( (a,b) => {return a.title.localeCompare(b.title)})
    mediaGalleryection.innerHTML = "";
    mediaGallery.forEach((media) => {
        const mediaModel = mediaFactory(media, photographer.id);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        mediaGalleryection.appendChild(mediaCardDOM);
    });
closeDropdown();
}

// Tri par popularioté --> Affichage popularité+chevron à la fin du tri avec répliage 
let dropdownPopSort = document.getElementById("popHidden");
dropdownPopSort.addEventListener("click", popSort);
function popSort() {
    sortName.innerHTML = "Popularité";
    let dropdownHidden = document.getElementsByClassName("sortMenuHidden");
    dropdownHidden [0].style.display = "block";
    dropdown.style.display = "none";
    mediaGallery = mediaGallery.sort ( (a,b) => {return b.likes - a.likes})
    mediaGalleryection.innerHTML = "";
    mediaGallery.forEach((media) => {
        const mediaModel = mediaFactory(media, photographer.id);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        mediaGalleryection.appendChild(mediaCardDOM);
    });
closeDropdown();
}