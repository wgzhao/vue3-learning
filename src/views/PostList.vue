<template lang="en">
    <div v-if="error">
        <p> {{ error }} </p>
    </div>
    <div v-if="posts.length">
        <div v-for="post in posts" :key="post.id">
            <SinglePost :post="post" />
        </div>
    </div>
    <div v-else>
        <p> loading.... </p>
    </div>

</template>
<script>
import SinglePost from './SinglePost.vue';

export default {
    data() {
        return {
            posts: [],
            error: '',
        }
    },

    mounted() {
        this.fetchPosts();
        
    },
    components: {
        SinglePost
    },
    methods: {
        fetchPosts() {
            fetch('http://localhost:3010/blog')
            .then(response => response.json())
            .then(json => {
                this.posts = json;
            })  
            .catch(error => {
                this.error = 'Not available at the moment';
            }) 
        }
    }
}
</script>
<style lang="en">
    
</style>