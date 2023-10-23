import React, {useEffect, useRef, useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Animated,
  FlatList,
  Dimensions,
} from "react-native";
import HeaderComponent from "../../components/Home/HeaderComponent"; // Import your new component
import SmallButton from "../../components/SmallButtons";
import color from "../../contains/color";
import ReportItem from "../../components/Report/ReportItem";
import useReportsFetch from "../../hooks/useReportsFetch";
import ReportList from "../../components/Report/ReportList";

const UserHome = ({ navigation }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const {reports, err, loadNext, loading} = useReportsFetch({});

  // useEffect(() => {
  //   if (reports){
  //     console.log(reports);
  //   }
  //
  //   if (err){
  //     console.log(err);
  //   }
  // }, [reports, err]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0693F1" />

      <View style={styles.upperHeader}>
        {/* Render anything you want for the upper header here */}
      </View>

      {/* Use the HeaderComponent component here */}
      <HeaderComponent animatedValue={animatedValue} />

      {/*<Text>Đang tải dữ liệu</Text>*/}
      <ReportList reports={reports} loadNext={loadNext} err={err} animatedValue={animatedValue}></ReportList>
    </View>
  );
};

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  upperHeader: {
    height: 28,
  },
})

export default UserHome;
