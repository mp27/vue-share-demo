<template>
    <div style="color: red;">
        <slot name="title"></slot>
        <div>
            <span v-if="false">Span1</span>
            <span v-else-if="false">Span2</span>
            <span v-else>Span3</span>
        </div>
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
            ...mapActions('test', {
                setCounter: 'setCounter',
                anotherSetCounter: 'anotherSetCounter',
            }),
            ...mapActions('test2', {
                setCounter: 'setCounter'
            }),
        }
    }
</script>

<style scoped>

</style>