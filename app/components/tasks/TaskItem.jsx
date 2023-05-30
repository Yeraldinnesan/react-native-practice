import moment from "moment";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./taskItemStyles";

const TaskItem = ({ task, deleteHandler }) => {
  const formatedDate = moment(task.due_date).format("MMMM D, YYYY");

  return (
    <View style={styles.itemContainer}>
      <View>
        <Text style={styles.itemTitle}>{task.title}</Text>
        <Text style={styles.itemDescription}>{task.description}</Text>
        <Text style={styles.itemStatus}>{task.status}</Text>
        <Text style={styles.itemDueDate}>due on {formatedDate}</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => deleteHandler(task.id)}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskItem;
