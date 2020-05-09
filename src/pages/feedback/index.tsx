import Taro, { useState } from "@tarojs/taro";
import { View, Block } from "@tarojs/components";
import {
  AdDialog,
  AdHCDialog,
  AdToast,
  AdTooltips,
  AdSpin,
  AdButton
} from "../../index";
import "./index.scss";

export default function Index() {
  const [dialog, setDialog] = useState<boolean>(false);
  const [hcDialog, setHcDialog] = useState<boolean>(false);
  const [toast, setToast] = useState<boolean>(false);
  const [tooltips, setTooltips] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>("");
  const toogleTheme = () => {
    setTheme(theme ? "" : "adpage");
  };

  return (
    <View className={theme}>
      <View className="lister">
        <View className="desc">点击可以切换主题，支持自定义颜色主题</View>
        <AdButton onClick={() => toogleTheme()}>切换主题{theme}</AdButton>
      </View>

      <AdSpin loading={theme.length>0} title='Loading...'>
        <View className="lister">
          <View className="desc">普通Dialog</View>
          <AdButton onClick={() => setDialog(true)}>Dialog</AdButton>
        </View>

        <View className="lister">
          <View className="desc">普通半屏Dialog</View>
          <AdButton onClick={() => setHcDialog(true)}>AdHCDialog</AdButton>
        </View>
      </AdSpin>

      <View className="lister">
        <View className="desc">Toast</View>
        <AdButton onClick={() => setToast(true)}>Toast</AdButton>
      </View>

      <View className="lister">
        <View className="desc">Tooltips</View>
        <AdButton onClick={() => setTooltips(true)}>Tooltips</AdButton>
      </View>

      <Block>
        <AdDialog show={dialog} onHide={() => setDialog(false)} />
        <AdHCDialog
          show={hcDialog}
          onHide={() => setHcDialog(false)}
          noHeader={true}
        >
          我是半屏组件里面的自定义内容
        </AdHCDialog>
        <AdToast
          show={toast}
          onHide={() => setToast(false)}
          title="这是一个toast"
        />
        <AdTooltips
          show={tooltips}
          onHide={() => setTooltips(false)}
          title="你打开了tooltips"
        />
      </Block>
    </View>
  );
}

Index.config = {
  navigateBarTitleText: "Tab标签"
};
