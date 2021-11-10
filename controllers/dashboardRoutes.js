const router = require("express").Router();
const { Blog, User } = require("../models");
const withAuth = require("../utils/auth");

// get all blog post by logged_in user
router.get("/", withAuth, async (req, res) => {
  try {
    // find add blogs associated with logged_in user
    const blogData = await Blog.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    res.render("dashboard", {
      blogs,
    });
  } catch (err) {
    res.redirect("login");
  }
});

router.get("/new", withAuth, async (req, res) => {
  res.render("new-post");
});

router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id);

    const blog = blogData.get({ plain: true });
    res.render("edit-post", {
      blog,
    });
  } catch (err) {
    res.redirect("login");
  }
});

module.exports = router;
