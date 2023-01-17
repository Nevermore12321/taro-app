/**
 * @author: Shaohe Guo
 * @contact: 842125706@qq.com
 * @site: www.guoshaohe.com
 * @date: 2023/1/14 16:13
 * @file：request.js
 * @update: 2023/1/14 16:13
 */

import Taro from "@tarojs/taro";

import getBaseUrl from "./baseURL";
import interceptors from "./interceptors";

interceptors.forEach(interceptorItem => Taro.addInterceptor(interceptorItem))

/**
 *
 * @param params: {url, data, method, header, contentType ...}
 * @returns {Promise<unknown>}
 */

export const request = (params) => {
    const {
        url = "",
        method = "GET",
        header = {},
        ...rest // 剩余参数
    } = params

    const baseURL = getBaseUrl(url)

    const options = {
        url: baseURL + url,
        data: params.data,
        method: method,
        header: {
            "content-type": params.contentType || "application/json",
            'Authorization': Taro.getStorageSync('Authorization'),
            ...header
        },
        ...rest
    }
    return Taro.request(options)
}



const Requests = {
    get: (url, data = "") => {
        let params = { url, data };
        return request(params);
    },

    post: (url, data, contentType) => {
        let method = "POST"
        let params = { url, data, contentType, method};
        return request(params);
    },

    put: (url, data = "") => {
        let method = "PUT"
        let params = { url, data, method };
        return request(params);
    },

    delete: (url, data = "") => {
        let method = "DELETE"
        let params = { url, data, method };
        return request(params);
    },
}
export default Requests
