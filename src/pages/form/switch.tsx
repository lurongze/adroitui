import Taro, { useState } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import ThemeControl from "../themeControl";
import { AdSwitch } from "../../index";

export default function Index() {
  const [theme, setTheme] = useState(() => {
    return Taro.getStorageSync("theme") || "";
  });

  const [checked, setChecked] = useState<boolean>(false);
  const [checked2, setChecked2] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSwitch = ()=>{
    if(!loading){
      setLoading(true);
      setTimeout(()=>{
        setChecked2(!checked2);
        setLoading(false);
      }, 1000)
    }
  }

  return (
    <View className={`page-padding ${theme}`}>
      <View className="lister">
        <View className="header">
          <Text>Switch选项,点击切换：{checked?'选中':'不选中'}</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdSwitch checked={checked} onClick={()=>setChecked(!checked)} />
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>不可点击</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdSwitch disabled={true} checked={false} />
          <AdSwitch disabled={true} checked={true} />
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>点击Loading状态</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdSwitch loading={loading} checked={checked2} onClick={()=>handleSwitch()} />
        </View>
      </View>



      <ThemeControl onClick={(e: string) => setTheme(e)} />
    </View>
  );
}

Index.config = {
  navigationBarTitleText: "Switch切换"
};
