import Taro, { useState } from '@tarojs/taro';
import { View, Text, ScrollView } from '@tarojs/components';
import './index.scss';

interface propsType{
  active: string,
  children?: any,
  autoView?: boolean, // 点击自动滚动到最前面
  activeClick?: boolean, // 已是选中的了，是否还触发事件
  tabs: Array<{title:string, key:string}>,
  onClick?: Function
}

export default (props: propsType) => {
  const {tabs = [], onClick, active, activeClick = false, autoView= false } = props;
  const [vieItem, setVieItem] = useState<string>('');
  const handleClick = (e)=> {
    autoView && setVieItem(e);
    if(active != '' && active === e){ 
      if(activeClick){ // 选中时再点击，还是触发事件
        onClick && onClick(e);
      }
    }else {
      onClick && onClick(e);
    }
  }
  return (
    <ScrollView scrollX className='tabs' scrollIntoView={vieItem}>
      {
        tabs.map((item:{title:string,key:string})=>{
          return (
            <View className={`tab-item ${active===item.key?'active':''}`} key={item.key} id={item.key} onClick={()=>handleClick(item.key)}>
              <Text>{item.title}</Text>
              <View className={`tab-line`}></View>
            </View>
          )
        })
      }
    </ScrollView>
  )
}
