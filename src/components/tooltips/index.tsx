import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.scss';

interface propsType {
  tapClose?: boolean, // 点击关闭
  show?: boolean, //  是否显示
  during?: number, // 时间
  autoClose?: boolean, //  自动关闭，默认true
  type?: string, // 类型：'',warn, success
  title?: string, // 标题
  onHide?: Function // 消失事件
}

export default (props: propsType) => {
  const { autoClose = true, tapClose = false, show = false, type = '', title = '', onHide, during = 2 } = props;
  const handleClick = () => {
    if (tapClose) {
      onHide && onHide();
    }
  }
  const animationEnd = () => {
    autoClose && onHide && onHide();
  }
  let animateClass = 'ad--tipsAnimate';
  
  let ad = during;
  if (!autoClose) {
    animateClass = 'ad--tipsAnimate1';
    ad = during/2.5;
  }
  return (
    <View onAnimationEnd={() => animationEnd()} style={{ animationDuration: ad + 's' }} onClick={() => handleClick()} className={`ad--tooltips ${type} ${show ? animateClass : ''}`}>
      {title}
    </View>
  )
}
