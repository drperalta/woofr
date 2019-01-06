<template>
    <div class="content left">
        <div class="box side-box list left woofr-border white" v-for="(followers, index) in this.$root.users " :key="index">
            <div class="followers-banner">
                <img class="followers-img" src="../../../../../img/default-picture.png">
                <div class="followers-field">
                    <div class="name">{{followers.full_name}}</div>
                    <div class="username">@{{followers.user_name}}</div>
                </div>
            </div>
            <div class="followers-body">
                <div class="description">{{followers.description}}</div>
                <Button class="button" type="primary" shape="circle" v-if="followers.following" @click="unfollow(index)">Following</Button>
                <Button class="button" shape="circle" v-if="!followers.following" @click="follow(index)">Follow</Button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        unfollow(index){
            this.$root.users[index].following = false;
        },
        follow(index){
            this.$root.users[index].following = true;
        }
    },
    created(){
        this.$root.profile_active_page = window.location.href.split('/')[4];
    }
}
</script>

<style scoped>
.content{
    width: 900px;
}
.title{
    font-size: 21px;
    font-weight: 600;
    margin: 15px;

}
.followers-banner{
    width: auto;
    height: 83px;
    background-color: aliceblue;

    border-width: 5px;
    border-style: solid;
    border-color: transparent;
    border-radius: 5px;
}
.followers-img{
    width: 65px;
    border-radius: 50%;
    border: 3px solid white;

    position: absolute;
    margin-top: 40px;
    margin-left: 10px;
}
.followers-field{
    padding-top: 58px;
    padding-left: 85px;
}
.followers-field .name{
    font-weight: 600;
    font-size: 17px;
}
.followers-field .username{
    color: grey;
}
.followers-body{
    height: 150px;
    padding: 30px;
}
.description{
    max-width: 230px;
    min-width: 230px;

    text-align: center;
}
.button{
    width: 200px;
    margin: 13px;
}
</style>
