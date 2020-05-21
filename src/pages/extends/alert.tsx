import Taro, { useState } from "@tarojs/taro";
import { View, Text, Block } from "@tarojs/components";
import { AdAlert } from "../../index";

export default function Index() {
  const [theme] = useState(() => {
    return Taro.getStorageSync("theme") || "";
  });

  return (
    <View className={`page-padding ${theme}`}>
      <View className="lister">
        <View className="header">
          <Text>Alert组件</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <View>-----------------------------------------------------------------</View>
          <AdAlert />
          <View>-----------------------------------------------------------------</View>
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>不显示图标，关闭图标</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdAlert showClose={false} showIcon={false} />
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>点击不可关闭</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdAlert showClose={false} showIcon={false} tapClose={false} />
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>点击事件</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdAlert showClose={false} showIcon={false} tapClose={false} onClick={()=>Taro.showToast({title:'点击了',icon:'none'})} />
        </View>
      </View>

      
    </View>
  );
}

Index.config = {
  navigationBarTitleText: "Alert组件"
};
