import Taro, { useRouter } from "@tarojs/taro";
import React, { useState, useEffect } from "react";
import { View, RichText } from "@tarojs/components";
import { getMarkdownTokens } from "@/utils/getAST";
import "./index.scss";

export default function Index() {
  const {
    params: { slug },
  } = useRouter();
  const [html, setHtml] = useState("");

  function getDoc(slugKey) {
    Taro.request({
      header: {
        "User-Agent": "adroit",
        "X-Auth-Token": "DonVFLb5eO0xgLjGtbYBdBRytNg8siVm2ydW6bhS",
      },
      method: "GET",
      url: `https://www.yuque.com/api/v2/repos/adroit/dyuot5/docs/${slugKey}`,
    }).then((res) => {
      const resHtml = getMarkdownTokens(res.data.data.body.replaceAll('<br />', '').replaceAll(/<a name(.*?)<\/a>/g,''), true);
      // const resHtml = res.data.data.body_html;
      console.log("文档数据", resHtml);
      setHtml(resHtml);
    });
  }

  useEffect(() => {
    getDoc(slug);
  }, [slug]);
  return (
    <View className="page">
      <RichText className="richText" nodes={html} />
    </View>
  );
}

Index.confing = {
  navigationBarTitleText: "学习笔记",
};
