/**
 * @author: Shaohe Guo
 * @contact: 842125706@qq.com
 * @site: www.guoshaohe.com
 * @date: 2023/1/16 14:36
 * @file：apis.js
 * @update: 2023/1/16 14:36
 */

import Requests from "./request";

const API_PRE = "https://www.brown77.cn"


// 航班列表
export const flightListReq = (data) => Requests.get(`${API_PRE}/list/singleList`, data)
