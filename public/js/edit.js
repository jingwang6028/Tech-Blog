const blogId = document.querySelector('input[name="blog-id"]').value;

const handleEditForm = async function (event) {
  event.preventDefault();

  const title = document.querySelector("#blog-title").value;
  const description = document.querySelector("#blog-content").value;

  await fetch(`/api/blog/${blogId}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      description,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  document.location.replace("/dashboard");
};

const handleDeleteBlog = async function () {
  await fetch(`/api/blog/${blogId}`, {
    method: "DELETE",
  });

  document.location.replace("/dashboard");
};

document.querySelector("#edit-form").addEventListener("submit", handleEditForm);
document
  .querySelector("#delete-btn")
  .addEventListener("click", handleDeleteBlog);
