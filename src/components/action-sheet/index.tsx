import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import TransitionSlide from '../transition/slide';
import './index.scss';

interface propsType {
  show: boolean, // 是否显示
  actions: Array<{ key: string, text: string }>, // 按钮列表数据[{key:'key1',text:'text1'},{key:'key2',text:'text2'}]
  title?: string, // 标题
  cancelText?: string, // 取消按钮文字 
  clickItem?: Function, // 点击选项的事件，会返回 key的值
  onHide?: Function // 点击取消的事件
}
export default (props: propsType) => {
  const { show, title, actions=[], clickItem, onHide, cancelText = '取消' } = props;

  const handleClickItem = (e: string) => {
    clickItem && clickItem(e);
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
        <View className='sheet-item cancel' onClick={() => handleHide()}>{cancelText}</View>
      </View>
    </TransitionSlide>
  )
}