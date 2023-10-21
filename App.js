import { SafeAreaView } from 'react-native';
import GlobalStyles from './src/components/GlobalStyles';

// Chứa các screen của ứng dụng
import NavigationContainerWrapper from './src/navigation/NavigationContainerWrapper';

export default function App() {
  return (
      <SafeAreaView style={GlobalStyles.androidSafeArea}>
        <NavigationContainerWrapper />
      </SafeAreaView>
  );
}
