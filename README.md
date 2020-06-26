# Adroit UI

Adroit UI 是一个可定制主题的基于Taro的UI框架。
最开始风格是参照WEIUI的来开发，后面慢慢的也参考了一些其他的框架。

## 使用
Adroit UI 由于开发还不是完善，现阶段只是作为一个编写Taro UI框架的一个模板项目。

## 自定义主题
可以自定义主题色。这里使用的是css本身的变量，支持在应用启动的时候实时切换主题等。
变量定义都在app.scss文件中。
```
page .adpage { // 小程序中page为页面最外层容器，通过不同的adpage类名切换不同的参数值，可实现实时切换主题功能
    // background-color: #ededed;
    --ad-main-color: #1890ff;
    --ad-deep-main-color: #096dd9;
    --ad-disabled-font-color: rgba(0, 0, 0, 0.2);
    --ad-active-bg-color: #e6e6e6;
    --ad-warn-color: #fa5151;
    --ad-link-color: #576b95;
    --ad-font-color-black: #000000; // 主内容 Black 黑色，标题等
    --ad-font-color-desc: #353535; // 大段的说明内容而且属于主要内容用 Semi 黑
    --ad-font-color-grey: #888888; // 次要内容 Grey 灰色
    --ad-font-color-light-grey: #b2b2b2; // 时间戳与表单缺省值 Light 灰色
    // --ad-text-blue: #10aeff;
    --ad-border-color: #DCDFE6;
    --ad-grey-bg-color: #E4E7ED;

    --ad-light-font-size: 80px; // 只能为阿拉伯数据，时间，金钱等
    --ad-medium-font-size: 40px; // 页面大标题， 一般用于结果，空状态等单一页面
    --ad-font-size-1: 36px; // 页面内大按钮字体，与按钮搭配使用
    --ad-font-size-2: 34px; // 页面内首要层级信息。基准的，可以是连续的。如列表标题，气泡信息
    --ad-font-size-3: 28px; // 页面内次要描述信息，服务于首要信息并与之关联，如列表摘要
    --ad-font-size-4: 26px; // 页面辅助信息，需弱化的内容，如链接、小按钮
    --ad-font-size-5: 22px; // 说明文本，如版权信息等不需要用户关注的信息
}

:root { // H5使用:root定义全局变量
    --ad-main-color: #07c160;
    --ad-deep-main-color: #06ae56;
    --ad-disabled-font-color: rgba(0, 0, 0, 0.2);
    --ad-active-bg-color: #e6e6e6;
    --ad-warn-color: #fa5151;
    --ad-link-color: #576b95;
    --ad-font-color-black: #000000; // 主内容 Black 黑色，标题等
    --ad-font-color-desc: #353535; // 大段的说明内容而且属于主要内容用 Semi 黑
    --ad-font-color-grey: #888888; // 次要内容 Grey 灰色
    --ad-font-color-light-grey: #b2b2b2; // 时间戳与表单缺省值 Light 灰色
    // --ad-text-blue: #10aeff;
    --ad-border-color: #DCDFE6;
    --ad-grey-bg-color: #E4E7ED;

    --ad-light-font-size: 80px; // 只能为阿拉伯数据，时间，金钱等
    --ad-medium-font-size: 40px; // 页面大标题， 一般用于结果，空状态等单一页面
    --ad-font-size-1: 36px; // 页面内大按钮字体，与按钮搭配使用
    --ad-font-size-2: 34px; // 页面内首要层级信息。基准的，可以是连续的。如列表标题，气泡信息
    --ad-font-size-3: 28px; // 页面内次要描述信息，服务于首要信息并与之关联，如列表摘要
    --ad-font-size-4: 26px; // 页面辅助信息，需弱化的内容，如链接、小按钮
    --ad-font-size-5: 22px; // 说明文本，如版权信息等不需要用户关注的信息
}
```

## 开始
git clone

```
yarn 
yarn dev:weapp
```

