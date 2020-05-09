import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.scss";

interface propsType {
  // children?: any, // 
  size?: string, // loading的宽高，默认'20px'
  color?: string, // 颜色
  text?: string, // 文字
  // onClick?: Function, // 
}

export default (props: propsType) => {
  const { size = "", color = "", text = "" } = props;
  let styleObj: Object = {};
  if (color !== "") {
    styleObj = Object.assign(styleObj, {
      borderColor: `${color} transparent transparent`
    });
  }
  if (size !== "") {
    styleObj = Object.assign(styleObj, { 
      width: size,
      height: size
     });
  }

  return (
    <View className="loading">
      <View className="loading-ring" style={styleObj}></View>
      {text && <Text>{text}</Text>}
    </View>
  );
};
