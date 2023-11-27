import {ScrollView, View, Text, Image} from "react-native";
import {Appbar} from "react-native-paper";
import React from "react";
import {
    Button,
    ButtonText,
    CheckboxIcon, CheckboxIndicator, CheckboxLabel,
    CheckIcon,
    Input,
    InputField,
    InputIcon,
    InputSlot
} from "@gluestack-ui/themed";
import Icon from "react-native-vector-icons/FontAwesome";
import color from "../../contains/color.js"
import {Checkbox} from "expo-checkbox";

const ManagerWorker = () => {
    return <>
        <View style={{flex: 1}}>
            <Appbar.Header>
                <Appbar.Content title="Danh sách nhân viên" titleStyle={{fontSize: 16}} />
                {/*<Appbar.Action icon="dots-vertical" onPress={() => {}} />*/}
            </Appbar.Header>
            <ScrollView>
                <View style={{backgroundColor: color.primaryColor, padding: 30, paddingTop: 20}}>
                    <Text style={{fontSize: 14, color: 'white', fontWeight: '500', marginBottom: 10}}>Tìm kiếm nhân viên</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                        <Input
                            style={{flex: 1, borderWidth: 1, borderColor: 'white', backgroundColor: 'white'}}
                            size="md"
                            isDisabled={false}
                            isInvalid={false}
                            isReadOnly={false}>
                            <InputField placeholder="Thông tin nhân viên" style={{fontSize: 14}}/>
                        </Input>
                        <Button borderRadius="$md" size={"sm"} variant={"outline"} style={{borderWidth: 1, borderColor: 'white'}}>
                            <ButtonText color="$white">Tìm kiếm</ButtonText>
                        </Button>
                    </View>
                </View>
                <View style={{margin: 30, marginTop: 20}}>
                    <Text style={{fontSize: 14, fontWeight: '500', marginBottom: 20}}>Các nhân viên</Text>
                    <View style={{gap: 15}}>
                        <View>
                            <View style={{flexDirection: 'row', alignItems: 'center',
                                backgroundColor: '#FCFCFC', borderWidth: 1, borderColor: '#F6F5F5', padding: 10, borderRadius: 8, gap: 20
                            }}>
                                <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png'}} width={40} height={40}/>
                                <View>
                                    <Text numberOfLines={1} ellipsizeMode="tail" style={{ flex: 1, fontSize: 14, color: '#404040', fontWeight: '500'}}>Huỳnh Khánh Duy</Text>
                                    <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 12, color: '#959595'}}>Mã số: 3120410088</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={{flexDirection: 'row', alignItems: 'center',
                                backgroundColor: '#FCFCFC', borderWidth: 1, borderColor: '#F6F5F5', padding: 10, borderRadius: 8, gap: 20
                            }}>
                                <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png'}} width={40} height={40}/>
                                <View>
                                    <Text numberOfLines={1} ellipsizeMode="tail" style={{ flex: 1, fontSize: 14, color: '#404040', fontWeight: '500'}}>Huỳnh Khánh Duy</Text>
                                    <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 12, color: '#959595'}}>Mã số: 3120410088</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={{flexDirection: 'row', alignItems: 'center',
                                backgroundColor: '#FCFCFC', borderWidth: 1, borderColor: '#F6F5F5', padding: 10, borderRadius: 8, gap: 20
                            }}>
                                <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png'}} width={40} height={40}/>
                                <View>
                                    <Text numberOfLines={1} ellipsizeMode="tail" style={{ flex: 1, fontSize: 14, color: '#404040', fontWeight: '500'}}>Huỳnh Khánh Duy</Text>
                                    <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 12, color: '#959595'}}>Mã số: 3120410088</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </View>
    </>
}

export default ManagerWorker;