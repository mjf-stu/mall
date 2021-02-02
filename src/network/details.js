import {mallData} from "./request.js"

export function getMainData(d_id) {
    return mallData({
        url:"/detailsMain",
        params:{
            d_id
        }
    })
}
export function getRuleData(d_id) {
    return mallData({
        url:"/detailsRule",
        params:{
            d_id
        }
    })
}