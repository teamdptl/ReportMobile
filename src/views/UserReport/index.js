import React, { useRef, useState } from "react";
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
import styles from "./style";
import HeaderComponent from "../../components/HeaderComponent"; // Import your new component
import SmallButton from "../../components/SmallButtons";
import color from "../../contains/color";
import Body from "../../components/Body";
import Task from "../../components/Task";
const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

const UserReport = ({ navigation }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [longPress, setLongPress] = useState(false);
  const [addComponentAsLongPress, setaddComponentAsLongPress] = useState(false);

  const [taskList, setTaskList] = useState([
    { key: "Task 1" },
    { key: "Task 2" },
    { key: "Task 3" },
    { key: "Task 4" },
    { key: "Task 5" },

    // Thêm các mục khác vào đây
  ]);

  const handleLongPress = () => {
    // Thiết lập một hẹn giờ để kiểm tra liệu người dùng có giữ trong ít nhất 2 giây không
    setTimeout(() => {
      setLongPress(true);
      setaddComponentAsLongPress(true);
    }, 1000);
  };

  const contentHeight =
    taskList.length >= 7 ? {} : { height: WINDOW_HEIGHT * 1 };

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
            {taskList.map((item, index) => {
              return (
                <Task
                  key={index}
                  index={index}
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

export default UserReport;
