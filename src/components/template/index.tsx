import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.scss';

interface propsType{
  loading?: boolean,
  children?: any,
  type?: string,
  size?: string,
  onClick?: Function
}

export default (props: propsType) => {
  const {loading, children,type='',size='', onClick} = props;
  const handleClick = ()=> {
    onClick && onClick();
  }
  return (
    <View onClick={()=>handleClick()} className={`ad-button ${loading?'loading':''} ${type} ${size}`}>
      {loading && (<Text className='ad-loading'></Text>)}
      {children}
    </View>
  )
}
