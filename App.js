import AppNavigation from './navigation/appNavigation';
import { FavoriteProvider } from './navigation/FavoriteContex';
import { AlertNotificationRoot } from 'react-native-alert-notification';


export default function App() {
  return (
    <FavoriteProvider>
      <AlertNotificationRoot>
        <AppNavigation />
      </AlertNotificationRoot>
    </FavoriteProvider>
  );
}
