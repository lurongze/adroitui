import Taro, { useState } from '@tarojs/taro';
import { View,Block } from '@tarojs/components';
import { AdActionSheet } from '../index';
import '../app.scss';
interface propsType{
  onClick: Function;
}
function Index(props:propsType) {

  const { onClick } = props;

  const [show, setShow] = useState<boolean>(false);

  const changeTheme=(e)=>{
    const theme = Taro.getStorageSync('theme') || '';
    let nextTheme = theme === ''?'adpage':'';
    if(e === 'page'){
      onClick && onClick(nextTheme);
    }
    if(e === 'all'){
      Taro.setStorage({key:'theme',data:nextTheme});
        Taro.reLaunch({url:'/pages/index/index'});
    }
  }

  const actions: Array<{key:string,text:string}> = [
    {key: 'page', text: '切换本页主题'},
    {key: 'all', text: '切换小程序主题'},
  ];
  
  return (
    <Block>
      <View className='flat-btn' onClick={()=>setShow(true)}>
        <View className='txt'>切换</View>
        <View className='txt'>主题</View>
      </View>
      <AdActionSheet title='切换小程序主题后，将重新启动小程序' onClickItem={(e:string)=>changeTheme(e)} actions={actions} show={show} onHide={()=>setShow(false)} clickHide={true} />
    </Block>
  )
}

export default Index;