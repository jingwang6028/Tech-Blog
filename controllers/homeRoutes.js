const router = require("express").Router();
const { User, Blog, Comment } = require("../models");

router.get("/", async (req, res) => {
  try {
    // find all blog data join with user model
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    // serialize data so the template can read it
    const blogs = blogData.map((blog) => {
      blog.get({ plain: true });
    });

    // pass serialized data into template
    res.render("homepage", { blogs });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one blog by using id
router.get("/blog/:id", async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const blog = blogData.get({ plain: true });

    res.render("blog", { blog });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;