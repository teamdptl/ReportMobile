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
} from "react-native"; // Import SafeAreaView
import React, { useState, useEffect, useRef } from "react";
import styles from "./style";
import { Camera } from "expo-camera";
import Buttons from "../../components/Buttons";
import * as FileSystem from "expo-file-system";

const PostReport = ({ navigation }) => {
  const cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [imageURL, setimageURL] = useState(null);

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
      let options = {
        quality: 1,
        base64: true,
        exif: false,
        skipProcessing: true,
      };
      const photo = await cameraRef.current.takePictureAsync();
      // console.log(photo);

      // setCapturedImage(photo);

      // Lưu ảnh vào thư mục tạm thời
      const imageFile = FileSystem.documentDirectory + "cachedImage.jpg";
      await FileSystem.copyAsync({
        from: photo.uri,
        to: imageFile,
      });

      // Lưu đường dẫn của ảnh vào state
      setimageURL(imageFile);
      console.log("Luu vao duong dan: "+imageFile);
    }
  };

  if (imageURL && isCameraOpen) {
    let savePhoto = async () => {
      // if (capturedImage.uri) {
        const uri = await FileSystem.getInfoAsync(
          FileSystem.documentDirectory + "cachedImage.jpg"
        );
        if (uri.exists) {
          setimageURL(uri.uri);
        // }
        closeCamera();
      }
    };

    return (
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.preview}
          source={{ uri: "data:image/jpg;base64," + capturedImage.base64 }}
        />

        {1 ? <Button title="Lưu ảnh" onPress={savePhoto} /> : null}
        <Button title="Chụp lại" onPress={() => setCapturedImage(null)} />
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/return.png")}
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
            {capturedImage ? (
              <Image
                source={{ uri: imageURL }}
                style={{ width: 80, height: 120 }}
              />
            ) : (
              <Image
                source={require("../../assets/images/plusImg.png")}
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
        <Modal visible={isCameraOpen} animationType="slide">
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
