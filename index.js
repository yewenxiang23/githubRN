/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {createAppContainer} from 'react-navigation';
// import App from './App';

// import WelcommePage from './js/page/WelcomePage';
import AppNavigator from './js/navigator/AppNavigator';
import {name as appName} from './app.json';

console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => createAppContainer(AppNavigator));
