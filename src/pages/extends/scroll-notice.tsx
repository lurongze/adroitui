import Taro, { useState } from "@tarojs/taro";
import { View, Text, Block } from "@tarojs/components";
import { AdScrollNotice } from "../../index";

export default function Index() {
  const [theme] = useState(() => {
    return Taro.getStorageSync("theme") || "";
  });

  return (
    <View className={`page-padding ${theme}`}>
      <View className="lister">
        <View className="header">
          <Text>左边弹出</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdScrollNotice />
          
        </View>
      </View>

      
    </View>
  );
}

Index.config = {
  navigationBarTitleText: "滚动消息组件"
};
