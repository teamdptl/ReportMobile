import React, {useEffect, useRef, useState} from "react"
import {
    ActivityIndicator,
    Animated,
    ImageBackground,
    Keyboard,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View
} from "react-native";
import {
    Heading,
    Input,
    InputField,
    Text,
    Button,
    ButtonText,
    Center,
    InfoIcon,
    InputSlot,
    InputIcon
} from "@gluestack-ui/themed"
import {Ionicons} from "@expo/vector-icons";
import useRegister from "../hooks/useRegister";
import {Overlay} from "@rneui/themed";
import { Alert, AlertIcon, AlertText } from "@gluestack-ui/themed"
import AlertDialog from "../components/AlertDialog";
import {EyeIcon,EyeOffIcon} from 'lucide-react-native';

const Register =({navigation})=>{

    const [firstName,setFirstName] = useState("");
    const [lastName , setLastName]= useState("");
    const [studentCode, setStudentCode ] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const [firstNameError,setFirstNameError] = useState("");
    const [lastNameError , setLastNameError]= useState("");
    const [studentCodeError, setStudentCodeError ] = useState("");
    const [emailError,setEmailError] = useState("");
    const [passwordError,setPasswordError] = useState("");

    const [showAlertDialog, setShowAlertDialog] = useState(false);
    const [showAlertSuccess, setShowAlertSuccess] = useState(false);

    const fadeAnim = useRef(new Animated.Value(1)).current;
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const handleState = () => {
        setShowPassword((showState) => {
            return !showState
        })
    }
    const {data, errorMsg, loading, callback} = useRegister();
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const containsOnlyNumbers = (input) => {
        const numberRegex = /^[0-9]+$/;
        return numberRegex.test(input);
    };
    const onRegister = async ()=>{
        let flag = false;
        setStudentCodeError("")
        setEmailError("")
        setPasswordError("")
        if(!firstName || !lastName || !studentCode || !email || !password){
            setShowAlertDialog(true);
            return;
        }
        console.log(studentCode)
        if(!containsOnlyNumbers(studentCode)){
            setStudentCodeError("MSSV phải là số")
            flag = true
        }
        if(!isValidEmail(email)){
            setEmailError("Email không đúng định dạng")
            flag = true
        }
        if(password.length < 6){
            setPasswordError("Mật khẩu phải nhiều hơn 6 kí tự")
            flag = true
        }
        if(flag){
            return;
        }
        else{
            await callback({
                firstName:firstName,
                lastName:lastName,
                email:email,
                student_code:studentCode,
                password:password
            })
        }
    }
    useEffect(() => {
        console.log(data)
        if(data){
            if(data.error == 1)
            {
                setEmailError("Email đã tồn tại")
            }
            else {
                setShowAlertSuccess(true)
                setTimeout(() => {
                    navigation.replace("Login")
                }, 2000);
            }
        }
    }, [data]);

    useEffect(()=>{
        console.log('Change err');
        if (errorMsg)
            console.error("Lỗi kết nối API: ", errorMsg);
    }, [errorMsg])
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


        <View flex ={1} backgroundColor={"#FFFFFF"} >
            <View flex={0.25} backgroundColor={"#018DFF"}  >
                <View marginHorizontal ={35}  marginVertical ={40}>
                    <Ionicons name="arrow-back" size={28} color="white" />
                    <View  >
                        <Heading  color="white" size={"2xl"} mb={15} >Đăng ký</Heading>
                        <Animated.Text style={{opacity:fadeAnim,color:"white"}}  size={"sm"} >Nhập các thông tin cần thiết để tiếp tục đăng ký tài khoản</Animated.Text>
                    </View>
                </View>
            </View>
            <AlertDialog
                showAlertDialog={showAlertDialog}
                headerAlert={"Thiếu dữ liệu"}
                bodyAlert={"Vui lòng nhập đầy đủ các trường dữ liệu"}
                onClose={() => setShowAlertDialog(false)}
            />
            <AlertDialog
                showAlertDialog={showAlertSuccess}
                headerAlert={"Đăng ký thành công"}
                bodyAlert={"Đang chuyển hướng đăng nhập"}
            />
            <View  flex={0.8}>
                <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} marginHorizontal ={35}  marginVertical ={20}>
                    <View>
                        <View flexDirection={"row"}>
                        <Text size={"md"} mb={15} bold = "true">Họ và tên</Text>
                        {/*<Text size={"md"} mb={15} bold = "true">{emailError}</Text>*/}
                        </View>
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
                                <InputField  placeholder="Họ" onChangeText={(text)=>{setFirstName(text)}} />

                            </Input>
                            <Input
                                flex={1}
                                height={60}
                                variant="outline"
                                size="md"
                                isDisabled={false}
                                isInvalid={false}
                                isReadOnly={false}
                                value={lastName}>
                                <InputField placeholder="Tên" onChangeText={(text) => {setLastName(text)}}/>
                            </Input>
                        </View>
                    </View>
                    <View marginTop={21}>
                        <View flexDirection={"row"} justifyContent={"space-between"}>
                            <Text size={"md"} mb={15} bold = "true">Email</Text>
                            <Text size={"sm"} color={"red"} mb={15} bold = "true">{emailError}</Text>
                        </View>
                        <Input
                            height={60}
                            variant="outline"
                            size="md"
                            isDisabled={false}
                            isInvalid={emailError ? true : false }
                            isReadOnly={false}
                            value={email}
                            >
                            <InputField placeholder="Email" onChangeText={(text) => {setEmail(text)}}/>
                        </Input>
                    </View>
                    <View marginTop={21}>
                        <View flexDirection={"row"} justifyContent={"space-between"}>
                            <Text size={"md"} mb={15}  bold = "true">MSSV </Text>
                            <Text size={"sm"} color={"red"} mb={15}  bold = "true">{studentCodeError}</Text>
                        </View>
                        <Input
                            height={60}
                            variant="outline"
                            size="md"
                            isDisabled={false}
                            isInvalid={studentCodeError ? true : false }
                            isReadOnly={false}
                            value={studentCode}
                            >
                            <InputField placeholder="Mã số sinh viên" onChangeText={(text) => {setStudentCode(text)}}/>
                        </Input>
                    </View>
                    <View marginTop={21}>
                        <View flexDirection={"row"} justifyContent={"space-between"}>
                            <Text size={"md"} mb={15} bold = "true">Mật khẩu</Text>
                            <Text size={"sm"} color={"red"} mb={15} bold = "true">{passwordError}</Text>
                        </View>
                        <Input
                            height={60}
                            variant="outline"
                            size="md"
                            isDisabled={false}
                            isInvalid={passwordError ? true : false }
                            isReadOnly={false}
                            value={password}>
                            <InputField type={showPassword ? "text" : "password"} placeholder="Mật khẩu"  onChangeText={(text) => {setPassword(text)}}/>
                            <InputSlot pr="$6" onPress={handleState}>
                                <InputIcon
                                    as={showPassword ? EyeIcon : EyeOffIcon}
                                    color="$darkBlue500"
                                />
                            </InputSlot>
                        </Input>
                    </View>
                    <Center marginTop={35} marginBottom={30}>
                        <Button
                            width={"60%"}
                            size="md"
                            variant="solid"
                            action="primary"
                            isDisabled={false}
                            isFocusVisible={false}
                            onPress={onRegister}>
                            <ButtonText>Đăng ký </ButtonText>
                        </Button>
                        <Button
                            width={"50%"}
                            variant="link"
                            action="primary"
                            isDisabled={false}
                            isFocusVisible={false}>
                            <ButtonText onPress={()=>{navigation.replace("Login")}}>Bạn đã có tài khoản ? </ButtonText>
                        </Button>
                    </Center>
                </ScrollView>
            </View>
            <Overlay isVisible={loading} onBackdropPress={() => {
            }}>
                <ActivityIndicator size="large"/>
                <Text>Đang xử lý</Text>
            </Overlay>
        </View>
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
