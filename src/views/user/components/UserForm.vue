<template>
    <form action="">
        <input type="text" v-model="user.username">
        <input type="text" v-model="user.email">
        <button @click.prevent="submit">Save user</button>
    </form>
</template>

<script>
    import validateEmailMixin from "../../../mixins/validateEmailMixin";

    export default {
        mixins: [validateEmailMixin],
        name: "UserForm",
        props: {
            defaultUser: {
                type: Object,
                default: () => {
                    return {username: '', password: ''}
                }
            }
        },
        data() {
            return {
                user: {
                    username: '',
                    email: ''
                }
            }
        },
        created() {
          this.user = Object.assign({}, this.defaultUser);
        },
        methods: {
            submit() {
                if (!this.user.username.length) {
                    console.log('INCALID');
                    return false;
                }

                if (!this.user.email.length || !this.validateEmail(this.user.email)) {
                    console.log('invalid email');
                    return false;
                }

                console.log('SUBMITTED');

                this.$emit('submit', this.user);
            }
        }
    }
</script>

<style scoped>

</style>