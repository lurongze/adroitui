import Taro, { useState } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import ThemeControl from "../themeControl";
import { useSelector } from "@tarojs/redux";
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
        { title: "Dialog弹框", path: "/pages/feedback/dialog" },
        { title: "ActionSheet弹框", path: "/pages/feedback/actionsheet" },
        { title: "HalfScreenDialog弹框", path: "/pages/feedback/hc-dialog" },
        { title: "Toast+Tooltips提示", path: "/pages/feedback/tttips" },
        { title: "Spin加载", path: "/pages/feedback/spin" }
      ]
    }
  ];
  const themeStore = useSelector(s => s.theme);
  const [openKey, setOpenKey] = useState("base");
  const toogleOpen = (tapKey: string) => {
    if (tapKey === openKey) {
      setOpenKey('');
    } else {
      setOpenKey(tapKey);
    }
  }

  const toPage = (pagePath: string){
    Taro.navigateTo({
      url: pagePath
    });
  }

  return (
    <View className={`body ${themeStore.theme}`}>
      <View className="title">Adroit UI 组件库</View>
      <Text className="description">
        一个基于Taro框架的简单UI组件库,风格参考微信小程序设计指南和其他一些优秀UI库。\n
        组件仍然在不断开发中，预计5月底~6月中把使用文档写出来后，会同时把项目代码开源并发布到NPM上。
      </Text>

      {list.map((item: any) => {
        return (
          <View className="module-list" key={item.title}>
            <View className={`header ${item.key === openKey ? 'open' : ''}`} onClick={() => toogleOpen(item.key)}>
              <Text>{item.title}</Text>
              <View className={`arrow ${item.key === openKey ? 'down' : 'right'}`} />
            </View>
            <View
              className={`components ${item.key === openKey ? 'open' + item.list.length : ''}`}
            >
              {item.list.map((sitem: any) => {
                return (
                  <View className="component-list" key={sitem.title} onClick={() => toPage(sitem.path)}>
                    <Text>{sitem.title}</Text>
                    <View className='arrow right' />
                  </View>
                );
              })}
            </View>
          </View>
        );
      })}
      <ThemeControl />
    </View>
  );
}

Index.confing = {
  navigationBarTitleText: "首页"
};
