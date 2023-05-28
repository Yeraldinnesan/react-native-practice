import { connect } from "../../db";

export const deleteProject = async (req, res) => {
  try {
    const id = req.params.id;
    const connection = await connect();
    await connection.query("DELETE FROM projects WHERE id = ?", [id]);
    console.log(`project with id ${id} deleted along with associated tasks`);
    return res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error);
  }
};
