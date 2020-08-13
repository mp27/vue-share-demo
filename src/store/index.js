import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        counter: 0,
        string: '',
        drawer: false
    },
    mutations: {
        setCounter(state, payload) {
            state.counter = payload;
        },
        setString(state, payload) {
            state.string = payload;
        },
        toggleDrawer(state, payload) {
            state.drawer = payload;
        }
    },
    getters: {
        getCounter(state) {
            return state.counter;
        },
        getDrawer(state) {
            return state.drawer;
        }
    },
    actions: {
        setCounter(context, payload) {
            context.commit('setCounter', payload);
        },
        toggleDrawer(context, payload) {
            context.commit('toggleDrawer', payload ? payload:!context.state.toggleDrawer);
        }
    }
});