export default {
    // fetchUsers() {
    //     return axios.get('/users').then((resp) => resp);
    // }
    fetchUsers() {
        return fetch('/users');
    }
}