document.getElementById("login").addEventListener("submit", e => {
  e.preventDefault();

  const u = user.value;
  const p = pass.value;

  const validUser = /^.{5,}$/.test(u);
  const validPass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(p);

  if (!validUser) return msg.textContent = "Username must be 5+ chars";
  if (!validPass) return msg.textContent = "Weak password";

  msg.textContent = "Login Successful";
});
