import Taro, { useState, useEffect } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import AdRadio from "./index";
import "./index.scss";

interface propsType {
  // loading?: boolean,
  disabled?: boolean; // 是否可用
  //   checked: boolean, // 选中
  //   text: string, // 文字
  groupList?: Array<{ key: string, text: string}>; // list [{ key: "apple", text: "苹果"},{ key: "huawei", text: "华为"},{ key: "xiaomi", text: "小米"}]
  className?: string; // 类名
  checkedKey?: string; // 选中值
  onChange?: Function; // 点击事件
}

export default (props: propsType) => {

  const { className, disabled = false, groupList = [],checkedKey='', onChange } = props;
  const [list, setList] = useState<Array<{ key: string, text: string}>>([]);

  const handleClk = (e: string) => {
    onChange && onChange(e);
  }

  useEffect(()=>{
    if(list.length<1){
      setList(groupList);
    }
  },[JSON.stringify(groupList)]);

  return (
    <View className={`ad--checkbox-group ${className}`}>
      {list.map((item: { key: string, text: string}) => {
        return (
          <View className='ad--group-item' key={item.key}>
            <AdRadio checked={item.key === checkedKey} disabled={disabled} text={item.text} onClick={() => handleClk(item.key)} />
          </View>
        );
      })}
    </View>
  );
};
