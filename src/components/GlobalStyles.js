import {StyleSheet, Platform} from 'react-native';
import color from '../contains/color';

export default StyleSheet.create({
    androidSafeArea: {
        flex: 1,
        backgroundColor: color.white,
        paddingTop: Platform.OS === 'android' ? 0: 0, //20
    }
})    