import axios from "axios";

const API = "http://localhost:3000/projects";

export const getProjects = async () => {
  const { data } = await axios(API);
  return data;
};
