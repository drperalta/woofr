{<template>
    <div class="content">
        <div class="box left-box">
            <Profile></Profile>
        </div>

        <!-- MIDDLE BOX -->
        <div class="box middle">
                <div class="woof-box">
                    <ul>
                        <li>
                            <Avatar class="woof-avatar" icon="ios-person" size="medium" />
                        </li>
                        <li>
                            <Input class="woof-text" v-model="WoofDetails.Woof" type="textarea" :maxlength="280" placeholder="What's happening..." @on-change="count()" :autosize="{minRows: 1,maxRows: 5}"/>
                            <Button class="woof-button" type="primary" style="width: 110px; display: block; float: right; margin-right: 10px;" :disabled="woof_length == 0" v-if="woof_length != 0">Woof</Button>
                        </li>
                        <li>
                            <i-circle class="circle" :percent="percent" :stroke-color="color" :size="25" v-if="woof_length != 0"></i-circle>
                        </li>
                    </ul>
                </div>

                <div class="woof-timeline">

                    <ol style="list-style: none;">
                        <li v-for="item in Woofs" :key="item.id">
                            <div class="user-woof">
                                <Avatar class="user-avatar" icon="ios-person" size="large" />
                                <div style="margin-left: 55px; max-width: 495px; display: block;">
                                    <a :href="'/'+item.user_name" style="font-size: 14px; font-weight: 600; color: black" >{{item.full_name}}</a>
                                    <span style="color: grey;">@{{item.user_name}}</span>
                                    <div style="font-size: 13px; ">
                                        {{item.woof_text}}
                                    </div>
                                </div>
                                <div class="actions">
                                    <ul>
                                        <li>
                                            <Icon type="ios-chatbubbles-outline" />
                                        </li>
                                        <li>
                                            <Icon type="md-repeat" />
                                        </li>
                                        <li>
                                            <Icon type="md-heart-outline" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <Divider class="divider"/>
                        </li>
                    </ol>
                </div>
        </div>
        <!-- RIGHT BOX -->
        <div class="box right">

        </div>
    </div>
</template>

<script>
import Profile from '../Partials/Profile'
export default {
    components: {Profile},
    data(){
        return{
            focus: false,
            percent: 0,
            woof_length: 0,
            WoofDetails:{
                Woof: '',
            },

            Woofs:[
                {
                    id: 2,
                    woof_text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
                    user_name: 'IamNikkiMe',
                    full_name: 'Mary Nicole',
                    created_at: '',
                },
                {
                    id: 3,
                    woof_text: 'is simply dummy text of the printing and typesetting industry.',
                    user_name: 'beaamor0212',
                    full_name: 'Bea Amor',
                    created_at: '',
                },
                {
                    id: 4,
                    woof_text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
                    user_name: 'IamNikkiMe',
                    full_name: 'Mary Nicole',
                    created_at: '',
                },
                {
                    id: 5,
                    woof_text: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                    user_name: 'ricamiguing_',
                    full_name: 'Rice Lois',
                    created_at: '',
                },
                {
                    id: 6,
                    woof_text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                    user_name: 'beaamor0212',
                    full_name: 'Bea Amor',
                    created_at: '',
                },
            ]
        }
    },
    methods:{
        count(){
            var multiply = this.WoofDetails.Woof.length / 280;
            this.percent = multiply * 100;

            this.woof_length = this.WoofDetails.Woof.length;
        },
        showButtons(){

        },

    },
    computed:{
        color () {
                let color = '#2db7f5';
                if (this.percent > 100) {
                    color = 'red';
                }
                return color;
            },

        onFocus(){
            this.focus = true;
        },
        blur:function(){
            this.focus = false;
        }
    },
    created(){
        this.$root.active_name = window.location.href.split('/')[3];
    }
}
</script>

<style scoped>
.left-box{
    max-width: 290px;
    min-width: 290px;
    float: left;

    border-width: 5px;
    border-style: solid;
    border-color: #FFFFFF;
    border-radius: 5px;
}

.divider{
    margin: 0;
}
.content{
    margin-top: 7px;
}
.box{
    margin: 5px;
}
.middle{
    background-color:white;
    min-width: 590px;
    max-width: 590px;
    float: left;

    border-width: 5px;
    border-style: solid;
    border-color: #FFFFFF;
    border-radius: 5px;
}
.right{
    background-color:brown;
    min-width: 290px;
    max-width: 290px;
    height: 500px;
    float: left;
}
.profile-box{

}
.upper{
    background-color: #41B5E4;
    height: 95px;
}
.img{
    width: 60px;
    position: absolute;
    margin: 10px 20px;
    border-radius: 50%;
    border: 2px solid;
    border-color: gainsboro;
}
.user-field{
    left: 110px;
    margin-left: 95px;
    padding-top: 15px;
}
.name{
    font-size: 18px;
    color: black
}
.username{

}
.user-stats{

}
.user-stats ul{
    margin-top: 15px;
    list-style: none;
    margin-left: 15px;
    display:flex;
    flex-direction: row;
    text-align: center;
}
.user-stats li{
    margin: 10px 15px;
}
.span{
    display:block;
}
.user-stats-name{
    color: #657786;
}
.counts{
    font-size: 22px;
    font-weight: 600;
}
.woof-box ul{
    list-style: none;
    display:flex;
    flex-direction: row;
    padding-top: 10px;
}
.woof-box{
    background-color: #E8F4FB;
    padding-bottom: 10px;
}
.woof-avatar{
    margin: 13px;
    margin-left: 20px !important;
}
.woof-box-extras{

}
.woof-button{

}
.woof-text{
    width: 460px;
    margin: 13px 10px;
    display: block;
}
.woof-timeline{
    background: white;
}
.user-avatar{
    margin-right: 15px;
    float: inherit;
    position: absolute;
}
.user-woof{
    display:flex;
    flex-direction: row;
    padding: 18px 20px;
}
.circle{
   width: 25px;
   margin-top: 16px;
}
.actions{
    display: block;
}
.actions ul{
    list-style: none;
    display:flex;
    flex-direction: row;
}
</style>
