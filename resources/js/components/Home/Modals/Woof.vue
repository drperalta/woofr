<template>
    <div class="content">
        <Card class="card" dis-hover>
            <div>
                <Avatar class="user-avatar left" icon="ios-person" size="large"/>
                <div class="user-details left">
                    <a :href="'/'+SelectedWoofData.user.username" style="font-size: 16px; font-weight: 600; color: black;display: block" >{{SelectedWoofData.user.fullname}}</a>
                    <a style="color: grey; display: block">@{{SelectedWoofData.user.username}}</a>
                </div>
                <div class="woof-text">
                    {{SelectedWoofData.text}}
                </div>
            </div>
            
        </Card>
        <div class="comment-box" style="padding-top: 8px;">
            <span style="padding-left: 60px;">replying to <a>@{{SelectedWoofData.user.username}}</a></span>
            <div class="reply-box">
                <ul class="row">
                    <li>
                        <Avatar class="avatar" icon="ios-person" size="large" />
                    </li>
                    <li class="reply-box-middle" style="margin-left: 10px; margin-top: 5px; ">
                        <Input class="reply-textarea" v-model="CommentDetails.reply" type="textarea" :maxlength="140" placeholder="What's happening..." @on-change="count()" @on-blur="onBlur()" @on-focus="onFocus()"  :autosize="{minRows: 1,maxRows: 5}"/>
                        <Button class="reply-button" shape="circle" :disabled="reply_length == 0" v-if="focused" @click.prevent="send_reply(SelectedWoofData.id)">Reply</Button>
                    </li>
                    <li style="margin-left: 10px; margin-top: 7px; ">
                        <i-circle class="reply-counter" :percent="percent" stroke-color="#765d69" :size="25"></i-circle>
                    </li>
                </ul>
            </div>
        </div>
        <Card class="comment-list" dis-hover>
            
        </Card>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return{
            focused: false,
            percent: 0,
            reply_length: 0,
            CommentDetails:{
                woof_id: '',
                reply:''
            }
        }
    },
    methods:{
        count(){
            var quotient = this.CommentDetails.reply.length / 140;
            this.percent = quotient * 100;

            this.reply_length = this.CommentDetails.reply.length;
        },
        onFocus(){
            this.focused = true;
        },
        onBlur(){
            if(this.reply_length != 0){
                this.focused = true;
            }else{
                this.focused = false;
            }
        },
        send_reply(woof_id){

            this.CommentDetails.woof_id = woof_id;
            
            Vue.comment.send(this,this.CommentDetails)
        }
    },
    computed: mapGetters([
        'SelectedWoofData'
    ])
}
</script>

<style scoped>
.card{
    padding: 20px !important;
}
.user-avatar{
    
}
.user-details{
    display: block;
    width: auto;
    margin-left: 10px;
}
.woof-text{
    font-size: 18px;
    font-weight: 500;
    padding-top: 55px;    
}
.comment-box{
    padding: 5px 20px 10px 20px;
    background-color: whitesmoke;
}
.reply-box{
    padding: 5px;
    margin-bottom: 10px;
}
.reply-textarea{
    width: 475px;
}
.reply-button{
    width: 90px;
    float: right;
    margin-top: 15px;
    font-weight: 600;

    color: #765d69;
}
</style>
