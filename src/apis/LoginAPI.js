import { save } from '../contains/SecureStore';
import { USER_TOKEN_KEY, URL_USER_LOGIN } from '../contains/config';


import * as Device from 'expo-device';



export async function handleLogin(mssv, password, navigation) {
  const userData = {
    mssv: mssv,
    password: password,
    device_name: Device.deviceName,
  };

  try {
    const response = await fetch(URL_USER_LOGIN, {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Kết nối API không thành công');
    }

    const data = await response.json();

    if (data.token && data.error === 0) {
      await save(USER_TOKEN_KEY, data.token); // Đảm bảo bạn đã định nghĩa USER_TOKEN_KEY
      navigation.replace('TabScreenUser');
    } else {
      alert('Đăng nhập không thành công. Vui lòng thử lại.');
    }
  } catch (error) {
    console.error('Lỗi kết nối API: ', error);
  }
}
