import { URL_REPORT_ALL, URL_REPORT_MAIN } from "../contains/config";
import { createFetch, createJsonFetch, method } from "./CustomFetch"

const getListReport = () => {
    return createFetch(URL_REPORT_ALL, method.GET);
}

const getReportDetail = (data) => {
    return createFetch(`${URL_REPORT_MAIN}/${data.id}`, method.GET);
}

const createReport = (data) => {
    // const data = {
    // 		"title": data.title,
    //      "description": data.description
    //         "location_text": data.location,
    //     "location_api": 'Gọi api gps',
    //         "photo[0]": data.photo
    // 	};
    return createJsonFetch(URL_REPORT_MAIN, method.POST, JSON.stringify(data));
}

const deleteReport = (data) => {
    return createFetch(`${URL_REPORT_MAIN}/${data.id}`, method.DELETE);
}

const ignoreReport = (data) => {
    // const data = {
	// 		reports_id: 1,
	// 		note: "Hello",
	// 		target: "ignore report",
	// 	};
    return createFetch(URL_REPORT_MAIN, method.PUT, JSON.stringify(data))
}