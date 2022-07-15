const phFormName = document.getElementById ("phFormName"); 
phFormName.innerHTML = photographer.name;

// Récuperation elémént du formulaire pour console
let form = document.getElementById('contactForm');
const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;

// Ouvrir la modale en cliquant sur le buton "Contactez-moi"
let modalDisplayBtn = document.getElementsByClassName('contact_button');
modalDisplayBtn[0].addEventListener('click',displayModal);
function displayModal() {
    const modalDisplay = document.getElementById("contactModal");
    modalDisplay.style.display = "block";
}

let modalCloseBtn = document.getElementById('modalCloseBtn');
modalCloseBtn.addEventListener('click',closeModal);
function closeModal() {
    const modal = document.getElementById("contactModal");
    modal.style.display = "none";
}

function consoleFormSubmit(firstName, lastName, email, message) {
    console.group('Contact Message');
    console.log('Prénom : ' + firstName.value);
    console.log('Nom : ' + lastName.value);
    console.log('Email : ' + email.value);
    console.log('Message : ' + message.value);
    console.groupEnd();
}

//console.log au click sur "envoyer"
let modalSubmit = document.getElementsByClassName('formSubmit');
modalSubmit[0].addEventListener('click',submitForm);
function submitForm () {
    let firstName = document.getElementById('formFirstName');
    let lastName = document.getElementById('formLastName');
    let email = document.getElementById('email');
    let message = document.getElementById('message');
    consoleFormSubmit(firstName, lastName, email, message);
    closeModal()
}
