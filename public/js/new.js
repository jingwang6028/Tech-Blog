const handleNewForm = async function (event) {
  event.preventDefault();

  const title = document.querySelector("#blog-title").value;
  const description = document.querySelector("#blog-content").value;

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
  .querySelector("#new-blog-form")
  .addEventListener("submit", handleNewForm);
