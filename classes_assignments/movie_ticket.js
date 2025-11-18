function validateName(n) { return /^[A-Za-z ]+$/.test(n); }
function validateEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }
function validateSeats(s) { return /^[1-9]$|10/.test(s); }

function bookTicket(name, email, seats) {
  if (!validateName(name) || !validateEmail(email) || !validateSeats(seats))
    return console.log("Invalid input");

  const booking = { name, email, seats: Number(seats) };
  console.log("TICKET:", booking);
}

bookTicket("Akash", "a@mail.com", "5");
