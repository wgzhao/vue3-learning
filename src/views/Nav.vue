<template lang="en">
  <div id="nav">
        <router-link :to="{ name: 'Home'}">Home</router-link> |
        <router-link :to="{ name: 'About'}">About</router-link> |
        <router-link :to="{ name: 'Posts'}">Posts</router-link>
  </div>
</template>
<script>
export default {
    
}
</script>
<style> 
    #nav {
      padding: 30px;
    }
    #nav a {
      font-weight: bold;
      color: #2c3e50; 
      text-decoration: none;
      padding: 10px;
      border-radius: 4px;
    }
    #nav a.router-link-active {
      color: #42b983;
    }
</style>