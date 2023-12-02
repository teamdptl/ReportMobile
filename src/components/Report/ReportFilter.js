import DateTimePicker from '@react-native-community/datetimepicker';
import React, {useEffect, useRef, useState} from "react";
import {
    Button,
    ButtonText,
    CloseIcon,
    Heading,
    Icon,
    ModalBackdrop,
    ModalCloseButton,
    ModalHeader,
    Modal,
    ModalContent,
    ModalBody,
    ModalFooter,
    InputField,
    SearchIcon,
    InputIcon,
    InputSlot,
    Input,
    SelectTrigger,
    SelectInput,
    SelectIcon,
    ChevronDownIcon,
    SelectPortal,
    SelectBackdrop,
    SelectContent,
    SelectDragIndicatorWrapper,
    SelectDragIndicator, SelectItem, Select
} from "@gluestack-ui/themed";
import {Text, View} from "react-native";

const ReportFilter = ({onChange}) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    const previousMonth = new Date();
    previousMonth.setMonth(previousMonth.getMonth()-1);

    const [dateStart, setDateStart] = useState(previousMonth);
    const [dateEnd, setDateEnd] = useState(currentDate);
    const [status, setStatus] = useState("all");
    const [text, setText] = useState('');
    const [showStart, setShowStart] = useState(false);
    const [showEnd, setShowEnd] = useState(false);
    const [showStatus, setShowStatus] = useState(false);
    const isMountingRef = useRef(false);

    useEffect(() => {
        if (!isMountingRef.current){
            isMountingRef.current = true;
            return;
        }

        onChange({
            from: dateStart,
            to: dateEnd,
            status: status
        })
    }, [dateStart, dateEnd, status]);

    const onChangeStart = (event, value) => {
        setShowStart(false);
        if (event.type === 'set')
            setDateStart(value);
    }


    const onChangeEnd = (event, value) => {
        setShowEnd(false);
        if (event.type === 'set')
            setDateEnd(value);
    }

    const getDateStr = (date) => {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        return `${day}/${month}/${year}`
    }

    return (
        <>
            <View style={{marginVertical: 10, flex: 1}}>
                <View style={{flexDirection: 'row', marginBottom: 15, gap: 10, justifyContent: 'center'}}>
                    <Input style={{flex: 1}}  size="sm">
                        <InputSlot pl="$3">
                            <InputIcon as={SearchIcon} />
                        </InputSlot>
                        <InputField placeholder="Tên, mô tả, ..." value={text} onChangeText={(text) => setText(text)} />
                    </Input>
                    <Button
                        size="sm"
                        variant="solid"
                        action="primary"
                        onPress={() => onChange({
                            text: text,
                            from: dateStart,
                            to: dateEnd,
                            status: status
                        })}>
                        <ButtonText>Tìm kiếm</ButtonText>
                    </Button>
                </View>
                <View style={{flexDirection: 'row', justifyContent:'space-between', gap: 10}}>
                    <View style={{flexDirection: 'row', gap: 10}}>
                        <Button borderRadius="$md" size={"sm"} action="primary" onPress={() => setShowStart(true)}>
                            <ButtonText>Từ: {getDateStr(dateStart)}</ButtonText>
                        </Button>
                        <Button borderRadius="$md" size={"sm"} action="primary" onPress={() => setShowEnd(true)}>
                            <ButtonText>Đến: {getDateStr(dateEnd)}</ButtonText>
                        </Button>
                    </View>
                    {/*<Button borderRadius="$md" size={"xs"} action="primary" onPress={() => setShowStatus(true)}>*/}
                    {/*    <ButtonText>Trạng thái</ButtonText>*/}
                    {/*</Button>*/}
                    <Select style={{flex: 1, flexShink: 1}} value={status} onValueChange={(value) => setStatus(value)}>
                        <SelectTrigger variant="outline" size="sm">
                            <SelectInput placeholder="Tất cả" />
                            <SelectIcon mr="$3">
                                <Icon as={ChevronDownIcon} />
                            </SelectIcon>
                        </SelectTrigger>
                        <SelectPortal>
                            <SelectBackdrop />
                            <SelectContent>
                                <SelectDragIndicatorWrapper>
                                    <SelectDragIndicator />
                                </SelectDragIndicatorWrapper>
                                <SelectItem label="Tất cả" value="all" />
                                <SelectItem label="Đã gửi" value="sent" />
                                <SelectItem label="Thực hiện" value="process" />
                                <SelectItem label="Hoàn thành" value="complete" />
                                <SelectItem label="Bỏ qua" value="ignore" />
                            </SelectContent>
                        </SelectPortal>
                    </Select>
                </View>
            </View>

            <Modal
                isOpen={showStatus}
                onClose={() => {
                    setShowStatus(false)
                }}>
                <ModalBackdrop />
                <ModalContent>
                    <ModalHeader>
                        <Heading size="lg">Trạng thái</Heading>
                        <ModalCloseButton>
                            <Icon as={CloseIcon} />
                        </ModalCloseButton>
                    </ModalHeader>
                    <ModalBody>
                        <View style={{gap: 10}}>
                            <Button
                                size="sm"
                                variant="outline"
                                action="secondary">
                                <ButtonText>Tất cả</ButtonText>
                            </Button>
                            <Button
                                size="sm"
                                variant="outline"
                                borderColor="$yellow400">
                                <ButtonText color="$yellow400">Đã gửi</ButtonText>
                            </Button>
                            <Button
                                size="sm"
                                variant="outline"
                                borderColor="$blue400">
                                <ButtonText color="$blue400">Đang xử lý</ButtonText>
                            </Button>
                            <Button
                                size="sm"
                                variant="outline"
                                borderColor="$green600">
                                <ButtonText color="$green600">Đã hoàn thành</ButtonText>
                            </Button>
                            <Button
                                size="sm"
                                variant="outline"
                                action="negative">
                                <ButtonText>Bị hủy</ButtonText>
                            </Button>
                        </View>
                    </ModalBody>
                </ModalContent>
            </Modal>
            {   showStart && (
                <>
                    <DateTimePicker
                        testID="dateTimePicker"
                        mode={"date"}
                        value={dateStart}
                        maximumDate={currentDate}
                        onChange={onChangeStart}
                    />
                </>
            )}

            {
                showEnd && (
                    <DateTimePicker
                        testID="dateTimePicker2"
                        mode={"date"}
                        value={dateEnd}
                        minimumDate={dateStart}
                        maximumDate={currentDate}
                        onChange={onChangeEnd}
                    />
                )
            }
        </>
    );
}


export default ReportFilter;