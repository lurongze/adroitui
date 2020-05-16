import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.scss";

interface propsType {
  // children?: any, //
  // size?: string; // loading的宽高，默认'20px'
  color?: string, // 颜色
  bgColor?: string, // 背景色
  // borderWidth?: string; // 边框宽度
  direct?: 'left'|'right'|'up'|'down'
  // text?: string; // 文字
  // onClick?: Function, //
}

export default (props: propsType) => {
  const { bgColor='', color = "", direct = "right"} = props;
  let arrowStyObj: Object = {};
  let styleObj: Object = {};
  if (color !== "") {
    arrowStyObj = Object.assign(arrowStyObj, {
      borderColor: color
    });
  }
  if (bgColor !== "") {
    styleObj = Object.assign(styleObj, {
      backgroundColor: bgColor
    });
  }

  return (
    <View className={`ad--arrow-circle ${direct}`} style={styleObj}>
      <View className='ad--arrow' style={arrowStyObj} />
    </View>
  );
};
