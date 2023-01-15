/**
 * @author: Shaohe Guo
 * @contact: 842125706@qq.com
 * @site: www.guoshaohe.com
 * @date: 2023/1/14 20:32
 * @file：common.js
 * @update: 2023/1/14 20:32
 */

import Taro from "@tarojs/taro";



export const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join("/") + " " + [hour, minute, second].map(formatNumber).join(":")
}

export const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : "0" + n
}

export const log = (level, name, action, info) => {
    if (!info) {
        info = "empty"
    }
    try {
        let deviceInfo = Taro.getSystemInfoSync()
        var device = JSON.stringify(deviceInfo)
    } catch (e) {
        console.error("not support getSystemInfoSync api", e.message)
    }
    let time = formatTime(new Date())
    if (typeof info === "object") {
        info = JSON.stringify(info)
    }
    console.log(`${level}(${device}): ${time} ${name} - ${action} --> ${info}`)
}
