import VueX from "vuex"
import Vue from "vue"

Vue.use(VueX)

const shopCarModule = {
    state:{
        shopCar:[]
        // img:[],
        // price:[],
        // quantity:[]
    },
    mutations:{
        addCar(state,shop){
            //计算第几个的d_id与添加的商品相同
            let count=-1
            let hasShop=state.shopCar.find(item=>{
                count++
                return item.d_id===shop.d_id
            })
            if(hasShop!==undefined){
                state.shopCar[count].quantity+=shop.quantity
            }
            else{
                state.shopCar.push(shop)
            }
            console.log(state.shopCar);
        }
    }
}

const store = new VueX.Store({
    modules:{
        shopCarModule : shopCarModule
    }
})

export default store