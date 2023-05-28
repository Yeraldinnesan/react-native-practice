import { connect } from "../../db.js";

export const getTasks = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM tasks");
    res.send(rows);
  } catch (error) {
    console.error("Error getting all tasks", error);
    res.status(500).send("An error occurred while retrieving the tasks.");
  }
};
