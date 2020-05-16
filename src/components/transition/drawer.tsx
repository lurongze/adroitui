import Taro, { useState, useEffect } from '@tarojs/taro';
import { View, Block } from '@tarojs/components';
import './index.scss';

interface propsType{
  show?: boolean, // 是否显示
  children?: any, // 自定义显示内容
  onAnimationEnd?:Function, // 动画结束的事件
  direction?: string, // 左右 默认left, left|right
  // type?: string,
  // size?: string,
  onHide?: Function // 消失事件
}

export default (props: propsType) => {
  const {show, children, onHide,direction ='', onAnimationEnd } = props;
  const [drawerClass, setDrawerClass] = useState(''); // 'slideShow':'slideHide'
  const [hasShow, setHasShow] = useState(false);
  const handleHide = ()=>{
    onHide && onHide();
  }
  useEffect(()=>{
    if(show){
      setDrawerClass('ad--drawer-open');
      setHasShow(true);
    } else {
      if(hasShow){
        setDrawerClass('ad--drawer-close');
      }
    }
  },[show])
  // const handleAnimationEnd = ()=>{
  //   onAnimationEnd&&onAnimationEnd();
  // }
  return (
    <Block>
      <View onClick={()=>handleHide()} className={`ad--transition-mask ad--mask-base ${show?'ad--fadeShow':''}`}></View>
      <View className={`ad--transition-container ad--drawer ${direction} ${drawerClass}`}>
        {children}
      </View>
    </Block>
  )
}
