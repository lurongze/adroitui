import Taro, { useState } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.scss";

interface propsType {
  text: string, // 文字
  color?: string,
  linkColor?: string,
  linkList?: Array<{ text: string; link: string }>, // 链接文字
  onLinkClick?: Function;
}

export default (props: propsType) => {
  const { text = "", linkList = [],color='',linkColor='', onLinkClick } = props;
  const handleClick = (e: string) => {
    onLinkClick && onLinkClick(e);
  };
  let styObj = {};
  if(color!==''){
    styObj = Object.assign(styObj, {color});
  }
  let linkObj = {};
  if(linkColor!==''){
    linkObj = Object.assign(linkColor,{color: linkColor});
  }
  return (
    <View className="ad--footer">
      <View className="ad--link-list">
        {linkList.map((item: { text: string; link: string },index:number) => {
          return (
            <View style={linkObj} className="ad--link" key={item.link} onClick={() => handleClick(item.link)}>
              {item.text}{index+1!==linkList.length?'|':''}
            </View>
          );
        })}
      </View>
      <View style={styObj} className="ad--footer-text">{text}</View>
    </View>
  );
};
