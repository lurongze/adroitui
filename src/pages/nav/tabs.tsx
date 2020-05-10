import Taro, { useState } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { useSelector } from "@tarojs/redux";
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
  const tStore = useSelector(s => s.theme);
  const [activeTab, setActiveTab] = useState<string>(tabList[0].key);
  const [activeTab1, setActiveTab1] = useState<string>(tabList[0].key);
  const [activeTab2, setActiveTab2] = useState<string>(tabList[0].key);
  const [activeTab3, setActiveTab3] = useState<string>(tabList[0].key);

  // const tabActive =(e:string)=>{
  //   Taro.showToast({title:`触发了事件值：${e}`, icon:'none'});
  //   setActiveTab(e);
  // }

  return (
    <View className={`page-padding ${tStore.theme}`}>
      
      <View className="lister">
        <Text className="desc pad">点击自动滑动tab，选中的key值：{activeTab}</Text>
        <AdTabs
          active={activeTab}
          onClick={(e: string) => setActiveTab(e)}
          tabs={tabList}
          autoView={true}
        />
      </View>

      <View className="lister">
        <Text className="desc pad">点击不滑动tab\n选中的key值：{activeTab1}</Text>
        <AdTabs
          active={activeTab1}
          onClick={(e: string) => setActiveTab1(e)}
          tabs={tabList}
        />
      </View>

      <View className="lister">
        <Text className="desc pad">固定宽度width='25vw'\n设置固定宽度后，左右margin,padding将清零\n选中的key值：{activeTab2}</Text>
        <AdTabs
          active={activeTab2}
          width='25vw'
          onClick={(e: string) => setActiveTab2(e)}
          tabs={tabList}
        />
      </View>

      <View className="lister">
        <Text className="desc pad">点击当前选中时，仍然触发事件\n选中的key值：{activeTab3}</Text>
        <AdTabs
          active={activeTab3}
          onClick={(e: string) => setActiveTab3(e)}
          tabs={tabList}
          activeClick={true}
        />
      </View>

      <ThemeControl />
    </View>
  );
}

Index.config = {
  navigationBarTitleText: "Tab标签"
};
