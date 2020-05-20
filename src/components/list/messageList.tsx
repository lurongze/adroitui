import Taro from "@tarojs/taro";
import { View, Block } from "@tarojs/components";
import AdArrow from "../arrow/index";
import AdBadge from "../badge/index";
import "./index.scss";

interface listItemType {
  avatar?: string; // 图标
  nickname: string; //  昵称
  message?: string; // 内容
  messageNum?: number; // 消息数量
  time?: string; // 时间
  link: string; // 必须是唯一值，点击事件会返回该值
}

interface propsType {
  list: Array<listItemType>; // 接口数据
  onClick?: Function; // 点击事件
}

export default (props: propsType) => {
  const { list = [], onClick } = props;

  return (
    <View className="ad--list">
      {list.map((item: listItemType, index: number) => {
        return (
          <Block key={item.key}>
            <View
              className="ad--list-item msg"
              onClick={() => onClick && onClick(item.link || "")}
            >
              {item.avatar && (
                <View
                  className="ad--list-icon avatar"
                  style={{ backgroundImage: `url(${item.avatar})` }}
                ></View>
              )}
              <View className="ad--list-center">
                <View className="ad--list-nickname">{item.nickname}</View>
                <View className="ad--list-msg">{item.message || ""}</View>
              </View>
              <View className="ad--list-end">
                <View className="ad--list-badge">
                  {item.messageNum !== 0 && (
                    <AdBadge text={item.messageNum + ""} type="warn" />
                  )}
                </View>
                <View className="ad--list-time">
                    {item.time||''}
                </View>
              </View>
            </View>
            {index + 1 != list.length && (
              <View className="ad--list-divider"></View>
            )}
          </Block>
        );
      })}
    </View>
  );
};
