import {useState} from "react";
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

import { Text } from "react-native";

const ManagerIgnoreModal = ({show, closeModal, submitCallback}) => {
    const [reason, setReason] = useState('');
    const [isInValidInput, setIsInValidInput] = useState(false);

    const confirmModal = () => {
        if (reason.length){
            setIsInValidInput(false);
            submitCallback();
            closeModal();
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
    </>
}

export default ManagerIgnoreModal;