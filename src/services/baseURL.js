/**
 * @author: Shaohe Guo
 * @contact: 842125706@qq.com
 * @site: www.guoshaohe.com
 * @date: 2023/1/15 22:02
 * @file：baseURL.js
 * @update: 2023/1/15 22:02
 */

const getBaseUrl = (url) => {
    let BASE_URL = "";
    if (process.env.NODE_ENV === "development") {
        //开发环境 - 根据请求不同返回不同的BASE_URL
        if (url.includes("/api/")) {
            BASE_URL = ""
        } else {
            BASE_URL = ""
        }
    } else {
        // 生产环境
        if (url.includes("/api/")) {
            BASE_URL = ""
        } else {
            BASE_URL = ""
        }
    }
    return BASE_URL
}

export default getBaseUrl;
