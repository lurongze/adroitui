import Taro, { useState } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AdTabs } from '../../index';
import './index.scss';

export default function Index() {
  const tabList = [
    { title: '热门', key: 'hot'},
    { title: '娱乐', key: 'entertainment'},
    { title: '体育', key: 'tiyu'},
    { title: '国内', key: 'guonei'},
    { title: '财经', key: 'econemy'},
    { title: '科技', key: 'science'},
    { title: '教育', key: 'jy'},
    { title: '汽车', key: 'cart'}
  ];

  const [ activeTab, setActiveTab] = useState<string>(tabList[0].key);
  
  
  return (
    <View>
      <View>
        <AdTabs active={activeTab} onClick={(e:string)=>setActiveTab(e)}  tabs={tabList} autoView={true}  />
      </View>


      <View style={{marginTop: '25px'}}>
        <AdTabs active={activeTab} onClick={(e:string)=>setActiveTab(e)}  tabs={tabList} />
      </View>
    </View>
  )
}

Index.config = {
  navigateBarTitleText: 'Tab标签'
}
