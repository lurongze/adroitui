import Taro, { useState } from "@tarojs/taro";
import { View, Block, Text } from "@tarojs/components";
import ThemeControl from "../themeControl";
import { AdHCDialog, AdButton } from "../../index";

export default function Index() {
  const [theme, setTheme] = useState(() => {
    return Taro.getStorageSync("theme") || "";
  });
  const [hcDialog, setHcDialog] = useState<boolean>(false);
  const [hcDialog1, setHcDialog1] = useState<boolean>(false);
  const [hcDialog2, setHcDialog2] = useState<boolean>(false);
  const [hcDialog3, setHcDialog3] = useState<boolean>(false);
  const [hcDialog4, setHcDialog4] = useState<boolean>(false);

  const clickItem = (e: string) => {
    Taro.showToast({ title: `你点击了key:${e}`, icon: "none" });
  };
  return (
    <View className={`page-padding ${theme}`}>
      <View className="lister">
        <View className="header">
          <Text>半屏组件</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdButton onClick={() => setHcDialog(true)}>半屏组件</AdButton>
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>自定义标题，描述，默认按钮文字</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdButton onClick={() => setHcDialog1(true)}>半屏组件</AdButton>
        </View>
      </View>

      <View className="lister">

        <View className="header">
          <Text>不显示默认按钮</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdButton onClick={() => setHcDialog2(true)}>半屏组件</AdButton>
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>无头部</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdButton onClick={() => setHcDialog3(true)}>半屏组件</AdButton>
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>JSX自定义内容，最高20vh,超出内容滚动</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdButton onClick={() => setHcDialog4(true)}>半屏组件</AdButton>
        </View>
      </View>

      <Block>
        <AdHCDialog
          show={hcDialog}
          onHide={() => setHcDialog(false)}
          onClickItem={(e: string) => clickItem(e)}
        >
          我是半屏组件里面的内容
        </AdHCDialog>

        <AdHCDialog
          show={hcDialog1}
          onHide={() => setHcDialog1(false)}
          title="自定义标题"
          desc="我是描述呀"
          mainBtnTxt="好的呀"
          secondaryBtnTxt="忽略掉"
          showMore={false}
          showClose={false}
        >
          自定义标题+我是描述呀+自定义按钮文字+不显示头部的关闭和更多图标
        </AdHCDialog>

        <AdHCDialog
          show={hcDialog2}
          onHide={() => setHcDialog2(false)}
          showBtns={false}
        >
          我是半屏组件里面的内容
        </AdHCDialog>

        <AdHCDialog
          show={hcDialog3}
          onHide={() => setHcDialog3(false)}
          showBtns={false}
          noHeader={true}
        >
          我是半屏组件里面的内容
        </AdHCDialog>

        <AdHCDialog
          show={hcDialog4}
          onHide={() => setHcDialog4(false)}
          showBtns={false}
          noHeader={true}
        >
          <Block>
            <AdButton>JSX内容</AdButton>
            {Array.from(new Array(100).keys()).map(item => {
              return <View key={item}>感谢你支持Adroit UI{item}</View>;
            })}
            <AdButton>JSX内容</AdButton>
          </Block>
        </AdHCDialog>

        <ThemeControl onClick={(e: string) => setTheme(e)} />
      </Block>
    </View>
  );
}

Index.config = {
  navigationBarTitleText: "半屏组件"
};
