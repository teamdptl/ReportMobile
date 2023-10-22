import { SafeAreaView } from 'react-native';
import GlobalStyles from './src/components/GlobalStyles';

import {AuthProvider} from "./src/context/AuthContext";
import AppNavigation from "./src/navigation/AppNavigation";

export default function App() {
  return (
      <AuthProvider>
          <SafeAreaView style={GlobalStyles.androidSafeArea}>
              <AppNavigation></AppNavigation>
          </SafeAreaView>
      </AuthProvider>
  );
}
