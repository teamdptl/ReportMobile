import {
    Button, ButtonText,
    CloseIcon,
    Heading,
    Icon, Input, InputField,
    Modal,
    ModalBackdrop, ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader
} from "@gluestack-ui/themed";
import {ActivityIndicator, Text} from "react-native";
import {Overlay} from "@rneui/themed";
import AlertDialog from "../AlertDialog";
import React, {useState} from "react";
import {deleteReport} from "../../apis/ReportAPI";

const UserDeleteModal = ({reportId, show, closeModal, onSuccess}) => {
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const removeReport = () => {
        setLoading(true);
        deleteReport(reportId).then(res => res.json())
            .then(json => {
                console.log("Xóa thành công");
                onSuccess();
            })
            .catch(err => {
                console.error(err);
                alert(err);
            })
            .finally(() => {
                setLoading(false);
            })
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
                    <Heading size="lg">Xóa báo cáo</Heading>
                    <ModalCloseButton>
                        <Icon as={CloseIcon} />
                    </ModalCloseButton>
                </ModalHeader>
                <ModalBody>
                    <Text size="sm" style={{marginBottom: 10}}>
                        Bạn có muốn xóa báo cáo này không
                    </Text>
                </ModalBody>
                <ModalFooter>
                    <Button
                        size="sm"
                        action="primary"
                        borderWidth="$0"
                        mr="$3"
                        onPress={() => {
                            removeReport();
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
                        <ButtonText>Có</ButtonText>
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
                        <ButtonText>Không</ButtonText>
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        <Overlay isVisible={loading} onBackdropPress={() => {}}>
            <ActivityIndicator size="large"/>
            <Text>Đang xử lý</Text>
        </Overlay>
    </>
}

export default UserDeleteModal;