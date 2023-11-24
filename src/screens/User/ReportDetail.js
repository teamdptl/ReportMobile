import React from "react"
import {StyleSheet, Image, Text, View, TextInput, Dimensions, ImageBackground, ScrollView} from "react-native";
import {Button} from "@rneui/themed";

const ReportDetail = ()=>{
    const width = Dimensions.get("window");
    const role ="user"
    return(
        <View style={styles.container}>
            <ImageBackground  source={require('../../assets/images/image.jpg')}
                              style={{ flex: 0.5, resizeMode: 'cover',zIndex:1}}>
                <View style={styles.locate}>
                    <Text style={{color:"#979797"}}>
                        Địa điểm
                    </Text>
                    <Text style={{fontWeight:"bold"}}>
                        C.A312
                    </Text>
                </View>
                <Image  source={require('../../assets/images/image.jpg')} style={styles.userImage}>

                </Image>
            </ImageBackground>
            <ScrollView style={styles.contentContainer}>
                <View style={styles.content}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Loa hỏng rùi</Text>
                        <Text style={{color:"#979797"}}>Gửi bởi Trần Gia Lâm -- Ngày 28/10/2023 </Text>
                    </View>
                    <View style={styles.itemContainer}>
                        <Text style={styles.title}>Mô tả</Text>
                        <Text style={{color:"#979797",marginTop:5   }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min
                        </Text>
                    </View>
                    {
                        role == "admin" ?  <View style={styles.itemContainer}>
                            <Text style={styles.title}>Ghi chú</Text>
                            <TextInput numberOfLines={5} style={ {borderStyle:"solid",borderWidth:1,borderRadius:5,marginTop:10 }}>
                            </TextInput>
                        </View>:null
                    }
                </View>
                <View style={styles.trackerContainer}>
                    <Image  source={require('../../assets/images/troubleshoot.png')} style={styles.troubleShootImage}>
                    </Image>
                    <View style={styles.line}>
                        <View style={[styles.circle,{right:0,backgroundColor:"#D9D9D9"}]}></View>
                        <View style={[styles.circle,{left:"47%"}]}></View>
                        <View style={[styles.circle,{left:0}]}></View>
                    </View>
                    <Text style={{fontSize:16}}>Đang được xử lý</Text>
                </View>
                {
                    role=="admin" ?  <Button
                        title="Phân công"
                        loadingProps={{ size: 'small', color: 'white' }}
                        buttonStyle={{
                            backgroundColor: '#3DB2FF',
                            elevation:100,
                        }}
                        titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
                        containerStyle={{
                            justifyContent:"center",
                            alignSelf:"center",
                            height: 40,
                            width: 200,
                            marginVertical: 50,
                        }}
                        onPress={() => console.log('aye')}
                    />:null
                }

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        flex:0.8 ,
        backgroundColor:"cyan"
    },
    contentContainer:{
        flex:1
    },
    content:{
        marginTop:50,
        marginHorizontal:20,
    },
    troubleShootImage:{
        width:150,
        height:150,

    },
    userImage:{
        position:"absolute",
        bottom:-30,
        left:30,
        width:60,
        height:60,
        backgroundColor:"white",
        borderRadius:100,
        borderWidth:2,
        borderColor:"white",
        borderStyle:"solid",
        elevation:10,
        flexWrap:"nowrap"
    },
    locate:{
        position:"absolute",
        bottom:-30,
        right:30,
        width:120,
        height:60,
        backgroundColor:"white",
        borderRadius:10,
        borderStyle:"solid",
        elevation:10,
        flexWrap:"nowrap",
        justifyContent:"center",
        alignItems:"center"
    },
    headerText:{
        fontSize:25,
        fontWeight:"bold"
    },
    title:{
        fontWeight:"bold",
        fontSize:16,
    },
    itemContainer:{
        marginTop:25,
    },
    line: {
        marginVertical:40,
        height: 3,
        width: '70%',
        backgroundColor: 'black',
        alignSelf:"center",
        flexDirection:"row",
    },
    circle: {
        top:-8,
        position:"absolute",
        width: 20,
        height: 20,
        borderRadius: 15,
        backgroundColor: '#F68F16', // Màu sắc tùy chọn
    },
    trackerContainer:{
        marginTop:50,
        justifyContent:"center",
        alignItems:"center"
    },

})
export  default  ReportDetail;