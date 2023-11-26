import { Text, View,  TouchableOpacity} from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome5';


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
        <Icon name="camera" size={30} color="#565758"/>
        <Text style={{ fontSize: 11, textAlign: "center", marginTop: 1 }}>
          Thêm hình
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CameraComponent;

