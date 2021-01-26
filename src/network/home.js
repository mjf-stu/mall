import {homeData} from './request.js'

export function getMultidata(){
    return homeData({
        url: '/home/multidata'
    })
}