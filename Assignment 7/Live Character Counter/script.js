const textarea = document.getElementById("message");
const count = document.getElementById("count");
const max = 100;

textarea.addEventListener("keydown", (e) => {
    if (textarea.value.length >= max && e.key !== "Backspace") {
        e.preventDefault(); // stop typing
    }
});

textarea.addEventListener("input", () => {
    const remaining = max - textarea.value.length;
    count.textContent = `${remaining} characters left`;

    count.classList.remove("yellow", "red");

    if (remaining <= 20 && remaining > 0) {
        count.classList.add("yellow");
    }
    if (remaining <= 0) {
        count.classList.add("red");
    }
});
