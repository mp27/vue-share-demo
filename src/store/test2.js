export default  {
    namespaced: true,
    state: {
        counter: 0,
        user: {
            username: 'Peter'
        }
    },
    getters: {
        getCounter(state) {
            return state.counter;
        },
        myCustomGetter(state) {
            return state.user;
        }
    },
    actions: {
        setCounter() {
            console.log('test din test 2');
        }
    }
}