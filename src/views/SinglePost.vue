<template lang="">
    <div>
        <h1>{{ post.title}}</h1>
        <h2>By {{ post.author}}</h2>
        <p>{{ post.content}}</p>
    </div>
</template>
<script>
export default {
    props: ['post'],
}
</script>
<style lang="">
    
</style>