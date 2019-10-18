import {Provider} from 'react-redux'
import React from 'react'
import store from './store/'
import AppNavigator from './navigator/AppNavigator'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}
export default App
