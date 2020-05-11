import Taro, { useState } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import ThemeControl from "../themeControl";
import AButton from "../../components/button/index";

export default function Index() {
  const [theme, setTheme] = useState(() => {
    return Taro.getStorageSync("theme") || "";
  });

  const [loading, setLoading] = useState<boolean>(false);

  return (
    <View className={`page-padding ${theme}`}>
      <View className="lister">
        <View className="header">
          <Text>普通按钮,点击切换loading</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AButton
            className="btn"
            loading={loading}
            onClick={() => setLoading(!loading)}
          >
            按钮
          </AButton>
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>普通按钮loading状态</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AButton className="btn" loading={true}>
            页面主操作
          </AButton>
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>警告状态</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AButton className="btn" type="warn">
            页面主操作
          </AButton>
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>次要操作</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AButton type="secondary">页面主操作</AButton>
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>小尺寸</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AButton className="btn" size="mini">
            按钮
          </AButton>
          <AButton className="btn" type="warn" size="mini">
            警告
          </AButton>
          <AButton className="btn" type="secondary" size="mini">
            次要
          </AButton>
        </View>
      </View>

        <View className="lister">
        <View className="header">
          <Text>自定义</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
        <AButton className="btn" bgColor="red" color="black" loadingColor="blue" loading={true}>
          自定义颜色
        </AButton>
        </View>
      </View>

      <ThemeControl onClick={(e: string) => setTheme(e)} />
    </View>
  );
}

Index.config = {
  navigationBarTitleText: "按钮"
};
