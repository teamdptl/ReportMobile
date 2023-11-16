import { StyleSheet, Text, View,  TouchableOpacity, Image} from "react-native";
import React from "react";

const CameraComponent = (props) => {
  return (
    <TouchableOpacity onPress={props.takePicture}>
      <View
        style={{
          backgroundColor: "#E3EBF8",
          height: 70,
          width: 70,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../assets/images/camera.png")}
          style={{ width: 45, height: 45, borderRadius: 10 }}
        />
        <Text style={{ fontSize: 11, textAlign: "center", marginTop: 1 }}>
          Thêm hình
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CameraComponent;

const styles = StyleSheet.create({});
