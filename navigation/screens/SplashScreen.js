import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SplashScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", backgroundColor: "06bcee" }}
    >
      <ActivityIndicator size="large" color="#ffffff" />
    </SafeAreaView>
  );
};

export default SplashScreen;
