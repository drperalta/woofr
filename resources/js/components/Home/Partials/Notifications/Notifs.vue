<template>
    <div class="content">
        <ul>
            <li v-for="notif in Notifications" :key="notif.id">
                <ul>
                    <li>
                        <Avatar icon="ios-person" size="large"/>
                    </li>
                    <li>
                        <div class="details">
                            <span class="name">{{notif.user_name}}</span>
                            <span class="text">{{notif.notif_text}}</span>
                        </div>
                    </li>
                </ul>
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
                    user_name: 'David Peralta',
                    woof_id: 1,
                    notif_text: 'liked your post.',
                    read: false
                },
                {
                    id: 2,
                    user_id: 'Bea Amor',
                    woof_id: 2,
                    notif_text: 'rewoof your post.',
                    read: false
                },
                {
                    id: 3,
                    user_name: 'David Peralta',
                    woof_id: 3,
                    notif_text: 'commented on your post.',
                    read: true
                },
                {
                    id: 4,
                    user_id: 'Bea Amor',
                    woof_id: 4,
                    notif_text: 'liked your post.',
                    read: true
                },
                {
                    id: 5,
                    user_name: 'David Peralta',
                    woof_id: 5,
                    notif_text: 'rewoof your post.',
                    read: false
                },
                {
                    id: 6,
                    user_id: 'Bea Amor',
                    woof_id: 6,
                    notif_text: 'followed you.',
                    read: true
                },
                {
                    id: 7,
                    user_name: 'David Peralta',
                    woof_id: 7,
                    notif_text: 'commented your post.',
                    read: false
                },
                {
                    id: 8,
                    user_id: 'Bea Amor',
                    woof_id: 8,
                    notif_text: 'rewoof your post.',
                    read: false
                }
            ]
        }
    }
}
</script>

<style scoped>
ul{
    list-style: none;
}
</style>