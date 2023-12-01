import {useCallback, useState} from "react";
import {getWokrers} from "../apis/UserAPI";

const useWorkerFetch = () => {
    const [workers, setWorkers] = useState([]);
    const [errorMsg, setErrorMsg] = useState();
    const [loading, setLoading] = useState(false);

    const callback = useCallback((search) => {
        setLoading(true);
        getWokrers(search).then(res => res.json())
            .then(json => setWorkers(json))
            .catch(err => {
                setErrorMsg(err);
                console.error(err);
            })
            .finally(() => setLoading(false))
    }, [])

    return {workers, errorMsg, loading, callback}
}

export default useWorkerFetch;