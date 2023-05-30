import { View, Text, FlatList, RefreshControl } from "react-native";
import { useCallback, useEffect, useState } from "react";

import Layout from "../components/Layout";
import { styles } from "../components/projects/styles/projectListStyles";

import { getProjectTasks } from "../apis/projectsApi";
import { deleteTask } from "../apis/tasksApi";
import TaskItem from "../components/tasks/TaskItem";

const ProjectTasks = ({ route }) => {
  // console.log(route.params.id);

  const [tasks, setTasks] = useState([]);

  const fetchProjectsTasks = async () => {
    const data = await getProjectTasks(route.params.id);
    console.log("sssssssssssss", data);
    setTasks(data);
  };

  useEffect(() => {
    fetchProjectsTasks();
  }, []);

  //-------------------

  const [refreshing, setRefreshing] = useState(false);

  const onRefreshHandler = useCallback(async () => {
    setRefreshing(true);
    await fetchProjectsTasks();
    setRefreshing(false);
  });

  //-------------------

  const deleteHandler = async (id) => {
    await deleteTask(id);
    await fetchProjectsTasks();
  };

  const renderItem = ({ item }) => (
    <TaskItem deleteHandler={deleteHandler} task={item} />
  );
  return (
    <Layout>
      <FlatList
        style={styles.flatList}
        data={tasks}
        keyExtractor={(item) => item.id + ""}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefreshHandler}
          />
        }
      />
    </Layout>
  );
};

export default ProjectTasks;
