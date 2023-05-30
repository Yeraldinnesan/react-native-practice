import axios from "axios";
import moment from "moment";

const API = "http://localhost:3000/tasks";

export const deleteTask = async (id) => {
  await axios.delete(`${API}/${id}`);
};
