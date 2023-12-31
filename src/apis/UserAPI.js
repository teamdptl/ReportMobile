import { getValue } from "../contains/SecureStore";
import {URL_USER_INFO, URL_USER_SEARCH, USER_TOKEN_KEY} from "../contains/config";
import { createFetch, method } from "./CustomFetch";

export const getUserData = async () => {
	return createFetch(URL_USER_INFO, method.GET)
		.then((res) => res.json())
    .catch((err) => console.error("Lỗi khi gọi API: " + err));
};

export const getWokrers = async (search) => {
	return createFetch(`${URL_USER_SEARCH}?search=${search}`, method.GET)
}

// export const selectWorker = async (workerId, reportId) => {
// 	return createFetch()
// }

//Hàm này chưa hoàn thiện
export const updateUserProfile = async (newData) => {
	try {
		const token = await getValue(USER_TOKEN_KEY);
		if (token) {
			const response = await fetch("https://sgu.dy.id.vn/api/v1/update-user-profile", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(newData),
			});

			if (response.ok) {
				const result = await response.json();
				return result;
			} else {
				console.error("Lỗi khi gọi API để cập nhật hồ sơ:", response.statusText);
				return null;
			}
		}
	} catch (error) {
		console.error("Lỗi khi cập nhật hồ sơ:", error);
		return null;
	}
};
