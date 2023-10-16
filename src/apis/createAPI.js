import api_config from "./api_config";
import { USER_TOKEN_KEY, URL_USER_LOGIN } from "../contains/config";
import { save ,getValueFor } from "../contains/SecureStore";

// const loginAPI = (userData) => {
// 	return fetch(URL_USER_LOGIN, {
// 		...api_config["POST"],
// 		body: JSON.stringify(userData),
// 	});
// };

const GET = "GET";
const POST = "POST";
const PUT = "PUT";
const DELETE = "DELETE";
const PATH = "PATH";

const getAuthHeader = async () => {
	const token = await getValueFor(USER_TOKEN_KEY);
	return token === null
		? { Authorization: '' }
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

const createFetch = (url, method, body = null, headers = {}) => {
	return fetchOptions(method, headers).then((options) => {
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

	// if (body === null) {
	//         return fetch(url, {
	//                 ...options,
	//         });
	// }
	// return fetch(url, {
	//         ...options,
	//         body: body,
	// })
};

const createJsonFetch = async (url, method, body = null, headers = {}) => {
        return fetchJsonOptions(method, headers).then((options) => {
                console.log(options);
                if (body === null) {
			return fetch(url, {
				...options,
			});
                } else {
                        console.log(body);
			return fetch(url, {
				...options,
				body: body,
			});
		}
	});
};

const TestAPI = () => {
	const userData = {
		mssv: "312",
		password: "312",
		device_name: "duy",
	};

        const response = createJsonFetch(URL_USER_LOGIN, POST, JSON.stringify(userData));
	response
		.then((res) => res.json())
                .then(data => {
                        console.log(data);
                        save(USER_TOKEN_KEY, data.token);
                })
		.catch((err) => console.log(err));
};

export default TestAPI;
