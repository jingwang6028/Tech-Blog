const sequelize = require("../config/connection");
const { Blog, User, Comment } = require("../models");

// require data
const blogData = require("./blogData.json");
const userData = require("./userData.json");
const commentData = require("./commentData.json");

// insert data into database
const seedDatabase = async function () {
  await sequelize.sync({ force: true });

  const user = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const blogs = await Blog.bulkCreate(blogData);

  const comment = await Comment.bulkCreate(commentData);

  process.exit(0);
};

seedDatabase();
