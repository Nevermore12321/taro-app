// eslint-disable-next-line no-unused-vars
import React from 'react'
import {View} from '@tarojs/components'

import Segment from "@/components/segment/index";

import './index.scss'


function Index() {
    const tabList = ["首页", "Users", "Houses"]
    return (
        <View className="content">
            <Segment tabList={tabList} />
        </View>
    )
}


export default Index
