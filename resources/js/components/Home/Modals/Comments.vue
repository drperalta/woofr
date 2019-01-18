<template>
    <div>
        <Card :title="'Reply to '+ CommentData.user.fullname" dis-hover :bordered="false">
            <ul class="row" >
                <!-- USER'S AVATAR -->
                <li>
                    <Avatar class="user-reply-avatar" icon="ios-person" size="large"/>
                </li>
                <!-- WOOFS DETAILS. FULLNAME WITH USERNAME AND WOOF POST -->
                <li>
                    <div class="user-reply-details left">
                        <a :href="'/'+CommentData.user.username" style="font-size: 14px; font-weight: 600; color: black" >{{CommentData.user.fullname}}</a>
                        <span style="color: grey;">@{{CommentData.user.username}}</span>
                        <div style="font-size: 13px; ">
                            {{CommentData.text}}
                        </div>
                    </div>
                </li>
            </ul>
        </Card>
        <!-- COMMENT BOX -->
        <div class="comment-box" style="padding-top: 8px;">
            <span v-if="focused" style="padding-left: 49px; color: grey;">replying to <a>@{{CommentData.user.username}}</a></span>
            <div class="reply-box">
                <ul class="row">
                    <li>
                        <Avatar class="avatar" icon="ios-person" />
                    </li>
                    <li class="reply-box-middle" style="margin-left: 10px; margin-top: 1px; ">
                        <Input class="reply-textarea" v-model="CommentDetails.reply" type="textarea" :maxlength="140" placeholder="What's happening..." @on-change="count()" @on-blur="onBlur()" @on-focus="onFocus()"  :autosize="{minRows: 1,maxRows: 5}"/>
                        <Button class="reply-button" shape="circle" :disabled="reply_length == 0" v-if="focused" @click.prevent="send_reply(CommentData.id, CommentData.user.username)">Reply</Button>
                    </li>
                    <li style="margin-left: 10px; margin-top: 7px; ">
                        <i-circle class="reply-counter" :percent="percent" stroke-color="#765d69" :size="25"></i-circle>
                    </li>
                </ul>
            </div>
        </div>
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
                reply:'',
                username:''
            }
        }
    },
    computed: mapGetters([
        'CommentData'
    ]),
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
        send_reply(woof_id, username){

            this.CommentDetails.username = username;
            this.CommentDetails.woof_id = woof_id;


            if(this.CommentDetails.username != '' && this.CommentDetails.woof_id != ''){
                Vue.comment.send(this,this.CommentDetails)
            }
        }
    }
}
</script>

<style scoped>
.user-reply-avatar{
    float: left;
    margin: 5px 10px 10px  0px;
}
.user-reply-details{
    width: 100%;
    margin: 5px 10px 15px 0px ;
}

.comment-box{
    padding: 5px 20px 5px 20px;
    background-color: whitesmoke;
}
.comment-list{
    padding: 0px !important;
}
.reply-box{
    padding: 5px;
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
