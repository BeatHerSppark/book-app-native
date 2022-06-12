import { Button, View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>LoginScreen</Text>
      <Button title="Sign Up" onPress={() => navigation.navigate("Signup")} />
    </SafeAreaView>
  );
};

export default LoginScreen;
