import {
  Text,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
  BackHandler, Platform,
} from "react-native"; // Import SafeAreaView
import React, { useState, useEffect, useRef, useReducer } from "react";
import color from "../../contains/color";
import FakeGallery from "../../components/FakeGallery";
import SpinerWrapper from "../../components/SpinerWrapper";
import AlertDialog from "../../components/AlertDialog";
import CustomInput from "../../components/CustomInput";
import CustomTextArea from "../../components/CustomTextArea";
import BackPage from "../../components/BackPage";
import CameraComponent from "../../components/CameraComponent";
import ListImageHorizontal from "../../components/ListImageHorizontal";
import { ButtonText, Button } from "@gluestack-ui/themed";

import formReducer, {
  SET_INVALID,
  SET_VALID,
  SET_VALUE,
} from "../../hooks/useReducer/formReducer";

import { USER_IS_INTERNET, DRAFT_DATA } from "../../contains/config";
import { save, getValue, deleteValue } from "../../contains/AsyncStore";

import * as Location from "expo-location";

import useCreateReport from "../../hooks/useCreateReport";
import {Appbar} from "react-native-paper";

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
        alert("Không có quyền lấy địa điểm!")
        return;
      }
      console.log("Start get location");
      Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High, maximumAge: 10000}).then(location => {
        if (location && location.coords) {
          const latitude = location.coords.latitude;
          const longitude = location.coords.longitude;
          setLocation(`${latitude},${longitude}`);
          console.log("End get location");
        } else {
          console.log("Location information not available.");
        }
      });
    })();
  }, []);

  useEffect(()=>{
    console.log(location);
  }, [location])

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

  
      // const checkInternet =  await getValue(USER_IS_INTERNET);
      // console.log(checkInternet);

      // if (checkInternet == "online") {
        console.log("dang o create usehome");

        const formData = new FormData();
        formData.append("title", state.title.value);
        formData.append("description", state.description.value);
        if (location)
          formData.append("location_api", location);
        else {
          const location = await Location.getLastKnownPositionAsync();
          const latitude = location.coords.latitude;
          const longitude = location.coords.longitude;
          formData.append("location_api", `${latitude},${longitude}`)
        }

        formData.append("location_text", state.address.value);
        // console.log("location_api", location);

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

        await call(formData, () => {
          navigation.goBack();
        });
      // } else if(checkInternet == "offline"){
      //   console.log("dang o create draft");
      //   saveDraftData();
      // } else{
      //   console.log("Khong vo duoc");
      // }
    }
  };
  

  const saveDraftData = async () => {
    try {
      deleteValue(DRAFT_DATA);

      const draftData = await getValue(DRAFT_DATA);
  
      const newImageArray = capturedImages.map((image, index) => {
        const uriParts = image.split(".");
        const fileType = uriParts[uriParts.length - 1];
        return {
          src: image, 
          type: `image/${fileType}`,
          name: `photo_${index}.${fileType}`,
        };
      });

      const newData = {
        id: new Date().getTime(),
        title: state.title.value,
        description: state.description.value,
        location_api: location,
        location_text: state.address.value,
        image: newImageArray ,
      };
  
      const hasNonEmptyData = Object.values(newData).some(
        (value) => value !== ""
      );
  
      if (hasNonEmptyData) {
        const updatedDrafts = draftData ? [...JSON.parse(draftData), newData] : [newData];
        // console.log("data", JSON.stringify(updatedDrafts));
        await save(DRAFT_DATA, JSON.stringify(updatedDrafts));
      }
  
      console.log("data draft", await getValue(DRAFT_DATA));
    } catch (err) {
      console.error("Error saving draft data to AsyncStorage:", err);
    }
  };

  useEffect(() => {
    if (!data) return;
    console.log(data);
  }, [data]);

  useEffect(() => {
    if (!error) return;
    console.log(error);
    saveDraftData();
  }, [error]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: "white" }}
    >
      <View>
        {isGalleryVisible && capturedImages && capturedImages.length > 0 && (
          <FakeGallery
            listImage={capturedImages}
            indexImage={selectedIndex}
            closeImageModal={closeImageModal}
            isShow={isGalleryVisible}
          />
        )}
        <Appbar.Header>
          <Appbar.BackAction onPress={() => {navigation.goBack()}} />
          <Appbar.Content title="Tạo báo cáo" titleStyle={{fontSize: 16}} />
        </Appbar.Header>
        <ScrollView style={styles.container}>
          <View style={styles.bodyReport}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 10,
              }}
            >
              <CameraComponent setCapturedImages={setCapturedImages} shouldSave={true}/>
              <ListImageHorizontal
                listImageData={capturedImages}
                openImageModal={(index) => openImageModal(index)}
                removeImage={(imageUri) => removeImage(imageUri)}
                setCapturedImages={setCapturedImages} 
              />
            </View>

            <View style={styles.bodyInput}>
              <Text style={styles.textBody}>Vấn đề</Text>
              <CustomInput
                isInvalid={state.title.isInvalid}
                placeholder={"Mô tả ngắn gọn vấn đề"}
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
                isDisabled={loading}
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
    fontSize: 18,
    fontWeight: '500'
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
