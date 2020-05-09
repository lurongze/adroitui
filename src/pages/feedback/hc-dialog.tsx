import Taro, { useState } from "@tarojs/taro";
import { View, Block, Text } from "@tarojs/components";
import ThemeControl from "../themeControl";
import { useSelector } from "@tarojs/redux";
import {
  AdHCDialog,
  AdButton
} from "../../index";

export default function Index() {
  const themeStore = useSelector(s => s.theme);
  const [hcDialog, setHcDialog] = useState<boolean>(false);
  const [hcDialog1, setHcDialog1] = useState<boolean>(false);
  const [hcDialog2, setHcDialog2] = useState<boolean>(false);
  const [hcDialog3, setHcDialog3] = useState<boolean>(false);
  const [hcDialog4, setHcDialog4] = useState<boolean>(false);


  const clickItem = (e:string)=>{
    Taro.showToast({ title: `你点击了key:${e}`, icon: "none" });
  }
  return (
    <View className={`page-padding ${themeStore.theme}`}>

      <View className="lister">
        <Text className="desc pad">
        onClickItem="function"\n 返回key：'main主按钮'|'secondary次按钮'|'more右上角更多图标'\n 
        onHide="function"
        </Text>
        <AdButton onClick={() => setHcDialog(true)}>普通使用</AdButton>
      </View>

      <View className="lister">
        <Text className="desc pad">
          title='自定义标题'\n desc='我是描述呀'\n mainBtnTxt='好的呀'\n secondaryBtnTxt='忽略掉'\n showMore='false'\n showClose='false'
        </Text>
        <AdButton onClick={() => setHcDialog1(true)}>自定义</AdButton>
      </View>

      <View className="lister">
        <Text className="desc pad">
          showBtns='false'
        </Text>
        <AdButton onClick={() => setHcDialog2(true)}>不显示默认按钮</AdButton>
      </View>

      <View className="lister">
        <Text className="desc pad">
          noHeader='true'
        </Text>
        <AdButton onClick={() => setHcDialog3(true)}>无头部</AdButton>
      </View>

      <View className="lister">
        <Text className="desc pad">
          显示JSX自定义内容\n
          超出内容滚动，可自定义内容最高，maxHeight='20vh'\n
          默认50vh\n
          最低高度，可给自定义JSX内容的外层容器设置即可
        </Text>
        <AdButton onClick={() => setHcDialog4(true)}>JSX内容</AdButton>
      </View>
      
      <Block>
        <AdHCDialog
          show={hcDialog}
          onHide={() => setHcDialog(false)}
          onClickItem={(e:string)=>clickItem(e)}
        >
          我是半屏组件里面的内容
        </AdHCDialog>


        <AdHCDialog
          show={hcDialog1}
          onHide={() => setHcDialog1(false)}
          title='自定义标题'
          desc='我是描述呀'
          mainBtnTxt='好的呀'
          secondaryBtnTxt='忽略掉'
          showMore={false}
          showClose={false}
        >
          自定义标题+我是描述呀+自定义按钮文字+不显示头部的关闭和更多图标
        </AdHCDialog>

        <AdHCDialog
          show={hcDialog2}
          onHide={() => setHcDialog2(false)}
          showBtns={false}
        >
          我是半屏组件里面的内容
        </AdHCDialog>

        <AdHCDialog
          show={hcDialog3}
          onHide={() => setHcDialog3(false)}
          showBtns={false}
          noHeader={true}
        >
          我是半屏组件里面的内容
        </AdHCDialog>

        <AdHCDialog
          show={hcDialog4}
          onHide={() => setHcDialog4(false)}
          showBtns={false}
          noHeader={true}
        >
          <Block>
          <AdButton>JSX内容</AdButton>
          {
            Array.from(new Array(100).keys()).map(item=>{
            return (<View key={item}>感谢你支持Adroit UI{item}</View>)
            })
          }
          <AdButton>JSX内容</AdButton>
          </Block>
        </AdHCDialog>

        <ThemeControl />
      </Block>
    </View>
  );
}

Index.config = {
  navigationBarTitleText: "半屏组件"
};
