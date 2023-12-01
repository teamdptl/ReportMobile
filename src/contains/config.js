const url = "https://sgu.dy.id.vn/api/v1";

export const USER_TOKEN_KEY = "userToken";
export const USER_ROLE_KEY = "userRole";
export const USER_IS_INTERNET = "userIsInternet";
export const DRAFT_DATA = "draftData";

export const USER_ROLE = 'user';
export const MANAGER_ROLE = 'manager';
export const WORKER_ROLE = 'worker';

export const STATUS = {
    SENT: 'sent',
    PROCESS: 'process',
    COMPLETE: 'complete',
    IGNORE: 'ignore',
    DRAFT: 'draft'
}

export const URL_USER_INFO = `${url}/user-info`;
export const URL_USER_SEARCH = `${url}/users`;
export const URL_USER_LOGIN = `${url}/login`;
export const URL_USER_LOGOUT = `${url}/logout`;
export const URL_REPORT_ALL = `${url}/reports`
export const URL_REPORT_MAIN = `${url}/report`;
export const URL_REPORT_ASSIGNMENT = `${url}/assignment`