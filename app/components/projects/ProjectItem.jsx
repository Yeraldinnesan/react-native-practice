import { View, Text, StyleSheet } from "react-native";
import moment from "moment";

import { styles } from "./styles/projectItemStyles";

const ProjectItem = ({ project }) => {
  const formatedDate = moment(project.start_date).fromNow();

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}> {project.name} </Text>
      <Text style={styles.itemDescription}> {project.description} </Text>
      <Text style={styles.itemStartDate}> Created {formatedDate} </Text>
    </View>
  );
};

export default ProjectItem;
