import Taro, { useState } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { useSelector } from "@tarojs/redux";
import ThemeControl from "../themeControl";
import { AdTabs } from "../../index";

import "./index.scss";

export default function Index() {
  const tabList = [
    { title: "热门", key: "hot" },
    { title: "娱乐", key: "entertainment" },
    { title: "体育", key: "tiyu" },
    { title: "国内", key: "guonei" },
    { title: "财经", key: "econemy" },
    { title: "科技", key: "science" },
    { title: "教育", key: "jy" },
    { title: "汽车", key: "cart" }
  ];
  const tStore = useSelector(s => s.theme);
  const [activeTab, setActiveTab] = useState<string>(tabList[0].key);

  const tabActive =(e:string)=>{
    Taro.showToast({title:`触发了事件值：${e}`, icon:'none'});
    setActiveTab(e);
  }

  return (
    <View className={tStore.theme}>
      <View className="lister">
        <View className="desc">
          <View>tabs:</View>
        </View>
      </View>
      <View className="lister">
        <View className="desc">点击自动滑动tab，选中的key值：{activeTab}</View>
        <AdTabs
          active={activeTab}
          onClick={(e: string) => tabActive(e)}
          tabs={tabList}
          autoView={true}
        />
      </View>

      <View className="lister">
        <View className="desc">点击不滑动tab，选中的key值：{activeTab}</View>
        <AdTabs
          active={activeTab}
          onClick={(e: string) => tabActive(e)}
          tabs={tabList}
        />
      </View>

      <View className="lister">
        <View className="desc">点击当前选中时，仍然触发事件</View>
        <AdTabs
          active={activeTab}
          onClick={(e: string) => tabActive(e)}
          tabs={tabList}
          activeClick={true}
        />
      </View>

      <ThemeControl />
    </View>
  );
}

Index.config = {
  navigateBarTitleText: "Tab标签"
};
