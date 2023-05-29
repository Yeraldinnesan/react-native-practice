import { useEffect, useState } from "react";
import { getProjects } from "../api";

import ProjectList from "../components/projects/ProjectList";

import { View, Text, FlatList } from "react-native";

const Home = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const data = await getProjects();
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <View>
      <ProjectList projects={projects} />
    </View>
  );
};

export default Home;
