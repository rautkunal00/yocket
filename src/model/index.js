const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DBNAME,
  process.env.DBUSER,
  process.env.DBPASSWORD,
  {
    host: process.env.DBHOST,
    dialect: "mysql",
    pool: { max: 5, min: 0, idle: 1000 },
  }
);
sequelize
  .authenticate()
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.event = require("./event")(sequelize, DataTypes);

module.exports = db;
