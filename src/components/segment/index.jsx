// eslint-disable-next-line no-unused-vars
import React from "react";
import Taro from "@tarojs/taro";
import {View} from "@tarojs/components";
import PropTypes from "prop-types";
import {AtIcon} from 'taro-ui'

import Tab from "@/components/tab/index"

import "./index.scss"

function Segment({tabList, initTab, onTabChange, className, showAction}) {
    const onActionSearch =  () => {
        Taro.navigateTo({
            url: '/pages/memo/index'
        })
    }

    const onActionConfig = () => {
        Taro.navigateTo({
            url: '/pages/memo/index'
        })
    }
    return (
        <View className="content">
            {
                showAction ?
                    <View className="action-view" onClick={() => onActionConfig()}>
                        <AtIcon value="filter" size="22" color="#333" />
                        <AtIcon prefixClass="fa" value="bug" color="#733254" />
                    </View>
                    :
                    <View className="action-view" />
            }
            <Tab tabList={tabList} onTabClick={onTabChange} initTab={initTab} className={className} />
            {
                showAction ?
                    <View className="action-view" onClick={() => onActionSearch()}>
                        <AtIcon value="search" size="22" color="#333" />
                    </View>
                    :
                    <View className="action-view" />
            }
        </View>
    )
}

Segment.propTypes = {
    tabList: PropTypes.array,
    initTab: PropTypes.number,
    onTabChange: PropTypes.func,
    className: PropTypes.string,
    showAction: PropTypes.bool
}


Segment.defaultProps = {
    tabList: [],
    initTab: 0,
    onTabChange: () => {
    },
    className: "",
    showAction: true
}

export default Segment
