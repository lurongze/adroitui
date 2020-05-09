import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { useSelector, useDispatch  } from '@tarojs/redux';
import '../app.scss';

export default function Index() {

  const themeStore = useSelector(s=>s.theme);
  const dispatch = useDispatch();

  const changeTheme=()=>{
    if(themeStore.theme !== ''){
        dispatch({
            type:'DEFAULT_THEME'
        })
    } else {
        dispatch({
            type: 'CUSTOM_THEME'
        })
    }
  }
  
  return (
    <View className='flat-btn' onClick={()=>changeTheme()}>
        <View className='txt'>切换</View>
        <View className='txt'>主题</View>
    </View>
  )
}