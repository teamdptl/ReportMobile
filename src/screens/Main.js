import React, { useContext, useEffect } from "react";
import { Text,View } from "react-native";
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
      getValue(USER_ROLE_KEY)
          .then((data) => {
            console.log("Data: " + data);
            setRole(data);
            switchScreen(data, navigation);
          })
          .catch((err) => navigation.navigate("Login"))
    });
  }, []);

  return <>
    <View>
      <Text>Loading...</Text>
    </View>
  </>;
}

export default Main;
