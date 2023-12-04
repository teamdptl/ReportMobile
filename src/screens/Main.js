import React, { useContext, useEffect } from "react";
import { Text } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { deleteValue, getValue } from "../contains/SecureStore";
import { USER_ROLE_KEY } from "../contains/config";
import NetInfo from "@react-native-community/netinfo";
import {switchScreen} from "../utils/LoginUtils";

const Main = ({ navigation }) => {
  const { role, setRole } = useContext(AuthContext);

  useEffect(() => {
    // deleteValue(USER_ROLE_KEY);
    // return;
    const isConnected = NetInfo.fetch().then((state) => {
      console.log("Is connected?", state.isConnected);

      console.log("Context: " + role);
      if (role) {
        switchScreen(role, navigation);
      } else {
        getValue(USER_ROLE_KEY)
          .then((data) => {
            console.log("Data: " + data);
            setRole(data);
            switchScreen(data);
          //   if (state.isConnected) {
          //
          //     switchScreen(data);
          //     setRole(data);
          //   } else {
          //     if(data === "user"){
          //       console.log("vo k");
          //       navigation.replace("DraftUser");
          //     }
          //   }
          })
          .catch((err) => {
            navigation.replace("Login");
          });
      }
    });
  }, []);

  return <></>;
};

export default Main;
