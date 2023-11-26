import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const BackPage = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.headerHorizontal}>
      <View style={styles.return}>
        <Image
          source={require("../assets/images/return.png")}
          style={{ width: 25, height: 25 }}
        />
        <Text style={{ fontSize: 14, marginLeft: 7, fontWeight: '500' }}>Trở về</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BackPage;

const styles = StyleSheet.create({
  headerHorizontal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    height: 50,
  },
  return: {
    flexDirection: "row",
    alignItems: "center",
  },
});
