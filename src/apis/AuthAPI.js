import {URL_USER_LOGIN, URL_USER_LOGOUT, URL_USER_REGISTER} from '../contains/config';
import { createFetch, createJsonFetch, method } from './CustomFetch';
import * as Device from 'expo-device';

export async function handleLogin(data) {
  const userData = {
    ...data,
    device_name: Device.deviceName,
  };
  return createJsonFetch(URL_USER_LOGIN, method.POST, JSON.stringify(userData));
}

export async function handleRegister(data){
  const userData = {...data}
  return createJsonFetch(URL_USER_REGISTER, method.POST, JSON.stringify(userData));

}

export async function handleLogout() {
  return createFetch(URL_USER_LOGOUT, method.POST);
}
