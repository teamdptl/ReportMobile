import {StyleSheet, Dimensions, BackHandler} from "react-native";
import React, {useEffect} from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Icon, ArrowLeftIcon } from "@gluestack-ui/themed";
import Gallery from "react-native-awesome-gallery";

const FakeGallery = (props) => {
  const backAction = () => {
    props.closeImageModal();
    return true;
  };

  useEffect(() => {
    if (!props.isShow) return;
    const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
    );

    return () => {
      backHandler.remove();
    };
  }, [props.isShow]);

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
    top: 0,
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
