import { USER_TOKEN_KEY, URL_USER_LOGIN } from "../contains/config";
import { save, getValueFor } from "../contains/SecureStore";

const method = {
	POST: "POST",
	GET: "GET",
	PUT: "PUT",
	DELETE: "DELETE",
	PATH: "PATH",
};

const getAuthHeader = async () => {
	const token = await getValueFor(USER_TOKEN_KEY);
	console.log(token);
	return token === null
		? { Authorization: "" }
		: {
				Authorization: `Bearer ${token}`,
		  };
};

const fetchJsonOptions = async (method, headers = {}) => {
	const auth_header = await getAuthHeader();
	return {
		method: method,
		headers: {
			"Content-Type": "application/json",
			...auth_header,
			...headers,
		},
	};
};

const fetchOptions = async (method, headers = {}) => {
	const auth_header = await getAuthHeader();
	return {
		method: method,
		headers: {
			auth_header,
			...headers,
		},
	};
};

const createFetch = async (url, method, body = null, headers = {}) => {
	return await fetchOptions(method, headers).then((options) => {
		if (body === null) {
			return fetch(url, {
				...options,
			});
		} else {
			return fetch(url, {
				...options,
				body: body,
			});
		}
	});
};

const createJsonFetch = async (url, method, body = null, headers = {}) => {
	return await fetchJsonOptions(method, headers).then((options) => {
		if (body === null) {
			return fetch(url, {
				...options,
			});
		} else {
			return fetch(url, {
				...options,
				body: body,
			});
		}
	});
};

const testLoginAPI = () => {
	const userData = {
		mssv: "312",
		password: "312",
		device_name: "Duy",
	};

	const response = createJsonFetch(URL_USER_LOGIN, method.POST, JSON.stringify(userData));
	response.then(res => res.json())
		.then(data => { console.log(data); save(USER_TOKEN_KEY, data.token) }
		).catch(err => console.error(err))
};

export { method, createFetch, createJsonFetch, testLoginAPI };
