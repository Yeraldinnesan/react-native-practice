import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#212A3E",
    padding: 23,
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemTitle: {
    color: "#F1F6F9",
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 3,
  },
  itemDescription: {
    color: "#9BA4B5",
    paddingTop: 3,
  },
  itemStartDate: {
    color: "#ACB1D6",
    fontSize: 12,
    padding: 2,
  },
  deleteButton: {
    backgroundColor: "#96031a",
    borderRadius: 5,
    padding: 6,
    marginBottom: 5,
  },
  editButton: {
    backgroundColor: "#04724d",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    padding: 6,
  },
  buttonText: {
    color: "#F1F6F9",

    // fontWeight: "bold",
  },
});
