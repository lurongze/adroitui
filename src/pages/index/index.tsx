import Taro, { useState, useEffect } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import ThemeControl from "../themeControl";
import "./index.scss";
export default function Index() {
  const list = [
    {
      title: "基础",
      key: "base",
      desc: "主题等",
      list: [
        { title: "自定义主题色", path: "/pages/base/theme" },
        { title: "Loading加载", path: "/pages/base/loading" },
        { title: "CSS箭头", path: "/pages/base/arrow" },
        { title: "Badge徽章", path: "" },
        { title: "List列表", path: "" },
        { title: "Card卡片", path: "" },
        { title: "Footer页脚", path: "" },
        { title: "悬浮按钮", path: "" },
        { title: "图片选择", path: "" }
      ]
    },
    {
      title: "表单",
      key: "form",
      desc: "表单内容，按钮，单选，多选",
      list: [
        { title: "按钮", path: "/pages/form/button" },
        { title: "Checkbox", path: "/pages/form/checkbox" }
      ]
    },
    {
      title: "操作反馈",
      key: "feedback",
      desc: "模态框、加载、提示等",
      list: [
        { title: "Dialog弹框", path: "/pages/feedback/dialog" },
        { title: "ActionSheet弹框", path: "/pages/feedback/actionsheet" },
        { title: "HalfScreenDialog弹框", path: "/pages/feedback/hc-dialog" },
        { title: "Toast+Tooltips提示", path: "/pages/feedback/tttips" },
        { title: "Spin加载", path: "/pages/feedback/spin" }
      ]
    },
    {
      title: "导航",
      key: "nav",
      desc: "Tab等",
      list: [{ title: "Tab标签", path: "/pages/nav/tabs" }]
    },
    {
      title: "扩展",
      key: "extend",
      desc: "各种扩展",
      list: [
        { title: "数字键盘", path: "/pages/extends/digital-keyboard" },
        { title: "登录页面", path: "" },
        { title: "Drawer抽屉", path: "" },
        { title: "城市选择", path: "" },
        { title: "日期组件", path: "" },
        { title: "时间轴", path: "" },
        { title: "滚动消息", path: "" },
        { title: "弹层选择", path: "" },
        { title: "分割线", path: "" },
        { title: "轮播", path: "" },
        { title: "表单", path: "" }
      ]
    }
  ];
  const [theme, setTheme] = useState(() => {
    return Taro.getStorageSync("theme") || "";
  });
  const [openKey, setOpenKey] = useState("");
  const toogleOpen = (tapKey: string) => {
    if (tapKey === openKey) {
      setOpenKey("");
    } else {
      setOpenKey(tapKey);
    }
  };

  const toPage = (pagePath: string) => {
    if (pagePath) {
      Taro.navigateTo({
        url: pagePath
      });
    } else {
      Taro.showToast({ title: "功能开发中...", icon: "none" });
    }
  };

  // useEffect(()=>{
  //   setTheme(Taro.getStorageSync('theme')||'');
  // },[]);

  return (
    <View className={`body ${theme}`}>
      <View className="title">Adroit UI 组件库</View>
      <Text className="description">
        一个基于Taro框架的简单UI组件库,风格参考微信小程序设计指南和其他一些优秀UI库。
        兼容微信小程序，支付宝小程序，H5。可自定义主题色。
        组件仍然在不断开发中，预计5月底~6月中把使用文档写出来后，会同时把项目代码开源并发布到NPM上。
      </Text>

      {list.map((item: any) => {
        return (
          <View className="module-list" key={item.title}>
            <View
              className={`header ${item.key === openKey ? "open" : ""}`}
              onClick={() => toogleOpen(item.key)}
            >
              <View className="info">
                <Text className="list-title">{item.title}</Text>
                <Text className="list-desc">
                  全{item.list.length}个，
                  {item.desc}
                </Text>
              </View>
              <View
                className={`arrow-circle ${
                  item.key === openKey ? "down" : "right"
                }`}
              >
                <View className={`arrow`} />
              </View>
            </View>
            <View
              className={`components ${
                item.key === openKey ? "open" + item.list.length : ""
              }`}
            >
              {item.list.map((sitem: any) => {
                return (
                  <View
                    className="component-list"
                    key={sitem.title}
                    onClick={() => toPage(sitem.path)}
                  >
                    <Text className={sitem.path ? "" : "disabled"}>
                      {sitem.title}
                    </Text>
                    <View className="arrow-circle right">
                      <View className="arrow" />
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        );
      })}
      <ThemeControl onClick={(e: string) => setTheme(e)} />
    </View>
  );
}

Index.confing = {
  navigationBarTitleText: "首页"
};
