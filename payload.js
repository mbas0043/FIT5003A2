const data = new URLSearchParams({
  email: "test@example.attck",
  password: "new-alice-password"
});

fetch("/profile", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: data.toString()
});
