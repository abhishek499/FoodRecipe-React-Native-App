import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      IconSize={30}
      color={"white"}
    />
  );
};

export default CustomHeaderButton;
