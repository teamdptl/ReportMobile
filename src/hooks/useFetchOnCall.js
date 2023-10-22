import {useCallback, useEffect, useState} from "react";

export default function useFetchOnCall(callback, dependencies = []) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [value, setValue] = useState()

    const call = useCallback(async (data) => {
        setLoading(true)
        setError(null)
        setValue(null)
        await callback(data)
            .then(res=>res.json())
            .then(setValue)
            .catch(setError)
            .finally(() => setLoading(false))
    }, dependencies)

    return { value, error, loading, call }
}