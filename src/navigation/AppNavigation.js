import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login";
import UserTabScreen from "./tab/UserTabScreen";
import Main from "../screens/Main";
import CreateReport from "../screens/User/CreateReport";
import ReportDetail from "../screens/User/ReportDetail";
import ManagerSelectWorker from "../screens/Manager/ManagerSelectWorker";
import ManagerTabScreen from "./tab/ManagerTabScreen";
import WorkerTabScreen from "./tab/WorkerTabScreen";
import ManagerWorkerDetails from "../screens/Manager/ManagerWorkerDetails";
import CreateFeedback from "../screens/Worker/CreateFeedback";
import Register from "../screens/Register";

const AppStack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
          <AppStack.Screen name="Main" component={Main} />
          <AppStack.Screen name="Login" component={Login} />
          <AppStack.Screen name="Register" component={Register} />
          <AppStack.Screen name="User" component={UserTabScreen} />
          <AppStack.Screen name="Manager" component={ManagerTabScreen} />
          <AppStack.Screen name="Worker" component={WorkerTabScreen} />
          <AppStack.Screen name="CreateReport" component={CreateReport} />
          <AppStack.Screen name="CreateFeedback" component={CreateFeedback} />
          <AppStack.Screen name="ReportDetail" component={ReportDetail}/>
          <AppStack.Screen name="SelectWorker" component={ManagerSelectWorker}/>
          <AppStack.Screen name="WorkerDetail" component={ManagerWorkerDetails}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
