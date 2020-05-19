import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import AdArrow from '../arrow/index';
import AdBadge from '../badge/index';
import "./index.scss";

interface propsType {
  onClick?: Function,
}

export default (props: propsType) => {
  const { onClick } = props;
  

  return (
    <View className='ad--list' onClick={()=>onClick&&onClick()}>
      <View className='ad--list-item'>
        <View className='ad--list-icon'></View>
        <View className='ad--list-title'>
          我的
        </View>
        <View className='ad--list-badge'><AdBadge text='探索发现' /></View>
        <AdArrow bgColor='transparent' color='#b2b2b2' />
      </View>
      <View className='ad--list-item'>
        <View className='ad--list-icon'></View>
        <View className='ad--list-title'>
          我的
        </View>
        <View className='ad--list-badge'><AdBadge text='探索发现' /></View>
        <AdArrow bgColor='transparent' color='#b2b2b2' />
      </View>
    </View>
  );
};
