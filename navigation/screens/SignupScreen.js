import React, { useContext, useState } from "react";
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

const SignupScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const { isLoading, signup } = useContext(AuthContext);

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
        <View style={styles.nameContainer}>
          <TextInput
            onChangeText={setFirstName}
            value={firstName}
            placeholder="First Name"
            style={styles.nameInput}
          />
          <TextInput
            onChangeText={setLastName}
            value={lastName}
            placeholder="Last Name"
            style={styles.nameInput}
          />
        </View>
        <TextInput
          onChangeText={setEmail}
          value={email}
          placeholder="Enter email"
          style={styles.input}
        />
        <TextInput
          onChangeText={setPassword}
          value={password}
          placeholder="Enter password"
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          placeholder="Confirm password"
          secureTextEntry={true}
          style={styles.input}
        />
        <Button
          title="Signup"
          color="#B4D51E"
          onPress={() => {
            signup(firstName, lastName, email, password, confirmPassword);
          }}
        />
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text>Already have an account? </Text>
          <TouchableOpacity>
            <Text
              style={{ color: "#463C74" }}
              onPress={() => navigation.navigate("Login")}
            >
              Login
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
  nameInput: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E5E0D5",
    borderRadius: 5,
    paddingHorizontal: 14,
    paddingVertical: 10,
    width: "49%",
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default SignupScreen;
