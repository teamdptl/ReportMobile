import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const CustomTabBarButton = ({ onPress }) => (
  <TouchableOpacity
    style={{
      top: -20,
      justifyContent: "center",
      alignItems: "center",
      ...styles.shadow,
    }}
    onPress={onPress}
  >
    <Icon name="pluscircle" size={48} color="#0693F1" />
  </TouchableOpacity>
);

const styles = {
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
};

export default CustomTabBarButton;
