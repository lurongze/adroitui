import Taro, { useState } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AdList } from "../../index";
interface listItemType {
  icon?: string, // 图标
  title: string, //  标题
  badgeText?: string, // 副标题
  link?: string, // 点击链接或其他，点击事件会返回改值
  badgeBgColor?: string, // 副标题背景色, 会覆盖外面的配置
  badgeColor?: string, // 副标题文字颜色, 会覆盖外面的配置
}
export default function Index() {
  const [theme] = useState(() => {
    return Taro.getStorageSync("theme") || "";
  });
  const list: Array<listItemType> = [
    {
      icon: 'http://p3.pstatp.com/large/pgc-image/16c9b84246b44cc38daaa12128a7b862',
      title: '我的钱包',
      badgeText: '',
      link: '/pages/adroit/ui'
    },
    {
      icon: 'http://p3.pstatp.com/large/pgc-image/16c9b84246b44cc38daaa12128a7b862',
      title: '科技',
      badgeText: '科学科普',
      badgeBgColor:'#00CC33',
      badgeColor:'#888888',
      link: '/pages/adroit/ui1'
    },
    {
      icon: 'http://p3.pstatp.com/large/pgc-image/16c9b84246b44cc38daaa12128a7b862',
      title: '放映厅',
      badgeText: '电影/纪律片',
      badgeBgColor:'#33FFCC',
      badgeColor:'#888888',
      link: '/pages/adroit/ui1'
    },
    {
      icon: 'http://p3.pstatp.com/large/pgc-image/16c9b84246b44cc38daaa12128a7b862',
      title: '数码',
      badgeText: '电脑装机',
      badgeBgColor:'#33FFFF',
      badgeColor:'#888888',
      link: '/pages/adroit/ui1'
    },
    {
      icon: 'http://p3.pstatp.com/large/pgc-image/16c9b84246b44cc38daaa12128a7b862',
      title: '番剧',
      badgeText: '连载动漫',
      badgeBgColor:'#CC33CC',
      badgeColor:'#888888',
      link: '/pages/adroit/ui1'
    }
  ];
  const handleClick=(e:string)=>{
    Taro.showToast({
      title:`影响点击：${e}`,
      icon: 'none'
    })
  }
  return (
    <View className={`page-padding ${theme}`}>
      <View className="lister">
        <View className="header">
          <Text>List组件</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdList list={list} onClick={(e:string)=>handleClick(e)} />
        </View>
      </View>



    </View>
  );
}

Index.config = {
  navigationBarTitleText: "List组件"
};
