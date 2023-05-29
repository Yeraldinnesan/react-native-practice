import axios from "axios";

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

export const addProject = async (newProject) => {
  try {
    const formattedProject = {
      ...newProject,
      start_date: new Date(newProject.start_date).toISOString(),
      end_date: new Date(newProject.end_date).toISOString(),
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

// export const addProject = async (newProject) => {
//   const res = await fetch(API, {method:'POST', headers: {Accept: "application/json", 'Content-type': "application/json"}, body: JSON.stringify(newProject)})
//   return await res.json()
// }

export const deleteProject = async (id) => {
  await axios.delete(`${API}/${id}`, {
    method: "DELETE",
  });
};
