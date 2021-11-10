const commentFormHandler = async function (event) {
  event.preventDefault();

  const blog_id = document.querySelector('input[name="blog_id"]').value;
  const body = document.querySelector('textarea[name="comment-body"]').value;
  console.log(blog_id, body);

  if (body) {
    await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({
        blog_id,
        body,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    document.location.reload();
  }
};

document
  .querySelector("#new-comment-form")
  .addEventListener("submit", commentFormHandler);
