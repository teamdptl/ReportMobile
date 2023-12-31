import { USER_TOKEN_KEY, URL_USER_LOGIN, URL_USER_INFO } from "../contains/config";
import { save, getValue } from "../contains/SecureStore";

const method = {
	POST: "POST",
	GET: "GET",
	PUT: "PUT",
	DELETE: "DELETE",
	PATH: "PATH",
};

const getAuthHeader = async () => {
	const token = await getValue(USER_TOKEN_KEY);
	return token === null
		? { Authorization: "" }
		: {
				Authorization: `Bearer ${token}`,
		  };
};

const createJsonFetch = async (url, method, body = null, headers = {}) => {
	const auth_header = await getAuthHeader();
	const options = {
		method: method,
		headers: {
			"Content-Type": "application/json",
			...auth_header,
			...headers,
		},
	};

	return body === null ? fetch(url, { ...options }) : fetch(url, { ...options, body: body });
};

const createFetch = async (url, method, body = null, headers = {}) => {
	const auth_header = await getAuthHeader();
	const options = {
		method: method,
		headers: {
			...auth_header,
			...headers,
		},
	};

	return body === null ? fetch(url, { ...options }) : fetch(url, { ...options, body: body });
};

export { method, createFetch, createJsonFetch };
