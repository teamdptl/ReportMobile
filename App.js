import { SafeAreaView } from "react-native";
import GlobalStyles from "./src/components/GlobalStyles";

import { AuthProvider } from "./src/context/AuthContext";
import AppNavigation from "./src/navigation/AppNavigation";
import { GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import ReportDetail from "./src/screens/User/ReportDetail";
import {SafeAreaProvider} from "react-native-safe-area-context";
import ManagerSelectWorker from "./src/screens/Manager/ManagerSelectWorker";
import ManagerWorker from "./src/screens/Manager/ManagerWorker";
import ReportFilter from "./src/components/Report/ReportFilter";
import Register from "./src/screens/Register"; // Optional if you want to use default theme

export default function App() {
  return (
      <GluestackUIProvider config={config}>
        <AuthProvider>
          <SafeAreaView style={GlobalStyles.androidSafeArea}>
              <SafeAreaProvider>
                  <AppNavigation></AppNavigation>
                  {/*<Register/>*/}
              </SafeAreaProvider>
          </SafeAreaView>
        </AuthProvider>
      </GluestackUIProvider>
  );
}
