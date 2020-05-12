import Taro, { useState, useEffect } from "@tarojs/taro";
import { View } from "@tarojs/components";
import AdCheckbox from "./index";
import "./index.scss";

interface propsType {
  // loading?: boolean,
  disabled?: boolean; // 是否可用
  //   checked: boolean, // 选中
  //   text: string, // 文字
  groupList?: Array<{ key: string, text: string, checked: boolean }>; // list [{ key: "apple", text: "苹果", checked: false },{ key: "huawei", text: "华为", checked: false  },{ key: "xiaomi", text: "小米", checked: false  }]
  className?: string; // 类名
  onChange?: Function; // 点击事件
}

export default (props: propsType) => {

  const { className, disabled = false, groupList = [], onChange } = props;
  const [list, setList] = useState<Array<{ key: string, text: string, checked: boolean }>>([]);

  const handleClk = (e: string) => {
    const newList = list.map(item => {
      if (item.key === e) {
        item.checked = !item.checked;
      }
      return item;
    });
    setList(newList);
    const checkedArr: Array<string> = newList.filter((item: { key: string, text: string, checked: boolean }) => item.checked).map((item: { key: string, text: string, checked: boolean }) => item.key);
    onChange && onChange(checkedArr);
  }

  useEffect(()=>{
    if(list.length < 1){
      setList(groupList);
    }
  },[JSON.stringify(groupList)]);

  return (
    <View className={`ad--checkbox-group ${className}`}>
      {list.map((item: { key: string, text: string, checked: boolean }) => {
        return (
          <View className='ad--group-item' key={item.key}>
            <AdCheckbox checked={item.checked} disabled={disabled} text={item.text} onClick={() => handleClk(item.key)} />
          </View>
        );
      })}
    </View>
  );
};
