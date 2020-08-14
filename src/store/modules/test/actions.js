import UsersService from "@/services/UsersService";

export default {
    setCounter(context, payload) {
        // console.log(context.dispatch('test2/setCounter', 10, {root: true}));
        context.commit('setCounter', payload);
        UsersService.fetchUsers();
    },
    anotherSetCounter(){
        console.log('TEST din set counter');
    }
}