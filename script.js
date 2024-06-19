document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let hasError = false;

    // Validate name
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        hasError = true;
        document.getElementById('name-error').innerText = 'Name is required';
        document.getElementById('name-error').style.display = 'block';
    } else {
        document.getElementById('name-error').style.display = 'none';
    }

    // Validate email
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        hasError = true;
        document.getElementById('email-error').innerText = 'Invalid email address';
        document.getElementById('email-error').style.display = 'block';
    } else {
        document.getElementById('email-error').style.display = 'none';
    }

    // Validate phone
    const phone = document.getElementById('phone').value;
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        hasError = true;
        document.getElementById('phone-error').innerText = 'Invalid phone number';
        document.getElementById('phone-error').style.display = 'block';
    } else {
        document.getElementById('phone-error').style.display = 'none';
    }

    // Validate message
    const message = document.getElementById('message').value;
    if (message.trim() === '') {
        hasError = true;
        document.getElementById('message-error').innerText = 'Message is required';
        document.getElementById('message-error').style.display = 'block';
    } else {
        document.getElementById('message-error').style.display = 'none';
    }

    if (!hasError) {
        document.getElementById('success-message').innerText = 'Thank you for contacting us!';
        document.getElementById('success-message').style.display = 'block';
        document.getElementById('contact-form').reset();
    }
});
