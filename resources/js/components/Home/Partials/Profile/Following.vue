<template>
    <div class="content">
        <div class="list" v-for="(following, index) in this.$root.users" :key="index">
            <div class="following-banner">
                <img class="following-img" src="../../../../../img/default-picture.png">
                <div class="following-field">
                    <div class="name">{{following.full_name}}</div>
                    <div class="username">@{{following.user_name}}</div>
                </div>
            </div>
            <div class="following-body">
                <div class="description">{{following.description}}</div>
                <Button class="button" type="primary" shape="circle" v-if="following.following" @click="unfollow(index)">Following</Button>
                <Button class="button" type="primary" shape="circle" v-if="!following.following" @click="follow(index)">Follow</Button>
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
    float: left;
    background: transparent;
    width: 895px;
    
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    border-radius: 5px;
}
.title{
    font-size: 21px;
    font-weight: 600;
    margin: 15px;

}
.list{
    display: block;
    float: left;

    width: 287px;
    border-width: 1px;
    border-style: solid;
    border-color: white;
    border-radius: 5px;

    margin: 5px;

    background-color: white;
}
.following-banner{
    width: auto;
    height: 83px;
    background-color: aliceblue;

    border-width: 5px;
    border-style: solid;
    border-color: transparent;
    border-radius: 5px;
    
    margin: 5px;
}
.following-img{
    width: 65px;
    border-radius: 50%;
    border: 3px solid white;
    
    position: absolute;
    margin-top: 40px;
    margin-left: 10px;
}
.following-field{
    padding-top: 58px;
    padding-left: 85px;
}
.following-field .name{
    font-weight: 600;
    font-size: 17px;
}
.following-field .username{
    color: grey;
}
.following-body{
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
