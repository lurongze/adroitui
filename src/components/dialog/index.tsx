import Taro from '@tarojs/taro';
import { View, ScrollView } from '@tarojs/components';
import TransitionBounce from '../transition/bounce';
import './index.scss';

interface propsType {
  show: boolean, // 是否显示
  showClose?: boolean, // 显示取消按钮，默认true
  confirmHide?: boolean, // 点确定的时候是否隐藏
  content?: string, // 文字内容
  children?: any, // prop.children,可任意编写内容
  title?: string, // 标题
  maxHeight?: string, // 最高数值，超过后，内容回滚动
  textAlign?: string, // 文字居中
  cancelText?: string, // 取消按钮文字
  confirmText?: string, // 确定按钮文字
  onConfirm?: Function, // 点击确定按钮事件
  onCancel?: Function, // 点击消失事件
  onHide?: Function // 消失事件
}
export default (props: propsType) => {
  const { show, title = '提示', textAlign = 'center' as any,maxHeight='', content = '',onCancel, onConfirm, onHide, cancelText = '取消', confirmText = '确定', showClose = true, children, confirmHide = true } = props;

  const handleClickItem = (e:string) => {
    if(e === "confirm"){
      if (confirmHide) {
        onHide && onHide();
      }
      onConfirm && onConfirm();
    }
    if(e === "cancel"){
      onHide && onHide();
      onCancel && onCancel();
    }
  }
  const handleHide = () => {
    onHide && onHide();
  }

  let styObj = {textAlign};
  if(maxHeight!==''){
    styObj = Object.assign(styObj,{
      maxHeight
    })
  }

  return (
    <TransitionBounce show={show} onHide={() => handleHide()}>
      <View className='dialog-container'>
        <View className='header'>{title}</View>
        {
          content.length > 0 ? (<ScrollView enableFlex scrollY style={styObj} className='content'>{content}</ScrollView>) : (<ScrollView enableFlex scrollY style={styObj} className='content'>{children}</ScrollView>)
        }
        <View className='action'>
          {showClose && (<View className='btn cancel' onClick={() => handleClickItem('cancel')}>{cancelText}</View>)}
          <View className={`btn ${showClose?'tw':'ol'}`} onClick={() => handleClickItem('confirm')}>{confirmText}</View>
        </View>
      </View>
    </TransitionBounce>
  )
}
