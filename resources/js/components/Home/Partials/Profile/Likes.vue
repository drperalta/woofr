<template>
    <div>
        
    </div>
</template>

<script>
export default {
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

</style>
