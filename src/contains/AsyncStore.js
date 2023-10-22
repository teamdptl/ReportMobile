import AsyncStorage from '@react-native-async-storage/async-storage';

export const save = async (key, value) => {
  return AsyncStorage.setItem(key, value)
      .catch(err => {
        console.error('Lỗi khi lưu dữ liệu:', err);
      })
};

export const getValue = async (key) => {
  return AsyncStorage.getItem(key)
      .then(value => value)
      .catch(err => console.error('Lỗi khi lấy dữ liệu:', err))
};

export const deleteValue = async (key) => {
  return AsyncStorage.removeItem(key)
      .catch(err => console.error('Lỗi khi xóa dữ liệu:', err))
};
