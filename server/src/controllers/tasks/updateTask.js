import { connect } from "../../db";

export const updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const connection = await connect();
    const result = await connection.query("UPDATE tasks SET ? WHERE id = ?", [
      updates,
      id,
    ]);
    console.log(result);
    return res.sendStatus(204);
  } catch (error) {
    console.error("Error updating a tasks", error);
    res.status(500).send("An error occurred while updating a tasks.");
  }
};
