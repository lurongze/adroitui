import Taro, { useState } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AdButton } from '../../index';

export default function Index() {
  const [theme] = useState(() => {
    return Taro.getStorageSync("theme") || "";
  });
  const handleTheme = ()=>{
    if(theme!== ''){
      Taro.setStorageSync("theme", "");
    } else {
      Taro.setStorageSync("theme", "adpage");
    }
    Taro.reLaunch({url:'/pages/index'});
  }
  return (
    <View className={`page-padding ${theme}`}>
      <View className="lister">
        <View className="header">
          <Text>自定义主题色</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
        <Text className="desc pad">
          Adroit UI 的主题色和一些字体等的值，都是使用css3中的var变量，主题色是var(--ad-main-color),通过在app.scss中覆盖默认的值，可以很容易的使用自定义的主题色。
        </Text>
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>切换成绿色/蓝色主题</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdButton onClick={() => handleTheme()}>切换主题</AdButton>
        </View>
      </View>
    </View>
  );
}

Index.config = {
  navigationBarTitleText: "自定义主题色"
};
