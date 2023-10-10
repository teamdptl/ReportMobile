import React, {useState} from "react";
import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import styles from "./style";
import{ ImagesAssets } from '../assets/ImagesAssets';
import Task from "../Task";
import {shouldThrowAnErrorOutsideOfExpo} from "expo/build/environment/validatorState";
import Filter from "../Filter";
const Body = () => {
    const [checkBoxes, setCheckBoxes] = useState([false, false, false])
    const [checkedCount, setCheckedCount] = useState(0)
    const [taskList,setTaskList] = useState([0,1,2]);
    const [isPress,setIsPress] = useState(false);
    function findTrueIndices(arr) {
        return arr.map((value, index) => value === true ? index : -1).filter(index => index !== -1);
    }
    const handlePress = () => {
        console.log(isPress);
        setIsPress(isPress =>!isPress)
    }
    const handleDelete =()=>{
        const task =[...taskList]
        const deleteTask = [...checkBoxes];
        const indexToDelete = findTrueIndices(deleteTask)
        indexToDelete.sort((a, b) => b - a);
        console.log("indexToDelete"+indexToDelete);
        indexToDelete.forEach(index =>{
            console.log("index"+index)
            task.splice(index,1)
        })
        console.log(task)

    }
    const handleCheckBoxChange = (index) => {
        const updatedCheckBoxes = [...checkBoxes];
        updatedCheckBoxes[index] = !checkBoxes[index];
        setCheckBoxes(updatedCheckBoxes);
        const newCheckedCount = updatedCheckBoxes.filter(isChecked => isChecked).length;
        setCheckedCount(newCheckedCount);
    };
    return(
        <View style={styles.container}>
            {
                !isPress ? (  <View style={styles.filter}>
                    <View style={styles.buttonDate}>
                        <TouchableOpacity><Text style={styles.date}>
                            31, June 2023 - 31, June 2023
                        </Text></TouchableOpacity>
                    </View>
                    <View style={styles.buttonStatus}>
                        <Text style={styles.status}>
                            Trạng thái
                        </Text>
                    </View>
                </View>):<Filter handleDelete={handleDelete}/>
            }

           <ScrollView>
               {
                   taskList.map((item,index)=>{
                       return <Task  index={index} handleCheckBoxChange={()=>{handleCheckBoxChange(index);}}  isPress={isPress} handlePress={handlePress}/>;
                   })
               }
           </ScrollView>
        </View>
    )

}
export default Body;