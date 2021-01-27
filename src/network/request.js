import axios from 'axios'

export  function homeData(config){
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    instance.interceptors.request.use(config=>{
        return config
    },err=>{
        return err
    })

    instance.interceptors.response.use(response=>{
        return response.data
    },err=>{
        return err
    })

    return instance(config)
}

export  function homeData2(config){
    const instance = axios.create({
        baseURL: 'http://127.0.0.1:8080',
        timeout: 5000
    })

    instance.interceptors.request.use(config=>{
        return config
    },err=>{
        return err
    })

    instance.interceptors.response.use(response=>{
        return response.data
    },err=>{
        return err
    })

    return instance(config)
}
