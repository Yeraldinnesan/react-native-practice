import { useState } from "react";
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
import { addProject } from "../api";

const ProjectForm = ({ navigation }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    start_date: new Date().toISOString(),
    end_date: new Date(),
  });

  const [showDatePicker, setShowDatePicer] = useState(false);

  const toggleDatePicker = () => {
    setShowDatePicer(!showDatePicker);
  };

  const onDatePickerChange = ({ type }, date) => {
    if (type == "set") {
      const currentDate = date;
      setFormData({ ...formData, ["end_date"]: currentDate });

      if (Platform.OS === "android") {
        toggleDatePicker();
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
    if (date) {
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
      await addProject(formData);
      navigation.navigate("Home");
      console.log(formData);
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
            value={formData.end_date}
            editable={false}
            onPressIn={toggleDatePicker}
            onChange={(value) => handleChange("end_date", value)}
          />
        </Pressable>
      )}

      <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Project</Text>
      </TouchableOpacity>
    </Layout>
  );
};

export default ProjectForm;
