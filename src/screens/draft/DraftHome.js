import { StyleSheet, Text, View, StatusBar, Animated, Button } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import HeaderComponent from "../../components/Home/HeaderComponent";
import ReportList from "../../components/Report/ReportList";
import NetInfo from "@react-native-community/netinfo";
import { save, getValue, deleteValue } from "../../contains/AsyncStore";
import { USER_IS_INTERNET,DRAFT_DATA  } from "../../contains/config";

const DraftHome = ({ navigation }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [reports, setReports] = useState([]);

  const linkImg = require("../../assets/images/noInternet.png");
  
  // const reports =  getValue(DRAFT_DATA);

  const getValueDraftData = async () => {
      const draftData = await getValue(DRAFT_DATA);
      console.log(draftData);

        const parsedDraftData = JSON.parse(draftData);
        setReports(parsedDraftData);
        console.log(reports);
      
  };
  
useEffect(() => {
    getValueDraftData();
}, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0693F1" />

      <View style={styles.upperHeader}>
        {/* Render anything you want for the upper header here */}
      </View>

      {/* Use the HeaderComponent component here */}
      <HeaderComponent
        animatedValue={animatedValue}
        isImage={false}
        iconType={"pluscircle"}
        navigation={navigation}
        linkImg={linkImg}
      />

      {/* <Button title="hu"  onPress={() => navigation.navigate('CreateReport')}/> */}

      {/* <ReportList reports={reports} animatedValue={animatedValue} navigation={navigation}></ReportList> */}
    </View>
  );
};

export default DraftHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  upperHeader: {
    height: 28,
  },
});
