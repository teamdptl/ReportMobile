import * as SecureStore from 'expo-secure-store';

export async function save(key, value) {
  try {
    await SecureStore.setItemAsync(key, value);
    return true;
  } catch (error) {
    console.error('Lỗi khi lưu giá trị vào SecureStore: ', error);
    return false;
  }
}

export async function getValueFor(key) {
  try {
    let result = await SecureStore.getItemAsync(key);
    return result;
  } catch (error) {
    console.error('Lỗi khi lấy giá trị từ SecureStore: ', error);
    return null;
  }
}
