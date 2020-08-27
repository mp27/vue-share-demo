<template>
    <div>
        <div :key="item.id" v-for="item in items">
            <label v-if="item.label">{{item.label}}</label>
            <input type="checkbox" :value="item" @change="onChange" v-model="selected">
        </div>
    </div>
</template>

<script>
    export default {
        name: "CustomInput",
        props: {
            items: {
                type: Array,
                required: true
            },
            value: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                selected: []
            }
        },
        created() {
          this.selected = this.value;
        },
        methods: {
            onChange() {
                this.$emit('input', this.selected);
            }
        },
        watch: {
            value(newValue) {
                this.selected = newValue;
            }
        }
    }
</script>

<style scoped>

</style>