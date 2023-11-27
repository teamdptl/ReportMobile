import { URL_REPORT_ALL, URL_REPORT_MAIN } from "../contains/config";
import { createFetch, createJsonFetch, method } from "./CustomFetch";

export const getListReport = () => {
  return createFetch(URL_REPORT_ALL, method.GET);
};

export const getReportAtPage = (data) => {
  return createFetch(`${URL_REPORT_ALL}/?page=${data.page}`, method.GET);
};

export const getReportDetail = (id) => {
  return createFetch(`${URL_REPORT_MAIN}/${id}`, method.GET);
};

export const createReport = (data) => {
  // const data = {
  // 		"title": data.title,
  //      "description": data.description
  //         "location_text": data.location,
  //     "location_api": 'Gọi api gps',
  //         "photo[0]": data.photo
  // 	};
  return createFetch(URL_REPORT_MAIN, method.POST, data, {
    "Content-Type": "multipart/form-data",
  });
};

export const deleteReport = (data) => {
  return createFetch(`${URL_REPORT_MAIN}/${data.id}`, method.DELETE);
};

const ignoreReport = (data) => {
  // const data = {
  // 		reports_id: 1,
  // 		note: "Hello",
  // 		target: "ignore report",
  // 	};
  return createFetch(URL_REPORT_MAIN, method.PUT, JSON.stringify(data));
};
