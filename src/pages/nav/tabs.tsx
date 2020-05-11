import Taro, { useState } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import ThemeControl from "../themeControl";
import { AdTabs } from "../../index";

export default function Index() {
  const tabList = [
    { title: "热门", key: "hot" },
    { title: "娱乐", key: "entertainment" },
    { title: "体育", key: "tiyu" },
    { title: "我是一个非常长的tab名称", key: "longtext" },
    { title: "国内", key: "guonei" },
    { title: "财经", key: "econemy" },
    { title: "科技", key: "science" },
    { title: "教育", key: "jy" },
    { title: "汽车", key: "cart" }
  ];
  const [theme, setTheme] = useState(() => {
    return Taro.getStorageSync("theme") || "";
  });
  const [activeTab, setActiveTab] = useState<string>(tabList[0].key);
  const [activeTab1, setActiveTab1] = useState<string>(tabList[0].key);
  const [activeTab2, setActiveTab2] = useState<string>(tabList[0].key);
  const [activeTab3, setActiveTab3] = useState<string>(tabList[0].key);

  // const tabActive =(e:string)=>{
  //   Taro.showToast({title:`触发了事件值：${e}`, icon:'none'});
  //   setActiveTab(e);
  // }

  return (
    <View className={`page-padding ${theme}`}>
      <View className="lister">
        <View className="header">
          <Text>点击自动滑动，选中的key值：{activeTab}</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdTabs
            active={activeTab}
            onClick={(e: string) => setActiveTab(e)}
            tabs={tabList}
            autoView={true}
          />
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>点击不滑动，选中的key值：{activeTab1}</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdTabs
            active={activeTab1}
            onClick={(e: string) => setActiveTab1(e)}
            tabs={tabList}
          />
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>固定宽度，选中的key值：{activeTab2}</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdTabs
            active={activeTab2}
            width="25vw"
            onClick={(e: string) => setActiveTab2(e)}
            tabs={tabList}
          />
        </View>
      </View>

      <View className="lister">
        <View className="header">
          <Text>点击当前选中时，仍然触发事件，选中的key值：{activeTab3}</Text>
          <View className="left-line"></View>
        </View>
        <View className="show-area">
          <AdTabs
            active={activeTab3}
            onClick={(e: string) => setActiveTab3(e)}
            tabs={tabList}
            activeClick={true}
          />
        </View>
      </View>

      <ThemeControl onClick={(e: string) => setTheme(e)} />
    </View>
  );
}

Index.config = {
  navigationBarTitleText: "Tab标签"
};
