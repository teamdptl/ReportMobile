import {useCallback, useState} from "react";
import {createFeedback} from "../apis/ReportAPI";

const useCreateFeedback = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const callback = useCallback((data) => {
        setLoading(true);
        createFeedback(data).then(res => res.json())
            .then(json => setData(json))
            .catch(err => setError(err))
            .finally(() => {
                setLoading(false);
            })
    })

    return {data, error, loading ,callback}
}

export default useCreateFeedback;