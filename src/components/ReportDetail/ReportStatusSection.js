import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import {convertStatus} from "../Report/ReportListItem";
import StepIndicator from 'react-native-step-indicator';
import {STATUS} from "../../contains/config";

const getCurrentPosition = (status) => {
    if (status === STATUS.SENT)
        return 0;
    if (status === STATUS.PROCESS)
        return 1;
    if (status === STATUS.IGNORE)
        return 2;
    return 0;
}

const ReportStatusSection = ({report}) => {
    const labels = ["Đang xử lý", "Đang thực hiện","Hoàn thành"];
    const customStyles = {
        stepIndicatorSize: 25,
        currentStepIndicatorSize:30,
        separatorStrokeWidth: 2,
        currentStepStrokeWidth: 3,
        stepStrokeCurrentColor: '#0693F1',
        stepStrokeWidth: 3,
        stepStrokeFinishedColor: '#0693F1',
        stepStrokeUnFinishedColor: '#aaaaaa',
        separatorFinishedColor: '#0693F1',
        separatorUnFinishedColor: '#aaaaaa',
        stepIndicatorFinishedColor: '#0693F1',
        stepIndicatorUnFinishedColor: '#ffffff',
        stepIndicatorCurrentColor: '#ffffff',
        stepIndicatorLabelFontSize: 13,
        currentStepIndicatorLabelFontSize: 13,
        stepIndicatorLabelCurrentColor: '#0693F1',
        stepIndicatorLabelFinishedColor: '#ffffff',
        stepIndicatorLabelUnFinishedColor: '#aaaaaa',
        labelColor: '#999999',
        labelSize: 13,
        currentStepLabelColor: '#0693F1'
    }

    return <>
        <View style={styles.trackerContainer}>
            <Text style={{fontSize:16, fontWeight: '500'}}>Trạng thái báo cáo</Text>
            <Text style={{marginHorizontal: 20, textAlign: 'center', fontSize:14,marginVertical:10,
                fontWeight: '400', color: convertStatus(report.status).color}}>{report.done_by?.text}</Text>
            { report.status !== STATUS.IGNORE &&
                <Image source={require('../../assets/images/troubleshoot.png')} style={styles.troubleShootImage}/>
            }
        </View>
        { report.status !== STATUS.IGNORE &&
            <View style={{marginVertical: 20}}>
                <StepIndicator
                    currentPosition={getCurrentPosition(report.status)}
                    stepCount={3}
                    customStyles={customStyles}
                    labels={labels}
                />
            </View>
        }
    </>
}

const styles = StyleSheet.create({
    troubleShootImage: {
        width: 150,
        height: 150,
    },
    trackerContainer: {
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center"
    },
})

export default ReportStatusSection;