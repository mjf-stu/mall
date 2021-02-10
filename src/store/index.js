import VueX from "vuex"
import Vue from "vue"

Vue.use(VueX)

const shopCarModule = {
    state:{
        shopCar:[]
        // img:[],
        // price:[],
        // quantity:[]
        //d_id
    },
    getters:{
        isSelectItem(state,getter){
            let foo = state.shopCar.filter(item=>{
              return item.isSelect === true
            })
            return foo
        },
        notSelectItem(state,getter){
            let foo = state.shopCar.filter(item=>{
              return item.isSelect === false
            })
            return foo
        },
    },
    mutations:{
        addQuantity(state,payload){
            payload.hasShop.quantity+=payload.quantity
        },
        addGoods(state,payload){
            state.shopCar.push(payload)
        }
    },
    actions:{
        addCar(context,payload){
            //计算第几个的d_id与添加的商品相同
            let count=-1
            let hasShop=context.state.shopCar.find(item=>{
                count++
                return item.d_id===payload.d_id
            })
            if(hasShop!==undefined){
                // state.shopCar[count].quantity+=shop.quantity
                context.commit('addQuantity',{hasShop,quantity:payload.quantity})
                return "当前商品数量已增加"
            }
            else{
                // state.shopCar.push(shop)
                context.commit('addGoods',payload)
                return "当前商品已添加成功"
            }
            // console.log(context.state.shopCar);
        }
    }
}

const store = new VueX.Store({
    modules:{
        shopCarModule : shopCarModule
    }
})

/**
 * ===================测试数据直接赋值
 */
// store.state.shopCarModule.shopCar.push(
//     {img:"https://s5.mogucdn.com/mlcdn/c45406/180909_399kb89g6hjfa35528g3bafl52e42_640x852.jpg",
//      desc:"男士毛衣潮流黄金貂针织衫休闲男装毛线衫加厚保暖学生帅气打底衫", 
//      price:79,
//      quantity:2,
//      d_id:2,
//      isSelect:true
//     })
// store.state.shopCarModule.shopCar.push(
//     {img:"https://s5.mogucdn.com/mlcdn/c45406/190920_89kf066272b03k679b7a625cecf53_800x1200.jpg",
//      desc:"免烫长袖白衬衫黑男士韩版修身商务加绒衬衣纯色职业工作正装寸衫",
//      price:56,
//      quantity:2,
//      d_id:3,
//      isSelect:true
//     })
// store.state.shopCarModule.shopCar.push(
//     {img:"https://s5.mogucdn.com/mlcdn/55cf19/200803_1ih26k2371l3a6c92h6ii0d58aje0_640x960.jpg",
//      desc:"中老年男装牛仔裤男弹力中腰高腰宽松直筒中年商务休闲棉秋冬季长裤子大码男土百搭蓝45-60岁",
//      price:62,
//      quantity:1,
//      d_id:4,
//      isSelect:false
//     })
// store.state.shopCarModule.shopCar.push(
//     {img:"https://s5.mogucdn.com/mlcdn/c45406/200812_7jg6dacg33dfdeki9bf9f84a475ki_640x960.jpg",
//      desc:"花花公子贵宾男士外套春秋季夹克衫商务休闲中青年上衣服潮流男装",
//      price:81,
//      quantity:3,
//      d_id:5,
//      isSelect:true
//     })
// store.state.shopCarModule.shopCar.push(
//     {img:"https://s5.mogucdn.com/mlcdn/c45406/190920_89kf066272b03k679b7a625cecf53_800x1200.jpg",
//      desc:"免烫长袖白衬衫黑男士韩版修身商务加绒衬衣纯色职业工作正装寸衫",
//      price:56,
//      quantity:2,
//      d_id:6,
//      isSelect:true
//     })
// store.state.shopCarModule.shopCar.push(
//     {img:"https://s5.mogucdn.com/mlcdn/55cf19/200803_1ih26k2371l3a6c92h6ii0d58aje0_640x960.jpg",
//      desc:"中老年男装牛仔裤男弹力中腰高腰宽松直筒中年商务休闲棉秋冬季长裤子大码男土百搭蓝45-60岁",
//      price:62,
//      quantity:1,
//      d_id:7,
//      isSelect:false
//     })
// store.state.shopCarModule.shopCar.push(
//     {img:"https://s5.mogucdn.com/mlcdn/c45406/200812_7jg6dacg33dfdeki9bf9f84a475ki_640x960.jpg",
//      desc:"花花公子贵宾男士外套春秋季夹克衫商务休闲中青年上衣服潮流男装",
//      price:81,
//      quantity:3,
//      d_id:8,
//      isSelect:true
//     })
// store.state.shopCarModule.shopCar.push(
//     {img:"https://s5.mogucdn.com/mlcdn/c45406/190920_89kf066272b03k679b7a625cecf53_800x1200.jpg",
//      desc:"免烫长袖白衬衫黑男士韩版修身商务加绒衬衣纯色职业工作正装寸衫",
//      price:56,
//      quantity:2,
//      d_id:9,
//      isSelect:true
//     })
// store.state.shopCarModule.shopCar.push(
//     {img:"https://s5.mogucdn.com/mlcdn/55cf19/200803_1ih26k2371l3a6c92h6ii0d58aje0_640x960.jpg",
//      desc:"中老年男装牛仔裤男弹力中腰高腰宽松直筒中年商务休闲棉秋冬季长裤子大码男土百搭蓝45-60岁",
//      price:62,
//      quantity:1,
//      d_id:10,
//      isSelect:false
//     })
// store.state.shopCarModule.shopCar.push(
//     {img:"https://s5.mogucdn.com/mlcdn/c45406/200812_7jg6dacg33dfdeki9bf9f84a475ki_640x960.jpg",
//      desc:"花花公子贵宾男士外套春秋季夹克衫商务休闲中青年上衣服潮流男装",
//      price:81,
//      quantity:3,
//      d_id:11,
//      isSelect:true
//     })



export default store