import Taro, { useState, useEffect } from '@tarojs/taro';
import { View, Block } from '@tarojs/components';
import './index.scss';

interface propsType{
  show?: boolean, // 是否显示
  children?: any, // 自定义显示内容
  // type?: string, // 
  onHide?: Function // 消失事件
}

export default (props: propsType) => {
  const {show, children, onHide } = props;
  const [transitionClass, setTransitionClass] = useState(''); // 'bounceIn':'bounceOut'
  const [hasShow, setHasShow] = useState(false);
  const handleHide = ()=>{
    onHide && onHide();
  }
  useEffect(()=>{
    if(show){
        setTransitionClass('ad--bounceIn');
      setHasShow(true);
    } else {
      if(hasShow){
        setTransitionClass('ad--bounceOut');
      }
    }
  },[show])
  return (
    <Block>
      <View onClick={()=>handleHide()} className={`ad--transition-mask ad--mask-base ${show?'ad--fadeShow':''}`}></View>
      <View className={`ad--transition-bounce ${transitionClass}`}>
        {children}
      </View>
    </Block>
  )
}
