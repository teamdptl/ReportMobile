import {Text, View, Image, TextInput, StyleSheet} from 'react-native'
import React, {useContext, useEffect, useState} from 'react'
import Buttons from '../../components/Buttons';
import { getUserData } from '../../apis/UserAPI';
import color from '../../contains/color';
import { handleLogout } from '../../apis/AuthAPI';
import { deleteValue } from '../../contains/SecureStore';
import {MANAGER_ROLE, USER_ROLE, USER_ROLE_KEY, USER_TOKEN_KEY, WORKER_ROLE} from '../../contains/config';
import {AuthContext, useAuthContext} from "../../context/AuthContext";
import {AddIcon, ArrowRightIcon, Button, ButtonIcon, ButtonText} from "@gluestack-ui/themed";
import CustomInput from "../../components/CustomInput";


const UserInfo = ({ navigation }) => {
	const [userData, setUserData] = useState({
		name: "",
		username: "",
		student_code: "",
		email: "",
	});

	const {role, setRole} = useAuthContext();

	const convertRole = (role) => {
		if (role === MANAGER_ROLE)
			return "Quản lý";
		if (role === USER_ROLE)
			return "Người dùng";
		if (role === WORKER_ROLE)
			return "Nhân viên sửa chữa";
	}

	const removeData = () => {
		deleteValue(USER_TOKEN_KEY);
		deleteValue(USER_ROLE_KEY);
		setRole(null);
		navigation.replace("Login");
	}

	const onLogout = async () => {
		await handleLogout()
			.then((res) => res.json())
      .then((data) => {
		  if (data && data.error === 0) {
			console.log("Logout success")
		  }
		  else {
			  alert("Không thể gọi api đăng xuất");
		  }
			})
			.catch((err) => {
				console.error(err);
			}).finally(() => {
				removeData();
			})
	};

	useEffect(() => {
		const fetchData = async () => {
			const result = await getUserData() // Gọi hàm getUserData từ UserApi.js
			if (result.error === 1){
				removeData();
			}
			if (result) {
				setUserData({
					name: result.name,
					username: result.username,
					student_code: result.student_code,
					email: result.email,
				});
			}
		};

		fetchData();
		console.log("Fetch data");
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.topSection}>
				<View style={styles.userImageContainer}>
					<Image source={require("../../assets/images/SguLogo.png")} style={styles.userImage} />
				</View>
				<Text style={styles.userName}>{userData.name}</Text>
				<Text style={styles.textRole}>{convertRole(role)}</Text>
			</View>
			<View style={styles.bottomSection}>
				<Text style={styles.textDetails}>Mã số sinh viên:</Text>
				<CustomInput style={styles.input} value={userData.student_code} isDisabled={true}/>
				<Text style={styles.textDetails}>Email</Text>
				<CustomInput style={styles.input} value={userData.email} isDisabled={true}/>

				<View style={styles.buttonCustom}>
					<Button
						size="md"
						variant="solid"
						action="negative"
						isDisabled={false}
						isFocusVisible={false}
						onPress={onLogout}
					>
						<ButtonText>Đăng xuất </ButtonText>
						<ButtonIcon as={ArrowRightIcon} />
					</Button>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	topSection: {
		flex: 3,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: color.primaryColor, // Màu nền của phần 2/5
	},
	bottomSection: {
		flex: 7,
		padding: 20,
		backgroundColor: 'white', // Màu nền của phần 3/5
	},
	userImageContainer: {
		marginBottom: 10,
	},
	userImage: {
		width: 100,
		height: 100,
		borderRadius: 50, // Để làm tròn hình ảnh thành hình tròn
	},
	userName: {
		fontSize: 18,
		fontWeight: 'bold',
		color: color.white,
		marginTop: 10
	},
	textRole: {
		fontSize: 14,
		color: color.white,
		marginTop: 5,
	},
	input: {
		paddingHorizontal: 10,
		borderRadius: 10,
		marginBottom: 5
	},
	textDetails: {
		marginBottom: 10,
	},
	buttonCustom: {
		marginTop: 30,
		color: 'red',
	}
});

export default UserInfo;
