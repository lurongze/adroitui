import Taro, { useState } from "@tarojs/taro";
import { View, Icon, Text } from "@tarojs/components";
import "./index.scss";

export default function Index() {
  const list = [
    {
      title: "表单",
      key: "form",
      list: [
        { title: "按钮", path: "/pages/button/button" },
        { title: "Tab标签", path: "/pages/tabs/index" }
      ]
    },
    {
      title: "操作反馈",
      key: "feedback",
      list: [
        { title: "Dialog", path: "/pages/button/button" },
        { title: "ActionSheet", path: "/pages/button/button" },
        { title: "HalfScreenDialog", path: "/pages/button/button" }
      ]
    }
  ];
  const [openKey, setOpenKey] = useState("base");
  const toogleOpen = (tapKey:string)=>{
    if(tapKey === openKey){
      setOpenKey('');
    } else {
      setOpenKey(tapKey);
    }
  }

  const toPage = (pagePath:string){
    Taro.navigateTo({
      url: pagePath
    });
  }

  return (
    <View className="body">
      <View className="title">Adroit UI 组件库</View>
      <View className="description">一个微信风格的UI组件库</View>

      {list.map((item: any) => {
        return (
          <View className="module-list" key={item.title}>
            <View className={`header ${item.key === openKey?'open':''}`} onClick={() => toogleOpen(item.key)}>
              <Text>{item.title}</Text>
              <Icon size="20" type="success" />
            </View>
            <View
              className={`components ${item.key === openKey?'open'+item.list.length:''}`}
            >
              {item.list.map((sitem: any) => {
                return (
                  <View className="component-list" key={sitem.title} onClick={()=>toPage(sitem.path)}>
                    <Text>{sitem.title}</Text>
                    <Icon size="20" type="success" />
                  </View>
                );
              })}
            </View>
          </View>
        );
      })}
    </View>
  );
}

Index.confing = {
  navigationBarTitleText: "首页"
};
