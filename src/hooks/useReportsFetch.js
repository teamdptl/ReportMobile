import {useCallback, useEffect, useState} from "react";
import { getListReport, getReportAtPage } from "../apis/ReportAPI"
import {createFetch, method} from "../apis/CustomFetch";
import {URL_REPORT_ALL} from "../contains/config";
export default function useReportsFetch(dependencies = []) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [reports, setReports] = useState([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    const [nextPage, setNextPage] = useState(null)

    const loadNext = useCallback(async () => {
        if (page < totalPage && nextPage){
            setLoading(true);
            await createFetch(nextPage, method.GET)
                .then(res => res.json())
                .then(json => {
                    if (json.data){
                        setReports([...reports, ...json.data]);
                        setPage(json.meta.current_page);
                        setNextPage(json.links.next);
                    }
                })
                .catch(setError)
                .finally(() => setLoading(false));
        }
    }, dependencies)

    const callback = useCallback((filterData) => {
        setLoading(true)
        getListReport(filterData)
            .then(res => res.json())
            .then(json => {
                // if (json.data){
                //     setReports(json.data);
                //     setPage(json.meta.current_page);
                //     setTotalPage(json.meta.last_page);
                //     setNextPage(json.links.next);
                // }
                setReports(json);
            })
            .catch(setError)
            .finally(() => setLoading(false))
    }, dependencies)

    return { reports, error, loading, callback }
}