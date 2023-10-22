import {useCallback, useEffect, useState} from "react";

export default function useFetch(callback, data, dependencies = []) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [value, setValue] = useState()

    const callbackMemoized = useCallback(async () => {
        setLoading(true)
        setError(null)
        setValue(null)
        await callback(data)
            .then(setValue)
            .catch(setError)
            .finally(() => setLoading(false))
    }, dependencies)

    useEffect(() => {
        callbackMemoized()
    }, [callbackMemoized])

    return { loading, value, error }
}