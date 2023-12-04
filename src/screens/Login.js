import React, {useContext, useEffect, useState} from "react";
import {
    View,
    Keyboard,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar,
    Image,
    ActivityIndicator,
    StyleSheet
} from "react-native";
import {Overlay} from "@rneui/themed";
import Buttons from "../components/Buttons";
import {handleLogin} from "../apis/AuthAPI";
import {save} from "../contains/SecureStore";
import {USER_ROLE_KEY, USER_TOKEN_KEY} from "../contains/config";
import color from "../contains/color";
import {AuthContext} from "../context/AuthContext";
import useFetchOnCall from "../hooks/useFetchOnCall";

const Login = ({navigation}) => {
    const [mssv, setMssv] = useState("");
    const [password, setPassword] = useState("");
    const {role, setRole} = useContext(AuthContext);
    const {value, err, loading, call} = useFetchOnCall(handleLogin);

    const onLogin = async () => {
        if (!mssv || !password) {
            alert("Vui lòng không để trống dữ liệu");
            return;
        }
        await call({
            mssv: mssv,
            password: password
        });
    };

    useEffect(() => {
        if (value){
            console.log(value);
            if (value.error === 0 && value.token){
                save(USER_TOKEN_KEY, value.token);
                save(USER_ROLE_KEY, value.role);
                // save(USER_TOKEN_KEY, "value.token");
                // save(USER_ROLE_KEY, "1");
                setRole(value.role);
                navigation.replace("Main");
            }
            else {
                alert("Đăng nhập không thành công. Vui lòng thử lại.");
            }
        }
    }, [value]);

    useEffect(()=>{
        console.log('Change err');
        if (err)
            console.error("Lỗi kết nối API: ", err);
    }, [err])

    return (
        <View style={{flex: 1, backgroundColor: "#fff", flexDirection: "column"}}>
            {/* <Text>This is login </Text>  */}
            <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
            <View
                style={{
                    flex: 2,
                    backgroundColor: "#fff",
                    flexDirection: "column",
                    paddingTop: 10,
                    paddingHorizontal: "3%",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <Image source={require("../assets/images/BackgroundLogo.png")}
                       style={{width: 240, height: 240, position: "absolute"}}/>
                <Image source={require("../assets/images/SguLogo.png")}
                       style={{width: 150, height: 150, position: "absolute"}}/>
            </View>

            <View style={{
                flex: 4,
                backgroundColor: "#fff",
                flexDirection: "column",
                paddingTop: 10,
                paddingHorizontal: "3%"
            }}>
                <Text style={styles.text}>MSSV:</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Nhập MSSV" value={mssv}
                               onChangeText={(text) => setMssv(text)}/>
                </View>
                <Text style={styles.text}>Mật khẩu:</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập thông tin"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>

                <Buttons onPress={onLogin} btnText={"Đăng nhập ngay"} backgroundColor="#0693F1"/>
                <View style={styles.container_QuenMatKhau}>
                    <Text onPress={()=>{navigation.navigate("Register")}} style={styles.text_QuenMatKhau}>Đăng kí tài khoản</Text>
                </View>
            </View>
            <Overlay isVisible={loading} onBackdropPress={() => {
            }}>
                <ActivityIndicator size="large"/>
                <Text>Đang xử lý</Text>
            </Overlay>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        marginTop: 12,
        marginLeft: 20,
        fontSize: 16,
        fontWeight: '500',
        // fontFamily: Roboto,
        color: color.primaryColor,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: color.primaryColor,
        borderRadius: 20,
        paddingHorizontal: 11,
        paddingVertical: 3,
        marginTop: 12,
        marginHorizontal: 20,
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 16,
    },
    container_QuenMatKhau: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50
    },
    text_QuenMatKhau: {
        fontSize: 16,
        fontWeight: '400',
        color: color.primaryColor,

    }


})

export default Login;
