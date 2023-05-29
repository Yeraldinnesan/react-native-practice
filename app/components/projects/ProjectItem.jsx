import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import moment from "moment";

import { styles } from "./styles/projectItemStyles";

const ProjectItem = ({ project, deleteHandler }) => {
  const formatedDate = moment(project.start_date).fromNow();

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity>
        <Text style={styles.itemTitle}> {project.name} </Text>
        <Text style={styles.itemDescription}> {project.description} </Text>
        <Text style={styles.itemStartDate}> Created {formatedDate} </Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => deleteHandler(project.id)}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => onPressHandler(project.id)}
        >
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProjectItem;
