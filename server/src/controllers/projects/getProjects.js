import { connect } from "../../db";

export const getProjects = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM projects");
    res.send(rows);
  } catch (error) {
    console.error("Error getting all projects", error);
    res.status(500).send("An error occurred while retrieving the projects.");
  }
};
