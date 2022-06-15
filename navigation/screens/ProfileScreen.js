import React, { useContext } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../context/AuthContext";

const ProfileScreen = () => {
  const { userData, isLoading, logout } = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <Spinner visible={isLoading} />
      <Text>User: {`${userData.result.name}`}</Text>
      <Button title="Logout" color="red" onPress={logout} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProfileScreen;
