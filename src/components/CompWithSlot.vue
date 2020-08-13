<template>
    <div style="color: red;">
        <slot name="title"></slot>
        <h1>Title</h1>
        <slot></slot>
        <p>Footer</p>
        <button @click="setCounter(10)">Schimba state</button>
        <slot name="footer"></slot>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: "CompWithSlot",
        methods: {
            ...mapActions({
                setCounter: 'setCounter'
            })
        }
    }
</script>

<style scoped>

</style>