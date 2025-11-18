const form = document.getElementById("studentForm");

const patterns = {
  name: /^[A-Za-z ]+$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[0-9]{10}$/,
  password: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/
};

form.addEventListener("submit", e => {
  e.preventDefault();
  ["name", "email", "phone", "password"].forEach(id => validate(id));
});

function validate(id) {
  const input = document.getElementById(id);
  const msg = input.nextElementSibling;
  const valid = patterns[id].test(input.value);

  if (!valid) {
    input.style.border = "2px solid red";
    msg.textContent = "Invalid " + id;
  } else {
    input.style.border = "2px solid green";
    msg.textContent = "";
  }
}
