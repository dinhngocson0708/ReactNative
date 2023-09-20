import { createStackNavigator } from 'react-navigation';
import Home from './screen/page/home';
const AppNavigator = createStackNavigator({
  Home: { screen: Home },
});
export default AppNavigator;