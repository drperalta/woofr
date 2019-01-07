<template>
    <div class="box side-box user-description white woofr-border">
        <div class="description">{{this.$root.UserDetails.description}}</div>
        <div class="description-list">
            <Icon type="ios-pin-outline" size="24"/>
            Lived in {{this.$root.UserDetails.country}}
        </div>
        <div class="description-list" >
            <Icon type="ios-link-outline" size="24"/>
            <a :href="'http://'+this.$root.UserDetails.website">{{this.$root.UserDetails.website}}</a>
        </div>
        <div class="description-list">
            <Icon type="ios-calendar-outline" size="24"/>
            {{this.$root.UserDetails.created_at}}
        </div>
        <div class="description-list">
            <Icon type="ios-ice-cream-outline" size="24"/>
            Born {{this.$root.UserDetails.birthdate}}
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
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
}
.description-list{
    margin-bottom: 6px;
}
</style>