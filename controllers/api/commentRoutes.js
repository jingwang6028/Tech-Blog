const router = require("express").Router();
const { Comment, User, Blog } = require("../../models");
const withAuth = require("../../utils/auth");

// create a new comment
router.post("/", withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      body: req.body.body,
      blog_id: req.body.blog_id,
      user_id: req.session.user_id,
    });
    console.log(newComment);
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all comment
router.get("/", async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      include: [{ model: User, attributes: ["name"] }, { model: Blog }],
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get comment by id
router.get("/:id", async (req, res) => {
  try {
    const commentData = await Comment.findByPk(req.params.id, {
      include: [{ model: User, attributes: ["username"] }, { model: Post }],
    });
    if (!commentData) {
      res.status(404).json({ message: "No comment match with the id" });
      return;
    }
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a comment
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!commentData) {
      res
        .status(404)
        .json({ message: "No comment match with the id to be delete" });
      return;
    }
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
