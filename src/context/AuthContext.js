import React, {createContext, useContext, useEffect, useState} from "react";
import {MANAGER_ROLE, USER_ROLE, WORKER_ROLE} from "../contains/config";

export const AuthContext = createContext(null);
export const useAuthContext = () => useContext(AuthContext);

// Khi mới bắt đầu ứng dụng:
// Nếu authContext thực hiện lấy Context từ database lên ứng dụng
export const AuthProvider = ({children}) => {
    const [role, setRole] = useState(null);

    const isManager = () => {
        return role === MANAGER_ROLE;
    }

    const isWorker = () => {
        return role === WORKER_ROLE;
    }

    const isUser = () => {
        return role === USER_ROLE;
    }

    return (
        <AuthContext.Provider value={{role, setRole, isUser, isWorker, isManager}}>
            {children}
        </AuthContext.Provider>
    );
}
