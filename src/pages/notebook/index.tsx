import Taro from "@tarojs/taro";
import React, { useState, useEffect } from "react";
import { View, RichText } from "@tarojs/components";
import "./index.scss";

export default function Index() {
  const [tocList, setTocList] = useState([]);
  const [html, setHtml] = useState("");

  function getToc() {
    // GET /repos/:namespace/toc
    Taro.request({
      header: {
        "User-Agent": "adroit",
        "X-Auth-Token": "DonVFLb5eO0xgLjGtbYBdBRytNg8siVm2ydW6bhS",
      },
      method: "GET",
      url: "https://www.yuque.com/api/v2/repos/adroit/dyuot5/toc",
    }).then((res) => {
      setTocList(res.data.data.filter((s) => s.type === "DOC"));
    });
  }

  function getDoc(slug) {
    Taro.request({
      header: {
        "User-Agent": "adroit",
        "X-Auth-Token": "DonVFLb5eO0xgLjGtbYBdBRytNg8siVm2ydW6bhS",
      },
      method: "GET",
      url: `https://www.yuque.com/api/v2/repos/adroit/dyuot5/docs/${slug}?format=markdown`,
    }).then((res) => {
      console.log("文档数据", res);
    });
  }

  useEffect(() => {
    getToc();
  }, []);

  return (
    <View className="page">
      {tocList.map((s: any) => {
        return (
          <View
            onClick={() => {
              Taro.navigateTo({
                url: `/pages/detail/index?slug=${s.slug}`
              })
            }}
            key={s.uuid}
          >
            {s.title}
          </View>
        );
      })}
    </View>
  );
}

Index.confing = {
  navigationBarTitleText: "学习笔记",
};
