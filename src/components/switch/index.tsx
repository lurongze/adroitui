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
    <View onClick={()=>handleClick()} className={`ad-switch ${checked?'on':'off'} ${disabled?'disabled':''}`}>
      <View className='left'></View>
      <View className='right'></View>
      <View className='circel'></View>
      <View className={`switch-loading flex-center ${loading?'show':''}`}>
        <AdLoading color='rgba(0, 0, 0, 0.2)' />
      </View>
    </View>
  )
}
