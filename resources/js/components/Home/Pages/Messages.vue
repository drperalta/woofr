<template>
    <div>
        MESSAGES
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    created(){
        this.$root.active_name = window.location.href.split('/')[3];
    }
}
</script>

<style scoped>

</style>
