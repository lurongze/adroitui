import Taro, { useState } from "@tarojs/taro";
import { View, Block, Text } from "@tarojs/components";
import ThemeControl from "../themeControl";
import { useSelector } from "@tarojs/redux";
import {
  AdSpin,
  AdButton
} from "../../index";

export default function Index() {
  const themeStore = useSelector(s => s.theme);
  const [show, setShow] = useState<boolean>(false);
  const [show1, setShow1] = useState<boolean>(false);
  const [show2, setShow2] = useState<boolean>(false);

  return (
    <View className={`page-padding ${themeStore.theme}`}>

      <View className="lister">
        <AdSpin loading={show}>
          <Text className="desc pad">
            最简单使用，一般肯定不超过全屏幕的时候用
            loading='boolean'\n
          </Text>
        </AdSpin>
        <AdButton onClick={() => setShow(!show)}>{show ? '取消spin' : '激活spin'}</AdButton>
      </View>

      <View className="lister">
        <AdSpin loading={show1} onClick={() => setShow1(false)} title='Loading...'>
          <Text className="desc pad">
            点击spin 关闭，
            响应事件onClick即可\n
            自定义文字\n
            title='Loading...'
          </Text>
        </AdSpin>
        <AdButton onClick={() => setShow1(true)}>激活spin</AdButton>
      </View>

      <View className="lister">
        <AdSpin loading={show2} onClick={() => setShow2(false)} title='Loading...' fullscreen={true}>
          <Text className="desc pad">
            当内容很长的时候，使用全屏Spin\n
            fullscreen='boolean'\n
          </Text>
        </AdSpin>
        <AdButton onClick={() => setShow2(true)}>激活spin</AdButton>
      </View>


      <ThemeControl />
    </View>
  );
}

Index.config = {
  navigationBarTitleText: "Spin组件"
};
