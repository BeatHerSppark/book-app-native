import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AuthProvider } from "./navigation/context/AuthContext";
import NavContainer from "./navigation/NavContainer";

export default function App() {
  return (
    <AuthProvider>
      <NavContainer />
    </AuthProvider>
  );
}
