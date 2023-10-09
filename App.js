import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GlobalStyles from './src/components/GlobalStyles';


import NavigationContainerWrapper from './src/navigation/NavigationContainerWrapper';

// import Splash from './src/views/Splash';
// import Login from './src/views/Login';
// import UserReport from './src/views/UserReport';

// const Stack = createNativeStackNavigator();
import TabScreenUser from './src/navigation/TabScreenUser';

export default function App() {
  return (
      <SafeAreaView style={GlobalStyles.androidSafeArea}>
        {/* <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name='Splash' component={Splash} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='UserReport' component={UserReport} />
          
        </Stack.Navigator>
      </NavigationContainer> */}

        {/* <NavigationContainerWrapper /> */}
      <TabScreenUser />

      </SafeAreaView>
      
  );
}

const styles = StyleSheet.create({
  
});
