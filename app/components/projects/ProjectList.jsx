import { FlatList, RefreshControl, Text } from "react-native";
import { useCallback, useEffect, useState } from "react";

import { getProjects, deleteProject } from "../../api";
import ProjectItem from "./ProjectItem";

import { styles } from "./styles/projectListStyles";
import { useIsFocused } from "@react-navigation/native";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  const [refreshing, setRefreshing] = useState(false);

  const isFocused = useIsFocused();

  const fetchProjects = async () => {
    const data = await getProjects();
    setProjects(data);
  };

  useEffect(() => {
    console.log(isFocused);
    fetchProjects();
  }, [isFocused]);

  const deleteHandler = async (id) => {
    await deleteProject(id);
    await fetchProjects();
  };

  const onRefreshHandler = useCallback(async () => {
    setRefreshing(true);
    await fetchProjects();
    setRefreshing(false);
  });

  const renderItem = ({ item }) => (
    <ProjectItem deleteHandler={deleteHandler} project={item} />
  );

  console.log(projects);
  return (
    <FlatList
      style={styles.flatList}
      data={projects}
      keyExtractor={(item) => item.id + ""}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefreshHandler} />
      }
    />
  );
};

export default ProjectList;
