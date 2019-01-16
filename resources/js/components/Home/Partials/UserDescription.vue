<template>
    <div class="box side-box user-description white woofr-border">
        <div class="description" v-if="data().description != null">{{data().description}}</div>
        <div class="description-list" v-if="data().country != null">
            <Icon type="ios-pin-outline" size="24"/>
            Lived in {{data().country}}
        </div>
        <div class="description-list" v-if="data().website != null">
            <Icon type="ios-link-outline" size="24"/>
            <a :href="'http://'+data().website">{{data().website}}</a>
        </div>
        <div class="description-list" v-if="data().created_at != null">
            <Icon type="ios-calendar-outline" size="24"/>
            Joined on {{data().created_at['date'] | moment('MMMM DD YYYY')}}
        </div>
        <div class="description-list" v-if="data().birthdate != null">
            <Icon type="ios-ice-cream-outline" size="24"/>
            Born on {{data().birthdate | moment('MMMM DD YYYY')}}
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return{

        }
    },
    methods:{
        data(){
            if(this.$route.params.username != this.UserData.username){
                return this.VisitedData;
            }else{
                return this.UserData;
            }
        }
    },
    computed: mapGetters([
        'UserData',
        'VisitedData'
    ]),
    mounted(){
        Vue.auth.setUser();
    }
}
</script>

<style scoped>
.user-description{
    padding: 40px 25px 20px 25px;
    margin-bottom: 10px;
}
.description{
    font-size: 13px;
    margin-bottom: 20px;

    align-content: center;
    text-align: center;
}
.description-list{
    margin-bottom: 6px;
}
</style>
