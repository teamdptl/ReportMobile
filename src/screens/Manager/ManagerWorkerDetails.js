import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
import color from "../../contains/color";
import { Image } from "@gluestack-ui/themed";

const ManagerWorkerDetails = () => {
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Trở về" titleStyle={{ fontSize: 17 }} />
        <Appbar.Action icon="dots-vertical" onPress={() => {}} />
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
          <View style={{ paddingHorizontal: 20, top: -30, }}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              Thông tin cá nhân
            </Text>
            <View style={{flexDirection: "row",}}>
              <View style={{ marginLeft: 12, marginVertical: 10 }}>
                <Text style={styles.textInfoPersonal}>Email:</Text>
                <Text style={styles.textInfoPersonal}>Mã số:</Text>
                <Text style={styles.textInfoPersonal}>Username:</Text>
              </View>
              <View style={{ marginLeft: 30, marginVertical: 10 }}>
                <Text style={styles.textInfoPersonal}>trangthanhphuc@gmail.com</Text>
                <Text style={styles.textInfoPersonal}>2831</Text>
                <Text style={styles.textInfoPersonal}>Không phải là Phúc</Text>
              </View>
            </View>
          </View>
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
    fontWeight: "bold",
    color: "white",
    marginTop: 10,
    fontSize: 12,
  },
  textInfoPersonal: {
    marginTop: 2,
  },
});
