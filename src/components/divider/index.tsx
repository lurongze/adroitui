import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import AdLoading from '../loading/index';
import "./index.scss";

interface propsType {
  loading?: boolean, // 显示loading
  color?: string, // 颜色
  lineColor?: string, // 分割线颜色
  text?: string, // 文字
  width?: string, // 分割线长度，默认是20vw。左右两条分割线
  onClick?: Function,
  // onClick?: Function, //
}

export default (props: propsType) => {
  const { lineColor='', color = "",width="", text = "我是分割线",loading = false, onClick} = props;
  let lineObj: {backgroundColor?:string,width?:string} = {};
  if (lineColor !== "") {
    lineObj = Object.assign(lineObj, {
      backgroundColor: lineColor
    });
  }
  if(width !==""){
    lineObj = Object.assign(lineColor,{
      width
    })
  }
  let textObj:{color?:string} = {};
  if (color !== "") {
    textObj = Object.assign(textObj, {
      color
    });
  }

  return (
    <View onClick={()=>{onClick&&onClick()}} className='ad--divider'>
      <View className='ad--divider-line' style={lineObj}></View>
      {loading?(<AdLoading color={color} text={text} />):(<View className='ad--divider-text' style={textObj}>{text}</View>)}
      <View className='ad--divider-line'  style={lineObj}></View>
    </View>
  );
};
