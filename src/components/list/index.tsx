import Taro from "@tarojs/taro";
import { View, Block } from "@tarojs/components";
import AdArrow from '../arrow/index';
import AdBadge from '../badge/index';
import "./index.scss";

interface listItemType {
  icon?: string, // 图标
  title: string, //  标题
  badgeText?: string, // 副标题
  link?: string, // 点击链接或其他，点击事件会返回改值
  badgeBgColor?: string, // 副标题背景色, 会覆盖外面的配置
  badgeColor?: string, // 副标题文字颜色, 会覆盖外面的配置
}

interface propsType {
  list: Array<listItemType>, // 接口数据
  badgeBgColor?: string, // 副标题背景色
  badgeColor?: string, // 副标题文字颜色
  arrow?: boolean, // 是否要箭头，默认是
  arrowColor?: string, // 箭头颜色
  onClick?: Function, // 点击事件
}

export default (props: propsType) => {
  const { list = [], badgeBgColor = '', badgeColor = '', arrowColor = '#b2b2b2', arrow = true, onClick } = props;

  return (
    <View className='ad--list'>
      {
        list.map((item: listItemType, index:number) => {
          return (
            <Block key={item.title}>
              <View className='ad--list-item'  onClick={() => onClick && onClick(item.link || '')}>
                {item.icon && (<View className='ad--list-icon' style={{ backgroundImage: `url(${item.icon})` }}></View>)}
                <View className='ad--list-title'>
                  {item.title}
                </View>
                {item.badgeText && (<View className='ad--list-badge'><AdBadge text={item.badgeText} bgColor={item.badgeBgColor||badgeBgColor} color={item.badgeColor||badgeColor} /></View>)}
                {arrow && (<AdArrow bgColor='transparent' color={arrowColor} />)}
              </View>
              {index+1!=list.length &&(<View className='ad--list-divider'></View>)}
            </Block>
          )
        })
      }

    </View>
  );
};
