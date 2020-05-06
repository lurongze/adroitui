import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.scss";

interface propsType {
  children?: any;
  size?: string; // 加上单位
  color?: string;
  text?: string;
  onClick?: Function;
}

export default (props: propsType) => {
  const { size = "", color = "", text = "" } = props;
  let styleObj: Object = {};
  if (color !== "") {
    styleObj = Object.assign(styleObj, {
      borderColor: color
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
      {text && <Text>加载中...</Text>}
    </View>
  );
};
