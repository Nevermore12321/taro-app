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

/**
 * format log: `${level}(${device}): ${time} ${name} - ${action} --> ${info}`
 * @param level: Log Level
 * @param name: Log name，etc. HTTP REQ or HTTP RES
 * @param action: Log action, etc. GET
 * @param info: log info
 */
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

/**
 * 页面 loading
 * @param options: 如果为字符串，表示 title，如果为 object，表示 showLoading 选项
 * @returns {Promise<TaroGeneral.CallbackResult>}
 */
export const showLoading = (options = "") => {
    let defaultOptions = {
        title: "Loading...",
        mask: true
    }
    // 如果传入的 options 为字符串格式，则直接放入 title
    if (Object.prototype.toString.call(options) === "[object String]") {
        defaultOptions.title = options
    } else if (Object.prototype.toString.call(options) === "[object Object]") {
        defaultOptions = {
            ...defaultOptions,
            ...options
        }
    }

    return Taro.showLoading(defaultOptions)
}

export const showToast = (options = "") => {
    let defaultOptions = {
        title: "Warm Tips",
        mask: true,
        duration: 2000,
        icon: "none"

    }
    // 如果传入的 options 为字符串格式，则直接放入 title
    if (Object.prototype.toString.call(options) === "[object String]") {
        defaultOptions.title = options
    } else if (Object.prototype.toString.call(options) === "[object Object]") {
        defaultOptions = {
            ...defaultOptions,
            ...options
        }
    }

    return Taro.showToast(defaultOptions)
}
