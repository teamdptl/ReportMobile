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
import React, { useState, useEffect, useRef, useReducer } from "react";
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

import formReducer, {
  SET_INVALID,
  SET_VALID,
  SET_VALUE,
} from "../../hooks/useReducer/formReducer";

import { ButtonText, Button } from "@gluestack-ui/themed";

import * as Location from "expo-location";
import useCreateReport from "../../hooks/useCreateReport";

const CreateReport = ({ navigation }) => {
  // Mảng chứa hình
  const [capturedImages, setCapturedImages] = useState([]);
  // Hiển thị hình được chọn
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isGalleryVisible, setIsGalleryVisible] = useState(false);
  // Alert thông báo
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const [headerAlert, setHeaderAlert] = useState("");
  const [bodyAlert, setBodyAlert] = useState("");
  // Xin quyền location, set giá trị cho nó
  const [location, setLocation] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  const { data, error, loading, call } = useCreateReport();

  const initialState = {
    title: { isInvalid: false, value: "" },
    address: { isInvalid: false, value: "" },
    description: { isInvalid: false, value: "" },
  };

  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleInputChange = (field, value) => {
    dispatch({ type: SET_VALUE, field, value });
  };

  const validateInput = () => {
    const isTitleInvalid =
      !state.title.value || state.title.value.trim() === "";
    const isDescriptionInvalid =
      !state.description.value || state.description.value.trim() === "";
    const isAddressInvalid =
      !state.address.value || state.address.value.trim() === "";

    dispatch({
      type: isTitleInvalid ? SET_INVALID : SET_VALID,
      field: "title",
    });
    dispatch({
      type: isDescriptionInvalid ? SET_INVALID : SET_VALID,
      field: "description",
    });
    dispatch({
      type: isAddressInvalid ? SET_INVALID : SET_VALID,
      field: "address",
    });

    return !(isTitleInvalid || isDescriptionInvalid || isAddressInvalid);
  };

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
    const isInvalidImage = capturedImages.length > 0 ? false : true;
    const isValid = validateInput();

    if (!isValid || isInvalidImage) {
      setShowAlertDialog(true);
      setHeaderAlert("Thông tin còn trống");
      setBodyAlert("Vui lòng nhập đầy đủ thông tin");
    } else {
      setShowAlertDialog(false);

      const formData = new FormData();
      formData.append("title", state.title.value);
      formData.append("description", state.description.value);
      formData.append("location_api", location);
      formData.append("location_text", state.address.value);

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
              <ListImageHorizontal
                listImageData={capturedImages}
                openImageModal={(index) => openImageModal(index)}
                removeImage={(imageUri) => removeImage(imageUri)}
              />
            </View>

            <View style={styles.bodyInput}>
              <Text style={styles.textBody}>Vấn đề</Text>
              <CustomInput
                isInvalid={state.title.isInvalid}
                placeholder={"VD: Cơ sở, phòng học"}
                value={state.title.value}
                onChangeText={(text) => handleInputChange("title", text)}
              />
              <Text style={styles.textBody}>Mô tả chi tiết</Text>

              <CustomTextArea
                isInvalid={state.description.isInvalid}
                placeholder={"Chi tiết vấn đề bạn đang gặp phải"}
                value={state.description.value}
                width={"100"}
                onChangeText={(text) => handleInputChange("description", text)}
              />

              <Text style={styles.textBody}>Địa điểm, vị trí</Text>
              <CustomInput
                isInvalid={state.address.isInvalid}
                placeholder={"VD: Cơ sở, phòng học"}
                value={state.address.value}
                onChangeText={(text) => handleInputChange("address", text)}
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
