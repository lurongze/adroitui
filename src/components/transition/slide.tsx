import Taro, { useState, useEffect } from '@tarojs/taro';
import { View, Block } from '@tarojs/components';
import './index.scss';

interface propsType{
  show?: boolean, // 是否显示
  children?: any, // 自定义显示内容
  onAnimationEnd?:Function, // 动画介绍的事件
  // type?: string,
  // size?: string,
  onHide?: Function // 消失事件
}

export default (props: propsType) => {
  const {show, children, onHide, onAnimationEnd } = props;
  const [slideClass, setSlideClass] = useState(''); // 'slideShow':'slideHide'
  const [hasShow, setHasShow] = useState(false);
  const handleHide = ()=>{
    onHide && onHide();
  }
  useEffect(()=>{
    if(show){
      setSlideClass('ad--slideShow');
      setHasShow(true);
    } else {
      if(hasShow){
        setSlideClass('ad--slideHide');
      }
    }
  },[show])
  const handleAnimationEnd = ()=>{
    onAnimationEnd&&onAnimationEnd();
  }
  return (
    <Block>
      <View onClick={()=>handleHide()} className={`ad--transition-mask ad--mask-base ${show?'ad--fadeShow':''}`}></View>
      <View onAnimationEnd={()=>handleAnimationEnd()} className={`ad--transition-container ${slideClass}`}>
        {children}
      </View>
    </Block>
  )
}
