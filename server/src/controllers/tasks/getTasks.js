import { connect } from "../../db.js";

export const getTasks = async (req, res) => {
  const db = await connect();
  const [rows] = await db.query("SELECT * FROM tasks");
  res.send(rows);
};
