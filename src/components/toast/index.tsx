import Taro, { useState, useEffect } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.scss';

interface propsType{
  loading?: boolean,
  show: boolean,
  text: string,
  icon?: string,
  during?: number,
  autoClose?: boolean,
  onHide?: Function,
  tapClose?: boolean
}

export default (props: propsType) => {
  const { text='',icon='', during=2, show=false, onHide } = props;
  const handleHide = ()=>{
    onHide && onHide();
  }
  return (
    <View onAnimationEnd={()=>handleHide()} style={{animationDuration: during+'s'}} className={`toast-mask mask-base ${show?'toastAnimate':''}`}>
      <View className='toast'>
        {icon && (<View className='icon'>icon</View>)}
        <View>{text}</View>
      </View>
    </View>
  )
}
