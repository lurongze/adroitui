import Taro, { useState, useEffect } from "@tarojs/taro";
import { View } from "@tarojs/components";
import AdCheckbox from "./index";
import "./index.scss";

interface propsType {
  // loading?: boolean,
  disabled?: boolean; // 是否可用
  checkedArr?: Array<string>; // 选中的数组值
  //   checked: boolean, // 选中
  //   text: string, // 文字
  groupList?: Array<{ key: string, text: string }>; // list [{ key: "apple", text: "苹果" },{ key: "huawei", text: "华为" },{ key: "xiaomi", text: "小米" }]
  className?: string; // 类名
  onChange?: Function; // 点击事件
}

export default (props: propsType) => {

  const { className, disabled = false, groupList = [],checkedArr=[], onChange } = props;
  const [list, setList] = useState<Array<{ key: string, text: string }>>([]);

  // const handleClk = (e: string) => {
  //   const newList = list.map(item => {
  //     if (item.key === e) {
  //       item.checked = !item.checked;
  //     }
  //     return item;
  //   });
  //   setList(newList);
  //   const checkedArr: Array<string> = newList.filter((item: { key: string, text: string, checked: boolean }) => item.checked).map((item: { key: string, text: string, checked: boolean }) => item.key);
  //   onChange && onChange(checkedArr);
  // }
  const handleClk = (e: string) =>{
    console.log('handleClik', checkedArr,e, checkedArr.includes(e));
    let newChecked: Array<string> = [];
    if(checkedArr.includes(e)){ // 如果原来是有的，则去掉
      newChecked = checkedArr.filter((item:string)=>item!==e)
    } else { // 原来没有，加上去
      newChecked = [...checkedArr, e];
    }
    newChecked = Array.from(new Set(newChecked));
    console.log('newChecked', newChecked)
    onChange && onChange(newChecked);
  }

  useEffect(()=>{
   
    if(list.length < 1){
      console.log('xxx', checkedArr)
      setList(groupList);
    }
  },[JSON.stringify(groupList)]);

  return (
    <View className={`ad--checkbox-group ${className}`}>
      {list.map((item: { key: string, text: string }) => {
        return (
          <View className='ad--group-item' key={item.key}>
            <AdCheckbox checked={checkedArr.includes(item.key)} disabled={disabled} text={item.text} onClick={() => handleClk(item.key)} />
          </View>
        );
      })}
    </View>
  );
};
