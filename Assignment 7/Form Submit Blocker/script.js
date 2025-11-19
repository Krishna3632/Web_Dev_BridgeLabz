const form = document.getElementById("myForm");
const success = document.getElementById("success");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // block submission

    let valid = true;
    success.textContent = "";

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const errors = document.querySelectorAll(".error");
    errors.forEach(err => err.textContent = ""); // reset errors

    if (name.value.trim() === "") {
        errors[0].textContent = "Name is required";
        valid = false;
    }

    if (!email.value.includes("@") || email.value.trim() === "") {
        errors[1].textContent = "Enter a valid email";
        valid = false;
    }

    if (password.value.length < 6) {
        errors[2].textContent = "Password must be 6+ characters";
        valid = false;
    }

    if (valid) {
        success.textContent = "Form Submitted Successfully";
        form.reset();
    }
});

// Remove errors when typing
form.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", () => {
        input.nextElementSibling.textContent = "";
    });
});
