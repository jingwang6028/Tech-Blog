const User = require("./User");
const Blog = require("./Blog");
const Comment = require("./Comment");

// one user has many blogs
User.hasMany(Blog, {
  foreignKey: "user_id",
});

// each blog belongs to one user
Blog.belongsTo(User, {
  foreignKey: "user_id",
});

// one blog post has many comments
Blog.hasMany(Comment, {
  foreignKey: "blog_id",
});

// each comment belongs to one blog
Comment.belongsTo(Blog, {
  foreignKey: "blog_id",
});

// one user has many comments
User.hasMany(Comment, {
  foreignKey: "user_id",
});

// each comment belongs to one user
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Blog, Comment };
