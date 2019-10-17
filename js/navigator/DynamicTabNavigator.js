import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {createAppContainer} from 'react-navigation';
import PopulerPage from '../page/PopulerPage';
import TrendingPage from '../page/TrendingPage';
import FavoritePage from '../page/FavoritePage';
import MyPage from '../page/MyPage';
import NavigationUtil from './NavigationUtil';
//tab 路由
const TABS = {
  PopulerPage: {
    screen: PopulerPage,
    navigationOptions: {
      tabBarLabel: '最热',
      tabBarIcon: ({tintColor, focused}) => (
        <MaterialIcons
          name={'whatshot'}
          size={26}
          style={{
            color: tintColor,
          }}
        />
      ),
    },
  },
  TrendingPage: {
    screen: TrendingPage,
    navigationOptions: {
      tabBarLabel: '趋势',
      tabBarIcon: ({tintColor, focused}) => (
        <Feather
          name={'trending-up'}
          size={26}
          style={{
            color: tintColor,
          }}
        />
      ),
    },
  },
  FavoritePage: {
    screen: FavoritePage,
    navigationOptions: {
      tabBarLabel: '收藏',
      tabBarIcon: ({tintColor, focused}) => (
        <MaterialIcons
          name={'favorite'}
          size={26}
          style={{
            color: tintColor,
          }}
        />
      ),
    },
  },
  MyPage: {
    screen: MyPage,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({tintColor, focused}) => (
        <FontAwesome
          name={'user'}
          size={26}
          style={{
            color: tintColor,
          }}
        />
      ),
    },
  },
};
class DynamicTabNavigator extends Component {
  _tabNavigator() {
    const {PopulerPage, TrendingPage, FavoritePage, MyPage} = TABS;
    const tabs = {PopulerPage, TrendingPage, FavoritePage, MyPage}; //根据需要显示定制的tab
    // PopulerPage.navigationOptions.tabBarLabel = '最热'  //动态配置text
    return createBottomTabNavigator(tabs, {
      tabBarComponent: TabBarComponent,
    });
  }
  render() {
    NavigationUtil.navigation = this.props.navigation;
    const Tab = createAppContainer(this._tabNavigator());
    return <Tab />;
  }
}
class TabBarComponent extends Component {
  constructor(props) {
    super(props);
    this.theme = {
      tintColor: props.activeTintColor,
      updateTime: new Date().getTime(),
    };
  }
  render() {
    const {routes, index} = this.props.navigation.state;
    if (routes[index].params) {
      const {theme} = routes[index].params;
      if (theme && theme.updateTime > this.theme.updateTime) {
        this.theme = theme;
      }
    }
    return (
      <BottomTabBar
        {...this.props}
        activeTintColor={this.theme.tintColor || this.props.activeTintColor}
      />
    );
  }
}

export default DynamicTabNavigator;
