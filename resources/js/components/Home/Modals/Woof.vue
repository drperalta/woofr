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
            <Card v-if="SelectedWoofData.type == 'rewoof'" :padding="16" style="margin-bottom: 10px; margin-top: 10px; cursor: pointer" >
                <ul class="row" @on-click="open(SelectedWoofData.id)">
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
            <!-- WOOF ACTIONS -->
            <div class="woof-actions">
                <!-- COMMENT ACTION -->
                <div @click="comment(SelectedWoofData.id)" class="icon_comment">
                    <a>
                        <Icon class="a" type="ios-text-outline" size="24"/>
                        {{SelectedWoofData.comment_counts}}
                    </a>
                </div>
                <!-- RE-WOOF ACTION -->
                <div @click="rewoof(SelectedWoofData.id)" class="icon_rewoof">
                    <a>
                        <Icon class="b" type="ios-repeat" size="24"/>
                        {{SelectedWoofData.rewoof_counts}}
                    </a>
                </div>
                <!-- LIKE ACTION -->
                <div @click="like(SelectedWoofData.id)" class="icon_like">
                    <a>
                        <transition name="bounce">
                            <Icon  type="ios-heart" v-if="SelectedWoofData.liked" size="24" style="position: absolute;" color="#db5353"/>
                        </transition>
                        <Icon class="c" type="ios-heart-outline" v-if="!SelectedWoofData.liked" size="24" />

                        <!-- this span is to add margin left when liking because the solid icon is absolute  -->
                        <span style="margin-left: 28px;" v-if="SelectedWoofData.liked"></span>{{SelectedWoofData.like_counts}}
                    </a>
                </div>
            </div>
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
                        <Input class="reply-textarea" ref="textarea" v-model="CommentDetails.reply" type="textarea" :maxlength="140" placeholder="What's happening..." @on-change="count()" @on-blur="onBlur()" @on-focus="onFocus()"  :autosize="{minRows: 1,maxRows: 5}"/>
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
            },
            LikeDetails: {
                user_id: '',
                woof_id: ''
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
        },
        // Sending Woofs
        send(){
            Vue.woof.send_woof(this, this.WoofDetails);
        },
        //to open the comment box
        comment(id){
            this.$refs.textarea.focus();
        },
        //this will call when the comment modal is closed
        commentCancel(){
            
            this.root().CommentModal = false
            Vue.woof.all();
        },
        //to open the rewoof box
        rewoof(id){
            this.root().ReWoofModal = false
            Vue.rewoof.set(id);
            this.root().ReWoofModal = true
        },
        //this will call when the rewoof modal is closed
        rewoofCancel(){
            this.root().ReWoofModal = false
            Vue.woof.all();
        },
        //to like a woof
        like(id){

            this.LikeDetails.user_id = this.UserData.id;
            this.LikeDetails.woof_id = id;
            // Check if liked is true
            if(this.SelectedWoofData.liked == true){
                // // if liked is true, then make it false and minus 1 the counts
                //this.WoofList[index].liked = false;
                //this.WoofList[index].like_counts -= 1;
                Vue.woof.dislike(this, this.LikeDetails)

                console.log('DISLIKED')
            }else if(this.SelectedWoofData.liked == false){
                // if liked is false, then make it true and plus 1 the counts
                //this.WoofList[index].liked = true;
                //this.WoofList[index].like_counts += 1;
                Vue.woof.like(this, this.LikeDetails)

                console.log('LIKED')
            }
            //console.log(this.LikeDetails)
            
        },
        //Open Woof Modal
        open(id){
            Vue.woof.selected(id, 'woof');
            this.$root.WoofModal = true;
        },
        //To know if the woof is mine
        myWoof(user_id){
            if(this.UserData.id == user_id){
                return true;
            }
        },
        //To delete woof
        delete_woof(id){
            Vue.woof.delete(this,id);
        },
        //to show direct message modal
        direct_message(id){
            console.log(id)
        },

        root(){
            if(this.$root != null){
                return this.$root
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

.woof-actions{
    margin-top: 15px;
    margin-left: 10px;
    margin-bottom: 30px !important;
}
.woof-actions a{
    color: #808695;
}
.woof-actions div{
    float: left;
    width: 70px;
    height: 23px;
    display: block;
}
.whole-woof:hover{
    background-color: rgba(240, 234, 234, 0.20);
}
/* COMMENTS */
.woof-comments{
    margin-left: 60px;
}

/* ICON */
.icon_comment:hover .a{
    font-weight: 600;
    color:  #45B1F3;
}
.icon_rewoof:hover .b{
    font-weight: 600;
    color: #23C26B;
}
.icon_like:hover .c{
    font-weight: 600;
    color: #db5353;
}
</style>
