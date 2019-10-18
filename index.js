/**
 * @format
 */

import {AppRegistry} from 'react-native'
import App from './js/App'

// import WelcommePage from './js/page/WelcomePage';
// import AppNavigator from './js/navigator/AppNavigator';
import {name as appName} from './app.json'

console.disableYellowBox = true
AppRegistry.registerComponent(appName, () => App)
