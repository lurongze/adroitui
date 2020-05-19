import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.scss";

interface propsType {
  // children?: any, // 
  size?: string, // loading的宽高，默认'20px'
  color?: string, // 颜色
  borderWidth?: string, // 边框宽度
  text?: string, // 文字
  // onClick?: Function, // 
}

export default (props: propsType) => {
  const { size = "", color = "", text = "", borderWidth="" } = props;
  let styleObj: {borderColor?:string,width?:string,height?:string,borderWidth?:string} = {};
  let textObj:{color?:string} = {};
  if (color !== "") {
    styleObj = Object.assign(styleObj, {
      borderColor: `${color} transparent transparent`
    });
    textObj = Object.assign(textObj,{
      color
    });
  }
  if (size !== "") {
    styleObj = Object.assign(styleObj, { 
      width: size,
      height: size
     });
  }
  if (borderWidth !== "") {
    styleObj = Object.assign(styleObj, { 
      borderWidth
     });
  }

  return (
    <View className="ad--loading">
      <View className="ad--loading-ring" style={styleObj}></View>
      {text && <Text style={textObj}>{text}</Text>}
    </View>
  );
};
