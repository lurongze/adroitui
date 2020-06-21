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
        <View className="show-area" style={{ display: 'inline-block' }}>
          <AdAlert scroll text='从1990年代初HTML被发明开始样式表就以各种形式出bai现了，不同的浏览器结合du了它们各自的样式语言，读zhi者可以使用这些样式语言来调节网页的显示方式。一开始样式表是给读者用的，最初的HTML版本只含有很少的显示属性，读者来决定网页应该怎样被显示。' />
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>不显示图标，关闭图标</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area" style={{ display: 'inline-block' }}>
          <AdAlert showClose={false} showIcon={false} />
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>点击不可关闭</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area" style={{ display: 'inline-block' }}>
          <AdAlert showClose={false} showIcon={false} tapClose={false} />
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>点击事件</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdAlert showClose={false} showIcon={false} tapClose={false} onClick={() => Taro.showToast({ title: '点击了', icon: 'none' })} />
        </View>
      </View>


    </View>
  );
}

Index.config = {
  navigationBarTitleText: "Alert组件"
};
