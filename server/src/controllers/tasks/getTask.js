import { connect } from "../../db";

export const getTask = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).send("no id");
    }
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM tasks WHERE id = ?", [
      id,
    ]);
    if (!rows || rows.length === 0) {
      return res.status(404).send("Project not found");
    }
    return res.send(rows);
  } catch (error) {
    console.error("Error getting a task", error);
    res.status(500).send("An error occurred while retrieving the task.");
  }
};
