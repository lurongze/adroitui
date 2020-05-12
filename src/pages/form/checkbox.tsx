import Taro, { useState } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import ThemeControl from "../themeControl";
import { AdCheckbox, AdCheckboxGroup } from "../../index";

export default function Index() {
  const [theme, setTheme] = useState(() => {
    return Taro.getStorageSync("theme") || "";
  });

  const [groupList, setGroupList] = useState([]);

  // const groupList = [
  //   { key: "apple", text: "苹果", checked: false },
  //   { key: "huawei", text: "华为", checked: false },
  //   { key: "xiaomi", text: "小米", checked: false }
  // ];
  // const groupList = [];
  setTimeout(()=>{
    setGroupList( [
      { key: "apple", text: "苹果", checked: false },
      { key: "huawei", text: "华为", checked: false },
      { key: "xiaomi", text: "小米", checked: false }
    ])
  }, 4000)

  const [checked, setChecked] = useState<boolean>(false);
  const [checkedArray, setCheckedArray] = useState<Array<string>>([]);

  const handleChange = (checkedArr: Array<string>) => {
    console.log(checkedArr);
    setCheckedArray(checkedArr);
  }

  return (
    <View className={`page-padding ${theme}`}>
      <View className="lister">
        <View className="header">
          <Text>多选项样式</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdCheckbox checked={checked} onClick={() => setChecked(!checked)} text='多选项样式' />
        </View>
      </View>


      <View className="lister">
        <View className="header">
          <Text>不可点击</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdCheckbox disabled={true} checked={false} onClick={() => setChecked(!checked)} text='多选项样式' />
          <AdCheckbox disabled={true} checked={true} onClick={() => setChecked(!checked)} text='多选项样式' />
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>选项组,选中项为：['{checkedArray.join("','")}']</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdCheckboxGroup groupList={groupList} onChange={(checkedArr: Array<string>) => handleChange(checkedArr)} />
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>选项组, 不可点击</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdCheckboxGroup groupList={groupList} disabled={true} />
        </View>
      </View>

      <ThemeControl onClick={(e: string) => setTheme(e)} />
    </View>
  );
}

Index.config = {
  navigationBarTitleText: "Checkbox选项"
};
