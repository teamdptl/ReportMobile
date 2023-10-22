import React, {createContext, useEffect, useState} from "react";

export const AuthContext = createContext();

// Khi mới bắt đầu ứng dụng:
// Nếu authContext thực hiện tìm kiếm và đem lên hook. Nếu có
export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null);
    const authValue = {
        userData, setUserData, token, setToken
    }

    useEffect(() => {
        console.log('Calling');
    }, []);

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
}
