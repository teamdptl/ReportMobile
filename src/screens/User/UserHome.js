import React, { useRef } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Animated,
} from "react-native";
import HeaderComponent from "../../components/Home/HeaderComponent"; // Import your new component
import ReportList from "../../components/Report/ReportList";
import { getValue } from "../../contains/SecureStore";
import { DRAFT_DATA } from "../../contains/config";
import {Facebook} from "react-content-loader/native";

const UserHome = ({ navigation }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const linkImg = require("../../assets/images/feedback.png");

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0693F1" />

      <View style={styles.upperHeader}>
        {/* Render anything you want for the upper header here */}
      </View>

      {/* Use the HeaderComponent component here */}
      <HeaderComponent
        animatedValue={animatedValue}
        linkImg={linkImg}
        isImage={true}
      />

      {/*<Text>Đang tải dữ liệu</Text>*/}
      <ReportList
        animatedValue={animatedValue}
        navigation = {navigation}></ReportList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  upperHeader: {
    height: 28,
  },
});

export default UserHome;
