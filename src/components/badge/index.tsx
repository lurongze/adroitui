import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.scss";

interface propsType {
  color?: string; // 颜色
  bgColor?: string; // 背景色
  text?: string; // 文字
  // onClick?: Function, //
}

export default (props: propsType) => {
  const { bgColor='', color = "", text = "right"} = props;
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

  return (
    <View className='ad-badge' style={styleObj}>
      {text}
    </View>
  );
};
