const data = new URLSearchParams({
  email: "test_v2@example.att",
  password: "v2-alice-password"
});

fetch("/profile", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: data.toString()
});
