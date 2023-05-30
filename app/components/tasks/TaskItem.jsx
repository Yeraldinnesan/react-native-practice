import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./taskItemStyles";

const TaskItem = ({ task }) => {
  return (
    <View style={styles.itemContainer}>
      <View>
        <Text style={styles.itemTitle}>{task.title}</Text>
        <Text style={styles.itemDescription}>{task.description}</Text>
        <Text style={styles.itemDueDate}>{task.due_date}</Text>
        <Text style={styles.itemStatus}>{task.status}</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Text>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskItem;
