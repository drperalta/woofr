<template>
    <div class="content">
        <ul>
            <li v-for="notif in Notifications" :key="notif.id">
                <ul class="notif row" >
                    <li><a class="color-black" :href="'/'+notif.user_name"><Avatar icon="ios-person" size="large"/></a></li>
                    <li>
                        <div class="details">
                            <span class="name"><a class="color-black" :href="'/'+notif.user_name">{{notif.full_name}}</a></span>
                            <br/>
                            <span class="username"><a class="color-black" :href="'/'+notif.user_name">@{{notif.user_name}}</a></span>
                            <span class="text">{{notif.notif_text}}</span>
                        </div>
                        <a v-for="(woof, index) in Woofs()" :key="index">
                            <div class="woof hvr-fade" v-if="woof.id == notif.woof_id" @click="show(woof.id)">
                                <a :href="'/'+woof.user_name" class="woof-fullname color-black">{{woof.full_name}}</a>
                                <span class="woof-username">@{{woof.user_name}}</span>
                                <br/>
                                <span class="woof-text color-black">{{woof.woof_text}}</span>
                            </div>
                        </a>
                    </li>
                </ul>
                <Divider class="idivider"></Divider>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            Notifications:[
                {
                    id: 1,
                    full_name: 'Mary Nicole',
                    user_name: 'iamnikkime',
                    woof_id: 1,
                    notif_text: 'liked your post.',
                    read: false
                },
                {
                    id: 2,
                    full_name: 'Bea Amor',
                    user_name: 'beaamor0212',
                    woof_id: 2,
                    notif_text: 'rewoof your post.',
                    read: false
                },
                {
                    id: 3,
                    full_name: 'Rica',
                    user_name: 'ricamiguing_',
                    woof_id: 3,
                    notif_text: 'commented on your post.',
                    read: true
                },
                {
                    id: 4,
                    full_name: 'Tacs',
                    user_name: 'xtephaein',
                    woof_id: 4,
                    notif_text: 'liked your post.',
                    read: true
                },
                {
                    id: 5,
                    full_name: 'Deysi',
                    user_name: 'aisybomi',
                    woof_id: 5,
                    notif_text: 'rewoof your post.',
                    read: false
                },
                {
                    id: 6,
                    full_name: 'Bea Amor',
                    user_name: 'beaamor0212',
                    notif_text: 'followed you.',
                    read: true
                },
                {
                    id: 7,
                    full_name: 'Lizzy',
                    user_name: 'heyitsmelizzy',
                    woof_id: 7,
                    notif_text: 'commented your post.',
                    read: false
                },
                {
                    id: 8,
                    full_name: 'Bea Amor',
                    user_name: 'beaamor0212',
                    woof_id: 8,
                    notif_text: 'rewoof your post.',
                    read: false
                }
            ]
        }
    },
    methods:{
        Woofs(){
            return this.$root.Woofs;
        },
        show(id){
            alert(id);
        }
    }
}
</script>

<style scoped>
.notif{
    padding: 15px;
}
.name{
    font-weight: 600;
    font-size: 14px;
}
.username{
    color: grey;
}
.details{
    margin-left: 10px;
}
.woof{
    border: 1px solid #E6ECF0;
    border-radius: 5px;
    padding: 10px;
    margin-top: 10px;
}
.woof-fullname{
    font-weight: 600;
}
.woof-username{
    color: grey;
}
.woof-text{

}
</style>
