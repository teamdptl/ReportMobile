import { getValueFor } from '../contains/SecureStore';
import { USER_TOKEN_KEY, URL_USER_INFO } from '../contains/config';

export const getUserData = async () => {
  try {
    const token = await getValueFor(USER_TOKEN_KEY);
    if (token) {
      const response = await fetch(URL_USER_INFO, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        console.error('Lỗi khi gọi API:', response.statusText);
        return null;
      }
    }
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu từ API:', error);
    return null;
  }
};

//Hàm này chưa hoàn thiện
export const updateUserProfile = async (newData) => {
  try {
    const token = await getValueFor(USER_TOKEN_KEY);
    if (token) {
      const response = await fetch("https://sgu.dy.id.vn/api/v1/update-user-profile", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(newData),
      });

      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        console.error('Lỗi khi gọi API để cập nhật hồ sơ:', response.statusText);
        return null;
      }
    }
  } catch (error) {
    console.error('Lỗi khi cập nhật hồ sơ:', error);
    return null;
  }
};

