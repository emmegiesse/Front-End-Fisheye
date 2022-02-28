let dropdown = document.getElementById("pop");
dropdown.addEventListener("click", displayDropdown);
function displayDropdown() {
    let dropdownHidden = document.getElementsByClassName("sortMenuHidden");
    dropdownHidden [0].style.display = "block";
    dropdown.style.display = "none";
}

let dropdownTitle = document.getElementById("titleHidden");
dropdownTitle.addEventListener("click", displayDropdownTitleHidden);
function displayDropdownTitleHidden() {
    let dropdownHidden = document.getElementsByClassName("sortMenuHidden");
    dropdownHidden [0].style.display = "none";
    dropdown.style.display = "block";
    medias.sort ( (a,b) => {return b.title-a.title})
    mediaSection.innerHTML = "";
    medias.forEach((media) => {
        const mediaModel = mediaFactory(media, photographer.id);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        mediaSection.appendChild(mediaCardDOM);
    });
}
