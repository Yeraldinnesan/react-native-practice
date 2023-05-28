import { connect } from "../../db.js";

export const createProject = async (req, res) => {
  try {
    const { name, description, start_date, end_date } = req.body;
    const connection = await connect();
    const [result] = await connection.query(
      "INSERT INTO projects (name, description, start_date, end_date) VALUES (?,?,?,?)",
      [name, description, start_date, end_date]
    );
    console.log({
      id: result.insertId,
      ...req.body,
    });
    return res.json({
      id: result.insertId,
      ...req.body,
    });
  } catch (error) {
    console.log(error);
  }
};
