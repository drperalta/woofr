<template>
    <div class="content">
        <div class="box side-box user-description white woofr-border ">
            <div class="description">{{UserDetails.description}}</div>
            <div class="description-list">
                <Icon type="ios-pin-outline" size="24"/>
                {{UserDetails.country}}
            </div>
            <div class="description-list" >
                <Icon type="ios-link-outline" size="24"/>
                <a :href="'http://'+UserDetails.website">{{UserDetails.website}}</a>
            </div>
            <div class="description-list">
                <Icon type="ios-calendar-outline" size="24"/>
                {{UserDetails.created_at}}
            </div>
            <div class="description-list">
                <Icon type="ios-ice-cream-outline" size="24"/>
                Born {{UserDetails.birthdate}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            UserDetails:{
                full_name: 'David Peralta',
                user_name: 'IamDavidMe',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
                country:' Republic of the Philippines',
                created_at: 'January 2019',
                website: 'facebook.com/peraltadavidr',
                birthdate: 'April 20, 1998',
                woof_counts: '120',
                follower_counts: '210',
                following_counts: '400',
                like_counts: '390'
            },
        }
    }
}
</script>

<style scoped>
.user-description{
    padding: 40px 25px 20px 25px;
    margin-bottom: 10px;
}
</style>
