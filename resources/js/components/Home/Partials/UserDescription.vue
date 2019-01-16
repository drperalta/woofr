<template>
    <div class="box side-box user-description white woofr-border">
        <div class="description" v-if="UserData.description != null">{{UserData.description}}</div>
        <div class="description-list" v-if="UserData.country != null">
            <Icon type="ios-pin-outline" size="24"/>
            Lived in {{UserData.country}}
        </div>
        <div class="description-list" v-if="UserData.website != null">
            <Icon type="ios-link-outline" size="24"/>
            <a :href="'http://'+UserData.website">{{UserData.website}}</a>
        </div>
        <div class="description-list" v-if="UserData.created_at != null">
            <Icon type="ios-calendar-outline" size="24"/>
            Joined on {{UserData.created_at['date'] | moment('MMMM DD YYYY')}}
        </div>
        <div class="description-list" v-if="UserData.birthdate != null">
            <Icon type="ios-ice-cream-outline" size="24"/>
            Born {{UserData.birthdate | moment('MMMM DD YYYY')}}
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
    computed: mapGetters([
        'UserData'
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