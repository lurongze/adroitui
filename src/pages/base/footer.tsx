import Taro, { useState } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AdFooter } from "../../index";

export default function Index() {
  const [theme] = useState(() => {
    return Taro.getStorageSync("theme") || "";
  });
  return (
    <View className={`page-padding ${theme}`}>
      <View className="lister">
        <View className="header">
          <Text>Footer组件</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdFooter text='Copyright © 2020-2020 Adroit UI' />
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>有底部链接</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdFooter onLinkClick={(e:string)=>Taro.showToast({title:'点击链接'+e, icon:'none'})} text='Copyright © 2020-2020 Adroit UI' linkList={[{text:'底部链接',link:'https://adroit-ui.io'},{text:'底部链接',link:'https://adroit1-ui.io'}]} />
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>自定义颜色</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdFooter color='red' linkColor='blue' onLinkClick={(e:string)=>Taro.showToast({title:'点击链接'+e, icon:'none'})} text='Copyright © 2020-2020 Adroit UI' linkList={[{text:'底部链接',link:'https://adroit-ui.io'},{text:'底部链接',link:'https://adroit1-ui.io'}]} />
        </View>
      </View>
    </View>
  );
}

Index.config = {
  navigationBarTitleText: "Footer组件"
};
