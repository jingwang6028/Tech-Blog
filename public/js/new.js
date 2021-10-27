const handleNewForm = async function (event) {
  event.preventDefault();

  const title = document.querySelector("#post-title").value;
  const description = document.querySelector("#post-content").value;

  const response = await fetch("/api/blog", {
    method: "POST",
    body: JSON.stringify({
      title,
      description,
    }),
    headers: { "Content-Type": "application/json" },
  });

  document.location.replace("/dashboard");
};

document
  .querySelector("#new-post-form")
  .addEventListener("submit", handleNewForm);
