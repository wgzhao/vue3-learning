<template>
    <div class="block" v-if="showBlock" @click="closeBlock">
        click me !
    </div>
</template>

<script>
export default {
    props: ['delay'],
    data() {
        return {
            showBlock: false,
            startTime: null,
            endTime: null,
        }
    },
    mounted() {
        setTimeout(() => {
            this.showBlock = true;
        }, this.delay); 
    },
    updated() {
        this.startTime = Date.now();
    },

    methods: {
        closeBlock() {
            this.endTime = Date.now();
            this.$emit('close', this.endTime - this.startTime);
        }
    },
}
</script>

<style>

.block {
    background-color: #345c9d;
    color: rgb(233, 239, 236);
    border-radius: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 50px auto;
    padding: 1rem 0;
    width: 20rem;
    height: 20rem;
    text-align: center;
    font-size: 2rem;
    vertical-align: middle;
}
</style>