import { StyleSheet, Text, View, StatusBar, Animated, Button } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import HeaderComponent from "../../components/Home/HeaderComponent";
import ReportList from "../../components/Report/ReportList";
import NetInfo from "@react-native-community/netinfo";
import { save, getValue, deleteValue } from "../../contains/AsyncStore";
import { USER_IS_INTERNET } from "../../contains/config";

const DraftHome = ({ navigation }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [isConnected, setIsConnected] = useState(false);

  const reports = getValue(DRAFT_DATA);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (isConnected) {
      save(USER_IS_INTERNET, isConnected.toString());
      navigation.replace("UserNavigation");
    }
  }, [isConnected, navigation]);

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
        
      />

      {/* <Button title="hu"  onPress={() => navigation.navigate('CreateReport')}/> */}

      <ReportList reports={reports} animatedValue={animatedValue}></ReportList>
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
