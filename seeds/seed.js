const sequelize = require("../config/connection");

// require data
const userData = require("./userData");
const blogData = require("./blogData");
//const commentData = require("./commentData.json");

// insert data into database
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedBlog();

  await seedUser();

  process.exit(0);
};

seedDatabase();
