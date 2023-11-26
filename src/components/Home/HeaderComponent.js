import React from "react";
import {
  View,
  Text,
  Image,
  Animated,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Button
} from "react-native";
// import styles from '../views/UserReport/style'; // Import your styles from ReportScreenStyle.js
import color from "../../contains/color";
import Icon from "react-native-vector-icons/AntDesign";

const { width, height } = Dimensions.get("window");

const HeaderComponent = ({
  animatedValue,
  linkImg,
  isImage,
  iconType,
  navigation,
}) => {



  return (
    <View style={styles.header}>
      <View>
        <Animated.Text
          style={[
            styles.text,
            {
              transform: [
                {
                  translateY: animatedValue.interpolate({
                    inputRange: [0, 150],
                    outputRange: [0, -30],
                    extrapolate: "clamp",
                  }),
                },
                {
                  translateX: animatedValue.interpolate({
                    inputRange: [0, 150],
                    outputRange: [0, width / 3.5],
                    extrapolate: "clamp",
                  }),
                },
              ],
            },
          ]}
        >
          Xin chào, SGUer
        </Animated.Text>
        <Text style={styles.text}>
          Hãy báo cáo các vấn đề{"\n"}
          kỹ thuật cho chúng tôi
        </Text>
      </View>
      {isImage ? (
        <Image
          source={linkImg}
          style={{
            width: "55%",
            height: 120,
            marginLeft: 20,
            resizeMode: "cover",
          }}
        />
      ) : (
        <View
          style={{
            marginLeft: 18,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              marginBottom: 20,
              color: "white",
              fontWeight: "500",
              fontSize: 12,
            }}
          >
            Thêm báo cáo nháp ở đây
          </Text>
          <Button title="bam"  onPress={() => console.log("hhah")} />
          <TouchableOpacity
            onPress={() => console.log("hhah")} 
          >
            <Icon onPress={()=>console.log('hihi')} name={iconType} size={50} color="white"  />
          </TouchableOpacity>
        </View>
      )}
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    paddingTop: 30,
    paddingRight: 10, // Khoảng cách giữa văn bản và hình ảnh
    fontWeight: "bold",
  },
  header: {
    position: "absolute",
    width: "100%",
    height: 150,
    backgroundColor: color.primaryColor,
    flexDirection: "row",
    paddingHorizontal: 20,
  },
});

export default HeaderComponent;
