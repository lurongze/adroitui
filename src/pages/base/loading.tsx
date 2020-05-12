import Taro, { useState } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AdLoading } from "../../index";

export default function Index() {
  const [theme] = useState(() => {
    return Taro.getStorageSync("theme") || "";
  });
  return (
    <View className={`page-padding ${theme}`}>
      <View className="lister">
        <View className="header">
          <Text>Loading</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdLoading />
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>自定义颜色</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdLoading color='#E6A23C' />
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>自定义大小</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdLoading color='black' size='40px' />
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>自定义边框宽度</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdLoading color='black' size='50px' borderWidth='10px' />
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>加文字</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdLoading color='#E6A23C' text='加载中...' />
        </View>
      </View>
    </View>
  );
}

Index.config = {
  navigationBarTitleText: "Loading组件"
};
