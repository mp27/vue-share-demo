<template>
    <div :class="classes">
        <label :for="id" v-if="label">{{label}}</label>
        <input :type="type" :id="id" :placeholder="placeholder" @input="onInput" @change="$emit('change', $event)" v-model="inputValue">
    </div>
</template>

<script>
    export default {
        name: "CustomInput",
        props: {
          label: {
              type: String
          },
            placeholder: {
                type: String,
                default: ''
            },
            id: {
              type: String,
                required: true
            },
            type: {
              type: String,
                default: 'text'
            },
            value: {
              type: String
            },
            classes: {
              type: [Array, String, Object],
                default: ''
            },
            inputClasses: {
                type: [Array, String, Object],
                default: ''
            },
            styling: {
              type: Object,
                default: () => {
                   return {
                       input: {
                           classes: '',
                           styles: {}
                       },
                       label: {
                           classes: {},
                           styles: {}
                       }
                   }
                },
                validator: () => {
                    return true;
                }
            }
        },
        data() {
            return {
                inputValue: ''
            }
        },
        created() {
          this.inputValue = this.value;
        },
        methods: {
            onInput() {
                this.$emit('input', this.inputValue);
            }
        },
        watch: {
            value(newValue) {
                if (newValue !== this.inputValue) {
                    this.inputValue = newValue;
                }
            }
        }
    }
</script>

<style scoped>

</style>