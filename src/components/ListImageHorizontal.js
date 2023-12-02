import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

const ListImageHorizontal = (props) => {
  return (
    <ScrollView horizontal style={{ marginLeft: 10 }}>
      {props.listImageData.map((imageUri, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => props.openImageModal(index)}
        >
          <View style={{ margin: 10 }}>
            <Image
              source={{ uri: imageUri }}
              style={{ width: 70, height: 70, borderRadius: 10 }}
            />
            {props.removeImage &&
                <TouchableOpacity
                    onPress={() => props.removeImage(imageUri)}
                    style={{
                      position: "absolute",
                      top: -5,
                      right: -5,
                      backgroundColor: "#F2F2F2",
                      width: 20,
                      height: 20,
                      borderRadius: 15,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                >
                  <Text
                      style={{
                        color: "red",
                        fontSize: 9,
                      }}
                  >
                    X
                  </Text>
                </TouchableOpacity>
            }
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ListImageHorizontal;

const styles = StyleSheet.create({});
