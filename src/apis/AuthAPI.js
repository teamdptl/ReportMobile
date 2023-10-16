import { URL_USER_LOGIN, URL_USER_LOGOUT } from '../contains/config';
import { createFetch, createJsonFetch, method } from './CustomFetch';
import * as Device from 'expo-device';

export async function handleLogin(mssv, password) {
  const userData = {
    mssv: mssv,
    password: password,
    device_name: Device.deviceName,
  };
  
  return createJsonFetch(URL_USER_LOGIN, method.POST, JSON.stringify(userData));

  // try {
  //   const response = await fetch(URL_USER_LOGIN, {
  //     method: 'POST',
  //     body: JSON.stringify(userData),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });

  //   if (!response.ok) {
  //     throw new Error('Kết nối API không thành công');
  //   }

  //   const data = await response.json();
  //   console.log(data);
  //   if (data.token && data.error === 0) {
  //     await save(USER_TOKEN_KEY, data.token); // Đảm bảo bạn đã định nghĩa USER_TOKEN_KEY
  //     navigation.replace('TabScreenUser');
  //   } else {
  //     alert('Đăng nhập không thành công. Vui lòng thử lại.');
  //   }
  // } catch (error) {
  //   console.error('Lỗi kết nối API: ', error);
  // }
}

export async function handleLogout() {
  // TODO: Xóa token hiện tại trong máy 
  return createFetch(URL_USER_LOGOUT, method.POST);
}
