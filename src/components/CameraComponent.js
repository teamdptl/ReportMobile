import { Text, View,  TouchableOpacity} from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";


const CameraComponent = (props) => {

  const takePicture = () => {
    ImagePicker.launchCameraAsync()
      .then((image) => {
        if (image.assets) {
          const photoUri = image.assets[0].uri;
          if (props.shouldSave ? props.shouldSave : false){
              const savedFile = saveFromTemp(photoUri);
              props.setCapturedImages((prevImages) => [...prevImages, savedFile]);
          }
          else {
              props.setCapturedImages((prevImages) => [...prevImages, photoUri]);
          }
        }
      })
      .catch((err) => console.log("exit"));
  };

  const saveFromTemp = (photoUri) => {
    const timeStamp = Date.now();
    const imageFile =
      FileSystem.documentDirectory + `cachedImage_${timeStamp}.jpg`;

    FileSystem.copyAsync({
      from: photoUri,
      to: imageFile,
    });
    return imageFile;
  };

  return (
    <TouchableOpacity onPress={takePicture}>
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

