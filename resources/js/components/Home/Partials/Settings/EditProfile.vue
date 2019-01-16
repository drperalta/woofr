<template>
    <div class="box side-box user-description white woofr-border">

        <Input class="description" v-model="UserData.description" :value="country" type="textarea" :maxlength="110" placeholder="Bio" :autosize="{minRows: 1,maxRows: 4}"/>

        <AutoComplete clearable class="country-bar input" v-model="country" @on-change="filterList()" placeholder="Location">
            <Option v-for="(country, index) in filteredCountries" :value="country.name" :key="index">
                {{ country.name }}
            </Option>
        </AutoComplete>

        <Input class="input" v-model="UserData.website" placeholder="Website"/>

        <DatePicker class="input" v-model="UserData.birthdate" type="date" placeholder="Birthdate" style="width: 100%;"></DatePicker>

        <div class="button">
            <Button shape="circle" @click="cancel()">Cancel</Button>
            <Button type="primary" shape="circle" style="float: right" @click="save">Save Changes</Button>
        </div>

    </div>
</template>

<script>
const countryList = require('country-list');
import {mapGetters} from 'vuex'

export default {
    data(){
        return{
            filteredCountries: [],
            country: ''
        }
    },
    methods:{
        filterList(){
            var vm=this;
            this.filteredCountries = countryList.getData().filter(function(data){return data.name.toLowerCase().indexOf(vm.country.toLowerCase())>=0;})
        },
        handleReachBottom () {
                return new Promise(resolve => {
                    setTimeout(() => {
                        const last = this.filteredCountries[this.filteredCountries.length - 1];
                        for (let i = 1; i < 11; i++) {
                            this.filteredCountries.push(last + i);
                        }
                        resolve();
                    }, 2000);
                });
            },
        cancel(){
            this.$root.toggleEditProfile = false;
        },
        save(){
            Vue.user.edit_description(this, this.UserData, this.country)
            this.$root.toggleEditProfile = false;
        }
    },
    created(){
        console.log(countryList.getData());
    },
    computed: mapGetters([
        'UserData'
    ]),
    mounted(){
        this.country = this.UserData.country
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
.input{
    margin: 5px;
}
.button {
    margin-top: 20px;
}
</style>
