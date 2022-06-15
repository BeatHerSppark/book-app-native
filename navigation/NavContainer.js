import React, { useContext } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import CommunityScreen from "./screens/CommunityScreen";
import LibraryScreen from "./screens/LibraryScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import { AuthContext } from "./context/AuthContext";
import SplashScreen from "./screens/SplashScreen";

const homeName = "Home";
const libraryName = "Library";
const communityName = "Community";
const profileName = "Profile";
const loginName = "Login";
const signupName = "Signup";
const splashName = "Splash";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const NavContainer = () => {
  const { userData, splashLoading } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {splashLoading ? (
        <Stack.Navigator>
          <Stack.Screen
            name={splashName}
            component={SplashScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : userData.token ? (
        <Tab.Navigator
          initialRouteName={homeName}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;

              if (rn === homeName) {
                iconName = focused ? "home" : "home-outline";
              } else if (rn === libraryName) {
                iconName = focused ? "book" : "book-outline";
              } else if (rn === communityName) {
                iconName = focused ? "heart" : "heart-outline";
              } else if (rn === profileName) {
                iconName = focused ? "person-circle" : "person-circle-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            headerShown: false,
            tabBarActiveTintColor: "#B4D51E",
            tabBarInactiveTintColor: "grey",
            tabBarLabelStyle: {
              paddingBottom: 10,
              fontSize: 10,
            },
            tabBarStyle: {
              padding: 10,
              height: 70,
            },
          })}
        >
          <Tab.Screen name={homeName} component={HomeScreen} />
          <Tab.Screen name={libraryName} component={LibraryScreen} />
          <Tab.Screen name={communityName} component={CommunityScreen} />
          <Tab.Screen name={profileName} component={ProfileScreen} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName={loginName}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name={loginName} component={LoginScreen} />
          <Stack.Screen name={signupName} component={SignupScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default NavContainer;
