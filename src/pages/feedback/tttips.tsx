import Taro, { useState } from "@tarojs/taro";
import { View, Block, Text } from "@tarojs/components";
import ThemeControl from "../themeControl";
import { AdToast, AdTooltips, AdButton } from "../../index";

export default function Index() {
  const [theme, setTheme] = useState(() => {
    return Taro.getStorageSync("theme") || "";
  });
  const [show, setShow] = useState<boolean>(false);
  const [show1, setShow1] = useState<boolean>(false);
  const [show2, setShow2] = useState<boolean>(false);
  const [show3, setShow3] = useState<boolean>(false);
  const [show4, setShow4] = useState<boolean>(false);
  const [show5, setShow5] = useState<boolean>(false);
  const [show6, setShow6] = useState<boolean>(false);

  return (
    <View className={`page-padding ${theme}`}>
      <View className="lister">
        <View className="header">
          <Text>普通使用</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdButton onClick={() => setShow(true)}>Toast</AdButton>
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>点击提前关闭</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdButton onClick={() => setShow1(true)}>Toast</AdButton>
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>不自动消失，响应点击事件</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdButton onClick={() => setShow2(true)}>Toast</AdButton>
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>Tooltips</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdButton onClick={() => setShow3(true)}>Tooltips</AdButton>
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>点击关闭</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdButton onClick={() => setShow4(true)}>Tooltips</AdButton>
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>警告</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdButton onClick={() => setShow5(true)}>Tooltips</AdButton>
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>成功</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdButton onClick={() => setShow6(true)}>Tooltips</AdButton>
        </View>
      </View>

      <Block>
        <AdToast
          show={show}
          onHide={() => setShow(false)}
          tapClose={true}
          title="我是一个Toast提示"
        />

        <AdToast
          show={show1}
          onHide={() => setShow1(false)}
          tapClose={true}
          title="我是一个Toast提示,点击提前关闭"
        />

        <AdToast
          show={show2}
          onHide={() => setShow2(false)}
          tapClose={true}
          autoClose={false}
          title="我是一个Toast提示,点击才关闭"
        />

        <AdTooltips
          show={show3}
          onHide={() => setShow3(false)}
          title="我是一个Tooltips提示"
        />

        <AdTooltips
          show={show4}
          onHide={() => setShow4(false)}
          title="我是一个Tooltips提示，点击才关闭"
          autoClose={false}
          tapClose={true}
        />

        <AdTooltips
          show={show5}
          onHide={() => setShow5(false)}
          title="我是一个Tooltips提示"
          type="warn"
        />

        <AdTooltips
          show={show6}
          onHide={() => setShow6(false)}
          title="我是一个Tooltips提示"
          type="success"
        />

        <ThemeControl onClick={(e: string) => setTheme(e)} />
      </Block>
    </View>
  );
}

Index.config = {
  navigationBarTitleText: "Toast和Tooltips"
};
