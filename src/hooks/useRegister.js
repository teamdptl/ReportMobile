import {useCallback, useEffect, useState} from "react";
import {getReportDetail} from "../apis/ReportAPI";
import {handleRegister} from "../apis/AuthAPI";

const useRegister = () => {
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const [data , setData] = useState(null);
    const callback = useCallback((data) => {
        setLoading(true);
        handleRegister(data).then(res => {
            return res.json()
        })
            .then((json)=>{
                setData(json)
                console.log("useRegister")
            })
            .catch(err => {
                console.error(err);
                setErrorMsg(err);
            })
            .finally(() => setLoading(false));
    }, [])

    return {data, errorMsg, loading, callback};
}

export default useRegister;