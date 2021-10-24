const User = require("./User");
const Blog = require("./Blog");
const Comment = require("./Comment");

// one user has many blogs
User.hasMany(Blog, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Blog.belongsTo(User, {
  foreignKey: "user_id",
});

// one blog post has many comments
Blog.hasMany(Comment, {
  foreignKey: "blog_id",
});

Comment.belongsTo(Blog, {
  foreignKey: "blog_id",
});

module.exports = { User, Blog, Comment };
