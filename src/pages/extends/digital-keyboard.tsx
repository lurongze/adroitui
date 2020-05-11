import Taro, { useState } from "@tarojs/taro";
import { View, Block, Text } from "@tarojs/components";
import ThemeControl from "../themeControl";
import { AdDigitalKeyboard, AdButton } from "../../index";

export default function Index() {
  const [theme, setTheme] = useState(() => {
    return Taro.getStorageSync("theme") || "";
  });
  const [show, setShow] = useState<boolean>(false);
  const [show1, setShow1] = useState<boolean>(false);
  const [show2, setShow2] = useState<boolean>(false);
  const resCode = (e:number)=>{
    Taro.showToast({title:`输入数字为：${e}`, icon:'none'});
  }
  return (
    <View className={`page-padding ${theme}`}>
      <View className="lister">
        <View className="header">
          <Text>数字键盘</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdButton onClick={() => setShow(true)}>4位数字</AdButton>
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>输完响应事件</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdButton onClick={() => setShow1(true)}>6位数字</AdButton>
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>显示圆点</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdButton onClick={() => setShow2(true)}>数字键盘</AdButton>
        </View>
      </View>

      <Block>
        <AdDigitalKeyboard
          show={show}
          onHide={() => setShow(false)}
        />

        <AdDigitalKeyboard
          length={6}
          show={show1}
          onHide={() => setShow1(false)}
          onComplete={(e:number) => {setShow1(false);resCode(e);}}
        />

        <AdDigitalKeyboard
          show={show2}
          showNum={false}
          onComplete={(e:number) => resCode(e)}
          onHide={() => setShow2(false)}
        />
        <ThemeControl onClick={(e: string) => setTheme(e)} />
      </Block>
    </View>
  );
}

Index.config = {
  navigationBarTitleText: "数字键盘"
};
