import {mallData} from "./request.js"
//获取主要信息
export function getMainData(d_id) {
    return mallData({
        url:"/detailsMain",
        params:{
            d_id
        }
    })
}
//获取商家信息
export function getShopData(d_id) {
    return mallData({
        url:"/detailsShop",
        params:{
            d_id
        }
    })
}
//获取详情页更多信息
export function getInfoData(d_id) {
    return mallData({
        url:"/detailsMsg",
        params:{
            d_id
        }
    })
}

//获取商品的参数信息
export function getRuleData(d_id) {
    return mallData({
        url:"/detailsRule",
        params:{
            d_id
        }
    })
}

//获取商品的评论信息
export function getCommentData(d_id) {
    return mallData({
        url:"/detailsComment",
        params:{
            d_id
        }
    })
}

//获取商品的推荐信息
export function getRecommendData(d_id) {
    return mallData({
        url:"/detailsRecommend",
        params:{
            d_id
        }
    })
}

//封装主要信息为一个对象
export class itemInfo{
    constructor(res){
        this.d_id = res.d_id
        this.desc = res.desc
        this.price = res.price
        this.oldprice = res.oldprice
        this.priceTags={}
        this.priceTags.text = res.priceTags
        this.priceTags.textColor = res.textColor
        this.priceTags.bgColor = res.bgColor
        this.sell = res.sell
        this.collect = res.collect
        this.icon = res.icon
        this.curreny = res.curreny
    }
}