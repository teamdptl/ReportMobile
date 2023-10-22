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
    ActivityIndicator, StyleSheet,
} from "react-native"; // Import SafeAreaView
import React, {useState, useEffect, useRef} from "react";
import Buttons from "../../components/Buttons";
import * as FileSystem from "expo-file-system";
import {Overlay} from "@rneui/themed";
import color from "../../contains/color";
import * as ImagePicker from "expo-image-picker";

const CreateReport = ({navigation}) => {
    const [imageURL, setImageUrl] = useState(null);

    const onCreateReport = async () => {
        console.log("Tạo report");
    };

    const takePicture = () => {
        ImagePicker.launchCameraAsync()
            .then((image) => {
                if (image.assets) {
                    setImageUrl(image.assets[0].uri);
                    saveFromTemp(image.assets[0].uri);
                }
            })
            .catch((err) => console.log("exit"));
    };

    const saveFromTemp = (photoUri) => {
        const timeStamp = Date.now();
        const imageFile = FileSystem.documentDirectory + `cachedImage_${timeStamp}.jpg`;
        console.log("Photo uri: " + photoUri);
        FileSystem.copyAsync({
            from: photoUri,
            to: imageFile,
        }).then((res) => {
            setImageUrl(imageFile);
            console.log("Storge pernament data: " + imageFile);
        });
    };

    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/images/return.png")}
                style={{width: 50, height: 50}}
            />

            <View style={styles.textHeader}>
                <Text style={styles.centeredText}>Phản hồi thông tin</Text>
            </View>
            <View style={styles.bodyReport}>
                <Text style={styles.textBody}>Tiêu đề</Text>
                <TextInput style={styles.roundedInput}/>
                <Text style={styles.textBody}>Mô tả báo cáo</Text>
                <TextInput
                    style={[styles.roundedInput, styles.paraInput]}
                    multiline={true}
                />
                <Text style={styles.textBody}>Địa điểm</Text>
                <TextInput style={styles.roundedInput}/>
                <Text style={styles.textBody}>Thêm ảnh</Text>
                <View>
                    <TouchableOpacity onPress={takePicture}>
                        {imageURL ? (
                            <Image
                                source={{uri: imageURL}}
                                style={{width: 80, height: 120}}
                            />
                        ) : (
                            <Image
                                source={require("../../assets/images/plusImg.png")}
                                style={{width: 80, height: 120}}
                            />
                        )}
                    </TouchableOpacity>
                </View>
                <Buttons
                    onPress={onCreateReport}
                    btnText={"Tạo báo cáo"}
                    backgroundColor="#0693F1"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 10,

    },
    textHeader: {
        alignItems: 'center',      // Center horizontally
        justifyContent: 'center',  // Center vertically
    },
    centeredText: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20,
        color: color.primaryColor
    },
    bodyReport: {
        marginTop: 50,

    },
    textBody: {
        color: color.primaryColor,
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 7
    },

    roundedInput: {
        borderWidth: 1,
        // borderColor: color.primaryColor,
        borderRadius: 10,
        padding: 5,
        marginVertical: 5,
    },
    paraInput: {
        height: 80
    },
    preview: {
        alignSelf: 'stretch',
        flex: 1
    }

})

export default CreateReport;
