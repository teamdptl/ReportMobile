import {useCallback, useEffect, useState} from "react";
import {getReportDetail} from "../apis/ReportAPI";

const useReportFetch = (data) => {
    const [report, setReport] = useState({...data});
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const callback = useCallback((reportId) => {
        setLoading(true);
        getReportDetail(reportId).then(res => res.json())
            .then(setReport)
            .catch(err => {
                console.error(err);
                setErrorMsg(err);
            })
            .finally(() => setLoading(false));
    }, [])

    return {report, errorMsg, loading, callback};
}

export default useReportFetch;