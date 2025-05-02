import { Sequelize, DataTypes } from "sequelize";
import bookModel from "./models/book.model.js";

const sequelize = new Sequelize(
  "postgresql://postgres.xucyaiemxnnlqicbsyug:98189818011734@aws-0-us-east-2.pooler.supabase.com:6543/postgres"
);

sequelize
  .authenticate()
  .then(() => {
    console.log(
      "Connection to the database has been established successfully."
    );
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.books = bookModel(sequelize, DataTypes);

sequelize.sync({ alter: false }).then(() => {
  console.log("Migrate vayo");
});

export default db;
