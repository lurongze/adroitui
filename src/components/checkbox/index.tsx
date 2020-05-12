import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.scss';

interface propsType{
  // loading?: boolean,
  disabled?: boolean, // 是否可用
  checked: boolean, // 选中
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
    <View onClick={()=>handleClick()} className={`ad--checkbox ${checked?'ad--checked':'ad--unchecked'} ${disabled?'ad--disabled':''}`}>
      <View className='ad--box'><Text className='ad--on'></Text></View>
      <Text className='ad--text'>{text}</Text>
    </View>
  )
}
