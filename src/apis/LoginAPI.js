import * as SecureStore from 'expo-secure-store';
import * as Device from 'expo-device';

export async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

export async function handleLogin(mssv, password, deviceName, navigation) {
  const userData = {
    mssv: mssv,
    password: password,
    device_name: deviceName,
  };

  try {
    const response = await fetch('http://sgu.dy.id.vn/api/v1/login', {
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
      await save('userToken', data.token);
      navigation.replace('UserReport');
    } else {
      alert('Đăng nhập không thành công. Vui lòng thử lại.');
    }
  } catch (error) {
    console.error('Lỗi kết nối API: ', error);
  }
}
