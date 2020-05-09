import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import AdLoading from '../loading/index';
import './index.scss';

interface propsType{
  loading?: boolean, // 显示loading
  className?: string, // 类名
  children?: any, // props.children
  type?: string, // 按钮类型：warn 警告，secondary次要
  size?: string, // 按钮大小：mini 小类型
  width?: string, // 自定义按钮宽度
  bgColor?:string, // 自定义按钮背景色，注意自定义背景色后，：active的颜色是固定的var(--ad-active-bg-color)
  color?: string, // 自定义按钮字体颜色
  loadingColor?: string, // 加载颜色
  onClick?: Function // 点击事件
}

export default (props: propsType) => {
  const {loading, children,type='',size='',width='',bgColor='',color='', loadingColor='', onClick, className=''} = props;
  const handleClick = ()=> {
    onClick && onClick();
  }
  let styleObj = {};
  if(width !== ''){
    styleObj = Object.assign(styleObj,{
      width: width
    })
  }
  if(bgColor !== ''){
    styleObj = Object.assign(styleObj,{
      backgroundColor: bgColor
    })
  }
 
  if(color !== ''){
    styleObj = Object.assign(styleObj,{
      color
    })
  }
  return (
    <View style={styleObj} onClick={()=>handleClick()} className={`ad-button ${loading?'loading':''} ${type} ${size} ${className}`}>
      {loading && <AdLoading color={loadingColor} />}
      {children}
    </View>
  )
}
