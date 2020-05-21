import Taro, { useState } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.scss";

interface propsType {
  color?: string, // 颜色
  bgColor?: string, // 背景色
  icon?: string, // 左边喇叭图片路径，可替换,链接或base64数据
  type?: "warn" | "" | undefined, // 主题，默认为空， warn 红色背景
  text?: string, // 文字
  showClose?: boolean, // 显示关闭按钮
  showIcon?: boolean, // 是否显示图标
  tapClose?: boolean, // 是否点击关闭，默认true
  onClick?: Function,
  // onClick?: Function, //
}

export default (props: propsType) => {
  const {
    bgColor = "",
    color = "",
    type = "",
    text = "Alert组件！",
    icon = "",
    showClose = true,
    showIcon = true,
    tapClose = true,
    onClick
  } = props;
  let styleObj: Object = {};
  if (bgColor !== "") {
    styleObj = Object.assign(styleObj, {
      backgroundColor: bgColor
    });
  }
  if (color !== "") {
    styleObj = Object.assign(styleObj, {
      color
    });
  }
  let bgImg:{backgroundImage?:string} = {};
  if(icon!==""){
    bgImg = Object.assign(bgImg,{backgroundImage:`url(${icon})`})
  }

  const [isClose, setIsClose] = useState<boolean>(false);
  // const [isRender, setIsRender] = useState<boolean>(true);
  

  return (
    <View
      onClick={() => {
        tapClose && setIsClose(true);
        onClick && onClick();
      }}
      className={`ad--scnotice ${type} ${isClose?'close':''}`}
      style={styleObj}
    >
      {showIcon && <View style={bgImg} className="ad--scnotice-icon"></View>}
        <View className="ad--scnotice-content">{text}</View>
      {showClose && <View className="ad--scnotice-close">×</View>}
    </View>
  );
};
