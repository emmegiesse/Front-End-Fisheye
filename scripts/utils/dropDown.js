let dropdown = document.getElementById("pop");
dropdown.addEventListener("click", displayDropdown);
function displayDropdown() {
    let dropdownOpen = document.getElementsByClassName("sortMenuHidden");
    dropdownOpen [0].style.display = "block";
    dropdown.style.display = "none";
}

let dropdownClose = document.getElementById("popHidden");
dropdownClose.addEventListener("click", closeDropdown);
function closeDropdown() {
    let dropdownClose = document.getElementsByClassName("sortMenuHidden");
    dropdownClose [0].style.display = "none";
    dropdown.style.display = "block";
}

let dropdownDateSort = document.getElementById("dateHidden");
let sortName = document.getElementById("sortName");
dropdownDateSort.addEventListener("click", dateSort);
function dateSort() {
    console.log("dateSort");
    sortName.innerHTML = "Date";
    let dropdownHidden = document.getElementsByClassName("sortMenuHidden");
    dropdownHidden [0].style.display = "block";
    dropdown.style.display = "none";
    medias = medias.sort ( (a,b) => {return new Date(a.date).getTime() - new Date(b.date).getTime()})
    console.log(medias);  
    mediaSection.innerHTML = "";
    medias.forEach((media) => {
        const mediaModel = mediaFactory(media, photographer.id);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        mediaSection.appendChild(mediaCardDOM);
    });
closeDropdown();
}

let dropdownTitleSort = document.getElementById("titleHidden");
dropdownTitleSort.addEventListener("click", titleSort);
function titleSort() {
    console.log("titleSort");
    sortName.innerHTML = "Title";
    let dropdownHidden = document.getElementsByClassName("sortMenuHidden");
    dropdownHidden [0].style.display = "block";
    dropdown.style.display = "none";
    medias = medias.sort ( (a,b) => {return a.title.localeCompare(b.title)})
    console.log(medias);  
    mediaSection.innerHTML = "";
    medias.forEach((media) => {
        const mediaModel = mediaFactory(media, photographer.id);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        mediaSection.appendChild(mediaCardDOM);
    });
closeDropdown();
}

let dropdownPopSort = document.getElementById("popHidden");
dropdownPopSort.addEventListener("click", popSort);
function popSort() {
    console.log("popSort");
    sortName.innerHTML = "Popularité";
    let dropdownHidden = document.getElementsByClassName("sortMenuHidden");
    dropdownHidden [0].style.display = "block";
    dropdown.style.display = "none";
    medias = medias.sort ( (a,b) => {return b.likes - a.likes})
    console.log(medias);  
    mediaSection.innerHTML = "";
    medias.forEach((media) => {
        const mediaModel = mediaFactory(media, photographer.id);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        mediaSection.appendChild(mediaCardDOM);
    });
closeDropdown();
}