<template>
    <div class="overlay" @click="closeOverlayModal" v-if="show">
        <div class="modal-content-wrapper">
            <div class="close-modal">X</div>
            <div class="modal-title" v-if="showTitle">
                <slot name="title"></slot>
            </div>
            <div class="modal-body">
                <slot name="body"></slot>
            </div>
            <div class="modal-footer">
                <slot name="actions">
                    <button @click="closeModal">Cancel</button>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CustomModal",
        props: {
            showTitle: {
                type: Boolean,
                default: true
            },
            closeOnOverlayClick: {
                type: Boolean,
                default: true
            },
            value: {
                type: Boolean,
                default: false
            }
        },
        data() {
          return {
              show: false
          }
        },
        created() {
          this.show = this.value;
        },
        methods: {
            closeModal() {
                this.$emit('input', false);
            },
            closeOverlayModal() {
                if (!this.closeOnOverlayClick) {
                    return false;
                }

                this.$emit('input', false);
            }
        },
        watch: {
            value(newValue) {
                if (newValue !== this.show) {
                    this.show = newValue;
                }
            }
        }
    }
</script>

<style scoped>
    .overlay {
        position: fixed;
        background: rgba(0, 0, 0, .6);
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .modal-content-wrapper {
        padding: 15px;
        background: #fff;
        max-width: 500px;
        min-width: 250px;
    }
</style>
