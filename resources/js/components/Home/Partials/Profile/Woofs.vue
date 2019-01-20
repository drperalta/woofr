<template>
    <div class="content">
        <div class="box middle-box left white woofr-border">
            <div class="woofs-header">
                <ButtonGroup>
                    <Button size="large" to="#">Woofs</Button>
                    <Button size="large" to="#">Media</Button>
                </ButtonGroup>
            </div>
            <Divider style="margin: 5px 0px"></Divider>
            <!-- LIST OF ALL WOOFS -->
            <div class="woof-list">
                <ul>
                    <li v-for="(woof, index) in UserWoofs" :key="woof.id">
                        <div class="woof-body">
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
                                <a @click="comment()">
                                    <Icon type="ios-text-outline" size="24"/>
                                    {{woof.comment_counts}}
                                </a>
                                <!-- RE-WOOF ACTION -->
                                <a @click="reWoof()">
                                    <Icon type="ios-repeat" size="24"/>
                                    {{woof.rewoof_counts}}
                                </a>
                                <!-- LIKE ACTION -->
                                <a @click="like(index)">
                                    <transition name="bounce">
                                        <Icon type="ios-heart" v-if="woof.liked" size="24" style="position: absolute;" color="#db5353"/>
                                    </transition>
                                    <Icon type="ios-heart-outline" v-if="!woof.liked" size="24" />

                                    <!-- this span is to add margin left when liking because the solid icon is absolute  -->
                                    <span style="margin-left: 28px;" v-if="woof.liked"></span>{{woof.like_counts}}
                                </a>
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
    </div>
</template>

<script>
import Trending from '../Trending'
import {mapGetters} from 'vuex'

export default {
    components: {Trending},
    data(){
        return{

        }
    },
    created(){
        this.$root.profile_active_page = window.location.href.split('/')[3];
    },
    computed: mapGetters([
        'VisitedData',
        'UserWoofs'
    ]),
    mounted(){

    }
}
</script>

<style scoped>
.woofs-header{
    padding: 10px;
}
.woof-body{
    padding: 5px;
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
</style>
