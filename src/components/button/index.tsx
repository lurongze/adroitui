import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import LoadingIcon from '../icons/loading';
import './index.scss';

interface propsType{
  loading?: boolean,
  children?: any,
  type?: string,
  size?: string,
  width?: string,
  onClick?: Function
}

export default (props: propsType) => {
  const {loading, children,type='',size='',width='', onClick} = props;
  const handleClick = ()=> {
    onClick && onClick();
  }
  let styleObj = {};
  if(width !== ''){
    styleObj = {
      width: width
    }
  }
  return (
    <View style={styleObj} onClick={()=>handleClick()} className={`ad-button ${loading?'loading':''} ${type} ${size}`}>
      {/* {loading && (<Text className='ad-loading'></Text>)} */}
      {loading && <LoadingIcon/>}
      {children}
    </View>
  )
}
