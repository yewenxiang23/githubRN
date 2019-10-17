import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';

class MyPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Text> 我的界面 </Text>
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

export default MyPage;
