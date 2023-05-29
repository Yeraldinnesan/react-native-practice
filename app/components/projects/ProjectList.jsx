import { FlatList, Text } from "react-native";
import { useEffect, useState } from "react";

import { getProjects } from "../../api";
import ProjectItem from "./ProjectItem";

import { styles } from "./styles/projectListStyles";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const data = await getProjects();
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const renderItem = ({ item }) => <ProjectItem project={item} />;

  console.log(projects);
  return (
    <FlatList
      style={styles.flatList}
      data={projects}
      keyExtractor={(item) => item.id + ""}
      renderItem={renderItem}
    />
  );
};

export default ProjectList;
