import React, { useRef } from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, Animated, FlatList } from 'react-native';
import styles from './style';
import HeaderComponent from '../../components/HeaderComponent'; // Import your new component

const UserReport = ({ navigation }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor="#0693F1" />

      <View style={styles.upperHeader}>
        {/* Render anything you want for the upper header here */}
      </View>

      {/* Use the HeaderComponent component here */}
      <HeaderComponent animatedValue={animatedValue} />

      <ScrollView
        onScroll={(e) => {
          const offSetY = e.nativeEvent.contentOffset.y;
          animatedValue.setValue(offSetY);
        }}
        scrollEventThrottle={16}
      >
        <View style={styles.paddingForHeader} />
        <View style={styles.scrollViewContent}>
          <View style={styles.containerLine}>
            <View style={styles.line}></View>
          </View>
          {/* <Text style={{ marginTop: 30 }}>cc</Text> */}

          {/* <FlatList
            contentContainerStyle={{ paddingBottom: 50 }}
            // data={}
            keyExtractor={item => item.id}
            renderItem={({renderItem}) => {
              return( <View>
                        <View style={{flexDirection: 'row'}}>
                            <Text>Text 1</Text>
                            <Text>Text 2</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Text>Text 3</Text>

                            <View>
                            <Image></Image> 
                            <Text>Text 4</Text>

                            </View>
                            <Text>Text 5</Text> 
                        </View>
                      </View>
                    )}}
          /> */}

        </View>
      </ScrollView>
    </View>
  );
};

export default UserReport;
