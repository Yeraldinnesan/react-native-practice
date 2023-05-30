import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  Pressable,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Layout from "../components/Layout";

import { styles } from "../styles/projectFormStyles";
import { addProject, getProject, updateProject } from "../apis/projectsApi";
import moment from "moment";

const ProjectForm = ({ navigation, route }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    start_date: new Date().toISOString(),
    end_date: new Date(),
  });

  const [editing, setEditing] = useState(false);

  console.log(route.params);

  useEffect(() => {
    if (route.params && route.params.id) {
      navigation.setOptions({ headerTitle: "Edit Project" });
      (async () => {
        try {
          const project = await getProject(route.params.id);
          console.log("Fetched project:", project);
          const startDate = moment(project.start_date).toDate();
          const endDate = moment(project.end_date).toDate();

          setFormData((prevFormData) => ({
            ...prevFormData,
            name: project.name,
            description: project.description,
            start_date: startDate,
            end_date: endDate,
          }));
          setEditing(true);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, []);

  const [showDatePicker, setShowDatePicer] = useState(false);

  const toggleDatePicker = () => {
    setShowDatePicer(!showDatePicker);
  };

  const onDatePickerChange = ({ type }, date) => {
    if (type === "set") {
      const currentDate = date;
      setFormData({ ...formData, ["end_date"]: currentDate.toISOString() });

      if (Platform.OS === "android") {
        toggleDatePicker();
        setFormData({
          ...formData,
          ["end_date"]: currentDate,
        });
      } else {
        setFormData({
          ...formData,
          ["end_date"]: currentDate,
        });
      }
    } else {
      toggleDatePicker();
    }
  };

  const confirmIOSDate = (e, date) => {
    if (date !== undefined) {
      const currentDate = date || formData.end_date;
      setFormData({
        ...formData,
        ["end_date"]: currentDate.toDateString(),
      });
    }

    toggleDatePicker();
  };

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      if (!editing) {
        // console.log(formData); // Check if formData is properly populated

        if (!formData.name || !formData.description) {
          throw new Error("Please fill in all the required fields.");
        }

        await addProject(formData);
        // console.log(formData);
      } else {
        await updateProject(route.params.id, formData);
      }
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
    }
  };
  const cancelIOSDate = () => {
    toggleDatePicker();
  };

  return (
    <Layout>
      <TextInput
        style={styles.input}
        value={formData.name}
        placeholder="Name your project"
        placeholderTextColor="#7d8597"
        onChangeText={(value) => handleChange("name", value)}
      />
      <TextInput
        style={styles.input}
        value={formData.description}
        placeholder="Add a description"
        placeholderTextColor="#7d8597"
        onChangeText={(value) => handleChange("description", value)}
      />

      {showDatePicker && (
        <DateTimePicker
          mode="date"
          display="spinner"
          value={formData.end_date}
          onChange={onDatePickerChange}
          style={styles.datePicker}
        />
      )}

      {showDatePicker && Platform.OS === "ios" && (
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity style={styles.pickerButton} onPress={cancelIOSDate}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.pickerButton}
            onPress={confirmIOSDate}
          >
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      )}

      {!showDatePicker && (
        <Pressable style={{ width: "90%" }} onPress={toggleDatePicker}>
          <TextInput
            style={styles.input}
            placeholder="Select an end date"
            placeholderTextColor="#7d8597"
            value={moment(formData.end_date).format("MMMM D, YYYY")}
            // editable={false}
            onPressIn={toggleDatePicker}
            onChange={(e) => handleChange("end_date", e.nativeEvent.text)}
          />
        </Pressable>
      )}
      {!editing ? (
        <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Add Project</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.updateButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Update Project</Text>
        </TouchableOpacity>
      )}
    </Layout>
  );
};

export default ProjectForm;
