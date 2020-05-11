import Taro, { useState } from "@tarojs/taro";
import { View, Block, Text } from "@tarojs/components";
import ThemeControl from "../themeControl";
import { AdDialog, AdButton } from "../../index";

export default function Index() {
  const [theme, setTheme] = useState(() => {
    return Taro.getStorageSync("theme") || "";
  });
  const [dialog, setDialog] = useState<boolean>(false);
  const [dialog1, setDialog1] = useState<boolean>(false);
  const [dialog2, setDialog2] = useState<boolean>(false);
  const [dialog3, setDialog3] = useState<boolean>(false);

  const clickDailog = () => {
    Taro.showToast({ title: `你点击了确定按钮`, icon: "none" });
  };

  const clickCancel = () => {
    Taro.showToast({ title: `你点击了取消按钮`, icon: "none" });
  };

  return (
    <View className={`page-padding ${theme}`}>
      <View className="lister">
        <View className="header">
          <Text>Dialog弹框</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdButton onClick={() => setDialog(true)}>Dialog弹框</AdButton>
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>不显示取消按钮,内容居中</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdButton onClick={() => setDialog1(true)}>Dialog弹框</AdButton>
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>自定义文字</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdButton onClick={() => setDialog2(true)}>Dialog弹框</AdButton>
        </View>
      </View>

      <View className="lister">

        <View className="header">
          <Text>自定义JSX内容，超出滚动</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdButton onClick={() => setDialog3(true)}>Dialog弹框</AdButton>
        </View>
      </View>

      <Block>
        <AdDialog
          show={dialog}
          onHide={() => setDialog(false)}
          onConfirm={() => clickDailog()}
          onCancel={() => clickCancel()}
        >
          感谢你支持Adroit UI
        </AdDialog>
        <AdDialog
          show={dialog1}
          showClose={false}
          textAlign="center"
          content="单纯的文字，可以content传入，textAlign设置文字对齐方式"
          onHide={() => setDialog1(false)}
        ></AdDialog>
        <AdDialog
          show={dialog2}
          onHide={() => setDialog2(false)}
          title="自定义标题"
          cancelText="忽+略"
          confirmText="提+交"
        >
          感谢你支持Adroit UI
        </AdDialog>
        <AdDialog
          show={dialog3}
          onHide={() => setDialog3(false)}
          maxHeight="50vh"
        >
          <View>
            <AdButton>JSX按钮</AdButton>
            {Array.from(new Array(100).keys()).map(item => {
              return <View key={item}>感谢你支持Adroit UI{item}</View>;
            })}
            <AdButton>JSX按钮</AdButton>
          </View>
        </AdDialog>
        <ThemeControl onClick={(e: string) => setTheme(e)} />
      </Block>
    </View>
  );
}

Index.config = {
  navigationBarTitleText: "Dialog弹框"
};
