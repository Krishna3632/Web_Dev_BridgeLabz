class FormBuilder {
  constructor(fields) {
    this.fields = fields;
  }

  render(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = this.fields
      .map(f => `<label>${f.label}</label><input type="${f.type}" id="${f.label}"><br>`)
      .join("");
  }

  getFormData() {
    const data = {};
    this.fields.forEach(f => {
      data[f.label] = document.getElementById(f.label).value;
    });
    return data;
  }
}

const fb = new FormBuilder([
  { type: "text", label: "Username" },
  { type: "email", label: "Email" }
]);

fb.render("formContainer");

function getData() {
  document.getElementById("output").textContent = JSON.stringify(fb.getFormData(), null, 2);
}
