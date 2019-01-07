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
                    <li v-for="(woof, index) in this.$root.Woofs" :key="woof.id">
                        <div class="woof-body">
                            <ul class="row">
                                <!-- USER'S AVATAR -->
                                <li>
                                    <Avatar class="user-woof-avatar" icon="ios-person" size="large"/>
                                </li>
                                <!-- WOOFS DETAILS. FULLNAME WITH USERNAME AND WOOF POST -->
                                <li>
                                    <div class="user-woof-details">
                                        <a :href="'/'+woof.user_name" style="font-size: 14px; font-weight: 600; color: black" >{{woof.full_name}}</a>
                                        <span style="color: grey;">@{{woof.user_name}}</span>
                                        <div style="font-size: 13px; ">
                                            {{woof.woof_text}}
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <!-- WOOF ACTIONS -->
                            <div class="woof-actions">
                                <!-- COMMENT ACTION -->
                                <a @click="comment()">
                                    <Icon type="ios-text-outline" size="24"/>
                                    {{woof.comments}}
                                </a>
                                <!-- RE-WOOF ACTION -->
                                <a @click="reWoof()">
                                    <Icon type="ios-repeat" size="24"/>
                                    {{woof.re_woof}}
                                </a>
                                <!-- LIKE ACTION -->
                                <a @click="like(index)">
                                    <transition name="bounce">
                                        <Icon type="ios-heart" v-if="woof.liked" size="24" style="position: absolute;" color="#db5353"/>
                                    </transition>
                                    <Icon type="ios-heart-outline" v-if="!woof.liked" size="24" />

                                    <!-- this span is to add margin left when liking because the solid icon is absolute  -->
                                    <span style="margin-left: 28px;" v-if="woof.liked"></span>{{woof.likes}}
                                </a>
                            </div>
                        </div>

                        <div class="woof-comments">
                            <div class="comment-box">

                            </div>
                            <div class="comment-list">

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
export default {
    components: {Trending},
    data(){
        return{

        }
    },
    created(){
        this.$root.profile_active_page = window.location.href.split('/')[4];
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
