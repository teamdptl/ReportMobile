import React, {useState} from "react"
import {StyleSheet, Image, Text, View, TextInput, Dimensions, ImageBackground, ScrollView} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SliderBox } from "react-native-image-slider-box";
import {
    Center,
    Divider,
    MenuItem,
    MenuItemLabel,
    VStack
} from "@gluestack-ui/themed";
import { Menu } from "@gluestack-ui/themed"
const DetailTask = ()=>{
    const images = [
        'https://st4.depositphotos.com/1015390/38880/i/450/depositphotos_388808316-stock-photo-wavy-abstract-smooth-colors-background.jpg' ,
        'https://st4.depositphotos.com/1015390/38880/i/450/depositphotos_388808316-stock-photo-wavy-abstract-smooth-colors-background.jpg' ,
        'https://st4.depositphotos.com/1015390/38880/i/450/depositphotos_388808316-stock-photo-wavy-abstract-smooth-colors-background.jpg' ,
    ];
    const [windowSize, setWindowSize] = useState(Dimensions.get('window'));

    const role ="admin"
    return(
        <View style={styles.container}>
            <View style={{ flex: 0.4, resizeMode: '"cover"',zIndex:1,backgroundColor:"black"}}>
                <SliderBox
                    images={images}
                    sliderBoxHeight={"100%"}
                    parentWidth={windowSize.width}
                    onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                    dotColor="#FFEE58"
                    inactiveDotColor="#90A4AE"
                />
                <View style={styles.locate}>
                    <Ionicons name="arrow-back" size={28} color="black" />
                </View>
            </View>

            <ScrollView style={styles.contentContainer}>
                <View style={styles.content}>
                    <Menu
                        width={"100%"}
                        height={"100%"}
                        trigger={({ ...triggerProps }) => {
                            return (
                                <Text {...triggerProps}>
                                    <Ionicons   name="menu-outline" size={28} color="black"/>
                                </Text>
                            )
                        }}>
                        <MenuItem key="remove" textValue="remove">
                            <MenuItemLabel size="sm">Xóa phản hồi</MenuItemLabel>
                        </MenuItem>
                        <MenuItem key="spam" textValue="spam">
                            <MenuItemLabel size="sm">Đánh dấu phản hồi</MenuItemLabel>
                        </MenuItem>
                    </Menu>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Loa hỏng rùi</Text>
                        <Text style={{color:"#979797"}}>Tạo bởi lúc 00:00 24/11/2022</Text>
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={{flexDirection:"row"}}>
                            <Ionicons name="newspaper-outline" size={14} color="black" />
                            <Text style={styles.title}>Mô tả chi tiết</Text>
                        </View>
                        <Text style={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min
                        </Text>
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={{flexDirection:"row"}}>
                            <FontAwesome5 name="map-marker-alt" size={14} color="black"/>
                            <Text style={styles.title}>Vị trí</Text>
                        </View>
                        <Text style={styles.text}>
                            Tầng 5 Khu E Phòng C.310 Cơ sở chính
                        </Text>
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={{flexDirection:"row"}}>
                            <Ionicons name="person-sharp" size={14} color="black" />
                            <Text style={styles.title}>Nguời gửi</Text>
                        </View>

                        <Text style={styles.text}>
                            Trần Gia Lâm - 3120560051
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
                <View style={styles.trackerContainer}>
                    <Text style={{fontSize:16}}>Trạng thái phản hồi</Text>
                    <Text  style={{fontSize:12,marginVertical:10}}>Đang được xử lý</Text>
                    <Image  source={require('../assets/image/troubleshoot.png')} style={styles.troubleShootImage}>
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
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },

    contentContainer:{
        flex:1
    },
    content:{
        marginTop:30,
        marginHorizontal:20,
    },
    troubleShootImage:{
        width:150,
        height:150,
    },
    // userImage:{
    //     position:"absolute",
    //     bottom:-30,
    //     left:30,
    //     width:60,
    //     height:60,
    //     backgroundColor:"white",
    //     borderRadius:100,
    //     borderWidth:2,
    //     borderColor:"white",
    //     borderStyle:"solid",
    //     elevation:10,
    //     flexWrap:"nowrap" q
    // },
    locate:{
        position:"absolute",
        top:30,
        // right:10,
        width:60,
        height:60,
        flexWrap:"nowrap",
        justifyContent:"center",
        alignItems:"center"
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
        fontSize:24,
        fontWeight:"400"
    },
    title:{
        fontWeight:"400",
        fontSize:14,
        marginLeft:10
    },
    text:{
        color:"#5d5d5d",
        fontSize:12,
        marginTop:5
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
        marginTop:10,
        justifyContent:"center",
        alignItems:"center"
    },

})
export  default  DetailTask;