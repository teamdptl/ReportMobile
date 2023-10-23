import React, {useEffect, useRef, useState} from 'react';
import { Text ,View, Image, StyleSheet, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import {shouldThrowAnErrorOutsideOfExpo} from "expo/build/environment/validatorState";

let { width } = Dimensions.get('window');


const imageSliderData = [
    { id: '1', imageUri: 'https://demoda.vn/wp-content/uploads/2022/08/hinh-anh-bao-ve-moi-truong-dep-nhat.jpg' },
    { id: '2', imageUri: 'https://demoda.vn/wp-content/uploads/2022/08/hinh-anh-bao-ve-moi-truong-dep-nhat.jpg' },
    { id: '3', imageUri: 'https://demoda.vn/wp-content/uploads/2022/08/hinh-anh-bao-ve-moi-truong-dep-nhat.jpg' },

];

const ImageSlider = () => {




    return (
        <View style={styles.container}>
            <FlatList

                data={imageSliderData}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Image source={{ uri: item.imageUri }} style={styles.image} />
                )}
            />
            {/*<TouchableOpacity style={styles.buttonPrevious} onPress={handlePrevious}>*/}
            {/*    <Text>Previous</Text>*/}
            {/*</TouchableOpacity>*/}
            {/*<TouchableOpacity style={styles.buttonNext} onPress={handleNext}>*/}
            {/*    <Text>Next</Text>*/}
            {/*</TouchableOpacity>*/}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

        borderRadius:10,

    },
    image: {
        width,
        height: 200,
    },
    buttonPrevious: {
        position: 'absolute',
        top: 100, // Adjust the position as needed
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 5,
    },
    buttonNext: {
        position: 'absolute',
        top: 100, // Adjust the position as needed
        right:0,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 5,
    },
});

export default ImageSlider;