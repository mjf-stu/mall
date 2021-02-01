//用于父组件监听子组件频繁的发送事件进行防抖动
export function debounce(fun , dely){
    let timer = null
    return function(...args){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fun.apply(this,args)
        }, dely);
    }
}

