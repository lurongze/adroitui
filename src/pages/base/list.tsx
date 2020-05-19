import Taro, { useState } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AdList } from "../../index";

export default function Index() {
  const [theme] = useState(() => {
    return Taro.getStorageSync("theme") || "";
  });
  return (
    <View className={`page-padding ${theme}`}>
      <View className="lister">
        <View className="header">
          <Text>List组件</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdList />
        </View>
      </View>

      
      
    </View>
  );
}

Index.config = {
  navigationBarTitleText: "List组件"
};
