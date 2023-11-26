import React, {useEffect, useState} from "react"
import {StyleSheet, Image, Text, View, TextInput, Dimensions, ImageBackground, ScrollView} from "react-native";
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Center,
    Divider,
    MenuItem,
    MenuItemLabel,
    VStack
} from "@gluestack-ui/themed";
import { Menu } from "@gluestack-ui/themed"
import Carousel from "react-native-reanimated-carousel/src/Carousel";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import useReportFetch from "../../hooks/useReportFetch";
import {timeToText} from "../../components/Report/ReportListItem";
import MapView from "react-native-maps";
const ReportDetail = ({navigation, route})=>{
    const data = route.params;
    const {report, errorMsg, loading, callback} = useReportFetch({data});

    useEffect(() => {
        callback(data.id);
    }, [])

    useEffect(() => {
        console.log(report)
    }, [report]);

    const images = [
        'https://st4.depositphotos.com/1015390/38880/i/450/depositphotos_388808316-stock-photo-wavy-abstract-smooth-colors-background.jpg' ,
        'https://st4.depositphotos.com/1015390/38880/i/450/depositphotos_388808316-stock-photo-wavy-abstract-smooth-colors-background.jpg' ,
        'https://st4.depositphotos.com/1015390/38880/i/450/depositphotos_388808316-stock-photo-wavy-abstract-smooth-colors-background.jpg' ,
        'https://sgu.dy.id.vn/photos/2023/11/img1_187_e801e92cfbb7849c1ae2dc64c15bdb0fb5e9c9e8.png'
    ];
    const [windowSize, setWindowSize] = useState(Dimensions.get('window'));

    const role ="admin"

    return(
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => {navigation.goBack()}} />
                <Appbar.Content title="Chi tiết báo cáo" titleStyle={{fontSize: 16}} />
                <Appbar.Action icon="menu" onPress={() => {}} />
            </Appbar.Header>
            <GestureHandlerRootView style={styles.container}>
                <ScrollView style={styles.contentContainer}>
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
                            <Text style={{color:"#979797", fontSize: 12}}>Tạo bởi lúc {timeToText(report.created_at)}</Text>
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
                            <View style={{height: 150, width: "100%", marginTop: 10}}>
                                <MapView initialRegion={{
                                    latitude: 37.78825,
                                    longitude: -122.4324,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                }} style={styles.map} />
                            </View>
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
                        {/*    role == "admin" ?  <View style={styles.itemContainer}>*/}
                        {/*        <Text style={styles.title}>Ghi chú</Text>*/}
                        {/*        <TextInput numberOfLines={5} style={ {borderStyle:"solid",borderWidth:1,borderRadius:5,marginTop:10 }}>*/}
                        {/*        </TextInput>*/}
                        {/*    </View>:null*/}
                        {/*}*/}
                    </View>

                    {/*Chia phần này ra 1 component nhỏ */}
                    <View style={styles.trackerContainer}>
                        <Text style={{fontSize:16}}>Trạng thái phản hồi</Text>
                        <Text  style={{fontSize:12,marginVertical:10}}>Đang được xử lý</Text>
                        <Image  source={require('../../assets/images/troubleshoot.png')} style={styles.troubleShootImage}>
                        </Image>
                        <View style={styles.line}>
                            <View style={[styles.circle,{right:0,backgroundColor:"#D9D9D9"}]}></View>
                            <View style={[styles.circle,{left:"47%"}]}></View>
                            <View style={[styles.circle,{left:0}]}></View>
                        </View>
                    </View>
                    {/*{*/}
                    {/*    role=="admin" ?*/}
                    {/*        <Button*/}
                    {/*            size="xs"*/}
                    {/*            variant="solid"*/}
                    {/*            action="primary"*/}
                    {/*            isDisabled={false}*/}
                    {/*            isFocusVisible={false}*/}
                    {/*        >*/}
                    {/*            <ButtonText>Add </ButtonText>*/}

                    {/*        </Button>*/}
                    {/*    :null*/}
                    {/*}*/}
                </ScrollView>
            </GestureHandlerRootView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },

    content:{
        marginTop: 20,
        marginHorizontal:20,
    },

    troubleShootImage:{
        width:150,
        height:150,
    },

    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: '100%',
        width:"100%"

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
        fontSize:13,
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
export default ReportDetail;
