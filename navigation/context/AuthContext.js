import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);

  const signup = (firstName, lastName, email, password, confirmPassword) => {
    setIsLoading(true);

    axios
      .post(`${BASE_URL}/user/signup`, {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      })
      .then((res) => {
        let userData = res.data;
        setUserData(userData);
        AsyncStorage.setItem("userData", JSON.stringify(userData));
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      });
  };

  const signin = (email, password) => {
    setIsLoading(true);

    axios
      .post(`${BASE_URL}/user/signin`, { email, password })
      .then((res) => {
        let userData = res.data;
        console.log(userData);
        setUserData(userData);
        AsyncStorage.setItem("userData", JSON.stringify(userData));
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      });
  };

  const logout = () => {
    setIsLoading(true);

    AsyncStorage.removeItem("userData");
    setUserData({});
    setIsLoading(false);
  };

  const isSignedIn = async () => {
    try {
      setSplashLoading(true);

      let userData = await AsyncStorage.getItem("userData");
      userData = JSON.parse(userData);

      if (userData) {
        setUserData(userData);
      }

      setSplashLoading(false);
    } catch (error) {
      setSplashLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    isSignedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userData,
        signup,
        signin,
        logout,
        isSignedIn,
        splashLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
