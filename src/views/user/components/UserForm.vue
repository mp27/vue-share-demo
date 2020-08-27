<template>
    <form action="">
        <CustomInput class="TEST" v-model="user.username" @input="onInput" @change="onChange" type="text" label="Username" placeholder="type username" :id="'usernameInput' + Math.random()" />
        <CustomRadioInput :items="checkboxItems" v-model="selectedCheckbox"  />
<!--        <input type="text" v-model="user.username">-->
        <input type="text" v-model="user.email">
        <button @click.prevent="submit">Save user</button>
    </form>
</template>

<script>
    import validateEmailMixin from "../../../mixins/validateEmailMixin";
    import CustomInput from "@/components/CustomInput";
    import CustomRadioInput from "@/components/CustomRadioInput";

    export default {
        name: "UserForm",
        mixins: [validateEmailMixin],
        components: {
          CustomInput,
            CustomRadioInput
        },
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
                },
                checkboxItems: [
                    {
                        id: 1,
                        label: 'Consent 1'
                    },
                    {
                        id: 2,
                        label: 'Consent 2'
                    }
                ],
                selectedCheckbox: [
                    {
                        id: 1,
                        label: 'Consent 1'
                    }
                ]
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
            },
            onInput() {
                console.log('ON INPUT');
            },
            onChange() {
                console.log('ON CHANGE');
            }
        }
    }
</script>

<style scoped>

</style>