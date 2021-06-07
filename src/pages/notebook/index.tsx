import Taro, { useState, useEffect } from "@tarojs/taro";
import { View, RichText } from "@tarojs/components";
export default function Index() {
  
  const [html, setHtml] = useState('');

  function getMdData(){
    Taro.request({
      method: 'GET',
      url: 'https://adroit-book-1253286615.cos.ap-guangzhou.myqcloud.com/markdown-data/2e6bdfec2cec157f62f00188f45022e9.md?rand=1609214091472'
    }).then(res=>{
      console.log('res', res);
      setHtml(res.data||'');
    })
  }

  useEffect(()=>{
    getMdData();
  }, []);


  return (
    <View className='markdown-body'>
      <RichText  />
    </View>
  );
}

Index.confing = {
  navigationBarTitleText: "学习笔记"
};
