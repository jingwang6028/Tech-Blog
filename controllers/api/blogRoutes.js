const router = require("express").Router();
const { Blog } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newBlog = await Blog.create({
      ...req.body,
      userId: req.session.userId,
    });

    res.status(201).json(newBlog);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
