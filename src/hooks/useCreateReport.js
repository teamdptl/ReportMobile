import { useCallback, useEffect, useState } from "react";
import { createReport } from "../apis/ReportAPI";

export default function useCreateReport(dependencies = []) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const call = useCallback(async (data) => {
    setLoading(true);
    createReport(data)
      .then((res) => res.json())
      .then((json) => {
        if (!json.error) {
          setData(json);
        } else {
          console.error(json.message);
          setErrorMsg(json.message);
        }
      })
      .catch((e) => {
        console.error(e);
        setErrorMsg(e);
      })
      .finally(() => setLoading(false));
  });

  return { data, errorMsg, loading, call };
}
