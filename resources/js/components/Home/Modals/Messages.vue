<template>
    <div class="content">
        <div class="message-list">
            <div class="message-list-header">
                <h3 style="float: left; padding: 4px; margin-right: 106px">Messages</h3>
                <Button color="primary" style="" shape="circle">New Message</Button>
            </div>
            <Divider style="margin: 0px"></Divider>
            <div class="message-list-body" ref="listbody">
                <Scroll :height="660">
                <div class="message-box" dis-hover :bordered="false" v-for="(message, index) in Messages" :key="index" @click="show(message)">
                    <Avatar class="sender-img" icon="ios-person" size="large"/>
                    <div class="message-info">
                        <span class="name">{{ message.sender_name }}</span>
                        <span class="username">@{{ message.sender_username }}</span>
                        <div class="message">
                            {{ message.message_text }}
                        </div>
                    </div>
                </div>
                </Scroll>
            </div>
        </div>
        <Divider type="vertical" style="float: left; height: 100%; margin: 0px"></Divider>
        <div class="message-body" v-if="this.selectedUserDetails.sender_id != ''">
            <div class="message-body-header">
                <h3>{{this.selectedUserDetails.sender_name}}</h3>
                <span>@{{this.selectedUserDetails.sender_username}}</span>
            </div>
            <Divider style="margin: 0px"></Divider>
            <div class="message-content ">
                <Scroll :on-reach-bottom="handleReachBottom" :height="610">
                    <div class="message-wrapper">
                        <div class="message-bubbles" v-for="msg in conversation" :key="msg.id" :style="bubbles(msg.type)">
                            {{ msg.message }}
                        </div>
                    </div>
                </Scroll>
            </div>
            <Divider style="margin: 0px; bottom: 0px;"></Divider>
            <div class="message-textbox">
                <Input placeholder="Type a message..." style="width: 100%" size="large" search enter-button="Send" @on-enter="send(this.selectedUserDetails.sender_id)" @on-search="send()"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            Messages:[
                {
                    id: 1,
                    sender_id: 1,
                    sender_name: 'Bea Amor',
                    sender_username: 'beaamor0212',
                    reciever_id: 21,
                    message_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                },
                {
                    id: 2,
                    sender_id: 2,
                    sender_name: 'Mary Nicole',
                    sender_username: 'iamnikkime',
                    reciever_id: 22,
                    message_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                },
                {
                    id: 3,
                    sender_id: 3,
                    sender_name: 'Rica Camiguing',
                    sender_username: 'ricamiguing_',
                    reciever_id: 23,
                    message_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                },
                {
                    id: 4,
                    sender_id: 4,
                    sender_name: 'Jan Raph',
                    sender_username: 'janraphael11',
                    reciever_id: 24,
                    message_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                },
                {
                    id: 5,
                    sender_id: 5,
                    sender_name: 'Tacs',
                    sender_username: 'xtephaein',
                    reciever_id: 25,
                    message_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                },
                {
                    id: 6,
                    sender_id: 6,
                    sender_name: 'Deysi',
                    sender_username: 'aisybomi',
                    reciever_id: 26,
                    message_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                },
                {
                    id: 7,
                    sender_id: 7,
                    sender_name: 'Lizzy',
                    sender_username: 'heyitsmelizzy',
                    reciever_id: 27,
                    message_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                },
                {
                    id: 8,
                    sender_id: 8,
                    sender_name: 'L i a n',
                    sender_username: 'cstrlian',
                    reciever_id: 28,
                    message_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                },
            ],
            selectedUserDetails: {
                sender_id: '',
                sender_name: '',
                sender_username: '',
                sender_text: ''

            },
            Message: {
                id: '',
                to: '',
                text: '',
            },
            conversation: [
                {   
                    id: 1,
                    type: 'received',
                    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                },
                {   
                    id: 2,
                    type: 'sent',
                    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                },
                {   
                    id: 3,
                    type: 'received',
                    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                },
                {   
                    id: 4,
                    type: 'received',
                    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                },
                {   
                    id: 5,
                    type: 'sent',
                    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                },
                {   
                    id: 6,
                    type: 'received',
                    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                },
                {   
                    id: 7,
                    type: 'sent',
                    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                },
                {   
                    id: 8,
                    type: 'received',
                    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                },
                {   
                    id: 9,
                    type: 'sent',
                    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                },

            ]
        }
    },
    methods:{
        show(data){
            this.selectedUserDetails.sender_id = data.sender_id;
            this.selectedUserDetails.sender_name = data.sender_name;
            this.selectedUserDetails.sender_username = data.sender_username;
            this.selectedUserDetails.text = data.message_text;
        },
        send(){
            
        },
        bubbles(type){
            if(type == 'sent'){
                return 'right: -43%; background-color: #765d69; color: whitesmoke'
            }else{
                return 'color: black; background-color: rgba(240, 234, 234, 0.80);'
            }
        }
    }
}
</script>

<style scoped>
.content{
    height: 75vh;
    overflow: hidden;
}
.message-list{
    width: 320px;
    height: 100%;
    float: left;
    overflow: hidden;
}
.message-list-header{
    padding: 15px;
}
.message-list-body{
    height: 100%;
}
.message-body{
    width: 579px;
    height: 100%;
    float: left;
    
}
.message-body-header{
    text-align: center;
    padding: 15px;
    height: 61.89px;
}
.message-content{
    height: calc(100% - 117px);
    max-width: 575px;
    overflow: hidden;
}
.message-textbox{
    bottom: 0px;
    padding: 8px;
    box-sizing: border-box;
    display: block;
}
.message-wrapper{
    width: auto !important;

}
.message-bubbles{
    max-width: 300px; 
    height: auto;
    overflow-wrap: break-word;
    margin: 10px;
    padding: 10px;
    border: 1px solid transparent;
    border-radius: 8px;
    font-size: 14px;
    position: relative;
}
.in-message{
    border: 3px solid yellow;
}
.out-message{
    float: right;
    border: 3px solid blue;
}

.message-box{
    cursor: pointer;
    padding: 15px;
}
.sender-img{
    margin-right: 10px; 
    float: left
}
.message-info{
    max-width: 270px; 
    max-height: 60px; 
    overflow: hidden
}
.name{
    font-weight: 600
}
.username{
    color: grey;
}
.message{
    margin-top: 5px;
    color: grey;
}
</style>
