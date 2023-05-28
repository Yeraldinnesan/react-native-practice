import { connect } from "../../db";

export const getTaskCount = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query(
      "SELECT COUNT(*) AS taskCount FROM tasks"
    );
    const taskCount = rows[0].taskCount;
    console.log(taskCount);
    return res.json(taskCount);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send("An error occurred while retrieving the task count.");
  }
};

// FIX IT TO GET ONLY THE NUMBER

// export const getTaskCountPerProject = async (req, res) => {
//   try {
//     const connection = await connect();
//     const [rows] = await connection.query(`
//       SELECT projects.id, projects.name, COUNT(tasks.id) AS taskCount
//       FROM projects
//       LEFT JOIN tasks ON projects.id = tasks.project_id
//       GROUP BY projects.id, projects.name
//     `);
//     console.log(rows);
//     return res.json(rows['COUNT(*)']);
//   } catch (error) {
//     console.log(error);
//     return res
//       .status(500)
//       .send("An error occurred while retrieving the task count.");
//   }
// };
