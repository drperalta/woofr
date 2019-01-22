<template>
    <div class="content">
        <div class="box middle-box left white woofr-border">
            <div class="woofs-header">
                <ButtonGroup>
                    <Button size="large" to="#">Woofs</Button>
                    <Button size="large" to="#">Comments</Button>
                </ButtonGroup>
            </div>
            <Divider style="margin: 5px 0px"></Divider>
            <!-- LIST OF ALL WOOFS -->
            <div class="woof-list">
                <ul>
                    <li class="whole-woof" v-for="(woof, index) in UserWoofs" :key="woof.id">
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
                            <ul class="row">
                                <!-- USER'S AVATAR -->
                                <li>
                                    <Avatar class="user-woof-avatar" icon="ios-person" size="large"/>
                                </li>
                                <!-- WOOFS DETAILS. FULLNAME WITH USERNAME AND WOOF POST -->
                                <li>
                                    <div class="user-woof-details">
                                        <router-link :to="'/'+woof.user.username" style="font-size: 14px; font-weight: 600; color: black" >{{woof.user.fullname}}</router-link>
                                        <span style="color: grey;">@{{woof.user.username}}</span>
                                        <div style="font-size: 13px; ">
                                            {{woof.text}}
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
                            <div @click="reWoof(woof.id)" class="icon_rewoof">
                                <a>
                                    <Icon class="b" type="ios-repeat" size="24"/>
                                    {{woof.re_woof}}
                                </a>
                            </div>
                            <!-- LIKE ACTION -->
                            <div @click="like(index, woof.id)" class="icon_like" @mouseenter="over('ENTER')" @mouseleave="over('LEAVE')">
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
        </div>
        <div class="box side-box left woofr-border">
            <Trending></Trending>
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
import Trending from '../Trending'
import {mapGetters} from 'vuex'
import Comments from '../../Modals/Comments'
import ReWoof from '../../Modals/ReWoof'

export default {
    components: {Trending, Comments, ReWoof},
    data(){
        return{
            LikeDetails: {
                user_id: '',
                woof_id: ''
            }
        }
    },
    created(){
        this.$root.profile_active_page = window.location.href.split('/')[3];
    },
    computed: mapGetters([
        'VisitedData',
        'UserWoofs',
        'UserData'
    ]),
    mounted(){

    },
    methods:{
        //to open the comment box
        comment(id){
            this.root().CommentModal = false
            Vue.comment.set(id);   //to set selected woof data
            this.root().CommentModal = true
        },
        //this will call when the comment modal is closed
        commentCancel(){
            this.root().CommentModal = false
            Vue.woof.my_woofs(this.VisitedData.id);
        },
        //to open the rewoof box
        reWoof(id){
            Vue.rewoof.set(id);
            this.$root.ReWoofModal = true
        },
        //this will call when the rewoof modal is closed
        rewoofCancel(){
            if(this.$root.ReWoofModal){
                this.$root.ReWoofModal = false
            }
            Vue.woof.my_woofs(this.VisitedData.id);
        },
        //to like a woof
        like(index, id){

            this.LikeDetails.user_id = this.UserData.id;
            this.LikeDetails.woof_id = id;
            // Check if liked is true
            if(this.UserWoofs[index].liked == true){
                // // if liked is true, then make it false and minus 1 the counts
                this.UserWoofs[index].liked = false;
                this.UserWoofs[index].like_counts -= 1;
                Vue.woof.dislike(this, this.LikeDetails, 'profile')

                console.log('DISLIKED')
            }else if(this.UserWoofs[index].liked == false){
                // if liked is false, then make it true and plus 1 the counts
                this.UserWoofs[index].liked = true;
                this.UserWoofs[index].like_counts += 1;
                Vue.woof.like(this, this.LikeDetails, 'profile')

                console.log('LIKED')
            }
            //console.log(this.LikeDetails)
            
        },
        //Open Woof Modal
        open(id){
            if(this.$root.CommentModal != true){
                Vue.woof.selected(id);
                this.$root.WoofModal = true;
            }else if(!this.$root.ReWoofModal != true){
                Vue.woof.selected(id);
                this.$root.WoofModal = true;
            }
        },
        //To delete woof
        delete_woof(id){
            Vue.woof.delete(this,id,this.UserData.id);
        },
        //to show direct message modal
        direct_message(id){
            console.log(id)
        },
        root(){
            if(this.$root != null){
                return this.$root
            }
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
        over(msg){
            if(msg == 'ENTER'){
                this.$root.Liked = true;
            }else{
                this.$root.Liked = false;
            }
        }
    }
}
</script>

<style scoped>
.woofs-header{
    padding: 10px;
}
.woof-dropdown{
    float: right;
    margin-right: 10px;
    margin-top: 18px;
}
.woof-body{
    padding: 16px !important;
    cursor: pointer;
}
.user-woof-avatar{
    float: left;
    margin: 10px;
}
.user-woof-details{
    float: left;
    width: 100%;
    margin: 5px 10px 15px 0px ;
}
.woof-actions{
    margin-left: 57px;
    margin-bottom: 10px;
}
.woof-actions a{
    margin-right: 20px;
    color: #808695;
}
.whole-woof:hover{
    background-color: rgba(240, 234, 234, 0.20);
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

/* WOOF ACTIONS */
.woof-actions{
    margin-left: 50px;
    margin-bottom: 20px;
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
