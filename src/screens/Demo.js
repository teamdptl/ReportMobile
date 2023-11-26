import { Button, Text } from "@rneui/base";
import React, { useState, useCallback, useEffect } from "react"
import ChildComponent from "../components/ChildComponent";
import useCreateReport from "../hooks/useCreateReport";
const Demo = () => {
    const [count, setCount] = useState(0);
    const { message, error, loading, call } = useCreateReport()

    const [data, setData] = useState({})
    const callApi = useCallback(async () => {
        const myData = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json());
        return myData.title;
    }, []);

    useEffect(() => {
        if (message && error === 0){
            console.log(message);
            // Thanh cong
        }
        else if (message && error === 1){
            // That bai
        }
        
    }, [message])

    return <>
        <Button onPress={()=> {
            const data = new FormData();
            data.append('title' , '');
            call(data);
        }} title="An nut"></Button>
        <Text>{count}</Text>
        <ChildComponent handleData={callApi} />
    </>
}

export default Demo;