<template>
    <div class="container">
        <div class="trending-header">
            <h2>Trending List</h2>
        </div>
        <Divider style="margin: 10px 0px;"/>
        <div class="trending-list">
            <ul>
                <li v-for="trend in TrendingDetails" :key="trend.id">
                    <a href="#">
                        <div class="trending_title">
                            {{trend.trending_text}}
                        </div>
                        <div class="trending_tweet_counts">
                            {{trend.tweet_counts}} Tweets
                        </div>
                    </a>

                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            TrendingDetails:[
                {
                    id: 1,
                    trending_text: '#Harden',
                    tweet_counts: '30.4k',
                },
                {
                    id: 2,
                    trending_text: '#ALDUBNationForJackEmPopoy',
                    tweet_counts: '75.5k',
                },
                {
                    id: 3,
                    trending_text: '#CusRise',
                    tweet_counts: '5,626',
                },
                {
                    id: 4,
                    trending_text: '#PlayHouseGameChanger',
                    tweet_counts: '22.6k',
                },
                {
                    id: 5,
                    trending_text: '#INeedCoffeeBecause',
                    tweet_counts: '5,658',
                }

            ]
        }
    }
}
</script>

<style scoped>
.container{
    padding: 10px 20px;
    background-color: white;
}
.trending-list ul li{
    margin-bottom: 10px;
}
.trending_title{
    color: #765D69;
    font-size: 14px;
    font-weight: 600;
}
.trending_tweet_counts{
    color: #afb2b8;
}
</style>
