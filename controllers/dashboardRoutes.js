const router = require("express").Router();
const { Blog } = require("../models");
const withAuth = require("../utils/auth");

// get all blog post by logged_in user
router.get("/", withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      where: {
        user_id: require.session.user_id,
      },
    });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    res.render("dashboard-post", {
      layout: "dashboard",
      blogs,
    });
  } catch (err) {
    res.redirect("login");
  }
});

router.get("/new", withAuth, async (req, res) => {
  res.render("new-post", {
    layout: "dashboard",
  });
});

router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id);

    const blog = blogData.get({ plain: true });
    res.render("edit-post", {
      layout: "dashboard",
      blog,
    });
  } catch (err) {
    res.redirect("login");
  }
});

module.exports = router;
