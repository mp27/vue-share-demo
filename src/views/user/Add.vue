<template>
    <div>
        <h1>Add users</h1>
        <UserForm @submit="addUser" ref="userForm"/>
<!--        <form action="">-->
<!--            <input type="text" v-model="user.username">-->
<!--            <input type="text" v-model="user.email">-->
<!--            <button @click.prevent="submit">Save user</button>-->
<!--        </form>-->
    </div>
</template>

<script>
    import UserForm from "./components/UserForm";

    export default {
        components: {
          UserForm
        },
        mounted() {
          this.$refs.userForm.submit();
        },
        methods: {
            addUser(user) {
                console.log(user);
            }
        }
    }
</script>