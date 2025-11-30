// ---------------- MOBILE MENU ----------------
const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', function() {
    navLinks.classList.toggle('open'); // show/hide menu

    // change button icon
    if(navLinks.classList.contains('open')){
        menuButton.innerHTML = '✕';
    } else {
        menuButton.innerHTML = '☰';
    }
});

// close menu when link clicked on mobile
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(){
        if(navLinks.classList.contains('open')){
            navLinks.classList.remove('open');
            menuButton.innerHTML = '☰';
        }
    });
});

// ---------------- CONTACT FORM ----------------
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");
    const messageDiv = document.getElementById("form-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // stop page reload

        const name = nameField.value.trim();
        const email = emailField.value.trim();
        const message = messageField.value.trim();

        if(name === "" || email === "" || message === ""){
            messageDiv.textContent = "Please enter the information";
            messageDiv.style.color = "red";
        } else {
            messageDiv.textContent = "Submission successful";
            messageDiv.style.color = "green";
            form.reset();
        }
    });
});
