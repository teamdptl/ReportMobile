import {
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
  BackHandler,
} from "react-native"; // Import SafeAreaView
import React, { useState, useEffect, useRef } from "react";
import * as FileSystem from "expo-file-system";
import color from "../../contains/color";
import * as ImagePicker from "expo-image-picker";
import FakeGallery from "../../components/FakeGallery";
import SpinerWrapper from "../../components/SpinerWrapper";
import AlertDialog from "../../components/AlertDialog";
import CustomInput from "../../components/CustomInput";
import CustomTextArea from "../../components/CustomTextArea";
import BackPage from "../../components/BackPage";
import CameraComponent from "../../components/CameraComponent";
import ListImageHorizontal from "../../components/ListImageHorizontal";

import { ButtonText, Button } from "@gluestack-ui/themed";

import * as Location from "expo-location";
import useCreateReport from "../../hooks/useCreateReport";

const CreateReport = ({ navigation }) => {
  // Mảng chứa hình
  const [capturedImages, setCapturedImages] = useState([]);
  // Hiển thị hình được chọn
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isGalleryVisible, setIsGalleryVisible] = useState(false);
  // Dùng Ktra value, cờ input
  const [isInvalidAndress, setIsInvalidAddress] = useState(false);
  const [inputValueAddress, setInputValueAddress] = useState("");
  const [isInvalidTitle, setIsInvalidTitle] = useState(false);
  const [inputValueTitle, setInputValueTitle] = useState("");
  const [isInvalidDes, setIsInvalidDes] = useState(false);
  const [inputValueDes, setInputValueDes] = useState("");
  // Alert thông báo
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const [headerAlert, setHeaderAlert] = useState("");
  const [bodyAlert, setBodyAlert] = useState("");
  // Xin quyền location, set giá trị cho nó
  const [location, setLocation] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  const { data, error, loading, call } = useCreateReport();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});

      if (location && location.coords) {
        const latitude = location.coords.latitude;
        const longitude = location.coords.longitude;
        setLocation(`${latitude},${longitude}`);

        console.log("Coordinates: " + location);
      } else {
        console.log("Location information not available.");
      }
    })();
  }, []);

  useEffect(() => {
    if (!isGalleryVisible) return;
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => {
      backHandler.remove();
    };
  }, [isGalleryVisible]);

  const backAction = () => {
    console.log("out side modal " + isGalleryVisible);
    if (isGalleryVisible) {
      closeImageModal();
      return true;
    }
  };

  const openImageModal = (index) => {
    setSelectedIndex(index);
    setIsGalleryVisible(true);
  };

  const closeImageModal = () => {
    setIsGalleryVisible(false);
  };

  const handleButtonClick = async () => {
    const isTitleInvalid = !inputValueTitle || inputValueTitle.trim() === "";
    const isDescriptionInvalid = !inputValueDes || inputValueDes.trim() === "";
    const isAddressInvalid =
      !inputValueAddress || inputValueAddress.trim() === "";
    const isInvalidImage = capturedImages.length > 0 ? false : true;

    setIsInvalidTitle(isTitleInvalid);
    setIsInvalidDes(isDescriptionInvalid);
    setIsInvalidAddress(isAddressInvalid);

    if (
      isTitleInvalid ||
      isDescriptionInvalid ||
      isAddressInvalid ||
      isInvalidImage
    ) {
      setShowAlertDialog(true);
      setHeaderAlert("Thông tin còn trống");
      setBodyAlert("Vui lòng nhập đầy đủ thông tin");
    } else {
      setShowAlertDialog(false);

      const formData = new FormData();
      formData.append("title", inputValueTitle);
      formData.append("description", inputValueDes);
      formData.append("location_api", location);
      formData.append("location_text", inputValueAddress);

      if (capturedImages.length > 0) {
        capturedImages.forEach((image, index) => {
          const uriParts = image.split(".");
          const fileType = uriParts[uriParts.length - 1];

          formData.append(`photo[${index}]`, {
            uri: image,
            type: `image/${fileType}`,
            name: `photo_${index}.${fileType}`,
          });
        });
      }

      await call(formData);
    }
  };

  useEffect(() => {
    if (!data) return;
    console.log(data);
  }, [data]);

  useEffect(() => {
    if (!error) return;
    console.log(error);
  }, [error]);

  const takePicture = () => {
    ImagePicker.launchCameraAsync()
      .then((image) => {
        if (image.assets) {
          const photoUri = image.assets[0].uri;
          const savedFile = saveFromTemp(photoUri);
          setCapturedImages((prevImages) => [...prevImages, savedFile]);
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

  const removeImage = (imageUri) => {
    const updatedImages = capturedImages.filter((uri) => uri !== imageUri);
    setCapturedImages(updatedImages);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, marginTop: 5, backgroundColor: "white" }}
    >
      <View style={styles.container}>
        {isGalleryVisible && capturedImages && capturedImages.length > 0 && (
          <FakeGallery
            listImage={capturedImages}
            indexImage={selectedIndex}
            closeImageModal={closeImageModal}
          />
        )}
        <ScrollView>
          <View>
            <BackPage
              onPress={() => {
                navigation.replace("Tab");
              }}
            />

            <View style={styles.centeredTextContainer}>
              <Text style={styles.centeredText}>Tạo phản hồi</Text>
            </View>
          </View>
          <View style={styles.bodyReport}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 10,
              }}
            >
              <CameraComponent takePicture={takePicture} />              
              <ListImageHorizontal listImageData={capturedImages} openImageModal={(index) => openImageModal(index)} removeImage={(imageUri) => removeImage(imageUri)}/>

            </View>

            <View style={styles.bodyInput}>
              <Text style={styles.textBody}>Vấn đề</Text>
              <CustomInput
                isInvalid={isInvalidTitle}
                placeholder={"VD: Máy chiếu bị hỏng"}
                value={inputValueTitle}
                onChangeText={(text) => setInputValueTitle(text)}
              />
              <Text style={styles.textBody}>Mô tả chi tiết</Text>

              <CustomTextArea
                isInvalid={isInvalidDes}
                placeholder={"Chi tiết vấn đề bạn đang gặp phải"}
                value={inputValueDes}
                width={"100"}
                onChangeText={(text) => setInputValueDes(text)}
              />

              <Text style={styles.textBody}>Địa điểm, vị trí</Text>
              <CustomInput
                isInvalid={isInvalidAndress}
                placeholder={"VD: Cơ sở, phòng học"}
                value={inputValueAddress}
                onChangeText={(text) => setInputValueAddress(text)}
              />
            </View>
            <View style={styles.btnCreateReport}>
              <Button
                variant="solid"
                mt="$10"
                size="md"
                bg="#0693F1"
                onPress={handleButtonClick}
              >
                <ButtonText fontSize="$sm" fontWeight="$bold" color="white">
                  Gửi báo cáo
                </ButtonText>
              </Button>

              <SpinerWrapper loading={loading} />

              <AlertDialog
                showAlertDialog={showAlertDialog}
                headerAlert={headerAlert}
                bodyAlert={bodyAlert}
                onClose={() => setShowAlertDialog(false)}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    position: "relative",
  },
  centeredTextContainer: {
    position: "absolute",
    top: 8,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  centeredText: {
    fontSize: 22,
  },
  bodyReport: {
    marginTop: 30,
  },
  bodyInput: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  textBody: {
    fontSize: 15,
    fontWeight: "bold",
    marginVertical: 20,
  },
  btnCreateReport: {
    alignItems: "center",
  },
});

export default CreateReport;
