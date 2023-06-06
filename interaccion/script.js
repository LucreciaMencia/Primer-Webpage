function showAlert() {
    alert('Hola, sos genial!');
}

// const form = document.getElementById('myForm');

// form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     validateForm();
// });

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}

function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    if (!validateEmail(email)) {
        alert('Por favor ingrese un correo electrónico válido.');
    } else {
        alert('Correo electrónico enviado correctamente.');
    }
}
function abrirYCerrarMenu() {
    console.log("ejecutando")
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("nav-links-responsive")
}
const botonMenu = document.querySelector("button.button-menu-toggle");

botonMenu.addEventListener("click", abrirYCerrarMenu)

