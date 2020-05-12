import Taro, { useState } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AdArrow } from "../../index";

export default function Index() {
  const [theme] = useState(() => {
    return Taro.getStorageSync("theme") || "";
  });
  return (
    <View className={`page-padding ${theme}`}>
      <View className="lister">
        <View className="header">
          <Text>箭头</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdArrow />
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>各个方向</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdArrow direct='left' />
          <AdArrow direct='right' />
          <AdArrow direct='down' />
          <AdArrow direct='up' />
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>箭头颜色</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdArrow direct='left' color='red' />
          <AdArrow direct='right' color='green' />
          <AdArrow direct='down' color='yellow' />
          <AdArrow direct='up' color='black' />
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>背景颜色</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdArrow direct='left' bgColor='red' />
          <AdArrow direct='right' color='green' bgColor='yellow' />
          <AdArrow direct='down' bgColor='yellow' />
          <AdArrow direct='up' color='black' bgColor='yellow' />
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>透明背景</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdArrow direct='left' color='red' bgColor='transparent' />
          <AdArrow direct='right' color='green' bgColor='transparent' />
          <AdArrow direct='down' color='yellow' bgColor='transparent' />
          <AdArrow direct='up' color='black' bgColor='transparent' />
        </View>
      </View>
      
    </View>
  );
}

Index.config = {
  navigationBarTitleText: "箭头组件"
};
