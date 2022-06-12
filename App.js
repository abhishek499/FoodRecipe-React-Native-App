import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import mealsReducer from "./store/reducers/meals";
import MealsNavigator from "./navigation/MealsNavigator";
enableScreens();

const rootReducer = combineReducers({ meals: mealsReducer });

const store = createStore(rootReducer);

const fetchFonts = () => {
  Font.loadAsync({
    "ps-regular": require("./assets/fonts/Product-Sans-Regular.ttf"),
    "ps-bold": require("./assets/fonts/Product-Sans-Bold.ttf"),
  });
  console.log("loaded");
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
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
