import Taro, { useEffect } from '@tarojs/taro';
import { View } from '@tarojs/components';
import Transition from '../transition/index';
import './index.scss';

interface propsType {
  show: boolean,
  children?: any,
  actions: Array<{ key: string, text: string }>,
  title?: string,
  cancelText?: string,
  clickItem?: Function,
  onHide?: Function
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
    <Transition show={show} onHide={() => handleHide()}>
      <View className='action-sheet'>
        <View className='title sheet-item'>{title}</View>
        {
          actions.map((item: { key: string, text: string }) => {
            return (<View className='sheet-item' key={item.key} onClick={() => handleClickItem(item.key)}>{item.text}</View>)
          })
        }
        <View className='sheet-item cancel' onClick={() => handleHide()}>{cancelText}</View>
      </View>
    </Transition>
  )
}