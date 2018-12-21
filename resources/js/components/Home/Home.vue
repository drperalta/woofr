<template>
    <div>
        <!-- NAVBAR -->
        <el-menu class="navbar" mode="horizontal">
            <el-menu-item index="1"><router-link to="/timeline">Home</router-link></el-menu-item>
            <el-menu-item index="2"><router-link to="/notifications">Notifications</router-link></el-menu-item>
            <el-menu-item index="3"><router-link to="/messages">Messages</router-link></el-menu-item>
            
            <h1 class="logo">
                <img class="logo" src="../../../img/woofr-logo.png" alt="">
            </h1>

            <!-- <span class="items">
                <el-autocomplete size="medium" class="inline-input" v-model="state2" :fetch-suggestions="querySearch" placeholder="Search Woofr" :trigger-on-focus="false" @select="handleSelect">
                </el-autocomplete>
                <img class="profile" src="../../../img/default-picture.png" alt="">
            </span> -->
        </el-menu>

        <div class="body">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            links: [],
            state1: '',
            state2: ''
        }
        
    },
    methods: {
        querySearch(queryString, cb) {
            var links = this.links;
            var results = queryString ? links.filter(this.createFilter(queryString)) : links;
            // call callback function to return suggestions
            cb(results);
        },
        createFilter(queryString) {
            return (link) => {
            return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        loadAll() {
            return [
            { "value": "vue", "link": "https://github.com/vuejs/vue" },
            { "value": "element", "link": "https://github.com/ElemeFE/element" },
            { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
            { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
            { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
            { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
            { "value": "babel", "link": "https://github.com/babel/babel" }
            ];
        },
        handleSelect(item) {
            console.log(item);
        }
    },
    mounted() {
            this.links = this.loadAll();
        }
}
</script>

<style scoped>
.searchBar{
    width: 250px;
}
.logo{
    width: 40px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5px;
    
}
.items{
    float: right;
    max-height: 60px;
    margin-top: 10px;
}
.navbar{
    padding-left: 15%;
    padding-right: 15%;
    min-width: 1000px;
    max-height: 60px;
}
.body{
    padding-left: 15%;
    padding-right: 15%;
}
</style>
