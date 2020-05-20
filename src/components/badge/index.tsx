import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";

interface propsType {
  color?: string, // 颜色
  bgColor?: string, // 背景色
  type?: 'warn'|''|undefined, // 主题，默认为空， warn 红色背景
  text?: string, // 文字
  tapActive?:boolean, // 点击效果
  onClick?: Function,
  // onClick?: Function, //
}

export default (props: propsType) => {
  const { bgColor='', color = "", type="", text = "1",tapActive=false,onClick} = props;
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
    <View onClick={()=>{onClick&&onClick()}} className={`ad--badge ${type} ${tapActive?'tap-active':''} ${text.length===1?'':'ad-len'}`} style={styleObj}>
      {text}
    </View>
  );
};
