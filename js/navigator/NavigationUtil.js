export default class NavigationUtil {
  /**
   * 页面跳转
   * @param {object} navigation
   */
  static goPage(page, params) {
    const navigation = NavigationUtil.navigation;
    if (!navigation) return console.log('navigation 为空');
    navigation.navigate(page, {
      ...params,
    });
  }
  /**
   * 返回
   * @param {object} navigation
   */
  static goBack(navigation) {
    navigation.goBack();
  }
  /**
   * 重置到首页
   * @param {object} params
   */
  static resetToHomePage(params) {
    const {navigation} = params;
    navigation.navigate('Main');
  }
}
