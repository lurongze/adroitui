import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import TransitionSlide from '../transition/slide';
import AdButton from '../button/index';
import './index.scss';

interface propsType {
  show: boolean,
  showBtns?: boolean,
  showClose?: boolean,
  children?: any,
  title?: string,
  desc?: string,
  mainBtnTxt?: string,
  secondaryBtnTxt?: string,
  clickItem?: Function,
  onHide?: Function
}
export default (props: propsType) => {
  const { show, title = '标题',showClose='', desc = '', showBtns = true, clickItem, onHide, mainBtnTxt = '主按钮', secondaryBtnTxt = '辅助按钮' } = props;

  const handleClickItem = (e: string) => {
    clickItem && clickItem(e);
  }
  const handleHide = () => {
    onHide && onHide();
  }
  return (
    <TransitionSlide show={show} onHide={() => handleHide()}>
      <View className='container'>
        <View className='header'>
          {showClose && (<View className='icon' onClick={() => handleHide()}>×</View>)}
          <View className={`center ${showClose?'':'no-close'}`}>
            <View className='title'>{title}</View>
            {desc.length > 0 && (<View className='desc'>{desc}</View>)}
          </View>
          <View className='icon' onClick={() => handleClickItem('more')}>~~~</View>
        </View>
        <View className='content'>
          {props.children}
        </View>
        {
          showBtns && (
            <View className='action-btn'>
              <AdButton onClick={() => handleClickItem('secondary')} type='secondary' size='mini' width='30vw'>{secondaryBtnTxt}</AdButton>
              <AdButton onClick={() => handleClickItem('main')} size='mini' width='30vw'>{mainBtnTxt}</AdButton>
            </View>
          )
        }
      </View>
    </TransitionSlide>
  )
}