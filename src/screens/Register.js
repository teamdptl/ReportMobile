import React, {useEffect, useRef, useState} from "react"
import {Animated, ImageBackground, Keyboard, SafeAreaView, ScrollView, StyleSheet, View} from "react-native";
import {Heading, Input, InputField, Text, Button, ButtonText, Center} from "@gluestack-ui/themed"
import {Ionicons} from "@expo/vector-icons";

const Register =()=>{
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setIsKeyboardOpen(true);
                Animated.timing(fadeAnim, {
                    toValue: 0, // Adjust the value to slide up higher if needed
                    duration: 0, // Adjust duration as needed
                    useNativeDriver: true,
                }).start();
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setIsKeyboardOpen(false);
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 300, // Adjust duration as needed
                    useNativeDriver: true,
                }).start();
            }
        );
        // Clean up listeners on unmount
        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);
    return(

        // <ImageBackground imageStyle={{opacity: 0.3,backgroundColor : "white"}} style={styles.background} source={require("../assets/image/background-register.jpg")}>
        <View flex ={1}>
            <View flex={0.3} backgroundColor={"#018DFF"}  >
                <View marginHorizontal ={35}  marginVertical ={70}>
                    <Ionicons name="arrow-back" size={28} color="white" />
                    <View  >
                        <Heading  color="white" size={"2xl"} mb={15} >Đăng ký</Heading>
                        <Animated.Text style={{opacity:fadeAnim,color:"white"}}  size={"sm"} >Nhập các thông tin cần thiết để tiếp tục đăng ký tài khoản</Animated.Text>
                    </View>
                </View>
            </View>

            <View  flex={0.8}>
                <View marginHorizontal ={35}  marginVertical ={20}>
                    <View>
                        <Text size={"md"} mb={15} bold = "true">Họ và tên</Text>
                        <View flexDirection={"row"}>
                            <Input
                                marginRight={15}
                                flex={1}
                                height={60}
                                variant="outline"
                                size="md"
                                isDisabled={false}
                                isInvalid={false}
                                isReadOnly={false}>
                                <InputField placeholder="Họ" />
                            </Input>
                            <Input
                                flex={1}
                                height={60}
                                variant="outline"
                                size="md"
                                isDisabled={false}
                                isInvalid={false}
                                isReadOnly={false}>
                                <InputField placeholder="Tên" />
                            </Input>
                        </View>
                    </View>
                    <View marginTop={21}>
                        <Text size={"md"} mb={15} bold = "true">Email</Text>
                        <Input
                            height={60}
                            variant="outline"
                            size="md"
                            isDisabled={false}
                            isInvalid={false}
                            isReadOnly={false}>
                            <InputField placeholder="Email" />
                        </Input>
                    </View>
                    <View marginTop={21}>
                        <Text size={"md"} mb={15} bold = "true">MSSV </Text>
                        <Input
                            height={60}
                            variant="outline"
                            size="md"
                            isDisabled={false}
                            isInvalid={false}
                            isReadOnly={false}>
                            <InputField placeholder="Mã số sinh viên" />
                        </Input>
                    </View>
                    <View marginTop={21}>
                        <Text size={"md"} mb={15} bold = "true">Mật khẩu</Text>
                        <Input
                            height={60}
                            variant="outline"
                            size="md"
                            isDisabled={false}
                            isInvalid={false}
                            isReadOnly={false}>
                            <InputField placeholder="Mật khẩu" />
                        </Input>
                    </View>
                    <Center marginTop={35}>
                        <Button
                            width={"60%"}
                            size="md"
                            variant="solid"
                            action="primary"
                            isDisabled={false}
                            isFocusVisible={false}>
                            <ButtonText>Đăng ký </ButtonText>
                        </Button>
                        <Button
                            width={"50%"}
                            variant="link"
                            action="primary"
                            isDisabled={false}
                            isFocusVisible={false}>
                            <ButtonText>Bạn đã có tài khoản ? </ButtonText>
                        </Button>
                    </Center>
                </View>
            </View>
        </View>
        // </ImageBackground>
    )
}

const  styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',

    },
})
export default Register;
