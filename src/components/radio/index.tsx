import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.scss';

interface propsType{
  // loading?: boolean, // 加载中状态
  disabled?: boolean, // 禁用状态
  checked: boolean, // 选中状态
  text: string, // 文字
  onClick?: Function // 点击事件 
}

export default (props: propsType) => {
  const {disabled = false,checked, text, onClick} = props;
  const handleClick = ()=> {
    if(!disabled){
      onClick && onClick();
    }
  }
  return (
    <View onClick={()=>handleClick()} className={`ad--radio ${checked?'ad--checked':'ad--unchecked'} ${disabled?'ad--disabled':''}`}>
      <View className='ad--box'><Text className='ad--on'></Text></View>
      <Text className='ad--text'>{text}</Text>
    </View>
  )
}
