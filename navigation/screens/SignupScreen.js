import { Button, View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SignupScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>SignupScreen</Text>
      <Button title="Log In" onPress={() => navigation.navigate("Login")} />
    </SafeAreaView>
  );
};

export default SignupScreen;
