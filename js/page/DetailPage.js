import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';

class DetailPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Text> 详情页 </Text>
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

export default DetailPage;
