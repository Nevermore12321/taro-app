// eslint-disable-next-line no-unused-vars
import React, {useEffect} from 'react'
import {View} from '@tarojs/components'

import Segment from "@/components/segment/index";
import {flightListReq} from "@/services/apis";

import './index.scss'


function Index() {
    const tabList = ["首页", "Users", "Houses"]
    useEffect(()=> {
        flightListReq().then(res => {
            console.log(res.result)
        })
    })
    return (
        <View className="content">
            <Segment tabList={tabList} />
        </View>
    )
}


export default Index
