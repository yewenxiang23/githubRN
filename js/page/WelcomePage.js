import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';
import NavigatorUtil from '../navigator/NavigationUtil';
class WelcomePage extends Component {
  componentDidMount() {
    this.timer = setTimeout(() => {
      NavigatorUtil.resetToHomePage(this.props);
    }, 200);
  }
  componentWillMount() {
    this.timer && clearTimeout(this.timer);
  }
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Text> 欢迎页 </Text>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {},
});

export default WelcomePage;
