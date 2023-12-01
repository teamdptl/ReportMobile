import React, { useContext, useEffect } from "react";
import { Text } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { deleteValue, getValue } from "../contains/SecureStore";
import { USER_ROLE_KEY } from "../contains/config";
import NetInfo from "@react-native-community/netinfo";

const Main = ({ navigation }) => {
  const { role, setRole } = useContext(AuthContext);

  const switchScreen = (userRole) => {
    switch (userRole) {
      case "user":
        console.log("user navigation");
        navigation.replace("User");
        break;
      case "manager":
        console.log("manager navigation");
        navigation.replace("Manager");
        break;
      case "worker":
        console.log("worker navigation");
        navigation.replace("Worker");
        break;
      default:
        console.log("login navigation");
        navigation.replace("Login");
        break;
    }
  };

  useEffect(() => {
    // deleteValue(USER_ROLE_KEY);
    // return;
    const isConnected = NetInfo.fetch().then((state) => {
      console.log("Is connected?", state.isConnected);

      console.log("Context: " + role);
      if (role) {
        switchScreen(role);
      } else {
        getValue(USER_ROLE_KEY)
          .then((data) => {
            console.log("Data: " + data);
            setRole(data);
            if (state.isConnected) {
              
              switchScreen(data);
              setRole(data);
            } else {
              if(data == "user"){
                console.log("vo k");
                navigation.replace("DraftUser");
              }
              

            }
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
