const postId = document.querySelector('input[name="post-id"]').value;

const handleEditForm = async function (event) {
  event.preventDefault();

  const title = document.querySelector("#post-title").value;
  const description = document.querySelector("#post-content").value;

  await fetch(`/api/post/${postId}`, {
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

const handleDeletePost = async function () {
  await fetch(`/api/post/${postId}`, {
    method: "DELETE",
  });

  document.location.replace("/dashboard");
};

document.querySelector("#edit-form").addEventListener("submit", handleEditForm);
document
  .querySelector("#delete-btn")
  .addEventListener("click", handleDeletePost);
