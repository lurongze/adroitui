import Taro, { useState } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AdBadge } from "../../index";

export default function Index() {
  const [theme] = useState(() => {
    return Taro.getStorageSync("theme") || "";
  });
  return (
    <View className={`page-padding ${theme}`}>
      <View className="lister">
        <View className="header">
          <Text>Badge组件</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdBadge text="1" />
          <AdBadge text="45" />
          <AdBadge text="455" />
          <AdBadge text="Badge组件" />
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>自定义颜色</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area" style={{ justifyContent: "span-evenly" }}>
          <AdBadge text="1" color="black" />
          <AdBadge text="45" color="yellow" bgColor="black" />
          <AdBadge text="455" color="yellow" />
          <AdBadge text="Badge组件" color="yellow" bgColor="bxx" />
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>点击事件</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area" style={{ justifyContent: "span-evenly" }}>
          <AdBadge
            onClick={() =>
              Taro.showToast({ title: "点击了Badge", icon: "none" })
            }
            text="Badge组件"
            color="yellow"
          />
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>点击效果</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area" style={{ justifyContent: "span-evenly" }}>
          <AdBadge text="Badge组件" tapActive={true} />
        </View>
      </View>
    </View>
  );
}

Index.config = {
  navigationBarTitleText: "Badge组件"
};
