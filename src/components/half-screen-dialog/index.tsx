import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import TransitionSlide from "../transition/slide";
import AdButton from "../button/index";
import "./index.scss";

interface propsType {
  noHeader?: boolean, // 不需要头部文字
  show: boolean, // 是否显示
  showBtns?: boolean, // 显示默认的按钮
  showClose?: boolean, // 显示头部左边的关闭图标
  showMore?: boolean, // 显示头部右边的更多图标
  children?: any, // 自定义内容
  title?: string, // 标题
  desc?: string, // 副标题描述
  mainBtnTxt?: string, // 默认主按钮文字
  secondaryBtnTxt?: string, // 默认副按钮文字
  onClickItem?: Function, // 点击按钮的事件，返回值：主按钮main, 副按钮 secondary， 头部右边更多按钮more
  onHide?: Function, // 取消显示或点击关闭图标的事件
}
export default (props: propsType) => {
  const {
    noHeader = false,
    show,
    title = "标题",
    showClose = true,
    desc = "",
    showBtns = true,
    onClickItem,
    onHide,
    mainBtnTxt = "主按钮",
    showMore = true,
    secondaryBtnTxt = "辅助按钮"
  } = props;


  const handleClickItem = (e: string) => {
    onClickItem && onClickItem(e);
  };
  const handleHide = () => {
    onHide && onHide();
  };
  return (
    <TransitionSlide show={show} onHide={() => handleHide()}>
      <View className="container">
        {noHeader ? (
          <View className="header">
            <View className={`center line`} onClick={() => handleHide()}>
              <View className="bloder-line"></View>
            </View>
          </View>
        ) : (
          <View className="header">
            {showClose && (
              <View className="icon" onClick={() => handleHide()}>
                ×
              </View>
            )}
            <View className={`center ${showClose ? "" : "no-close"}`}>
              <View className="title">{title}</View>
              {desc.length > 0 && <View className="desc">{desc}</View>}
            </View>
            {showMore && (
              <View className="icon" onClick={() => handleClickItem("more")}>
                ···
              </View>
            )}
          </View>
        )}

        <View className="content">{props.children}</View>
        {showBtns && (
          <View className="action-btn">
            <AdButton
              onClick={() => handleClickItem("secondary")}
              type="secondary"
              size="mini"
              width="30vw"
            >
              {secondaryBtnTxt}
            </AdButton>
            <AdButton
              onClick={() => handleClickItem("main")}
              size="mini"
              width="30vw"
            >
              {mainBtnTxt}
            </AdButton>
          </View>
        )}
      </View>
    </TransitionSlide>
  );
};
