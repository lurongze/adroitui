import Taro, { useState } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AdDivider } from "../../index";

export default function Index() {
  const [theme] = useState(() => {
    return Taro.getStorageSync("theme") || "";
  });
  return (
    <View className={`page-padding ${theme}`}>
      <View className="lister">
        <View className="header">
          <Text>Divider组件</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdDivider />
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>自定义文字</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdDivider text='到底了哈哈' />
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>显示Loading</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdDivider text='暂无数据' />
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>自定义颜色</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdDivider text='加载中' loading color='bisque' lineColor='gold' />
        </View>
      </View>

      
    </View>
  );
}

Index.config = {
  navigationBarTitleText: "Divider组件"
};
