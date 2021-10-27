const handleLoginForm = async function (event) {
  event.preventDefault();

  const usernameEl = document.querySelector("#user-login");
  const passwordEl = document.querySelector("#login-password");

  const response = await fetch(`/api/user/login`, {
    method: "POST",
    body: JSON.stringify({
      name: usernameEl.value,
      password: passwordEl.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("failed to login");
  }
};

document
  .querySelector("#login-form")
  .addEventListener("submit", handleLoginForm);
