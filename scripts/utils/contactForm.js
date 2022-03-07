function photographerFactory(data) {
    const { name, portrait, id, city, country, tagline, price } = data ;

    // récuperation du nom du photographe pour la modale
    function getModalPhNameDOM() {
        const modalPhName = document.createElement( 'h1' );
        modalPhName.textContent = name;
        modalPhName.className = 'modalPhName';

        return (modalPhName);
    }

    return { getModalPhNameDOM }
}




// Ouvrir la modale en cliquant sur le buton "Contactez-moi"
let modalDisplayBtn = document.getElementsByClassName('contact_button');
modalDisplay.addEventListener('click',displayModal);
function displayModal() {
    const modalDisplay = document.getElementById("contact_modal");
	modalDisplay.style.display = "block";
}

//let modalCloseBtn = document.getElementsByClassName('close-form-icon');



function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}



//let dropdown = document.getElementById("pop");
//dropdown.addEventListener("click", displayDropdown);
//function displayDropdown() {
    //let dropdownOpen = document.getElementsByClassName("sortMenuHidden");
    //dropdownOpen [0].style.display = "block";
    //dropdown.style.display = "none";
