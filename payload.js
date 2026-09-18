const data = new URLSearchParams({
  email: "alice@devbank.local",
  password: "alice-password"
});

fetch("/profile", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: data.toString()
});
