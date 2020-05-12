import Taro, { useState } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import Checkbox from "./index";
import "./index.scss";

interface propsType {
  // loading?: boolean,
  disabled?: boolean; // 是否可用
  //   checked: boolean, // 选中
  //   text: string, // 文字
  className?:string; // 类名
  onClick?: Function; // 点击事件
}

export default (props: propsType) => {
  //   const {disabled = false,checked, text, onClick} = props;
  //   const handleClick = ()=> {
  //     if(!disabled){
  //       onClick && onClick();
  //     }
  //   }
  const {className} = props;
  const [list, setList] = useState([
    { key: "apple", text: "苹果", checked: false },
    { key: "huawei", text: "华为", checked: false  },
    { key: "xiaomi", text: "小米", checked: false  }
  ]);

  const handleClk = (e:string)=>{
    setList(list.map(item=>{
        if(item.key === e){
            item.checked = !item.checked;
        }
        return item;
    }))
  }

  return (
    <View className={`ad--checkbox-group ${className}`}>
      {list.map(item => {
        return (
          <View className='ad--group-item'>
            <Checkbox checked={item.checked} text={item.text} onClick={()=>handleClk(item.key)} />
          </View>
        );
      })}
    </View>
  );
};
