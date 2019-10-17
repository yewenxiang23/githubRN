import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil';
import DynamicTabNavigator from '../navigator/DynamicTabNavigator';
class HomePage extends Component {
  render() {
    // console.log(this.props.navigation)
    console.log('HomePage')
    NavigationUtil.navigation = this.props.navigation;
    console.log(NavigationUtil.navigation)
    return <DynamicTabNavigator />;
  }
}
export default HomePage;
