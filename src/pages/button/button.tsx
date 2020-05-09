import Taro, { useState } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { useSelector } from '@tarojs/redux';
import ThemeControl from '../themeControl';
import AButton from "../../components/button/index";

import "./button.scss";

export default function Index() {

  const themeStore = useSelector(s=>s.theme);

  const [loading, setLoading] = useState<boolean>(false);


  return (
    <View className={`page-padding ${themeStore.theme}`}>
      <View className="lister">
        <View className="desc">普通按钮，点击切换loading</View>
        <AButton
          className="btn"
          loading={loading}
          onClick={()=>setLoading(!loading)}
        >
          页面主操作
        </AButton>
      </View>
      <View className="lister">
        <View className="desc">普通按钮，loading状态</View>
        <AButton className="btn" loading={true}>
          页面主操作
        </AButton>
      </View>
      <View className="lister">
        <View className="desc">type="warn"</View>
        <AButton className="btn" type="warn">
          页面主操作
        </AButton>
      </View>
      <View className="lister">
        <View className="desc">type="warn",loading=true</View>
        <AButton className="btn" type="warn" loading={true}>
          页面主操作
        </AButton>
      </View>
      <View className="lister">
        <View className="desc">type="secondary"</View>
        <AButton className="btn" type="secondary">
          页面次要操作
        </AButton>
      </View>
      <View className="lister">
        <View className="desc">size="mini"</View>
        <AButton className="btn" size="mini">
          小按钮
        </AButton>
      </View>
      <View className="lister">
        <View className="desc">size="mini",type="warn"</View>
        <AButton className="btn" type="warn" size="mini">
          小按钮+警告
        </AButton>
      </View>
      <View className="lister">
        <View className="desc">size="mini",type="secondary"</View>
        <AButton className="btn" type="secondary" size="mini">
          小按钮+次要
        </AButton>
      </View>

      <View className="lister">
        <View className="desc pad">自定义颜色，bgColor="red", color="pink", loadingColor="blue",由于伪类无法动态，所以 :active颜色是固定css变量var(--ad-active-bg-color)</View>
        <AButton className="btn" bgColor="red" color="black" loadingColor="blue" loading={true}>
          自定义颜色
        </AButton>
      </View>

      <ThemeControl />
    </View>
  );
}

Index.config = {
  navigateBarTitleText: "按钮"
};
