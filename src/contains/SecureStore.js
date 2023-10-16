import * as SecureStore from 'expo-secure-store';

export async function save(key, value) {
  return SecureStore.setItemAsync(key, value)
    .then((res) => true)
    .catch((error) => {
        console.error("Lỗi khi lưu giá trị vào SecureStore: ", error);
			  return false;
		})
}

export async function getValueFor(key) {
  return SecureStore.getItemAsync(key)
    .then(res => res)
    .catch(err => {
      console.error('Lỗi khi lấy giá trị từ SecureStore: ', err);
      return null;
    });
}
