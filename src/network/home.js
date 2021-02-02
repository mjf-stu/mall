import {teacherData,mallData} from './request.js'

export function getMultidata(){
    return teacherData({
        url: 'http://123.207.32.32:8000/home/multidata'
    })
}

export function getGoods(page,type){
    return mallData({
        url:'/goods',
        params:{
            page,
            type
        }
    })
}