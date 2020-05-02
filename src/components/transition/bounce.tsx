import Taro, { useState, useEffect } from '@tarojs/taro';
import { View, Block } from '@tarojs/components';
import './index.scss';

interface propsType{
  show?: boolean,
  children?: any,
  type?: string,
  onHide?: Function
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
        setTransitionClass('bounceIn');
      setHasShow(true);
    } else {
      if(hasShow){
        setTransitionClass('bounceOut');
      }
    }
  },[show])
  return (
    <Block>
      <View onClick={()=>handleHide()} className={`transition-mask mask-base ${show?'fadeShow':''}`}></View>
      <View className={`transition-bounce ${transitionClass}`}>
        {children}
      </View>
    </Block>
  )
}
