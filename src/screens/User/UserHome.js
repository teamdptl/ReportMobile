import React, {useEffect, useRef, useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Animated,
  FlatList,
  Dimensions,
} from "react-native";
import HeaderComponent from "../../components/HeaderComponent"; // Import your new component
import SmallButton from "../../components/SmallButtons";
import color from "../../contains/color";
import ReportItem from "../../components/Report/ReportItem";
import useReportsFetch from "../../hooks/useReportsFetch";

const UserHome = ({ navigation }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [longPress, setLongPress] = useState(false);
  const [addComponentAsLongPress, setaddComponentAsLongPress] = useState(false);
  const {reports, err, loadNext, loading} = useReportsFetch({});

  useEffect(() => {
    console.log("Calling task...");
  }, []);

  const handleLongPress = () => {
    // Thiết lập một hẹn giờ để kiểm tra liệu người dùng có giữ trong ít nhất 2 giây không
    setTimeout(() => {
      setLongPress(true);
      setaddComponentAsLongPress(true);
    }, 1000);
  };

  const contentHeight =
    reports.length >= 7 ? {} : { height: WINDOW_HEIGHT * 1 };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0693F1" />

      <View style={styles.upperHeader}>
        {/* Render anything you want for the upper header here */}
      </View>

      {/* Use the HeaderComponent component here */}
      <HeaderComponent animatedValue={animatedValue} />

      <Animated.ScrollView
        onScroll={(e) => {
          const offSetY = e.nativeEvent.contentOffset.y;
          animatedValue.setValue(offSetY);
        }}
        scrollEventThrottle={16}
      >
        <View style={styles.paddingForHeader} />
        <View style={[styles.scrollViewContent, contentHeight]}>
          <View style={styles.containerLine}>
            <View style={styles.line}></View>
          </View>

          <View style={styles.containerHTZLMid}>
            <View style={styles.leftContent}>
              <Text style={{ fontWeight: "bold" }}>Danh sách phản hồi</Text>
            </View>
            {addComponentAsLongPress ? (
              <View style={styles.rightContent}>
                <SmallButton
                  title="Trở về"
                  buttonColor={color.primaryColor}
                  onPress={() => {
                    setLongPress(false), setaddComponentAsLongPress(false);
                  }}
                />
                <SmallButton
                  title="Xóa"
                  buttonColor={color.red}
                  onPress={() => {}}
                />
              </View>
            ) : null}
          </View>

          <View style={{ marginTop: 10 }}>
            {reports.map((item, index) => {
              return (
                <ReportItem
                  key={item.id}
                  index={index}
                  item={item}
                  handleLongPress={handleLongPress}
                  longPress={longPress}
                />
              );
            })}
          </View>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get('window');
const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },


  upperHeader: {
    height: 28,
  },

  paddingForHeader:{
    height: 122,
    paddingBottom: 50,

  },
  scrollViewContent: {
    // height: WINDOW_HEIGHT * 1.2,
    backgroundColor: 'white',
    paddingBottom: 100,
  },
  containerLine: {
    // flex: 1,
    // justifyContent: 'center',
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: color.background,
  },
  line: {
    width: '40%',
    height: 2,
    backgroundColor: 'black',
  },
  containerHTZLMid: {
    flexDirection: 'row', // Xếp các phần tử theo hàng ngang
    alignItems: 'center', // Căn chỉnh các phần tử theo chiều dọc
    justifyContent: 'space-between', // Các phần tử bên trái và bên phải cách xa nhau
    marginHorizontal: 10, // Khoảng cách ngang bên ngoài container
    marginTop: 45, // Khoảng cách từ top
  },
  leftContent: {
    flex: 1.5, // Phần trái chiếm 1 phần
  },
  rightContent: {
    flex: 1.6, // Phần phải chiếm 2 phần
    flexDirection: 'row', // Xếp các phần tử trong phần phải theo hàng ngang
    justifyContent: 'space-between', // Các phần tử trong phần phải nằm ở phía bên phải
  },

})

export default UserHome;
