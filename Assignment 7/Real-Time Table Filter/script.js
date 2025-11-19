const searchBox = document.getElementById("search");
const table = document.getElementById("studentTable");
const noResult = document.getElementById("noResult");

searchBox.addEventListener("input", () => {
    const value = searchBox.value.toLowerCase();
    let found = false;

    [...table.rows].forEach((row, index) => {
        if (index === 0) return; // skip header

        const text = row.innerText.toLowerCase();
        if (text.includes(value)) {
            row.style.display = "";
            found = true;
        } else {
            row.style.display = "none";
        }
    });

    noResult.style.display = found ? "none" : "block";
});
