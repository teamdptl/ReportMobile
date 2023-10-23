import Slide from "../../ReadOnlyComponent/Slide";
import {View, Text, TextInput, ScrollView} from "react-native";
import {Button} from '@rneui/themed';
import styles from "./style";
import DividerLine from "../../ReadOnlyComponent/Divider";
import MakeByComponent from "../../components/MakeByComponent";
import ReponseComponent from "../../components/ReponseComponent";
let role = "Admin";
export default function DetailTaskScreen() {
    return (
        <ScrollView style={styles.container}>
        <Slide/>
        <View>
            <View style={styles.containerInfoUser}>
                <Text style={styles.header}>Thông tin chi tiết</Text>
                <View style={styles.row}>
                    <Text style={styles.label}>Tên người gửi</Text>
                    <Text style={styles.text}>Trần Gia Lâm</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Tài khoản</Text>
                    <Text style={styles.text}>3120560051</Text>
                </View>
            </View>
            <View style={styles.containerInforTask}>
                <Text style={styles.header}>Thông tin chi tiết</Text>
                <View style={styles.detail}>
                    <View>
                        <Text style={styles.title}>Vấn đề</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>
                    <View>
                        <Text style={styles.title}>Ngày phản hồi</Text>
                        <TextInput style={styles.input}> </TextInput>
                    </View>
                    <View>
                    <Text style={styles.title}>Địa điểm</Text>
                    <TextInput style={styles.input}>123</TextInput>
                </View>
                    <View>
                        <Text style={styles.title}>Mô tả phản hồi</Text>
                        <TextInput style={styles.input} numberOfLines={4}>123</TextInput>
                    </View>

                </View>
            </View>
            {
               role==="Admin" ?  <Button
                   title="Phân công"
                   loadingProps={{ size: 'small', color: 'white' }}
                   buttonStyle={{
                       backgroundColor: '#3DB2FF',
                   }}
                   titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
                   containerStyle={{
                       justifyContent:"center",
                       alignSelf:"center",
                       height: 40,
                       width: 200,
                       marginVertical: 20,
                   }}
                   onPress={() => console.log('aye')}
               />:null
            }
            <DividerLine/>
        </View>
            <MakeByComponent role = {role}/>
            <ReponseComponent  role = {role}/>
        </ScrollView>
    );
}


