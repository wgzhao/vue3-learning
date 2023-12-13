<template>
    <div class="backdrop" v-on:click.self="closeModal">
        <div class="modal">
            <h1>{{  header }}</h1>
            <p>{{  text }}</p>
            <slot></slot>
        </div>
        </div>
</template>

<script>
export default {
    name: 'Modal',
    props: ['header', 'text'],
    methods: {
        closeModal() {
            this.$emit('close');
        }
    }
}
</script>

<style>
.modal {
    background-color: #345c9d;
    color: white;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 100px auto;
    padding: 1rem 2rem;
    width: 30rem;
    max-width: 80%;
    z-index: 100;
}
</style>