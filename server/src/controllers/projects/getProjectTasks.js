import { connect } from "../../db";

export const getProjectTasks = async (req, res) => {
  try {
    const id = req.params.id;
    const connection = await connect();
    const [rows] = await connection.query(
      "SELECT t.id, t.title, t.description, t.due_date, t.status FROM tasks t WHERE t.project_id = ?",
      [id]
    );
    console.log(rows);
    res.send(rows);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
