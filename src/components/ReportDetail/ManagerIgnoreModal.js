import React, {useState} from "react";
import {
    CloseIcon,
    Heading,
    Icon,
    ModalBackdrop, ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    Modal, ButtonText, Button, Input, InputField
} from "@gluestack-ui/themed";

import {ActivityIndicator, Text} from "react-native";
import {createJsonFetch, method} from "../../apis/CustomFetch";
import {URL_REPORT_IGNORE} from "../../contains/config";
import {Overlay} from "@rneui/themed";
import AlertDialog from "../AlertDialog";

const ManagerIgnoreModal = ({show, closeModal, submitCallback, reportId}) => {
    const [reason, setReason] = useState('');
    const [isInValidInput, setIsInValidInput] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const ignoreReport = () => {
        setLoading(true);
        createJsonFetch(URL_REPORT_IGNORE, method.PUT, JSON.stringify({
            reports_id: reportId,
            note: reason
        })).then(res => res.json())
            .then(json => {
                if (json.status === 'success' || json.status === 'sussess')
                    submitCallback();
                else {
                    setErrorMsg(json.message)
                }
            })
            .catch(err => {
                setErrorMsg(err);
            })
            .finally(() => setLoading(false))
    }

    const confirmModal = () => {
        if (reason.length){
            setIsInValidInput(false);
            closeModal();
            ignoreReport();
        }
        else {
            setIsInValidInput(true);
        }
    }

    return <>
        <Modal
            isOpen={show}
            onClose={() => {
                closeModal()
            }}
            size={"md"}>
            <ModalBackdrop />
            <ModalContent>
                <ModalHeader>
                    <Heading size="lg">Bỏ qua báo cáo</Heading>
                    <ModalCloseButton>
                        <Icon as={CloseIcon} />
                    </ModalCloseButton>
                </ModalHeader>
                <ModalBody>
                    <Text size="sm" style={{marginBottom: 10}}>
                        Vui lòng nhập lý do bỏ qua báo cáo
                    </Text>
                    <Input>
                        <InputField placeholder="Lý do ..." onChangeText={setReason}/>
                    </Input>
                    { isInValidInput &&
                        <Text style={{color: 'red', marginTop: 5}}>Vui lòng không để trống lý do</Text>
                    }
                </ModalBody>
                <ModalFooter>
                    <Button
                        size="sm"
                        action="primary"
                        borderWidth="$0"
                        mr="$3"
                        onPress={() => {
                            confirmModal();
                        }}
                        sx={{
                            bg: "$error700",
                            ":hover": {
                                bg: "$error800",
                            },
                            ":active": {
                                bg: "$error900",
                            },
                        }}
                    >
                        <ButtonText>Xác nhận</ButtonText>
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        action="secondary"
                        mr="$3"
                        onPress={() => {
                            closeModal();
                        }}
                    >
                        <ButtonText>Hủy</ButtonText>
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        <Overlay isVisible={loading} onBackdropPress={() => {}}>
            <ActivityIndicator size="large"/>
            <Text>Đang xử lý</Text>
        </Overlay>
        <AlertDialog showAlertDialog={errorMsg !== ''} onClose={() => setErrorMsg("")} headerAlert={"Xảy ra lỗi"} bodyAlert={errorMsg} />
    </>
}

export default ManagerIgnoreModal;