import Taro, { useState } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import ThemeControl from "../themeControl";
import { AdRadio, AdRadioGroup } from "../../index";

export default function Index() {
  const [theme, setTheme] = useState(() => {
    return Taro.getStorageSync("theme") || "";
  });

  const groupList = [
    { key: "apple", text: "苹果", checked: false },
    { key: "huawei", text: "华为", checked: false },
    { key: "xiaomi", text: "小米", checked: false }
  ];

  const [checked, setChecked] = useState<boolean>(false);
  const [checkedKey, setCheckedKey] = useState<string>('');

  return (
    <View className={`page-padding ${theme}`}>
      <View className="lister">
        <View className="header">
          <Text>单选项样式</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdRadio checked={checked} onClick={() => setChecked(!checked)} text='单选项样式' />
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>不可点击</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdRadio checked={true} disabled={true} text='单选项样式' />
          <AdRadio checked={false} disabled={true} text='单选项样式' />
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>单选组，选中值：{checkedKey}</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdRadioGroup groupList={groupList} onChange={(e: string) => setCheckedKey(e)} checkedKey={checkedKey} />
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>不可点击组.</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdRadioGroup groupList={groupList} disabled={true} />
        </View>
      </View>


      <ThemeControl onClick={(e: string) => setTheme(e)} />
    </View>
  );
}

Index.config = {
  navigationBarTitleText: "Radio选项"
};
