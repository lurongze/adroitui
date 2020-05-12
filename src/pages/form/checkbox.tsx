import Taro, { useState } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import ThemeControl from "../themeControl";
import { AdCheckbox, AdCheckboxGroup } from "../../index";

export default function Index() {
  const [theme, setTheme] = useState(() => {
    return Taro.getStorageSync("theme") || "";
  });

  const [checked, setChecked] = useState<boolean>(false);

  return (
    <View className={`page-padding ${theme}`}>
      <View className="lister">
        <View className="header">
          <Text>多选项样式</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdCheckbox checked={checked} onClick={()=>setChecked(!checked)} text='多选项样式' />
        </View>
      </View>


      <View className="lister">
        <View className="header">
          <Text>不可点击</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdCheckbox disabled={true} checked={checked} onClick={()=>setChecked(!checked)} text='多选项样式' />
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>选项组</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
            <AdCheckboxGroup />
        </View>
      </View>

      <ThemeControl onClick={(e: string) => setTheme(e)} />
    </View>
  );
}

Index.config = {
  navigationBarTitleText: "按钮"
};
