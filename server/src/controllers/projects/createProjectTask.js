import { connect } from "../../db";

export const createProjectTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, due_date, status } = req.body;
    const connection = await connect();
    const [result] = await connection.query(
      "INSERT INTO tasks (project_id, title, description, due_date, status) VALUES (?,?,?,?,?)",
      [id, title, description, due_date, status]
    );
    console.log({
      id: result.insertId,
      ...req.body,
    });

    return res.json({
      id: result.insertId,
      project_id: id,
      ...req.body,
    });
  } catch (error) {}
  res.send("error");
};
