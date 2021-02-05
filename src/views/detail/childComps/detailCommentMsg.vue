<template>
    <div v-if="commentInfo" class="CommentContainer">
        <div>
        <div class="tips">
            <span>买家评论 {{commentInfo.total}}</span><span>更多</span><img src="@/assets/img/fanhui/fanhui.svg">
        </div>
        </div>
        <div class="comment" v-for="(item,index) of commentInfo.comment" :key="index">
            <div class="user">
                <img :src="item.avatar" > <div>{{item.userName}}</div>
            </div>
            <div class="content">
                {{item.content}}
            </div>
            <div>
                {{item.created | dataFormat("YYYY年MM月DD日")}}
            </div>
        </div>
        
    </div>
</template>

<script>
//第三方日期插件
import moment from 'moment'
export default {
name:"detailCommentMsg",
props:{
    commentInfo:{
        type:Object
    }
},
data(){
    return{
        count:0
    }
},
filters:{
    dataFormat(timestamp,style="YYYY-MM-DD"){
        return moment.unix(timestamp).format(style)
    }
},
methods:{
    imgload(){
        this.count++
        console.log(this.count);
        if(this.count===this.commentInfo.comment.length+1){
            this.$emit("imgload")
        }
    }
}
}
</script>

<style scoped>
.CommentContainer{
    padding: 10px 10px  0px 10px;
    border-bottom: 10px solid #eaeaea;
}
.tips{
    display: flex;
    height: 20px;
    line-height: 20px;
}
.tips > span:nth-child(1){
    flex: 1 1 auto;
}
.tips img{
    height: 100%; 
    transform: rotate(180deg);
}
.comment{
    padding: 20px 0px;
}
.user{
    height: 30px;
    line-height: 30px;
    display: flex;
}
.user img{
    height: 100%;
    border-radius: 15px;
}
.user div{
    margin-left: 20px;
}
.content{
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>