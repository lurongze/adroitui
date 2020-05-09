import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";

interface propsType {
  loading: boolean, // 是否显示
  children: any, // props.children 内容
  fullscreen?: boolean, // 全屏显示，会position：fixed 覆盖页面
  title?: string, // 文字
}

export default (props: propsType) => {
  const { loading = false, fullscreen = false, title ='', children } = props;

  return (
    <View className="ad-spin">
      <View className={`mask ${loading?'show':'hide'} ${fullscreen?'full-spin':''}`}>
        <View className="spin">
          <View className="s"></View>
          <View className="s"></View>
          <View className="s"></View>
          <View className="s"></View>
        </View>
        <View className="title">{title}</View>
      </View>
      {children}
    </View>
  );
};
