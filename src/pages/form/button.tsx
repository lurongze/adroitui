import Taro, { useState } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { useSelector } from '@tarojs/redux';
import ThemeControl from '../themeControl';
import AButton from "../../components/button/index";

export default function Index() {

  const themeStore = useSelector(s=>s.theme);

  const [loading, setLoading] = useState<boolean>(false);


  return (
    <View className={`page-padding ${themeStore.theme}`}>
      <View className="lister">
        <Text className="desc">普通按钮\n点击切换loading</Text>
        <AButton
          className="btn"
          loading={loading}
          onClick={()=>setLoading(!loading)}
        >
          页面主操作
        </AButton>
      </View>
      <View className="lister">
        <Text className="desc">普通按钮\nloading状态</Text>
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
        <Text className="desc">type="warn"\nloading=true</Text>
        <AButton className="btn" type="warn" loading={true}>
          页面主操作
        </AButton>
      </View>
      <View className="lister">
        <Text className="desc">type="secondary"</Text>
        <AButton className="btn" type="secondary">
          页面次要操作
        </AButton>
      </View>
      <View className="lister">
        <Text className="desc">size="mini"</Text>
        <AButton className="btn" size="mini">
          小按钮
        </AButton>
      </View>
      <View className="lister">
        <Text className="desc">size="mini"\ntype="warn"</Text>
        <AButton className="btn" type="warn" size="mini">
          小按钮+警告
        </AButton>
      </View>
      <View className="lister">
        <Text className="desc">size="mini"\ntype="secondary"</Text>
        <AButton className="btn" type="secondary" size="mini">
          小按钮+次要
        </AButton>
      </View>

      <View className="lister">
        <Text className="desc pad">自定义颜色\nbgColor="red"\ncolor="pink"\nloadingColor="blue"\n自定义背景色无法动态定义:active的颜色，如果需要的话，建议是给按钮加class修改样式</Text>
        <AButton className="btn" bgColor="red" color="black" loadingColor="blue" loading={true}>
          自定义颜色
        </AButton>
      </View>

      <ThemeControl />
    </View>
  );
}

Index.config = {
  navigationBarTitleText: "按钮"
};
