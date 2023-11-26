import {Text, View, Image, TextInput, StyleSheet} from 'react-native'
import React, {useContext, useEffect, useState} from 'react'
import Buttons from '../../components/Buttons';
import { getUserData } from '../../apis/UserAPI';
import color from '../../contains/color';
import { handleLogout } from '../../apis/AuthAPI';
import { deleteValue } from '../../contains/SecureStore';
import {USER_ROLE_KEY, USER_TOKEN_KEY} from '../../contains/config';
import {AuthContext} from "../../context/AuthContext";

const UserInfo = ({ navigation }) => {
	const [userData, setUserData] = useState({
		name: "",
		username: "",
		student_code: "",
		email: "",
	});

	const {role, setRole} = useContext(AuthContext);

	const onLogout = async () => {
		await handleLogout()
			.then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data && data.error === 0) {
          deleteValue(USER_TOKEN_KEY);
		  deleteValue(USER_ROLE_KEY);
		  setRole(null);
          navigation.replace("Login");
        }
        else {
          alert("Xảy ra lỗi trong quá trình đăng xuất");
        }
			})
			.catch((err) => {
				console.error(err);
			});
	};

	useEffect(() => {
		const fetchData = async () => {
			const result = await getUserData(); // Gọi hàm getUserData từ UserApi.js

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
			</View>
			<View style={styles.bottomSection}>
				<Text style={styles.textDetails}>Mã số sinh viên:</Text>
				<TextInput style={styles.input} value={userData.username} placeholder="Username" editable={false} />
				<Text style={styles.textDetails}>Email</Text>
				<TextInput style={styles.input} value={userData.email} placeholder="Email" editable={false} />

				<View style={styles.buttonCustom}>
					<Buttons btnText={"Đăng xuất"} backgroundColor={color.red} onPress={onLogout} />
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
		fontSize: 20,
		fontWeight: 'bold',
		color: color.white,
	},
	input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 5,
		paddingHorizontal: 10,
		borderRadius: 10,
	},
	textDetails: {
		marginBottom: 10,
	},
	buttonCustom: {
		marginTop: 190,
		color: 'red',
	}
});

export default UserInfo;
