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

Blog.hasMany(Comment, {
  foreignKey: "Blog_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

module.exports = { User, Blog, Comment };
