const router = require("express").Router();
const { Blog } = require("../models");
const withAuth = require("../utils/auth");

// get all blog post by loggedIn user
router.get("/", withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      where: {
        userID: require.session.userID,
      },
    });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    res.render("/dashboard-post", {
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
