import React, {useEffect, useState} from "react"
import {StyleSheet, Image, Text, View, ScrollView} from "react-native";
import { Appbar } from 'react-native-paper';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import useReportFetch from "../../hooks/useReportFetch";
import ManagerAction from "../../components/ReportDetail/ManagerAction";
import SendDetail from "../../components/ReportDetail/SendDetail";
import ReportStatusSection from "../../components/ReportDetail/ReportStatusSection";
import WorkerAction from "../../components/ReportDetail/WorkerAction";
import {useAuthContext} from "../../context/AuthContext";
import {STATUS} from "../../contains/config";
import WorkerFeedback from "../../components/ReportDetail/WorkerFeedback";
import FakeGallery from "../../components/FakeGallery";
import UserAction from "../../components/ReportDetail/UserAction";

const ReportDetail = ({navigation, route})=>{
    const data = route.params;
    const {report, errorMsg, loading, callback} = useReportFetch({...data});
    const { isManager, isWorker, isUser, role } = useAuthContext();
    const [openGallery, setOpenGallery] = useState(false);
    const [galleryIndex, setGalleryIndex] = useState(0);

    const [openFeedbackGallery, setOpenFeedbackGallery] = useState(false);
    const [galleryFeedbackIndex, setGalleryFeedbackIndex] = useState(0);

    useEffect(() => {
        callback(data.id);
    }, [])

    useEffect(() => {
        if (report)
            console.log(report);
    }, [report]);

    return(
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => {navigation.goBack()}} />
                <Appbar.Content title="Chi tiết báo cáo" titleStyle={{fontSize: 16}} />
                <Appbar.Action icon="dots-vertical" onPress={() => {}} />
            </Appbar.Header>
            <GestureHandlerRootView style={styles.container}>
                <ScrollView style={styles.contentContainer}>
                    <SendDetail report={report} setGalleryIndex={setGalleryIndex}
                                openGallery={()=> setOpenGallery(true)}/>
                    <ReportStatusSection report={report}/>
                    { !loading &&
                        <>

                            { isUser() && report.status === STATUS.SENT &&
                                <UserAction report={report} navigation={navigation}/>
                            }

                            { isManager() && report.status === STATUS.SENT &&
                                <ManagerAction reportId={report.id}
                                               openSelectWorker={() => navigation.navigate('SelectWorker', {report: report})}
                                               reloadPage={() => navigation.navigate("ReportDetail", {...report})}
                                />
                            }

                            { (isManager() || isWorker()) && report.status === STATUS.PROCESS && report.done_by?.manager_note &&
                                (<Text style={{marginHorizontal: 20, color:"#979797", marginBottom: 20, textAlign: 'center'}}>
                                    Ghi chú từ quản lý ({report.done_by?.manager_name}): { report.done_by?.manager_note }
                                </Text>)
                            }

                            { isWorker() && report.status === STATUS.PROCESS &&
                                <WorkerAction openCreateFeedback={() => navigation.navigate('CreateFeedback', {report})}/>
                            }

                            { report.status === STATUS.COMPLETE && report.done_by &&
                                <WorkerFeedback data={report.done_by} setImageIndex={(index) => {
                                    setGalleryFeedbackIndex(index);
                                    setOpenFeedbackGallery(true);
                                }}/>
                            }
                        </>
                    }

                </ScrollView>
            </GestureHandlerRootView>
            { openGallery && report.images && report.images.length > 0 &&
                <FakeGallery indexImage={galleryIndex}
                             isShow={openGallery}
                             closeImageModal={() => setOpenGallery(false)}
                             listImage={report.images.map(item => item.src)}
                />
            }

            { openFeedbackGallery && report.status === STATUS.COMPLETE && report.done_by.images &&
                <FakeGallery indexImage={galleryFeedbackIndex}
                             isShow={openFeedbackGallery}
                             closeImageModal={() => setOpenFeedbackGallery(false)}
                             listImage={report.done_by.images.map(item => item.src)}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        position: 'relative'
    },

    contentContainer:{
        backgroundColor: 'white'
    },
})
export default ReportDetail;
