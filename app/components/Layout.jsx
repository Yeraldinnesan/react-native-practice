import { View, StyleSheet, StatusBar } from "react-native";

const Layout = ({ children }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#394867",
    padding: 20,
    flex: 1,
    alignItems: "center",
  },
});

export default Layout;
