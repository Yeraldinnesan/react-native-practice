import { connect } from "../../db";

export const createTask = async (req, res) => {
  try {
    const { project_id, title, description, due_date, status } = req.body;
    const connection = await connect();
    const [result] = await connection.query(
      "INSERT INTO tasks (project_id, title, description, due_date, status) VALUES (?,?,?,?,?)",
      [project_id, title, description, due_date, status]
    );
    console.log({
      id: result.insertId,
      ...req.body,
    });

    return res.json({
      id: result.insertId,
      ...req.body,
    });
  } catch (error) {}
  res.send("Hello World");
};
