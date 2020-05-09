import Taro, { useState } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.scss';

interface propsType{
  loading?: boolean,
  disabled?: boolean,
  checked: boolean,
  type?: string,
  size?: string,
  onClick?: Function
}

export default (props: propsType) => {
  const {loading, disabled = false, onClick} = props;
  const [ checkedClass, setCheckedClass ] = useState<string>('');
  const handleClick = ()=> {
    if(!disabled){
      onClick && onClick();
    }
  }
  return (
    <View onClick={()=>handleClick()} className={`ad-switch ${checkedClass}`}>
      <View className='left'>丨</View>
      <View className='right'>○</View>
    </View>
  )
}
