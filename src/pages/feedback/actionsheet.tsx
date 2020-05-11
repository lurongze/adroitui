import Taro, { useState } from "@tarojs/taro";
import { View, Block, Text } from "@tarojs/components";
import ThemeControl from "../themeControl";
import { AdActionSheet, AdButton } from "../../index";

export default function Index() {
  const [theme, setTheme] = useState(() => {
    return Taro.getStorageSync("theme") || "";
  });
  const actions = [
    { key: "buy", text: "购买" },
    { key: "book", text: "预约" },
    { key: "collect", text: "收藏" }
  ];
  const [show, setShow] = useState<boolean>(false);
  const [show1, setShow1] = useState<boolean>(false);

  const clickItem = (e: string) => {
    Taro.showToast({ title: `你点击了key:${e}`, icon: "none" });
  };
  return (
    <View className={`page-padding ${theme}`}>
      <View className="lister">
        <View className="header">
          <Text>ActionSheet组件</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdButton onClick={() => setShow(true)}>ActionSheet</AdButton>
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>点击隐藏+描述</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdButton onClick={() => setShow1(true)}>ActionSheet</AdButton>
        </View>
      </View>

      <Block>
        <AdActionSheet
          show={show}
          actions={actions}
          onHide={() => setShow(false)}
          onClickItem={(e: string) => clickItem(e)}
        />
        <AdActionSheet
          show={show1}
          actions={actions}
          onHide={() => setShow1(false)}
          onClickItem={(e: string) => clickItem(e)}
          clickHide={true}
          title="请选择一种方式"
        />
        <ThemeControl onClick={(e: string) => setTheme(e)} />
      </Block>
    </View>
  );
}

Index.config = {
  navigationBarTitleText: "ActionSheet组件"
};
