
import {Divider} from "@rneui/themed";
import {StyleSheet} from "react-native";


const DividerLine = () => {

    return (
        <Divider styles={styles.divider} width={5} inset={true} insetType="middle"/>
    )
}

const styles = StyleSheet.create({
 divider:{
     marginVertical:10,
 }
});


export default DividerLine;
