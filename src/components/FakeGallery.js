import { StyleSheet, Dimensions } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Icon, ArrowLeftIcon } from "@gluestack-ui/themed";
import Gallery from "react-native-awesome-gallery";

const FakeGallery = (props) => {
  return (
    <GestureHandlerRootView
      style={styles.gallery}
      height={Dimensions.get("window").height}
    >
      <Icon
        as={ArrowLeftIcon}
        onPress={props.closeImageModal}
        m="$2"
        w="$8"
        h="$5"
        style={styles.closeGallery}
      />
      <Gallery
        data={props.listImage}
        initialIndex={props.indexImage}
      />
    </GestureHandlerRootView>
  );
};

export default FakeGallery;

const styles = StyleSheet.create({
  gallery: {
    position: "absolute",
    top: -10,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 1000,
  },
  closeGallery: {
    top: 20,
    left: 0,
    color: "white",
    zIndex: 1001,
    position: "absolute",
  },
});
