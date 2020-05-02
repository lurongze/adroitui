import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import TransitionBounce from '../transition/bounce';
import './index.scss';

interface propsType {
  show: boolean,
  showClose?: boolean,
  confirmHide?: boolean, // 点确定的时候是否隐藏
  content?: string,
  children?: any,
  title?: string,
  textAlign?: string,
  cancelText?: string,
  confirmText?: string,
  onConfirm?: Function,
  onHide?: Function
}
export default (props: propsType) => {
  const { show, title = '提示', textAlign = 'center' as any, content = '', onConfirm, onHide, cancelText = '取消', confirmText = '确定', showClose = true, children, confirmHide = true } = props;

  const handleClickItem = () => {
    if (confirmHide) {
      onHide && onHide();
    }
    onConfirm && onConfirm();
  }
  const handleHide = () => {
    onHide && onHide();
  }
  return (
    <TransitionBounce show={show} onHide={() => handleHide()}>
      <View className='dialog-container'>
        <View className='header'>{title}</View>
        {
          content.length > 0 ? (<View className='content' style={{ textAlign: textAlign }}>{content}</View>) : (<View className='content'>{children}</View>)
        }
        <View className='action'>
          {showClose && (<View className='btn cancel' onClick={() => handleHide()}>{cancelText}</View>)}
          <View className='btn' onClick={() => handleClickItem()}>{confirmText}</View>
        </View>
      </View>
    </TransitionBounce>
  )
}
