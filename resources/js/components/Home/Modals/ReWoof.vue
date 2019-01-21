<template>
    <div>
        <Card class="card" :title="'Rewoof '+ ReWoofData.user.fullname+'\'s Post'" dis-hover :bordered="false" :padding="0" >
            <!-- COMMENT BOX -->
            <div class="comments-box">
                <div class="comment-box">
                    <ul class="row">
                        <li>
                            <Avatar class="avatar" icon="ios-person" />
                        </li>
                        <li class="comment-box-middle" style="margin-left: 10px; margin-top: 1px; ">
                            <Input class="comment-textarea" v-model="ReWoofDetails.comment" type="textarea" :maxlength="145" placeholder="Comment Something..." @on-change="count()" @on-blur="onBlur()" @on-focus="onFocus()"  :autosize="{minRows: 1,maxRows: 5}"/>
                        </li>
                        <li style="margin-right: 10px; margin-top: 7px; ">
                            <i-circle class="comment-counter" :percent="percent" stroke-color="#765d69" :size="25"></i-circle>
                        </li>
                    </ul>
                </div>
            </div>
            
            <Card :padding="25" dis-hover>
                <ul class="row" >
                    <!-- USER'S AVATAR -->
                    <li>
                        <Avatar class="user-comment-avatar" icon="ios-person" size="large"/>
                    </li>
                    <!-- WOOFS DETAILS. FULLNAME WITH USERNAME AND WOOF POST -->
                    <li>
                        <div class="user-comment-details left">
                            <a :href="'/'+ReWoofData.user.username" style="font-size: 14px; font-weight: 600; color: black" >{{ReWoofData.user.fullname}}</a>
                            <span style="color: grey;">@{{ReWoofData.user.username}}</span>
                            <div style="font-size: 13px; ">
                                {{ReWoofData.text}}
                            </div>
                        </div>
                    </li>
                </ul>
            </Card>
            <Button class="comment-button" shape="circle" @click.prevent="send_rewoof(ReWoofData.id, ReWoofData.user.username)">ReWoof</Button>
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
            comment_length: 0,
            ReWoofDetails:{
                woof_id: '',
                comment:'',
                username:'',
                type: 'rewoof'
            }
        }
    },
    computed: mapGetters([
        'ReWoofData'
    ]),
    methods:{
        count(){
            var quotient = this.ReWoofDetails.comment.length / 140;
            this.percent = quotient * 100;

            this.comment_length = this.ReWoofDetails.comment.length;
        },
        onFocus(){
            this.focused = true;
        },
        onBlur(){
            if(this.comment_length != 0){
                this.focused = true;
            }else{
                this.focused = false;
            }
        },
        send_rewoof(woof_id, username){

            this.ReWoofDetails.username = username;
            this.ReWoofDetails.woof_id = woof_id;


            if(this.ReWoofDetails.username != '' && this.ReWoofDetails.woof_id != ''){
                Vue.woof.send_rewoof(this,this.ReWoofDetails)
            }
        }
    }
    
}
</script>

<style scoped>
.card{
    padding: 0px !important;
}
.user-comment-avatar{
    float: left;
    margin: 5px 10px 10px  0px;
}
.user-comment-details{
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
.comment-textarea{
    width: 475px;
    
}
.comment-counter{
    margin-left: 15px;
}
.comment-button{
    width: 150px;
    font-weight: 600;
    margin-left: 70%;
    margin-top: 10px;
    margin-bottom: 10px;

    color: #765d69;
}
</style>
