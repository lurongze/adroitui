import Taro, { useState } from "@tarojs/taro";
import { View, Block, Text } from "@tarojs/components";
import ThemeControl from "../themeControl";
import { useSelector } from "@tarojs/redux";
import {
  AdToast,
  AdTooltips,
  AdButton
} from "../../index";

export default function Index() {
  const themeStore = useSelector(s => s.theme);
  const [show, setShow] = useState<boolean>(false);
  const [show1, setShow1] = useState<boolean>(false);
  const [show2, setShow2] = useState<boolean>(false);
  const [show3, setShow3] = useState<boolean>(false);
  const [show4, setShow4] = useState<boolean>(false);
  const [show5, setShow5] = useState<boolean>(false);
  const [show6, setShow6] = useState<boolean>(false);

  return (
    <View className={`page-padding ${themeStore.theme}`}>

      <View className="lister">
        <Text className="desc pad">
          暂时只支持普通使用\n
          show='boolean'\n
          onHide='function'\n
          title='提示内容'\n
          推荐使用原生提供的Toast
        </Text>
        <AdButton onClick={() => setShow(true)}>Toast</AdButton>
      </View>

      <View className="lister">
        <Text className="desc pad">
          点击提前关闭\n
          tapClose='boolean'
        </Text>
        <AdButton onClick={() => setShow1(true)}>Toast</AdButton>
      </View>

      <View className="lister">
        <Text className="desc pad">
          不自动消失，点击关闭\n
          也可以设置tapClose='false'，程序控制关闭
          tapClose='boolean'\n
          autoClose='boolean'
        </Text>
        <AdButton onClick={() => setShow2(true)}>Toast</AdButton>
      </View>

      <View className="lister">
        <Text className="desc pad">
          普通使用\n
          show='boolean'\n
          onHide='function'\n
          title='提示内容'\n
        </Text>
        <AdButton onClick={() => setShow3(true)}>Tooltips</AdButton>
      </View>

      <View className="lister">
        <Text className="desc pad">
          点击关闭\n
          tapClose='boolean'\n
          是否自动关闭\n
          autoClose='boolean'\n
        </Text>
        <AdButton onClick={() => setShow4(true)}>Tooltips</AdButton>
      </View>

      <View className="lister">
        <Text className="desc pad">
          警告\n
          背景色type='warn'
        </Text>
        <AdButton onClick={() => setShow5(true)}>Tooltips</AdButton>
      </View>

      <View className="lister">
        <Text className="desc pad">
          成功\n
          背景色type='success'
        </Text>
        <AdButton onClick={() => setShow6(true)}>Tooltips</AdButton>
      </View>


      <Block>
        <AdToast
          show={show}
          onHide={() => setShow(false)}
          tapClose={true}
          title='我是一个Toast提示'
        />

        <AdToast
          show={show1}
          onHide={() => setShow1(false)}
          tapClose={true}
          title='我是一个Toast提示,点击提前关闭'
        />

        <AdToast
          show={show2}
          onHide={() => setShow2(false)}
          tapClose={true}
          autoClose={false}
          title='我是一个Toast提示,点击才关闭'
        />

        <AdTooltips
          show={show3}
          onHide={() => setShow3(false)}
          title='我是一个Tooltips提示'
        />

        <AdTooltips
          show={show4}
          onHide={() => setShow4(false)}
          title='我是一个Tooltips提示，点击才关闭'
          autoClose={false}
          tapClose={true}
        />

        <AdTooltips
          show={show5}
          onHide={() => setShow5(false)}
          title='我是一个Tooltips提示'
          type='warn'
        />

        <AdTooltips
          show={show6}
          onHide={() => setShow6(false)}
          title='我是一个Tooltips提示'
          type='success'
        />


        <ThemeControl />
      </Block>
    </View>
  );
}

Index.config = {
  navigationBarTitleText: "Toast和Tooltips"
};
