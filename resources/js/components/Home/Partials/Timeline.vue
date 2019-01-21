<template>
    <div class="container">
        <!-- WOOF BOX -->
        <div class="woof-box woofr-border">
            <ul class="row">
                <li>
                    <Avatar class="user-avatar" icon="ios-person"/>
                </li>
                <li class="woof-box-middle">
                    <Input class="woof-textarea" v-model="WoofDetails.Woof" type="textarea" :maxlength="140" placeholder="What's happening..." @on-change="count()" @on-blur="onBlur()" @on-focus="onFocus()"  :autosize="{minRows: 1,maxRows: 5}"/>
                    <Button class="woof-button" shape="circle" :disabled="woof_length == 0" v-if="focused" @click.prevent="send">Woof</Button>
                </li>
                <li>
                    <i-circle class="woof-counter" :percent="percent" stroke-color="#765d69" :size="25"></i-circle>
                </li>
            </ul>
        </div>

        <!-- LIST OF ALL WOOFS -->
        <div class="woof-list woofr-border">
            <ul>
                <li class="whole-woof" v-for="(woof, index) in WoofList" :key="woof.id">
                    <Dropdown class="woof-dropdown" trigger="click" placement="bottom-end">
                        <a href="javascript:void(0)">
                            <Icon type="ios-arrow-down" size="18" color="#765d69"/>
                        </a>
                        <DropdownMenu slot="list">
                            <a @click="delete_woof(woof.id)">
                                <DropdownItem v-if="myWoof(woof.user.id)">Delete Woof</DropdownItem>
                            </a>
                            <Divider v-if="!myWoof(woof.user.id)" style="margin: 3px 0px;" />
                            <a @click="direct_message(woof.user.id)">
                                <DropdownItem v-if="!myWoof(woof.user.id)">Direct Message <a>@{{woof.user.username}}</a></DropdownItem>
                            </a>
                        </DropdownMenu>
                    </Dropdown>

                    <div class="woof-body" @click="open(woof.id)">
                        <ul class="row" >
                            <!-- USER'S AVATAR -->
                            <li>
                                <Avatar class="user-woof-avatar" icon="ios-person" size="large"/>
                            </li>
                            <!-- WOOFS DETAILS. FULLNAME WITH USERNAME AND WOOF POST -->
                            <li>
                                <div class="user-woof-details left">
                                    <a :href="'/'+woof.user.username" style="font-size: 14px; font-weight: 600; color: black" >{{woof.user.fullname}}</a>
                                    <span style="color: grey;">@{{woof.user.username}}</span>
                                    <div style="font-size: 13px; ">
                                        {{woof.text}}
                                        <span v-if="(UserData.username == woof.user.username) && (woof.text == '') " style="color: grey;"><Icon type="md-repeat" />You Rewoofed</span>
                                        <span v-if="(UserData.username != woof.user.username) && (woof.rewoof != null)" style="color: grey;"><Icon type="md-repeat" />{{ woof.user.fullname }} rewoofed</span>
                                        <!-- REWOOF -->
                                        <Card v-if="woof.type == 'rewoof'" :padding="16" style="min-width: 474px !important;">
                                            <ul class="row" >
                                                <!-- USER'S AVATAR -->
                                                <li>
                                                    <Avatar class="user-woof-avatar" icon="ios-person" size="large"/>
                                                </li>
                                                <!-- WOOFS DETAILS. FULLNAME WITH USERNAME AND WOOF POST -->
                                                <li>
                                                    <div class="user-woof-details left">
                                                        <a :href="'/'+woof.rewoof.user.username" style="font-size: 14px; font-weight: 600; color: black" >{{woof.rewoof.user.fullname}}</a>
                                                        <span style="color: grey;">@{{woof.rewoof.user.username}}</span>
                                                        <div style="font-size: 13px; ">
                                                            {{woof.rewoof.text}}
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </Card>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <!-- WOOF ACTIONS -->
                        <div class="woof-actions">
                            <!-- COMMENT ACTION -->
                            <div @click="comment(woof.id)" class="icon_comment">
                                <a>
                                    <Icon class="a" type="ios-text-outline" size="24"/>
                                    {{woof.comment_counts}}
                                </a>
                            </div>
                            <!-- RE-WOOF ACTION -->
                            <div @click="rewoof(woof.id)" class="icon_rewoof">
                                <a>
                                    <Icon class="b" type="ios-repeat" size="24"/>
                                    {{woof.rewoof_counts}}
                                </a>
                            </div>
                            <!-- LIKE ACTION -->
                            <div @click="like(index, woof.id)" class="icon_like">
                                <a>
                                    <transition name="bounce">
                                        <Icon  type="ios-heart" v-if="woof.liked" size="24" style="position: absolute;" color="#db5353"/>
                                    </transition>
                                    <Icon class="c" type="ios-heart-outline" v-if="!woof.liked" size="24" />

                                    <!-- this span is to add margin left when liking because the solid icon is absolute  -->
                                    <span style="margin-left: 28px;" v-if="woof.liked"></span>{{woof.like_counts}}
                                </a>
                            </div>
                        </div>
                    </div>
                    <Divider style="margin: 0;"/>
                </li>
            </ul>
        </div>
        <!-- MODALS -->
        <Modal v-model="this.root().CommentModal" footer-hide width="600" @on-cancel="commentCancel">
            <Comments></Comments>
        </Modal>
        <Modal v-model="this.root().ReWoofModal" footer-hide width="600" @on-cancel="rewoofCancel">
            <ReWoof></ReWoof>
        </Modal>
    </div>
</template>

<script>
import store from '../../../store/index'
import Comments from '../Modals/Comments'
import ReWoof from '../Modals/ReWoof'
import { mapGetters } from 'vuex';

export default {
    components: {Comments, ReWoof},
    data(){
        return{
            focused: false,
            percent: 0,
            woof_length: 0,
            WoofDetails:{
                Woof: '',
                type: 'woof'
            },
            LikeDetails: {
                user_id: '',
                woof_id: ''
            }
        }
    },

    methods:{
        //This is for the Text Area in Woof Box
        count(){
            var quotient = this.WoofDetails.Woof.length / 140;
            this.percent = quotient * 100;

            this.woof_length = this.WoofDetails.Woof.length;
        },
        onFocus(){
            this.focused = true;
        },
        onBlur(){
            if(this.woof_length != 0){
                this.focused = true;
            }else{
                this.focused = false;
            }
        },
        // Sending Woofs
        send(){
            Vue.woof.send_woof(this, this.WoofDetails);
        },
        //to open the comment box
        comment(id){
            this.root().CommentModal = false
            Vue.comment.set(id);   //to set selected woof data
            this.root().CommentModal = true
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
        like(index, id){

            this.LikeDetails.user_id = this.UserData.id;
            this.LikeDetails.woof_id = id;
            // Check if liked is true
            if(this.WoofList[index].liked){
                // if liked is true, then make it false and minus 1 the counts
                this.WoofList[index].liked = false;
                this.WoofList[index].likes -= 1;
                Vue.woof.dislike(this, this.LikeDetails)
            }else{
                // if liked is false, then make it true and plus 1 the counts
                this.WoofList[index].liked = true;
                this.WoofList[index].likes += 1;
                Vue.woof.like(this, this.LikeDetails)
            }
            //console.log(this.LikeDetails)
            
        },
        //Open Woof Modal
        open(id){
            // Vue.woof.selected(id, 'woof');
            // this.$root.WoofModal = true;
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
        'WoofList',
        'SelectedWoofData',
        'CommentData',
        'UserData',
        'ShowWoofModal'
    ]),
    mounted(){
        //when mounted all the woofs will set to store and display it to timeline
        Vue.woof.all();
    }
}
</script>

<style scoped>
ul{
    list-style: none;
}
.container{

}
/* WOOF BOX */
.woof-box{
    background-color: white;
    padding: 5px;
    margin-bottom: 10px;
}
.woof-dropdown{
    float: right;
    margin-right: 10px;
    margin-top: 18px;
}
.woof-box-middle{
    width: 100%;
}
.user-avatar{
    margin: 5px;
    margin-left: 5px !important;
    margin-right: 10px !important;
}
.woof-textarea{
    width: 100%;
    top: 5px;
}
.woof-counter{
    margin: 7px 0px 0px 10px;
}
.woof-button{
    width: 90px;
    float: right;
    margin-top: 15px;
    font-weight: 600;

    color: #765d69;
}

/* WOOF TIMELINE BOX */
.woof-list{
    background: white;
}
.woof-body{
    padding: 16px !important;
    cursor: pointer;
}
.user-woof-avatar{
    float: left;
    margin: 10px 10px 10px  0px;
}
.user-woof-details{
    width: auto;
    margin: 5px 10px 0px 0px ;
}
.woof-actions{
    margin-top: 15px;
    margin-left: 50px;
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


/* TRANSITION ANIMATION */
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active{
    transition: opacity .5s;
    opacity: 0;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
