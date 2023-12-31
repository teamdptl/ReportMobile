import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
import color from "../../contains/color";
import { Image } from "@gluestack-ui/themed";
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  Icon,
  ChevronDownIcon,
  SelectPortal,
  SelectContent,
  SelectBackdrop,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
} from "@gluestack-ui/themed";
import ReportListItem from "../../components/Report/ReportListItem";
import CustomLoader from "../../components/Report/ReportListItem";

const ManagerWorkerDetails = ({ navigation, route }) => {
  const { username, email, student_code, name, id } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {navigation.goBack()}} />
        <Appbar.Content title="Thông tin nhân viên" titleStyle={{ fontSize: 17 }}/>
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
      <ScrollView>
        <View style={{ flex: 1, position: "relative" }}>
          <View
            style={{
              flex: 1,
              backgroundColor: color.primaryColor,
              height: 140,
            }}
          ></View>
          <View
            style={{
              top: -70,
              left: 35,
              zIndex: 1000,
              flexDirection: "row",
            }}
          >
            <Image
              size="lg"
              borderRadius="$xl"
              alt="img of worker"
              role="img"
              source={{
                uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              }}
            />
            <View style={{ marginLeft: 30 }}>
              <Text style={styles.textInfoName}>Trang Thanh Phúc</Text>
              <Text style={styles.textInfoCareer}>Nhân viên sửa chữa</Text>
            </View>
          </View>
          <View style={{ paddingHorizontal: 20, top: -30 }}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              Thông tin cá nhân
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ marginLeft: 12, marginVertical: 10 }}>
                <Text style={styles.textInfoPersonal}>Email:</Text>
                <Text style={styles.textInfoPersonal}>Mã số:</Text>
                <Text style={styles.textInfoPersonal}>Username:</Text>
              </View>
              <View style={{ marginLeft: 30, marginVertical: 10 }}>
                <Text style={styles.textInfoPersonal}>
                  {email}
                </Text>
                <Text style={styles.textInfoPersonal}>{student_code}</Text>
                <Text style={styles.textInfoPersonal}>{username}</Text>
              </View>
            </View>
            <Text style={{ fontWeight: "bold", fontSize: 15, marginTop: 10 }}>
              Các công việc thực hiện
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              position: "relative",
              top: -15,
            }}
          >
            <View style={{ width: 170, flex: 5, marginRight: 10 }}>
              <Select>
                <SelectTrigger variant="outline" size="md">
                  <SelectInput placeholder="Thời gian" />
                  <SelectIcon mr="$3">
                    <Icon as={ChevronDownIcon} />
                  </SelectIcon>
                </SelectTrigger>
                <SelectPortal>
                  <SelectBackdrop />
                  <SelectContent>
                    <SelectDragIndicatorWrapper>
                      <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>
                    <SelectItem label="UX Research" value="ux" />
                    <SelectItem label="Web Development" value="web" />
                    <SelectItem
                      label="UI Designing"
                      value="ui"
                      isDisabled={true}
                    />
                    <SelectItem label="Backend Development" value="backend" />
                  </SelectContent>
                </SelectPortal>
              </Select>
            </View>
            <View style={{ width: 120, flex: 3, marginLeft: 0 }}>
              <Select>
                <SelectTrigger variant="outline" size="md">
                  <SelectInput placeholder="Trạng thái" />
                  <SelectIcon mr="$3">
                    <Icon as={ChevronDownIcon} />
                  </SelectIcon>
                </SelectTrigger>
                <SelectPortal>
                  <SelectBackdrop />
                  <SelectContent>
                    <SelectDragIndicatorWrapper>
                      <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>
                    <SelectItem label="UX Research" value="ux" />
                    <SelectItem label="Web Development" value="web" />
                    <SelectItem
                      label="UI Designing"
                      value="ui"
                      isDisabled={true}
                    />
                    <SelectItem label="Backend Development" value="backend" />
                  </SelectContent>
                </SelectPortal>
              </Select>
            </View>
          </View>
          {/* {loading && (
            <View style={{ marginTop: 10, marginHorizontal: 20 }}>
              <CustomLoader />
            </View>
          )}
          <FlatList
            scrollEnabled={false}
            data={reports}
            renderItem={({ item }) => (
              <ReportListItem
                item={item}
                handleNavigate={() =>
                  navigation.navigate("ReportDetail", { ...item })
                }
              />
            )}
            keyExtractor={(item) => item.id}
          /> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default ManagerWorkerDetails;

const styles = StyleSheet.create({
  textInfoName: {
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
    marginTop: 12,
  },
  textInfoCareer: {
    color: "white",
    marginTop: 5,
    fontSize: 14,
  },
  textInfoPersonal: {
    marginTop: 2,
  },
});
