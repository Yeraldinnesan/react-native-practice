import { FlatList, Text } from "react-native";
import React from "react";

const ProjectList = ({ projects }) => {
  return (
    <FlatList
      data={projects}
      renderItem={({ item }) => <Text>{item.name}</Text>}
    />
  );
};

export default ProjectList;
