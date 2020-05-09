import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import TransitionSlide from '../transition/slide';
import './index.scss';

interface propsType {
  show: boolean, // 是否显示
  actions: Array<{ key: string, text: string }>, // 按钮列表数据[{key:'key1',text:'text1'},{key:'key2',text:'text2'}]
  title?: string, // 标题
  clickHide?: boolean, // 点击选项后触发onHide事件
  cancelText?: string, // 取消按钮文字 
  onClickItem?: Function, // 点击选项的事件，会返回 key的值,key='cancel'时为点击取消
  onHide?: Function // 点击取消的事件
}
export default (props: propsType) => {
  const { show, title, actions=[], onClickItem, onHide, cancelText = '取消', clickHide=false } = props;

  const handleClickItem = (e: string) => {
    onClickItem && onClickItem(e);
    if(clickHide || e==='cancel'){
      onHide && onHide();
    }
  }
  const handleHide = () => {
    onHide && onHide();
  }
  return (
    <TransitionSlide show={show} onHide={() => handleHide()}>
      <View className='action-sheet'>
        <View className='title sheet-item'>{title}</View>
        {
          actions.map((item: { key: string, text: string }) => {
            return (<View className='sheet-item action' key={item.key} onClick={() => handleClickItem(item.key)}>{item.text}</View>)
          })
        }
        <View className='sheet-item cancel' onClick={() => handleClickItem('cancel')}>{cancelText}</View>
      </View>
    </TransitionSlide>
  )
}