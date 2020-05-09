import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.scss';

interface propsType{
  close?: boolean, // 点击关闭
  show?: boolean, //  是否显示
  during?:number, // 时间
  autoClose?: boolean, //  自动关闭，默认true
  type?: string, // 类型：'',warn, success
  title?: string, // 标题
  onHide?: Function // 消失事件
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
