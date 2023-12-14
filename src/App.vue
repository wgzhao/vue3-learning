<template>
  <Nav />
  <router-view />
  <h1> {{  title  }}</h1>
  <div v-if="showModal">
    <Modal :header="title" :text="msg" @close="toggleModal"/>
  </div>
  <div>

    <button @click="toggleModal">Toggle Modal</button>
  </div>

<button @click="start" :disabled="isPlaying">Play</button>

<div v-if="showReact">
  <p>Your reaction time is {{ reactTime }}ms </p>
</div>
<Block v-if="isPlaying" :delay="delay" @close="closeBlock"/>
</template>

<script>
import Nav from './views/Nav.vue';
import Modal from './components/Modal.vue';
import Block from './components/Block.vue';


export default {
    name: 'App',
    data() {
        return {
            title: 'Vue.js App',
            msg: 'Welcome to Your Vue.js App',
            showModal: false,
            isPlaying: false,
            delay: null,
            reactTime: null,
            showReact: false
        };
    },
    methods: {
        toggleModal() {
            this.showModal = !this.showModal;
        },

        start() {
          this.delay = 2000 + Math.random() * 5000;
          this.isPlaying = true;
        },

        closeBlock(time) {
          this.isPlaying = false;
          this.reactTime = time;
          this.showReact = true;
          // alert(`You took ${time}ms to click the block`);
        }
    },
    components: { Modal, Block, Nav},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #5f4949;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
