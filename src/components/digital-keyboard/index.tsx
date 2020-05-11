import Taro, { useState } from '@tarojs/taro';
import { View } from '@tarojs/components';
import TransitionSlide from "../transition/slide";
import './index.scss';

interface propsType {
  show?: boolean, // 显示
  length?: number, // 输入长度
  cancelTxt?: string, // 取消按钮文字
  delTxt?: string, // 删除按钮文字
  title?: string, // 提示文字
  showNum?: boolean, // 显示出数字
  hideClear?: boolean, // 隐藏后清除数字
  onHide?: Function, // 消失
  onComplete?: Function, // 输入完毕事件
}

export default (props: propsType) => {

  const { show, length = 4, cancelTxt = '取消', delTxt = '删除', title = '请输入密码',hideClear= true, showNum = true, onHide, onComplete } = props;
  const handleHide = () => {
    hideClear && setResult(resultBase);
    onHide && onHide();
  }

  const width: string = ((100 - 40) / length) + 'vw';
  const keyList: Array<{ key: string, txt: string }> = [
    { key: '1', txt: '1' },
    { key: '2', txt: '2' },
    { key: '3', txt: '3' },
    { key: '4', txt: '4' },
    { key: '5', txt: '5' },
    { key: '6', txt: '6' },
    { key: '7', txt: '7' },
    { key: '8', txt: '8' },
    { key: '9', txt: '9' },
    { key: 'cancel', txt: cancelTxt },
    { key: '0', txt: '0' },
    { key: 'delete', txt: delTxt },
  ];

  let resultBase: Array<{ key: number, txt: string }> = [];
  for (let i = 0; i < length; i++) {
    resultBase.push({
      key: i,
      txt: ''
    })
  }

  const [result, setResult] = useState<Array<{ key: number, txt: string }>>(resultBase);

  const keyInput = (e: string) => {

    if (e === 'cancel') {
      hideClear && setResult(resultBase);
      onHide && onHide();
    } else {
      let inputNum: number = result.filter((item: { key: number, txt: string }) => item.txt !== '').length || 0;

      let txt = e;
      if (e === 'delete') {
        inputNum = inputNum - 1;
        txt = '';
      }
      const newRes: Array<{ key: number, txt: string }> = result.map((item: { key: number, txt: string }, index: number) => {
        if (inputNum === index) {
          return Object.assign(item, { txt: txt });
        } else {
          return item;
        }
      });
      setResult(newRes);
      if (inputNum === length - 1 && e !== 'delete') {
        //Taro.showLoading({title:'加载中。。。。'});
        const res:number = Number.parseInt(newRes.map((item: { key: number, txt: string })=>item.txt).join(''));
        
        onComplete && onComplete(res);
      }
    }

  }

  return (
    <TransitionSlide show={show} onHide={() => handleHide()}>
      <View className='dg-kb'>
        <View className='title'>{title}</View>
        <View className='code-number'>
          {result.map((item: { key: number, txt: string }) => {
            return !showNum ? (
              <View className='num' key={item.key} style={{ width }}>{item.txt?(<View className='dot' />):''}</View>
            ) : (
                <View className='num' key={item.key} style={{ width }}>{item.txt}</View>
              )
          })}

        </View>
        <View className='keybord-block'>
          {keyList.map((item: { key: string, txt: string }) => {
            return (<View className='key-item' key={item.key} onClick={() => keyInput(item.key)}>{item.txt}</View>)
          })}
        </View>
      </View>
    </TransitionSlide>
  )
}
