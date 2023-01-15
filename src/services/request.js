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

const Requests = {
    request: (params) => {
        const {
            data,
            url = "",
            method = "GET",
            header = {},
            ...rest // 剩余参数
        } = params

        const baseURL = getBaseUrl(url)

        const options = {
            url: baseURL + url,
            data: data,
            method: method,
            header: {
                "content-type": params.contentType || "application/json",
                'Authorization': Taro.getStorageSync('Authorization'),
                ...header
            },
            ...rest
        }
        return Taro.request(options)
    },

    get: (url, data = "") => {
        let params = { url, data };
        return this.request(params);
    },

    post: (url, data, contentType) => {
        let params = { url, data, contentType };
        return this.request(params, "POST");
    },

    put: (url, data = "") => {
        let params = { url, data };
        return this.request(params, "PUT");
    },

    delete: (url, data = "") => {
        let params = { url, data };
        return this.request(params, "DELETE");
    },
}
export default Requests
