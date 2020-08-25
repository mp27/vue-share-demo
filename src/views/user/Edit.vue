<template>
    <div>
        <h1>Edit users</h1>
        <UserForm :defaultUser="user" @submit="editUser"/>
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
        data() {
            return {
                user: {
                    username: '',
                    email: ''
                }
            }
        },
        created() {
          // fetch api
          this.user = {
              username: "petrisor",
              email: 'test@test.com'
          }
        },
        methods: {
            editUser(user) {
                console.log(user);
            }
        }
    }
</script>