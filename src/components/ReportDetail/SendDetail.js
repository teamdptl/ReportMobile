// Thông tin gửi đi của report
import Carousel from "react-native-reanimated-carousel/src/Carousel";
import {Dimensions, Image, StyleSheet, Text, View} from "react-native";
import {timeToText} from "../Report/ReportListItem";
import Icon from "react-native-vector-icons/FontAwesome";
import MapView, {Marker} from "react-native-maps";
import React, {useEffect, useState} from "react";
import {Divider} from "@gluestack-ui/themed";

const SendDetail = ({report}) => {
    const [windowSize, setWindowSize] = useState(Dimensions.get('window'));
    const [reportCoords, setReportCoords] = useState({});
    useEffect(() => {
        if (!report.coordinate)
            return;
        const arr = report.coordinate.split(',')
        if (arr.length === 2)
            setReportCoords({latitude: parseFloat(arr[0]), longitude: parseFloat(arr[1])})
        console.log(arr);
    }, [report]);

    return <>
        <View style={{backgroundColor:'white'}}>
            <Carousel
                loop={false}
                width={windowSize.width}
                height={windowSize.width / 2}
                data={report.images}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ item }) => (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                        }}>
                        <Image source={{uri: item.src}} width={windowSize.width} height={windowSize.width/2}></Image>
                    </View>
                )}
            />
        </View>
        <View style={styles.content}>
            <View>
                <Text style={styles.headerText}>{report.title}</Text>
                <Text style={{color:"#979797", fontSize: 14}}>Tạo lúc {timeToText(report.created_at)}</Text>
            </View>
            <View style={styles.itemContainer}>
                <View style={{flexDirection:"row"}}>
                    <Text style={styles.title}>Mô tả chi tiết</Text>
                </View>
                <Text style={styles.text}>
                    {report.description}
                </Text>
            </View>
            <View style={styles.itemContainer}>
                <View style={{flexDirection:"row", alignItems: 'center'}}>
                    <Text style={{width: 20}}><Icon name="map-marker" size={15} color="black"/></Text>
                    <Text style={styles.title}>Vị trí</Text>
                </View>
                <Text style={styles.text}>
                    {report.description}
                </Text>
                { reportCoords.latitude && reportCoords.longitude &&
                    <View style={{height: 200, width: "100%", marginTop: 10}}>
                        <MapView initialRegion={{
                            latitude: reportCoords.latitude,
                            longitude: reportCoords.longitude,
                            latitudeDelta: 0.0007,
                            longitudeDelta: 0.0007,
                        }}
                                 scrollEnabled={false}
                                 style={styles.map}>
                            <Marker coordinate={{latitude: reportCoords.latitude, longitude: reportCoords.longitude}}/>
                        </MapView>
                    </View>
                }
            </View>
            <View style={styles.itemContainer}>
                <View style={{flexDirection:"row", alignItems: 'center'}}>
                    <Text style={{width: 20}}><Icon name="user" size={15} color="black"/></Text>
                    <Text style={styles.title}>Người gửi</Text>
                </View>
                <Text style={styles.text}>
                    {report.user?.name} - {report.user?.mssv}
                </Text>
            </View>
            <Divider
                mt="$5"
                alignSelf="center"
                w={200}
                variant="horizontal"
                color="black"
            />

            {/*{*/}
            {/*    role == "admin"  ?  <View style={styles.itemContainer}>*/}
            {/*        <Text style={styles.title}>Ghi chú</Text>*/}
            {/*        <TextInput numberOfLines={5} style={ {borderStyle:"solid",borderWidth:1,borderRadius:5,marginTop:10 }}>*/}
            {/*        </TextInput>*/}
            {/*    </View>:null*/}
            {/*}*/}
        </View>
    </>
}

const styles= StyleSheet.create({
    container:{
        flex:1
    },

    contentContainer:{
        backgroundColor: 'white'
    },

    content:{
        marginTop: 20,
        marginHorizontal:20,
    },

    troubleShootImage:{
        width:150,
        height:150,
    },

    headerText:{
        fontSize: 18,
        fontWeight: "500",
        marginBottom: 5
    },

    title:{
        fontWeight:"500",
        fontSize: 15,
    },
    text:{
        color:"#5d5d5d",
        fontSize:14,
        marginTop:10
    },
    itemContainer:{
        marginTop:25,
    },
    map: {
        width: '100%',
        height: '100%',
        borderRadius: 10
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
        marginTop:10,
        justifyContent:"center",
        alignItems:"center"
    },

})

export default SendDetail;