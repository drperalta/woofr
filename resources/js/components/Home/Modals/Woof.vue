<template>
    <div class="content">
        <!-- WOOF POST -->
        <Card class="card" dis-hover>
            <div>
                <Avatar class="left" icon="ios-person" size="large"/>
                <div class="user-details left">
                    <a :href="'/'+SelectedWoofData.user.username" style="font-size: 16px; font-weight: 600; color: black;display: block" >{{SelectedWoofData.user.fullname}}</a>
                    <a style="color: grey; display: block">@{{SelectedWoofData.user.username}}</a>
                </div>
                <div class="woof-text">
                    {{SelectedWoofData.text}}
                    <span v-if="(UserData.username == SelectedWoofData.user.username) && (SelectedWoofData.text == '') " style="color: grey; font-size: 12px"><Icon type="md-repeat" />You Rewoofed</span>
                    <span v-if="UserData.username != SelectedWoofData.user.username" style="color: grey; font-size: 12px"><Icon type="md-repeat" />{{ SelectedWoofData.user.fullname }} rewoofed</span>
                </div>
            </div>
            <!-- REWOOF -->
            <Card v-if="SelectedWoofData.type == 'rewoof'" :padding="16" style="margin-bottom: 10px; margin-top: 10px">
                <ul class="row" >
                    <!-- USER'S AVATAR -->
                    <li>
                        <Avatar class="user-avatar" icon="ios-person" size="large"/>
                    </li>
                    <!-- WOOFS DETAILS. FULLNAME WITH USERNAME AND WOOF POST -->
                    <li>
                        <div class="user-woof-details left">
                            <a :href="'/'+SelectedWoofData.rewoof.user.username" style="font-size: 14px; font-weight: 600; color: black" >{{SelectedWoofData.rewoof.user.fullname}}</a>
                            <span style="color: grey;">@{{SelectedWoofData.rewoof.user.username}}</span>
                            <div style="font-size: 13px; ">
                                {{SelectedWoofData.rewoof.text}}
                            </div>
                        </div>
                    </li>
                </ul>
            </Card>

        </Card>
        <!-- COMMENT BOX -->
        <div class="comment-box" style="padding-top: 8px;">
            <span v-if="focused" style="padding-left: 49px; color: grey;">replying to <a>@{{SelectedWoofData.user.username}}</a></span>
            <div class="reply-box">
                <ul class="row">
                    <li>
                        <Avatar class="user-avatar" icon="ios-person"/>
                    </li>
                    <li class="reply-box-middle" style="margin-left: 10px; margin-top: 1px; ">
                        <Input class="reply-textarea" v-model="CommentDetails.reply" type="textarea" :maxlength="140" placeholder="What's happening..." @on-change="count()" @on-blur="onBlur()" @on-focus="onFocus()"  :autosize="{minRows: 1,maxRows: 5}"/>
                        <Button class="reply-button" shape="circle" :disabled="reply_length == 0" v-if="focused" @click.prevent="send_reply(SelectedWoofData.id, SelectedWoofData.user.username)">Reply</Button>
                    </li>
                    <li style="margin-left: 10px; margin-top: 7px; ">
                        <i-circle class="reply-counter" :percent="percent" stroke-color="#765d69" :size="25"></i-circle>
                    </li>
                </ul>
            </div>
        </div>
        <!-- COMMENT LIST -->
        <Card class="comment-list" dis-hover v-if="SelectedWoofData.comments != ''" :padding="0">
            <div  v-for="comment in SelectedWoofData.comments" :key="comment.id">
                <ul class="row" style="padding: 18px">
                    <!-- USER'S AVATAR -->
                    <li>
                        <Avatar class="avatar" icon="ios-person" size="large"/>
                    </li>
                    <!-- WOOFS DETAILS. FULLNAME WITH USERNAME AND WOOF POST -->
                    <li>
                        <div class="comment-details left">
                            <a href="#" style="font-size: 14px; font-weight: 600; color: black">{{comment.user.fullname}}</a>
                            <span style="color: grey;">@{{comment.user.username}}</span>
                            <div style="font-size: 13px; ">
                                {{comment.text}}
                            </div>
                        </div>
                    </li>
                </ul>
                <Divider style="margin: 0;"/>
            </div>
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
                reply:'',
                username:'',
                type: 'comment'
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
        send_reply(woof_id, username){

            this.CommentDetails.username = username;
            this.CommentDetails.woof_id = woof_id;


            if(this.CommentDetails.username != '' && this.CommentDetails.woof_id != ''){
                Vue.woof.send_comment(this,this.CommentDetails)
            }
        }
    },
    computed: mapGetters([
        'SelectedWoofData',
        'UserData'
    ])
}
</script>

<style scoped>
.content{

}
.card{
    padding: 20px !important;
}
.user-avatar{
    margin-right: 10px;
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
.comment-details{
    width: 100%;
    margin-left: 10px;
}
li{
    list-style: none;
}
.comment{
    max-width: 300px;
}
</style>
