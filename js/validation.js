document.getElementById('contactForm').addEventListener('submit', function(event) {
    var isValid = true;

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var contactMethod = document.getElementById('contact-method').value;

    if (!name || !email || !subject || !message || !contactMethod) {
        isValid = false;
    }

    if (!isValid) {
        alert('Por favor, complete todos los campos.');
        event.preventDefault();
    }
});

