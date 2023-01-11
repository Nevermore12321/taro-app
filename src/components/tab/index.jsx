// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";

import "./index.scss"
import {Text, View} from "@tarojs/components";

// tabList format: ["a","b","c","d","e"]
function Tab({tabList, className, initTab, onTabClick}) {

    const [currentId, setCurrentId] = useState(0)

    useEffect(() => {
        if (initTab !== undefined) {
            setCurrentId(initTab)
        }
    }, [initTab])

    const handleClick = (index) => {
        setCurrentId(index)
        onTabClick?.(index)
    }


    const tabs = tabList?.map((tab, index) => (
        <View key={tab.index} className="item">
            <View
                className={currentId === index ? "item-select" : "item-unselect"}
                onClick={() => handleClick(index)}
            >
                <Text>{tab}</Text>
                <View className={currentId === index ? "item-underline-select" : "item-underline-unselect"} />
            </View>
        </View>
    ))

    return (
        <View className={`content ${className ? className : ""}`}>
            {tabs}
        </View>
    )

}

Tab.propTypes = {
    tabList: PropTypes.array,
    initTab: PropTypes.number,
    className: PropTypes.string,
    onTabClick: PropTypes.func
}

Tab.defaultProps = {
    tabList: [],
    initTab: 0,
    className: "",
    onTabClick: () => {}
}

export default Tab
