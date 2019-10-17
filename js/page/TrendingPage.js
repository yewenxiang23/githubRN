import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
} from 'react-native';

class TrendingPage extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Text> 趋势界面 </Text>
            <Button
              title="改变主题颜色"
              onPress={() => {
                navigation.setParams({
                  theme: {
                    tintColor: 'red',
                    updateTime: new Date().getTime(),
                  },
                });
              }}
            />
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

export default TrendingPage;
