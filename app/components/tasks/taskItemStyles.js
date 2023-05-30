import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#212A3E",
    padding: 23,
    marginVertical: 5,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemTitle: {
    color: "#F1F6F9",
    fontSize: 15,
    fontWeight: "bold",
    paddingBottom: 3,
  },
  itemDescription: {
    color: "#9BA4B5",
    paddingTop: 3,
  },
  itemDueDate: {
    color: "#ACB1D6",
    fontSize: 10,
    paddingLeft: 2,
  },
  deleteButton: {
    backgroundColor: "#96031a",
    borderRadius: 5,
    padding: 6,
    marginBottom: 5,
  },
  editButton: {
    backgroundColor: "#49BEB7",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    padding: 6,
  },
  itemStatus: {
    color: "#49BEB7",
    fontSize: 10,
    fontWeight: "bold",
    marginVertical: 2,
  },
  buttonText: {
    color: "#F1F6F9",

    // fontWeight: "bold",
  },
});
