const { Blog } = require("../models");

const blogData = [
  {
    title: "Why MVC is so important",
    description:
      "MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.",
    user_id: 1,
  },
];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;
