import Taro, { useState } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import ThemeControl from "../themeControl";
import { AdSpin, AdButton } from "../../index";

export default function Index() {
  const [theme, setTheme] = useState(() => {
    return Taro.getStorageSync("theme") || "";
  });
  const [show, setShow] = useState<boolean>(false);
  const [show1, setShow1] = useState<boolean>(false);
  const [show2, setShow2] = useState<boolean>(false);

  return (
    <View className={`page-padding ${theme}`}>
      <View className="lister">
        <View className="header">
          <Text>Spin</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdSpin loading={show}>
            <View className="desc pad">
              我是被Spin组件包围的内容啦,我是被Spin组件包围的内容啦,我是被Spin组件包围的内容啦
            </View>
          </AdSpin>
          <AdButton onClick={() => setShow(!show)}>
            {show ? "取消spin" : "激活spin"}
          </AdButton>
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>点击Spin关闭</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdSpin
            loading={show1}
            onClick={() => setShow1(false)}
            title="Loading..."
          >
            <View className="desc pad">
              我是被Spin组件包围的内容啦,我是被Spin组件包围的内容啦,我是被Spin组件包围的内容啦
            </View>
          </AdSpin>
          <AdButton onClick={() => setShow1(true)}>激活spin</AdButton>
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>全屏Spin</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdSpin
            loading={show2}
            onClick={() => setShow2(false)}
            title="Loading..."
            fullscreen={true}
          />
          <AdButton onClick={() => setShow2(true)}>激活spin</AdButton>
        </View>
      </View>

      <ThemeControl onClick={(e: string) => setTheme(e)} />
    </View>
  );
}

Index.config = {
  navigationBarTitleText: "Spin组件"
};
