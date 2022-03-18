import React from "react";
import { SignIn } from "../nlwtogether/src/screens/Signin";
import { Home } from "../nlwtogether/src/screens/Home";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import { StatusBar } from "react-native";
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";
import AppLoading from "expo-app-loading";
import { Background } from "../nlwtogether/src/components/Background";
import { Routes } from "./src/routes";

export default function App() {
  const [fontIsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontIsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <Routes />
      </Background>
      </>
  );
}
