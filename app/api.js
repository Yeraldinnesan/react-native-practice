import axios from "axios";
import moment from "moment";

const API = "http://localhost:3000/projects";

export const getProjects = async () => {
  try {
    const { data } = await axios(API);
    if (!data) {
      throw new Error("Network response was not ok");
    }
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getProject = async (id) => {
  try {
    const { data } = await axios(`${API}/${id}`);
    console.log("Response data:", data);
    return data[0];
  } catch (error) {
    console.error("Error fetching project:", error);
    throw error;
  }
};

export const addProject = async (newProject) => {
  try {
    const formattedProject = {
      ...newProject,
      start_date: moment(newProject.start_date).format("YYYY-MM-DD HH:mm:ss"),
      end_date: moment(newProject.end_date).format("YYYY-MM-DD HH:mm:ss"),
    };
    const { data } = await axios.post(API, formattedProject, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateProject = async (id, updatedProject) => {
  try {
    const formattedProject = {
      ...updatedProject,
      start_date: moment(updatedProject.start_date).format(
        "YYYY-MM-DD HH:mm:ss"
      ),
      end_date: moment(updatedProject.end_date).format("YYYY-MM-DD HH:mm:ss"),
    };
    await axios.put(`${API}/${id}`, formattedProject, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProject = async (id) => {
  console.log(id);
  await axios.delete(`${API}/${id}`);
};
