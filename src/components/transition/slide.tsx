import Taro, { useState, useEffect } from '@tarojs/taro';
import { View, Block } from '@tarojs/components';
import './index.scss';

interface propsType{
  show?: boolean,
  children?: any,
  type?: string,
  size?: string,
  onHide?: Function
}

export default (props: propsType) => {
  const {show, children, onHide } = props;
  const [slideClass, setSlideClass] = useState(''); // 'slideShow':'slideHide'
  const [hasShow, setHasShow] = useState(false);
  const handleHide = ()=>{
    onHide && onHide();
  }
  useEffect(()=>{
    if(show){
      setSlideClass('slideShow');
      setHasShow(true);
    } else {
      if(hasShow){
        setSlideClass('slideHide');
      }
    }
  },[show])
  return (
    <Block>
      <View onClick={()=>handleHide()} className={`transition-mask mask-base ${show?'fadeShow':''}`}></View>
      <View className={`transition-container ${slideClass}`}>
        {children}
      </View>
    </Block>
  )
}
