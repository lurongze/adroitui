import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import AButton from '../../components/button/index';
import ActionSheet from '../../components/action-sheet/index';

import HalfScreenDialog from '../../components/half-screen-dialog/index';

import Dialog from '../../components/dialog/index';
import AdToast from '../../components/toast/index';
import ToolTips from '../../components/tooltips/index';
import Tabs from '../../components/tabs/index';

import './button.scss'

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  state = {
    loading: false,
    tabActive: '',
    tabList: [
      { title: '热门', key: 'hot'},
      { title: '娱乐', key: 'entertainment'},
      { title: '体育', key: 'tiyu'},
      { title: '国内', key: 'guonei'},
      { title: '财经', key: 'econemy'},
      { title: '科技', key: 'science'},
      { title: '教育', key: 'jy'},
      { title: '汽车', key: 'cart'}
    ]
  }
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '按钮说明'
  }

  setLoading = (e) => {
    console.log('setLoading', e);
    this.setState({
      loading: true
    })
  }
  clickAc = (e)=>{
    this.setState({
      loading: false
    })
  }

  switchTab = (e)=>{
    this.setState({
      tabActive: e
    })
  }

  render() {
    const { loading = false } = this.state;
    return (
      <View className='index'>

        <View className='cc'>
          <AButton loading={loading} onClick={this.setLoading.bind(this, 'nihao')}>页面主操作</AButton>
          <AButton loading={true}>页面主操作</AButton>
          <AButton type='warn'>页面主操作</AButton>
          <AButton type='warn' loading={true}>页面主操作</AButton>
          <AButton type='secondary'>页面次要操作</AButton>

          <AButton size='mini'>按钮</AButton>
          <AButton type='warn' size='mini'>按钮</AButton>
          <AButton type='secondary' size='mini'>按钮</AButton>
        </View>

      </View>
    )
  }
}
