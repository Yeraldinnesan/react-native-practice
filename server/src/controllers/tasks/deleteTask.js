import { connect } from "../../db";

export const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const connection = await connect();
    await connection.query("DELETE FROM tasks WHERE id = ?", [id]);
    console.log(`task with id ${id} deleted `);
    return res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error);
  }
};
