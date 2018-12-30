<template>
    <div class="container">
        <!-- WOOF BOX -->
        <div class="woof-box">
            <ul>
                <li>
                    <Avatar class="user-avatar" icon="ios-person" size="medium" />
                </li>
                <li class="woof-box-middle">
                    <Input class="woof-textarea" v-model="WoofDetails.Woof" type="textarea" :maxlength="140" placeholder="What's happening..." @on-change="count()" @on-blur="onBlur()" @on-focus="onFocus()"  :autosize="{minRows: 1,maxRows: 5}"/>
                    <Button class="woof-button" shape="circle" :disabled="woof_length == 0" v-if="focused">Woof</Button>
                </li>
                <li>
                    <i-circle class="woof-counter" :percent="percent" stroke-color="#765d69" :size="25"></i-circle>
                </li>
            </ul>
        </div>

        <!-- LIST OF ALL WOOFS -->
        <div class="woof-timeline">
            <ul>
                <li v-for="(woof, index) in Woofs" :key="woof.id">
                    <div class="user-woof">
                        <ul>
                            <!-- USER'S AVATAR -->
                            <li>
                                <Avatar class="user-woof-avatar" icon="ios-person" size="large"/>
                            </li>
                            <!-- WOOFS DETAILS. FULLNAME WITH USERNAME AND WOOF POST -->
                            <li>
                                <div class="user-woof-details">
                                    <a :href="'/'+woof.user_name" style="font-size: 14px; font-weight: 600; color: black" >{{woof.full_name}}</a>
                                    <span style="color: grey;">@{{woof.user_name}}</span>
                                    <div style="font-size: 13px; ">
                                        {{woof.woof_text}}
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <!-- WOOF ACTIONS -->
                        <div class="woof-actions">
                            <ul>
                                <!-- COMMENT ACTION -->
                                <li>
                                    <a @click="comment()">
                                        <Icon type="ios-text-outline" size="24"/>
                                        {{woof.comments}}
                                    </a>

                                </li>
                                <!-- RE-WOOF ACTION -->
                                <li>
                                    <a @click="reWoof()">
                                        <Icon type="ios-repeat" size="24"/>
                                        {{woof.re_woof}}
                                    </a>
                                </li>
                                <!-- LIKE ACTION -->
                                <li>
                                    <a @click="like(index)">
                                        <Icon type="ios-heart" v-if="woof.liked" size="24"/>
                                        <Icon type="ios-heart-outline" v-if="!woof.liked" size="24"/>
                                        {{woof.likes}}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Divider style="margin: 0;"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            focused: false,
            percent: 0,
            woof_length: 0,
            WoofDetails:{
                Woof: '',
            },

            Woofs:[
                {
                    id: 1,
                    woof_text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
                    user_name: 'IamDavidMe',
                    full_name: 'David Peralta',
                    comments: 5,
                    re_woof: 2,
                    likes: 7,
                    re_woofed: true,
                    liked: false
                },
                 {
                    id: 2,
                    woof_text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
                    user_name: 'IamNikkiMe',
                    full_name: 'Mary Nicole',
                    comments: 12,
                    re_woof: 2,
                    likes: 5,
                    re_woofed: true,
                    liked: false
                },
                {
                    id: 3,
                    woof_text: 'is simply dummy text of the printing and typesetting industry.',
                    user_name: 'beaamor0212',
                    full_name: 'Bea Amor',
                    comments: 5,
                    re_woof: 1,
                    likes: 2,
                    re_woofed: true,
                    liked: true
                },
                {
                    id: 4,
                    woof_text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
                    user_name: 'IamNikkiMe',
                    full_name: 'Mary Nicole',
                    comments: 1,
                    re_woof: 5,
                    likes: 5,
                    re_woofed: false,
                    liked: false

                },
                {
                    id: 5,
                    woof_text: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                    user_name: 'ricamiguing_',
                    full_name: 'Rice Lois',
                    comments: 0,
                    re_woof: 2,
                    likes: 4,
                    re_woofed: false,
                    liked: true
                },
                {
                    id: 6,
                    woof_text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                    user_name: 'beaamor0212',
                    full_name: 'Bea Amor',
                    comments: 22,
                    re_woof: 12,
                    likes: 26,
                    re_woofed: true,
                    liked: false
                },
                {
                    id: 7,
                    woof_text: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                    user_name: 'beaamor0212',
                    full_name: 'Bea Amor',
                    comments: 6,
                    re_woof: 9,
                    likes: 15,
                    re_woofed: true,
                    liked: true
                },
                {
                    id: 8,
                    woof_text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
                    user_name: 'IamDavidMe',
                    full_name: 'David Peralta',
                    comments: 5,
                    re_woof: 2,
                    likes: 7,
                    re_woofed: true,
                    liked: false
                },
                {
                    id: 9,
                    woof_text: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s',
                    user_name: 'IamNikkiMe',
                    full_name: 'Mary Nicole',
                    comments: 12,
                    re_woof: 2,
                    likes: 5,
                    re_woofed: true,
                    liked: false
                },

            ]
        }
    },
    methods:{
        count(){
            var quotient = this.WoofDetails.Woof.length / 140;
            this.percent = quotient * 100;

            this.woof_length = this.WoofDetails.Woof.length;
        },
        onFocus(){
            this.focused = true;
        },
        onBlur(){
            if(this.woof_length != 0){
                this.focused = true;
            }else{
                this.focused = false;
            }
        },
        comment(){

        },
        reWoof(){

        },
        like(index){
            // Check if liked is true
            if(this.Woofs[index].liked){
                // if liked is true, then make it false and minus 1 the counts
                this.Woofs[index].liked = false;
                this.Woofs[index].likes -= 1;
            }else{
                // if liked is false, then make it true and plus 1 the counts
                this.Woofs[index].liked = true;
                this.Woofs[index].likes += 1;
            }
        }
    }
}
</script>

<style scoped>
ul{
    list-style: none;
}
.container{

}
/* WOOF BOX */
.woof-box{
    border-width: 5px;
    border-style: solid;
    border-color: #FFFFFF;
    border-radius: 5px;

    background-color: white;
    padding: 5px;
    margin-bottom: 10px;
}
.woof-box ul{
    display: flex;
    flex-direction: row;
}
.woof-box-middle{
    width: 100%;
}
.user-avatar{
    margin: 5px;
    margin-left: 5px !important;
    margin-right: 10px !important;
}
.woof-textarea{
    width: 100%;
    top: 5px;
}
.woof-counter{
    margin: 7px 0px 0px 10px;
}
.woof-button{
    width: 90px;
    float: right;
    margin-top: 15px;
    font-weight: 600;

    color: #765d69;
}

/* WOOF TIMELINE BOX */
.woof-timeline{
    border-width: 5px;
    border-style: solid;
    border-color: #FFFFFF;
    border-radius: 5px;

    background: white;
}
.user-woof{
    padding: 5px;
}
.user-woof ul{
    display: flex;
    flex-direction: row;
}
.user-woof-avatar{
    float: left;
    margin: 10px;
}
.user-woof-details{
    float: left;
    width: 100%;
    margin: 5px 10px 15px 0px ;
}

.woof-actions{
    margin-left: 57px;
    margin-bottom: 10px;
}
.woof-actions ul li{
    margin-right: 20px;

}
.woof-actions ul li a{
    color: #808695;
}
</style>
