import React, { useState, useContext } from "react";
import {
  Button,
  View,
  TextInput,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import { AuthContext } from "../context/AuthContext";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLoading, signin } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <Spinner visible={isLoading} />
      <View
        style={{ flexDirection: "row", marginBottom: 30, alignItems: "center" }}
      >
        <Icon name="history-edu" color={"#FFC735"} size={50} />
        <Text style={{ fontSize: 50, color: "#B4D51E" }}>Quill</Text>
      </View>
      <View style={styles.wrapper}>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="Enter email"
          style={styles.input}
        />
        <TextInput
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder="Enter password"
          secureTextEntry={true}
          style={styles.input}
        />
        <Button
          title="Login"
          color="#B4D51E"
          onPress={() => signin(email, password)}
        />
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity>
            <Text
              style={{ color: "#463C74" }}
              onPress={() => navigation.navigate("Signup")}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FBF4E2",
  },
  logo: {
    width: 152,
    height: 152,
  },
  wrapper: {
    width: "80%",
    marginBottom: 30,
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E5E0D5",
    borderRadius: 5,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
});

export default LoginScreen;
