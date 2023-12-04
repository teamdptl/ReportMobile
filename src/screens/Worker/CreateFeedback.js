import React, {useEffect, useState} from "react"
import {StyleSheet, Image, Text, View, ScrollView, Platform, KeyboardAvoidingView} from "react-native";
import { Appbar } from 'react-native-paper';
import CameraComponent from "../../components/CameraComponent";
import ListImageHorizontal from "../../components/ListImageHorizontal";
import FakeGallery from "../../components/FakeGallery";
import CustomInput from "../../components/CustomInput";
import CustomTextArea from "../../components/CustomTextArea";
import {Button, ButtonText} from "@gluestack-ui/themed";
import SpinerWrapper from "../../components/SpinerWrapper";
import AlertDialog from "../../components/AlertDialog";
import {createFetch} from "../../apis/CustomFetch";
import useCreateFeedback from "../../hooks/useCreateFeedback";
import ReportListItem from "../../components/Report/ReportListItem";

const CreateFeedback = ({navigation, route}) => {
    // Mảng chứa hình
    const [capturedImages, setCapturedImages] = useState([]);
    // Hiển thị hình được chọn
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [isGalleryVisible, setIsGalleryVisible] = useState(false);

    const [textInput, setTextInput] = useState('');
    const {data, error, loading ,callback} = useCreateFeedback();
    const [showError, setShowError] = useState(false);

    const { report } = route.params;

    const openImageModal = (index) => {
        setSelectedIndex(index);
        setIsGalleryVisible(true);
    };

    const closeImageModal = () => {
        setIsGalleryVisible(false);
    };

    const removeImage = (imageUri) => {
        const updatedImages = capturedImages.filter((uri) => uri !== imageUri);
        setCapturedImages(updatedImages);
    };

    useEffect(() => {
        if (error) setShowError(true);
    }, [error]);

    useEffect(() => {
        if (data) navigation.goBack();
    }, [data])

    const submitFeedback = () => {
        const formData = new FormData();
        formData.append("note", textInput);
        formData.append("reports_id", report.id);
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

        callback(formData);
    }

    return <>
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1, backgroundColor: "white" }}>
            <View style={styles.container}>
                <Appbar.Header>
                    <Appbar.BackAction onPress={() => {navigation.goBack()}} />
                    <Appbar.Content title="Xác nhận hoàn thành" titleStyle={{fontSize: 16}} />
                </Appbar.Header>
                <ScrollView style={styles.contentWrapper}>
                    <View style={{marginTop: 20}}>
                        <Text style={{fontWeight: '500', marginBottom: 10, paddingHorizontal: 10}}>Thông tin báo cáo</Text>
                        <ReportListItem item={{...report, user: report.user.name}}></ReportListItem>
                    </View>
                    <Text style={{paddingHorizontal: 10, marginBottom: 10, fontWeight: '500'}}>Nội dung phản hồi</Text>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            paddingHorizontal: 10,
                            marginTop: 10,
                        }}>
                        <CameraComponent setCapturedImages={setCapturedImages} shouldSave={false}/>
                        <ListImageHorizontal
                            listImageData={capturedImages}
                            openImageModal={(index) => openImageModal(index)}
                            removeImage={(imageUri) => removeImage(imageUri)}
                        />
                    </View>
                    <View style={styles.bodyInput}>
                        <Text style={styles.textBody}>Mô tả công việc đã làm</Text>
                        <CustomTextArea
                            isInvalid={false}
                            placeholder={"Mô tả của bạn"}
                            value={textInput}
                            width={"100"}
                            onChangeText={(text) => setTextInput(text)}
                        />
                    </View>
                    <View style={styles.btnCreateReport}>
                        <Button
                            variant="solid"
                            mt="$4"
                            size="md"
                            bg="#0693F1"
                            isDisabled={capturedImages.length === 0 || textInput.length === 0}
                            onPress={() => submitFeedback()}>
                            <ButtonText fontSize="$sm" fontWeight="$bold" color="white">
                                Xác nhận
                            </ButtonText>
                        </Button>

                        <SpinerWrapper loading={loading} />

                        <AlertDialog
                            showAlertDialog={showError}
                            headerAlert={"Lỗi gửi phản hồi"}
                            bodyAlert={error}
                            onClose={() => setShowError(false)}
                        />
                    </View>
                </ScrollView>
                { isGalleryVisible && capturedImages && capturedImages.length > 0 &&
                    <FakeGallery
                        listImage={capturedImages}
                        indexImage={selectedIndex}
                        closeImageModal={closeImageModal}
                        isShow={isGalleryVisible}
                    />
                }
            </View>
        </KeyboardAvoidingView>
    </>
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        position: 'relative'
    },
    contentWrapper: {
        paddingHorizontal: 20,
    },
    bodyInput: {
        marginHorizontal: 10,
        marginVertical: 10,
    },
    textBody: {
        fontSize: 14,
        fontWeight: "500",
        marginVertical: 20,
    },
    btnCreateReport: {
        alignItems: "center",
    },
})
export default CreateFeedback;