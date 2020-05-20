import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.scss";

interface propsType {
  color?: string, // 颜色
  bgColor?: string, // 背景色
  icon?: string, // 左边喇叭图片路径，可替换
  type?: 'warn'|''|undefined, // 主题，默认为空， warn 红色背景
  text?: string, // 文字
  showClose?: boolean, // 显示关闭按钮
  onClick?: Function,
  // onClick?: Function, //
}

export default (props: propsType) => {
  const { bgColor='', color = "", type="", text = "今日特卖QWERTYUIOPLKJHGDSAZXCVBNMHRERWEYRTRGTNRHTGTHTRHRTJRTGRGREGERGERGDFGERGERx啦！",showClose=true, onClick} = props;
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
    <View onClick={()=>{onClick&&onClick()}} className={`ad--scnotice ${type}`} style={styleObj}>
      <View className='ad--scnotice-icon'></View>
      <View className='ad--scnotice-content'><Text className='ad--scnotice-txt'>{text}</Text></View>
      {showClose&&(<View className='ad--scnotice-close'>×</View>)}
    </View>
  );
};
