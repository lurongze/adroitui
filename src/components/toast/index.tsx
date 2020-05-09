import Taro, { useState, useEffect } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.scss';

interface propsType{
  // loading?: boolean,
  show: boolean, // 是否显示
  title: string, // 标题
  icon?: string, // 图标，暂时不用
  during?: number, // 时间
  // autoClose?: boolean, // 
  onHide?: Function, // 消失事件
  tapClose?: boolean // 点击关闭
}

export default (props: propsType) => {
  const { title='',icon='', during=2, show=false, tapClose = false, onHide } = props;
  const handleHide = ()=>{
    if(tapClose){
      onHide && onHide();
    }
  }
  const animationEnd = ()=>{
    onHide && onHide();
  }
  return (
    <View onAnimationEnd={()=>animationEnd()} onClick={()=>handleHide()} style={{animationDuration: during+'s'}} className={`toast-mask mask-base ${show?'toastAnimate':''}`}>
      <View className='toast' onClick={()=>handleHide()}>
        {icon && (<View className='icon'>icon</View>)}
        <View>{title}</View>
      </View>
    </View>
  )
}
