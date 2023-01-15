/**
 * @author: Shaohe Guo
 * @contact: 842125706@qq.com
 * @site: www.guoshaohe.com
 * @date: 2023/1/15 22:41
 * @file：interceptors.js
 * @update: 2023/1/15 22:41
 */

import Taro from "@tarojs/taro";

import {log} from "@/utils/common";
import {HTTP_STATUS} from "./status";

const customLogInterceptor = (chain) => {
    const requestParams = chain.requestParams
    const {method, data, url} = requestParams

    console.log(`http ${method || 'GET'} --> ${url} data: `, data)
    log("INFO", "HTTP REQ", method, `${url} data: ${data}`)

    return chain.proceed(requestParams)
        .then(res => {
            log("INFO", "HTTP RES", method, `${url} result: ${res}`)
            return res
        })
}


const customErrorInterceptor = (chain) => {
    const requestParams = chain.requestParams

    return chain.proceed(requestParams)
        .then(res => {
            // 只要请求成功，不管返回什么状态码，都走这个回调
            if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
                return Promise.reject("请求资源不存在")
            } else if (res.statusCode === HTTP_STATUS.BAD_REQUEST_ERROR) {
                return Promise.reject("客户端错误的请求: Bad Request")
            } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
                return Promise.reject("网关出错: Bad Gateway")
            } else if (res.statusCode === HTTP_STATUS.SERVICE_UNAVAILABLE) {
                return Promise.reject("服务端不可用: Service Unavailable")
            } else if (res.statusCode === HTTP_STATUS.INTERNAL_SERVER_ERROR) {
                return Promise.reject("服务端出错: Internal Server Error")
            } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
                // todo 403 处理逻辑
                // Taro.setStorageSync("Authorization", "")
                // pageToLogin()
                return Promise.reject("没有权限访问: Forbidden");
            } else if (res.statusCode === HTTP_STATUS.UNAUTHORIZED) {
                // todo 401 处理逻辑
                // Taro.setStorageSync("Authorization", "")
                // pageToLogin()
                return Promise.reject("需要鉴权: Unauthorized")
            } else if (res.statusCode === HTTP_STATUS.SUCCESS || res.statusCode === HTTP_STATUS.CREATED) {
                return res.data
            }
        })
}

// Taro 提供了两个内置拦截器
// logInterceptor - 用于打印请求的相关信息
// timeoutInterceptor - 在请求超时时抛出错误。
// 这里自定义了 log 拦截器
const interceptors = [customLogInterceptor, customErrorInterceptor]

export default interceptors
