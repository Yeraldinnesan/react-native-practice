import { connect } from "../../db";

export const getProjects = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT * FROM projects");
  res.send(rows);
};
