import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
} from 'react-native';

class FavoritePage extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Text> 收藏界面 </Text>
        <Button
          title="改变主题颜色"
          onPress={() => {
            navigation.setParams({
              theme: {
                tintColor: 'yellow',
                updateTime: new Date().getTime(),
              },
            });
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  scrollView: {},
});

export default FavoritePage;
