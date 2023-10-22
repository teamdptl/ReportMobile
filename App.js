import { SafeAreaView } from 'react-native';
import GlobalStyles from './src/components/GlobalStyles';

// Chứa các screen của ứng dụng
import NavigationContainerWrapper from './src/navigation/NavigationContainerWrapper';
import {AuthProvider} from "./src/context/AuthContext";

export default function App() {
  return (
      <AuthProvider>
          <SafeAreaView style={GlobalStyles.androidSafeArea}>
              <NavigationContainerWrapper />
          </SafeAreaView>
      </AuthProvider>
  );
}
