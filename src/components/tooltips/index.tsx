import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.scss';

interface propsType{
  close?: boolean, // 点击关闭
  show?: boolean,
  during?:number,
  autoClose?: boolean,
  type?: string,
  title?: string,
  onHide?: Function
}

export default (props: propsType) => {
  const {autoClose = true, close = true,show = false, type='',title='', onHide, during=2} = props;
  const handleClick = ()=> {
    if(close){
      onHide && onHide();
    }
  }
  const animationEnd = ()=>{
    onHide && onHide();
  }
  return autoClose ?(
    <View onAnimationEnd={()=>animationEnd()} style={{animationDuration: during+'s'}} onClick={()=>handleClick()} className={`tooltips ${type} ${show?'tipsAnimate':''}`}>
      {title}
    </View>
  ):(
    <View style={{animationDuration: during+'s'}} onClick={()=>handleClick()} className={`tooltips ${type} ${show?'tipsAnimate1':''}`}>
      {title}
    </View>
  )
}
