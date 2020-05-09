import Taro, { useState } from "@tarojs/taro";
import { View, Block } from "@tarojs/components";
import ThemeControl from "../themeControl";
import { useSelector } from "@tarojs/redux";
import { AdDialog, AdButton } from "../../index";
import "./index.scss";

export default function Index() {
  const themeStore = useSelector(s => s.theme);
  const [dialog, setDialog] = useState<boolean>(false);
  const [dialog1, setDialog1] = useState<boolean>(false);
  const [dialog2, setDialog2] = useState<boolean>(false);
  const [dialog3, setDialog3] = useState<boolean>(false);
  

  const clickDailog = () => {
    Taro.showToast({ title: `你点击了确定按钮`, icon: "none" });
  };

  const clickCancel = () => {
    Taro.showToast({ title: `你点击了取消按钮`, icon: "none" });
  };


  return (
    <View className={`page-padding ${themeStore.theme}`}>
      <View className="lister">
        <View className="desc pad">
          show="boolean", onHide="function", onConfirm="function",onCancel="function"
          内容是props.children
        </View>
        <AdButton onClick={() => setDialog(true)}>普通使用</AdButton>
      </View>

      <View className="lister">
        <View className="desc">
          showClose="false" textAlign="center"
          内容居中
        </View>
        <AdButton onClick={() => setDialog1(true)}>不显示取消按钮</AdButton>
      </View>

      <View className="lister">
        <View className="desc pad">
          title="自定义标题", cancelText="忽略",confirmText="提交"
        </View>
        <AdButton onClick={() => setDialog2(true)}>自定义文字</AdButton>
      </View>

      <View className="lister">
        <View className="desc">
          自定义内容，JSX内容
        </View>
        <AdButton onClick={() => setDialog3(true)}>自定义内容</AdButton>
      </View>

      <Block>
        <AdDialog
          show={dialog}
          onHide={() => setDialog(false)}
          onConfirm={() => clickDailog()}
          onCancel={()=>clickCancel()}
        >
          感谢你支持Adroit UI
        </AdDialog>
        <AdDialog
          show={dialog1}
          showClose={false}
          textAlign='center'
          content='单纯的文字，可以content传入，textAlign设置文字对齐方式'
          onHide={() => setDialog1(false)}
        >
        </AdDialog>
        <AdDialog
          show={dialog2}
          onHide={() => setDialog2(false)}
          title="自定义标题"
          cancelText="忽+略"
          confirmText="提+交"
        >
          感谢你支持Adroit UI
        </AdDialog>
        <AdDialog
          show={dialog3}
          onHide={() => setDialog3(false)}
        >
          <View>
          <View>感谢你支持Adroit UI</View>
          <AdButton>JSX按钮</AdButton>
          </View>
        </AdDialog>
        <ThemeControl />
      </Block>
    </View>
  );
}

Index.config = {
  navigateBarTitleText: "Dialog弹框"
};
