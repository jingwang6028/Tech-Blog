const sequelize = require("../config/connection");
const { User, Blog, Comment } = require("../models");

// require data from json file
const userData = require("./userData.json");
const blogData = require("./blogData.json");
const commentData = require("./commentData.json");

// insert data into database
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const blogs = await Blog.bulkCreate(blogData);

  const comments = await Comment.bulkCreate(commentData);

  process.exit(0);
};

seedDatabase();
