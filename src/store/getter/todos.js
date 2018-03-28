import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        todos: [{
            id: 1,
            text: 'text1',
            done: true
        }, {
            id: 2,
            text: 'text2',
            done: false
        }, {
            id: 3,
            text: 'text3',
            done: true
        }]
    },
    getters: {
        doneTodos: state => {
            console.log('doneTodos', this);
            return state.todos.filter(todo => todo.done);
        },
        doneTodosCount (state, getters) {
            console.log('doneTodosCount', this);
            return getters.doneTodos.length;
        },
        getTodoById: (state) => (id) => {
            return state.todos.find(todo => todo.id === id);
        }
    }
});
export default store;
