import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  flatList: {
    width: "100%",
    shadowColor: "#000000", // Set the shadow color to black
    shadowOpacity: 0.5, // Adjust the shadow opacity (0.0 - 1.0)
    shadowRadius: 3, // Adjust the shadow radius
    shadowOffset: {
      width: 0, // Adjust the horizontal shadow offset
      height: 2, // Adjust the vertical shadow offset
    },
  },
});
