import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import NavigationUtil from '../navigator/NavigationUtil';
class PopulerPage extends Component {
  constructor(props) {
    super(props);
    this.tabNames = [
      'Javascript',
      'Java',
      'PHP',
      'IOS',
      'React',
      'React Native',
      'Android',
    ];
  }
  _genTabs() {
    const tabs = {};
    this.tabNames.forEach((item, index) => {
      tabs[`tab${index}`] = {
        screen: props => <PopulerTab {...props} tabLabel={item} />,
        navigationOptions: {
          title: item,
        },
      };
    });
    return tabs;
  }
  _createdTopTab() {
    return createMaterialTopTabNavigator(this._genTabs(), {
      tabBarOptions: {
        tabStyle: styles.tabStyle,
        upperCaseLabel: false,
        scrollEnabled: true,
        style: {
          backgroundColor: '#678',
        },
        indicatorStyle: styles.indicatorStyle,
        labelStyle: styles.labelStyle,
      },
    });
  }
  render() {
    const TabNavigator = createAppContainer(this._createdTopTab());
    return (
      <SafeAreaView style={styles.container}>
        <TabNavigator />
      </SafeAreaView>
    );
  }
}
class PopulerTab extends Component {
  render() {
    const {tabLabel} = this.props;
    return (
      <View style={styles.container}>
        <Text>{tabLabel}</Text>
        <Text
          onPress={() => {
            NavigationUtil.goPage('DetailPage', this.props);
          }}>
          跳转到详情
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 14,
    marginTop: 6,
    marginBottom: 6,
  },
  indicatorStyle: {
    height: 2,
    backgroundColor: '#fff',
  },
  tabStyle: {
    minWidth: 50,
  },
  container: {
    flex: 1,
  },
});

export default PopulerPage;
