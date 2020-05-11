import Taro, { useState } from "@tarojs/taro";
import { View, Block, Text } from "@tarojs/components";
import ThemeControl from "../themeControl";
import {
  AdHCDialog,
  AdButton
} from "../../index";

export default function Index() {
  const [theme, setTheme] = useState(()=>{return Taro.getStorageSync('theme') || ''});
  const [show, setShow] = useState<boolean>(false);


  const clickItem = (e: string) => {
    Taro.showToast({ title: `你点击了key:${e}`, icon: "none" });
  }
  return (
    <View className={`page-padding ${theme}`}>

      <View className="lister">
        <Text className="desc pad">
          onClickItem="function"\n 返回key：'main主按钮'|'secondary次按钮'|'more右上角更多图标'\n
          onHide="function"
        </Text>
        <AdButton onClick={() => setShow(true)}>普通使用</AdButton>
      </View>


      <Block>
        <AdHCDialog
          show={show}
          onHide={() => setShow(false)}
          onClickItem={(e: string) => clickItem(e)}
        >
          我是半屏组件里面的内容
        </AdHCDialog>

        <ThemeControl onClick={(e:string)=>setTheme(e)} />
      </Block>
    </View>
  );
}

Index.config = {
  navigationBarTitleText: "自定义主题色"
};
