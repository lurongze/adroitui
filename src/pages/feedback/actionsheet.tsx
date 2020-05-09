import Taro, { useState } from "@tarojs/taro";
import { View, Block, Text } from "@tarojs/components";
import ThemeControl from "../themeControl";
import { useSelector } from "@tarojs/redux";
import {
  AdActionSheet,
  AdButton
} from "../../index";

export default function Index() {
  const themeStore = useSelector(s => s.theme);
  const actions = [
    { key: 'buy', text: '购买' },
    { key: 'book', text: '预约' },
    { key: 'collect', text: '收藏' }
  ]
  const [show, setShow] = useState<boolean>(false);
  const [show1, setShow1] = useState<boolean>(false);


  const clickItem = (e: string) => {
    Taro.showToast({ title: `你点击了key:${e}`, icon: "none" });
  }
  return (
    <View className={`page-padding ${themeStore.theme}`}>

      <View className="lister">
        <Text className="desc pad">
          普通使用\n
          onClickItem='function'\n
          onHide='function'\n
          show='boolean'\n
          actions数组,数组对象属性有key,text
        </Text>
        <AdButton onClick={() => setShow(true)}>普通使用</AdButton>
      </View>

      <View className="lister">
        <Text className="desc pad">
          clickHide='boolean' \n
          点击选项后自动触发onHide事件\n
          title='请选择一种方式'\n
        </Text>
        <AdButton onClick={() => setShow1(true)}>点击隐藏+描述</AdButton>
      </View>

      <Block>
        <AdActionSheet show={show} actions={actions} onHide={() => setShow(false)} onClickItem={(e: string) => clickItem(e)} />
        <AdActionSheet show={show1} actions={actions} onHide={() => setShow1(false)} onClickItem={(e: string) => clickItem(e)} clickHide={true} title='请选择一种方式' />
        <ThemeControl />
      </Block>
    </View>
  );
}

Index.config = {
  navigationBarTitleText: "ActionSheet组件"
};
