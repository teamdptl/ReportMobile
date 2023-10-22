import React, { useState } from "react";
import { View, Keyboard, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar, Image, ActivityIndicator } from "react-native";
import { Overlay } from "@rneui/themed";
import styles from "./style";
import Buttons from "../../components/Buttons";
import { handleLogin } from "../../apis/AuthAPI";
import { save } from "../../contains/SecureStore";
import { USER_TOKEN_KEY } from "../../contains/config";

const Login = ({ navigation }) => {
	const [mssv, setMssv] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	const onLogin = async () => {
		if (!mssv || !password) {
			alert("Vui lòng không để trống dữ liệu");
			return;
		}
		setLoading(true);
		await handleLogin(mssv, password)
			.then((res) => res.json())
			.then((data) => {
				if (data.error == 0 && data.token) {
					save(USER_TOKEN_KEY, data.token);
					navigation.replace("TabScreenUser");
				} else {
					alert("Đăng nhập không thành công. Vui lòng thử lại.");
				}
			})
			.catch((err) => console.error("Lỗi kết nối API: ", err))
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<View style={{ flex: 1, backgroundColor: "#fff", flexDirection: "column" }}>
			{/* <Text>This is login </Text>  */}
			<StatusBar barStyle="dark-content" backgroundColor="#fff" />
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
				<Image source={require("../../assets/images/BackgroundLogo.png")} style={{ width: 240, height: 240, position: "absolute" }} />
				<Image source={require("../../assets/images/SguLogo.png")} style={{ width: 150, height: 150, position: "absolute" }} />
			</View>

			<View style={{ flex: 4, backgroundColor: "#fff", flexDirection: "column", paddingTop: 10, paddingHorizontal: "3%" }}>
				<Text style={styles.text}>MSSV:</Text>
				<View style={styles.inputContainer}>
					<TextInput style={styles.input} placeholder="Nhập MSSV" value={mssv} onChangeText={(text) => setMssv(text)} />
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

				<Buttons onPress={onLogin} btnText={"Đăng nhập ngay"} backgroundColor="#0693F1" />
				<View style={styles.container_QuenMatKhau}>
					<Text style={styles.text_QuenMatKhau}>Quên mật khẩu ?</Text>
				</View>
			</View>
			<Overlay isVisible={loading} onBackdropPress={()=>{}}>
				<ActivityIndicator size="large" />
				<Text>Đang xử lý</Text>
			</Overlay>
		</View>
	);
};

export default Login;
