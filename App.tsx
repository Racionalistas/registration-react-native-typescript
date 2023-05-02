import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Registration from './screens/Registration/Registration';
import EmploymentInformation from './screens/EmploymentInformation/EmploymentInformation';
import CompanyInformation from './screens/CompanyInformation/CompanyInformation';
import PersonNameInformation from './screens/PersonNameInformation/PersonNameInformation';
import WorkAreaInformation from './screens/WorkAreaInformation/WorkAreaInformation';
import OutputScreen from './screens/OutputScreen/OutputScreen';
import { Provider } from 'react-redux';
import { store } from './store/store';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Registration" component={Registration} options={{ headerShown: false }} />
          <Stack.Screen name="EmploymentInformation" component={EmploymentInformation} options={{ headerShown: false }} />
          <Stack.Screen name="CompanyInformation" component={CompanyInformation} options={{ headerShown: false }} />
          <Stack.Screen name="PersonNameInformation" component={PersonNameInformation} options={{ headerShown: false }} />
          <Stack.Screen name="WorkAreaInformation" component={WorkAreaInformation} options={{ headerShown: false }} />
          <Stack.Screen name="OutputScreen" component={OutputScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider >
  );
}
export default App