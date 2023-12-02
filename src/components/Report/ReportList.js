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
import React, {useEffect, useState} from "react";
import ReportListItem from "./ReportListItem";
import CustomLoader from "./CustomLoader";
import ReportFilter from "./ReportFilter";
import useReportsFetch from "../../hooks/useReportsFetch";



const ReportList = ({animatedValue, navigation}) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);
  const previousMonth = new Date();
  previousMonth.setMonth(previousMonth.getMonth()-1);

  const [filterData, setFilterData] = useState({
    text: '',
    from: previousMonth,
    to: currentDate,
    status: 'all'
  })

  const {reports, err, loadNext, loading, callback} = useReportsFetch();

  function formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }

  useEffect(() => {
    callback({
      ...filterData,
      from: formatDate(filterData.from),
      to: formatDate(filterData.to)})
  }, [filterData]);

  // useEffect(() => {
  //   if (reports){
  //     console.log(reports);
  //   }
  //
  //   if (err){
  //     console.log(err);
  //   }
  // }, [reports, err]);

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
            <ReportFilter onChange={(filterData) => setFilterData(filterData)}/>
          </View>

          <View style={{ marginTop: 10, marginBottom: 80}}>
            {loading &&
                <View style={{marginHorizontal: 20}}>
                  <CustomLoader/>
                </View>
            }
            {!loading &&
                <FlatList
                    scrollEnabled={false}
                    data={reports}
                    renderItem={({ item }) => (
                        <ReportListItem
                            item={item} handleNavigate={() => navigation.navigate('ReportDetail', {...item})}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                    onEndReached={() => console.log("End reached")}
                    onEndReachedThreshold={0.5}
                />
            }
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
