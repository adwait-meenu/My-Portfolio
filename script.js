let contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const success = document.querySelector(".success");

    document.querySelectorAll(".error").forEach((err) => {err.textContent = "";});
    success.textContent = "";

    // Name validation
    if (name.value.trim() === "") {
        name.nextElementSibling.textContent = "* Name is required.";
        valid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        email.nextElementSibling.textContent = "* Please enter a valid email.";
        valid = false;
    }

    // Message validation
    if (message.value.trim().length < 10) {
        message.nextElementSibling.textContent = "* Message must be at least 10 characters.";
        valid = false;
    }

    // Success message
    if (valid) {
        success.textContent = "Details submitted successfully!";
        contactForm.reset();
    }
});