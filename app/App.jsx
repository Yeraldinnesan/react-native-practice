import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, Text } from "react-native";

import Home from "./screens/Home";
import ProjectForm from "./screens/ProjectForm";
import ProjectTasks from "./screens/ProjectTasks";
import TaskForm from "./screens/TaskForm";

import { styles } from "./styles/headerStyles";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            title: "Projects",
            headerStyle: { backgroundColor: "#212A3E" },
            headerTitleStyle: { color: "#F1F6F9" },
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("ProjectForm")}
              >
                <Text style={styles.navigation}>New</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ProjectForm"
          component={ProjectForm}
          options={() => ({
            title: "New Project",
            headerStyle: { backgroundColor: "#212A3E" },
            headerTitleStyle: { color: "#F1F6F9" },
          })}
        />
        <Stack.Screen
          name="ProjectTasks"
          component={ProjectTasks}
          options={({ navigation }) => ({
            title: "Project's Tasks",
            headerStyle: { backgroundColor: "#212A3E" },
            headerTitleStyle: { color: "#F1F6F9" },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("TaskForm")}>
                <Text style={styles.navigation}>Add</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="TaskForm"
          component={TaskForm}
          options={() => ({
            title: "Add Task",
            headerStyle: { backgroundColor: "#212A3E" },
            headerTitleStyle: { color: "#F1F6F9" },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
