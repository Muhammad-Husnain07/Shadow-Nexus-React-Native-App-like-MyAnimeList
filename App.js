import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import {
  SafeAreaProvider,
} from "react-native-safe-area-context";
import MainContainer from "./Navigation/MainContainer";

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
        <MainContainer />
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});