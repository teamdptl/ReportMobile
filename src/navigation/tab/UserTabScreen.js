import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomTabBarButton from "../../components/CustomTabBarButton";
import TabIcons from "../../components/TabIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo from "@react-native-community/netinfo";

import UserHome from "../../screens/User/UserHome";
import UserInfo from "../../screens/User/UserInfo";
import CreateReport from "../../screens/User/CreateReport";
import DraftHome from "../../screens/draft/DraftHome";
import { save, getValue } from "../../contains/AsyncStore";
import { USER_IS_INTERNET } from "../../contains/config";

const Tab = createBottomTabNavigator();

const UserTabScreen = ({ navigation }) => {
  const [isConnected, setIsConnected] = useState(false);

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
      const checkInternet = JSON.stringify(isConnected);
      save(USER_IS_INTERNET, checkInternet);
    }
  }, [isConnected]);
  //
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 18,
          left: 20,
          right: 20,
          elevation: 3,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 60,
          ...styles.shadow,
        },
        tabBarShowLabel: false, // Hide labels in tabs
      })}
    >
      {isConnected ? (
        <Tab.Screen
          name="UserHome"
          component={UserHome}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcons
                focused={focused}
                icon={require("../../assets/images/book.png")}
                label="Phản hồi"
              />
            ),
          }}
        />
      ) : (
        <Tab.Screen
          name="DraftHome"
          component={DraftHome}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcons
                focused={focused}
                icon={require("../../assets/images/book.png")}
                label="Phản hồi"
              />
            ),
          }}
        />
      )}

      <Tab.Screen
        name="CreateReport"
        component={CreateReport}
        options={{
          // tabBarButton: (props) => <CustomTabBarButton {...props} />,
          tabBarButton: () => (
            <CustomTabBarButton
              onPress={() => navigation.navigate("CreateReport")} // Điều hướng đến PostReport
            />
          ),
        }}
      />
      <Tab.Screen
        name="UserInfo"
        component={UserInfo}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcons
              focused={focused}
              icon={require("../../assets/images/user.png")}
              label="Tài khoản"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

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

export default UserTabScreen;
