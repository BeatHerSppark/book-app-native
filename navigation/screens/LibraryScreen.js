import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LibraryScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>LibraryScreen</Text>
      <Text>LibraryScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default LibraryScreen;
