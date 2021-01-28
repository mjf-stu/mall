import {homeData,myhomeData} from './request.js'

export function getMultidata(){
    return homeData({
        url: 'http://123.207.32.32:8000/home/multidata'
    })
}

export function getGoods(page,type){
    return myhomeData({
        url:'/goods',
        params:{
            page,
            type
        }
    })
}