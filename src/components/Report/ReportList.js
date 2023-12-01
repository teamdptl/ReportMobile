import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import SmallButton from "../SmallButtons";
import color from "../../contains/color";
import React, { useState } from "react";
import ReportListItem from "./ReportListItem";
import CustomLoader from "./CustomLoader";
import ReportFilter from "./ReportFilter";



const ReportList = ({reports, loadNext, animatedValue, navigation, loading }) => {
  const [longPress, setLongPress] = useState(false);
  const [addComponentAsLongPress, setAddComponentAsLongPress] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const handleLongPress = () => {
    // Thiết lập một hẹn giờ để kiểm tra liệu người dùng có giữ trong ít nhất 2 giây không
    setTimeout(() => {
      setLongPress(true);
      setAddComponentAsLongPress(true);
    }, 1000);
  };

  // const contentHeight = reports.length >= 7 ? {} : { height: WINDOW_HEIGHT };

  return (
    <>
      <Animated.ScrollView
        onScroll={(e) => {
          const offSetY = e.nativeEvent.contentOffset.y;
          animatedValue.setValue(offSetY);
        }}
        scrollEventThrottle={16}>
        <View style={styles.paddingForHeader} />
        <View style={[styles.scrollViewContent]}>
          <View style={styles.containerLine}>
            <View style={styles.line}></View>
          </View>

          <View style={styles.titleFilterContainer}>
            <Text style={{ fontWeight: "bold" }}>Danh sách phản hồi</Text>
            <ReportFilter/>
          </View>

          <View style={{ marginTop: 10, marginBottom: 80}}>
            {loading &&
                <View style={{marginHorizontal: 20}}>
                  <CustomLoader/>
                </View>
            }
            <FlatList
                scrollEnabled={false}
                data={reports}
                renderItem={({ item }) => (
                    <ReportListItem
                        item={item} handleNavigate={() => navigation.navigate('ReportDetail', {...item})}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </Animated.ScrollView>
    </>
  );
};

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");
const styles = StyleSheet.create({
  paddingForHeader: {
    height: 122,
    paddingBottom: 50,
  },
  scrollViewContent: {
    // height: WINDOW_HEIGHT * 1.2,
    backgroundColor: "white",
    // paddingBottom: 100,
  },
  containerLine: {
    // flex: 1,
    // justifyContent: 'center',
    paddingTop: 20,
    alignItems: "center",
    backgroundColor: color.background,
  },
  line: {
    width: "40%",
    height: 2,
    backgroundColor: "#858C90",
  },

  titleFilterContainer: {
    marginHorizontal: 10,
    marginTop: 20
  }
});

export default ReportList;
