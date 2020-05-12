import Taro, { useState } from '@tarojs/taro';
import { View } from '@tarojs/components';
import AdLoading from '../loading/index';
import './index.scss';

interface propsType{
  loading?: boolean, // 加载中状态
  disabled?: boolean, // 禁用状态
  checked: boolean, // 选中状态
  // type?: string, // 
  // size?: string, // 
  onClick?: Function // 点击事件
}

export default (props: propsType) => {
  const {loading = false, disabled = false,checked, onClick} = props;
  const handleClick = ()=> {
    if(!disabled && !loading){
      onClick && onClick();
    }
  }
  return (
    <View onClick={()=>handleClick()} className={`ad--switch ${checked?'ad--on':'ad--off'} ${disabled?'ad--disabled':''}`}>
      <View className='ad--left'></View>
      <View className='ad--right'></View>
      <View className='ad--circel'></View>
      <View className={`ad--switch-loading ad--flex-center ${loading?'ad--show':''}`}>
        <AdLoading color='rgba(0, 0, 0, 0.2)' />
      </View>
    </View>
  )
}
