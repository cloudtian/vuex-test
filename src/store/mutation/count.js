import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 1
    },
    mutations: {

        // 调用方式 store.commit('increment')
        increment (state) {
            // 变更状态
            state.count++;
        },

        /*
        * 提交载荷（payload）: 通过store.commit传入额外的参数，即mutation的载荷payload
        * 通过store.commit('incrementPayload', payload);
        * 对象风格的提交方式： store.commit({
        *   type: 'incrementPayload',
        *   amount: 10
        * })
        */
        incrementPayload (state, payload) {
            state.count += payload.amount;
        },

        decrement (state) {
            state.count--;
        }

        // Mutation 必须是同步函数
    }
});

export default store;
