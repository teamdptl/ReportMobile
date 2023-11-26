import React, {createContext, useEffect, useState} from "react";

export const AuthContext = createContext();

// Khi mới bắt đầu ứng dụng:
// Nếu authContext thực hiện lấy Context từ database lên ứng dụng
export const AuthProvider = ({children}) => {
    const [role, setRole] = useState(null);

    const authValue = {
        role, setRole
    }

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
}
