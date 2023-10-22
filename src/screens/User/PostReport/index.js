import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Modal,
  Button,
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
} from "react-native"; // Import SafeAreaView
import React, { useState, useEffect, useRef } from "react";
import styles from "./style";
import { Camera } from "expo-camera";
import Buttons from "../../../components/Buttons";
import * as FileSystem from "expo-file-system";
import { Overlay } from "@rneui/themed";

const PostReport = ({ navigation }) => {
  const cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [imageURL, setimageURL] = useState(null);
  const [isCapture, setCaptured] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const onCreateReport = async () => {
    console.log("Tạo report");
  };

  // const loadCachedImage = async () => {
  //   const uri = await FileSystem.getInfoAsync(
  //     FileSystem.documentDirectory + "cachedImage.jpg"
  //   );
  //   if (uri.exists) {
  //     setimageURL(uri.uri);
  //   }
  // };

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      // loadCachedImage();
    })();
  }, []);

  const openCamera = () => {
    setIsCameraOpen(true);
  };

  const closeCamera = () => {
    setIsCameraOpen(false);
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      setLoading(true);
      await cameraRef.current
        .takePictureAsync()
        .then((photo) => {
          // console.log(photo);
          setimageURL(photo.uri);
          setLoading(false);
          saveFromTemp(photo.uri);
          closeCamera();
        })
        .catch((error) => {
          console.log("Error : " + error);
        })
        .finally(() => {
          console.log("OK");
        });
    }
    
  };

  const saveFromTemp = (photoUri) => {
    const timeStamp = Date.now();
    const imageFile = FileSystem.documentDirectory + `cachedImage_${timeStamp}.jpg`;
    console.log("Photo uri: " + photoUri);
    FileSystem.copyAsync({
      from: photoUri,
      to: imageFile,
    }).then((res) => {
      setimageURL(imageFile);
      console.log("Storge pernament data: " + imageFile);
    });
  };

  if (isCameraOpen && imageURL) {
    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.preview} source={{ uri: imageURL }} />
        <Button title="Chụp lại" onPress={() => setimageURL(null)} />
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/return.png")}
        style={{ width: 50, height: 50 }}
      />

      <View style={styles.textHeader}>
        <Text style={styles.centeredText}>Phản hồi thông tin</Text>
      </View>
      <View style={styles.bodyReport}>
        <Text style={styles.textBody}>Tiêu đề</Text>
        <TextInput style={styles.roundedInput} />
        <Text style={styles.textBody}>Mô tả báo cáo</Text>
        <TextInput
          style={[styles.roundedInput, styles.paraInput]}
          multiline={true}
        />
        <Text style={styles.textBody}>Địa điểm</Text>
        <TextInput style={styles.roundedInput} />
        <Text style={styles.textBody}>Thêm ảnh</Text>
        <View>
          <TouchableOpacity onPress={openCamera}>
            {imageURL ? (
                <Image
                  source={{ uri: imageURL }}
                  style={{ width: 80, height: 120 }}
                />
            ) : (
              <Image
                source={require("../../../assets/images/plusImg.png")}
                style={{ width: 80, height: 120 }}
              />
            )}
          </TouchableOpacity>
        </View>
        <Buttons
          onPress={onCreateReport}
          btnText={"Tạo báo cáo"}
          backgroundColor="#0693F1"
        />
        <Modal visible={isCameraOpen}>
        <Overlay isVisible={isLoading} onBackdropPress={() => {}}>
          <ActivityIndicator size="large" />
          <Text>Đang xử lý</Text>
        </Overlay>
          <Camera style={{ flex: 1 }} ref={cameraRef} />
          <View>
            <Button title="Capture" onPress={takePicture} />
          </View>
        </Modal>
   
      </View>
    </View>
  );
};

export default PostReport;
