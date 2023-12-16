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
import fetchPosts from '../api/fetchPosts';
export default {
    setup() {
        const { posts, error, load} = fetchPosts();
        load()
        return { posts, error }
    },
    components: {
        SinglePost
    },
}
</script>
<style lang="en">
    
</style>