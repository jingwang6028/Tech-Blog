const handleSignupForm = async function (event) {
  event.preventDefault();

  const usernameEl = document.querySelector("#user-signup");
  const passwordEl = document.querySelector("#password-signup");

  const response = await fetch(`/api/user`, {
    method: "POST",
    body: JSON.stringify({
      name: usernameEl.value.trim(),
      password: passwordEl.value.trim(),
    }),
    headers: { "Content-Type": "application/json" },
  });

  console.log(response.body);

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("failed to sign up");
  }
};

document
  .querySelector("#signup-form")
  .addEventListener("submit", handleSignupForm);
