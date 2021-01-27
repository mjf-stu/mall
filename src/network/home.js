import {homeData,homeData2} from './request.js'

export function getMultidata(){
    return homeData({
        url: 'http://123.207.32.32:8000/home/multidata'
    })
}

export function getChildCompentData(){
    return homeData2('/popular')
}