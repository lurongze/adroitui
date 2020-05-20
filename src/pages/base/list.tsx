import Taro, { useState } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AdList, AdMessageList } from "../../index";
interface listItemType {
  icon?: string;
  title: string;
  badgeText?: string;
  link?: string;
  badgeBgColor?: string;
  badgeColor?: string;
}

interface msgListItemType {
  avatar?: string; // 图标
  nickname: string; //  昵称
  message?: string; // 内容
  messageNum?: number; // 消息数量
  time?: string; // 时间
  link: string; // 必须是唯一值，点击事件会返回该值
}
export default function Index() {
  const [theme] = useState(() => {
    return Taro.getStorageSync("theme") || "";
  });
  const imageURL =
    "http://p3.pstatp.com/large/pgc-image/16c9b84246b44cc38daaa12128a7b862";
  const list: Array<listItemType> = [
    {
      icon: imageURL,
      title: "我的钱包",
      badgeText: "",
      link: "/pages/adroit/ui"
    },
    {
      icon: imageURL,
      title: "科技",
      badgeText: "科学科普",
      badgeBgColor: "#00CC33",
      badgeColor: "#888888",
      link: "/pages/adroit/ui1"
    },
    {
      icon: imageURL,
      title: "放映厅",
      badgeText: "电影/纪律片",
      badgeBgColor: "#33FFCC",
      badgeColor: "#888888",
      link: "/pages/adroit/ui1"
    },
    {
      icon: imageURL,
      title: "数码",
      badgeText: "电脑装机",
      badgeBgColor: "#33FFFF",
      badgeColor: "#888888",
      link: "/pages/adroit/ui1"
    },
    {
      icon: imageURL,
      title: "番剧",
      badgeText: "连载动漫",
      badgeBgColor: "#CC33CC",
      badgeColor: "#888888",
      link: "/pages/adroit/ui1"
    }
  ];

  const msgList: Array<msgListItemType> = [
    {
      avatar: imageURL,
      nickname: 'LLDMZ',
      message: '今晚有空吗？',
      messageNum: 6,
      time: '12:13',
      link: "/pages/adroit/ui"
    },
    {
      avatar: imageURL,
      nickname: '柠萌',
      message: '明天上班记得把Adroit的功能完善了',
      messageNum: 15,
      time: '12:13',
      link: "/pages/adroit/ui1"
    },
    {
      avatar: imageURL,
      nickname: '冷冷的萌着',
      message: '大师局，来不来？',
      messageNum: 222,
      time: '昨天',
      link: "/pages/adroit/ui1"
    },
    {
      avatar: imageURL,
      nickname: '下雨不打伞',
      message: '听说附近开了家好吃的西餐店，周末有空一起去试一试吧，记得带上钱包',
      messageNum: 1,
      time: '12:13',
      link: "/pages/adroit/ui1"
    },
    {
      avatar: imageURL,
      nickname: '会跑步的鱼',
      message: '我是一条会跑步的鱼',
      messageNum: 2,
      time: '12:13',
      link: "/pages/adroit/ui1"
    }
  ];
  const handleClick = (e: string) => {
    Taro.showToast({
      title: `影响点击：${e}`,
      icon: "none"
    });
  };
  return (
    <View className={`page-padding ${theme}`}>
      <View className="lister">
        <View className="header">
          <Text>List组件</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdList list={list} onClick={(e: string) => handleClick(e)} />
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>MessageList组件</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdMessageList list={msgList} onClick={(e: string) => handleClick(e)} />
        </View>
      </View>
    </View>
  );
}

Index.config = {
  navigationBarTitleText: "List组件"
};
