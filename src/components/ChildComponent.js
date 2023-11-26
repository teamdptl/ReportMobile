import { useEffect, useState } from "react"
import { Text } from "react-native"
import React from "react"

const ChildComponent = ({handleData}) => {
    const [title, setTitle] = useState('');
    useEffect(()=> {
        handleData().then(res => {
            setTitle(res);
            console.log(title);
        });
    }, [])

    return <>
        <Text>
            {title}
        </Text>
    </>
}

export default ChildComponent;