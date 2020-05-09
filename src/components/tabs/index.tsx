import Taro, { useState } from '@tarojs/taro';
import { View, Text, ScrollView } from '@tarojs/components';
import './index.scss';

interface propsType{
  active: string, // 当前选中的key值
  autoView?: boolean, // 是否点击自动滚动到最前面
  activeClick?: boolean, // 已是选中的了，是否还触发事件
  tabs: Array<{title:string, key:string}>, // tab数据 [{title:'国内新闻',key:'news'},{title:'体育',key:'sports'}]
  onClick?: Function // 点击触发事件，会返回key值
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
