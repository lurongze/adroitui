import Taro, { useState } from "@tarojs/taro";
import { View, Text, Block } from "@tarojs/components";
import { AdTransitionDrawer, AdTransitionSlide, AdButton } from "../../index";

export default function Index() {
  const [theme] = useState(() => {
    return Taro.getStorageSync("theme") || "";
  });
  const [show, setShow] = useState<boolean>(false);
  const [show1, setShow1] = useState<boolean>(false);
  const [show2, setShow2] = useState<boolean>(false);
  const [show3, setShow3] = useState<boolean>(false);
  return (
    <View className={`page-padding ${theme}`}>
      <View className="lister">
        <View className="header">
          <Text>左边弹出</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdButton onClick={() => setShow(true)}>Drawer</AdButton>
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>右边弹出</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdButton onClick={() => setShow1(true)}>Drawer</AdButton>
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>下边弹出</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdButton onClick={() => setShow2(true)}>Drawer</AdButton>
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>上边弹出</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdButton onClick={() => setShow3(true)}>Drawer</AdButton>
        </View>
      </View>

      <Block>
        <AdTransitionDrawer show={show} onHide={() => setShow(false)}>
          <View
            style={{ width: "50vw", height: "100vh", background: "#ffffff" }}
          >
            我是左边弹出来的Drawer
          </View>
        </AdTransitionDrawer>
        <AdTransitionDrawer
          show={show1}
          direction="right"
          onHide={() => setShow1(false)}
        >
          <View
            style={{ width: "50vw", height: "100vh", background: "#ffffff" }}
          >
            我是右边弹出来的Drawer
          </View>
        </AdTransitionDrawer>
        <AdTransitionSlide show={show2} onHide={() => setShow2(false)}>
          <View
            style={{ width: "100vw", height: "30vh", background: "#ffffff" }}
          >
            我是下边弹出来的Drawer
          </View>
        </AdTransitionSlide>

        <AdTransitionSlide
          show={show3}
          direction="top"
          onHide={() => setShow3(false)}
        >
          <View
            style={{ width: "100vw", height: "30vh", background: "#ffffff" }}
          >
            我是上边弹出来的Drawer
          </View>
        </AdTransitionSlide>
      </Block>
    </View>
  );
}

Index.config = {
  navigationBarTitleText: "Drawer组件"
};
