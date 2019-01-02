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
        <div class="woof-list">
            <ul>
                <li v-for="(woof, index) in this.$root.Woofs" :key="woof.id">
                    <div class="woof-body">
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
                            <!-- COMMENT ACTION -->
                            <a @click="comment()">
                                <Icon type="ios-text-outline" size="24"/>
                                {{woof.comments}}
                            </a>
                            <!-- RE-WOOF ACTION -->
                            <a @click="reWoof()">
                                <Icon type="ios-repeat" size="24"/>
                                {{woof.re_woof}}
                            </a>
                            <!-- LIKE ACTION -->
                            <a @click="like(index)">
                                <transition name="bounce">
                                    <Icon type="ios-heart" v-if="woof.liked" size="24" style="position: absolute;" color="#db5353"/>
                                </transition>
                                <Icon type="ios-heart-outline" v-if="!woof.liked" size="24" />

                                <!-- this span is to add margin left when liking because the solid icon is absolute  -->
                                <span style="margin-left: 28px;" v-if="woof.liked"></span>{{woof.likes}}
                            </a>
                        </div>
                    </div>

                    <div class="woof-comments">
                        <div class="comment-box">

                        </div>
                        <div class="comment-list">

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
            if(this.$root.Woofs[index].liked){
                // if liked is true, then make it false and minus 1 the counts
                this.$root.Woofs[index].liked = false;
                this.$root.Woofs[index].likes -= 1;
            }else{
                // if liked is false, then make it true and plus 1 the counts
                this.$root.Woofs[index].liked = true;
                this.$root.Woofs[index].likes += 1;
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
.woof-list{
    border-width: 5px;
    border-style: solid;
    border-color: #FFFFFF;
    border-radius: 5px;

    background: white;
}
.woof-body{
    padding: 5px;
}
.woof-body ul{
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
.woof-actions a{
    margin-right: 20px;
    color: #808695;
}

/* COMMENTS */
.woof-comments{
    margin-left: 60px;
}




/* TRANSITION ANIMATION */
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active{
    transition: opacity .5s;
    opacity: 0;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
