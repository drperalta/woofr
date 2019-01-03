<template>
    <div class="content">
        <div class="user-woofs">
            <div class="woofs-header">
                <ButtonGroup>
                    <Button size="large" to="#">Woofs</Button>
                    <Button size="large" to="#">Replies</Button>
                    <Button size="large" to="#">Media</Button>
                </ButtonGroup>
            </div>
            <Divider style="margin: 5px 0px"></Divider>
            <!-- LIST OF ALL WOOFS -->
            <div class="woof-list">
                <ul>
                    <li v-for="(woof, index) in this.$root.Woofs" :key="woof.id">
                        <div class="woof-body">
                            <ul>
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
        <div class="trending">
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
    }
}
</script>

<style scoped>
.content{
    background-color: white;
}
.user-woofs{
    float: left;
    min-width: 590px;
    max-width: 590px;
    border-width: 5px;
    border-style: solid;
    border-color: #FFFFFF;
    border-radius: 5px;
    background-color: white;
    margin: 5px;
}
.trending{
    min-width: 290px;
    max-width: 290px;
    float: left;
    background-color: white;

    border-width: 5px;
    border-style: solid;
    border-color: #FFFFFF;
    border-radius: 5px;

    margin: 5px;
}
ul{
    list-style: none;
}
.woofs-header{
    padding: 10px;
    background-color: white;
}
.woof-list{
    border-width: 5px;
    border-style: solid;
    border-color: #FFFFFF;
    border-radius: 5px;

    background: white;
}
.woof-body{
    padding: 5px;
}
.woof-body ul{
    display: flex;
    flex-direction: row;
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
