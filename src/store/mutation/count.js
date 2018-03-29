import Vuex from 'vuex';
import Vue from 'vue';
import {SOME_MUTATION} from './mutation-type';

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
        },

        // Mutation 必须是同步函数
        
        /**
         * mutation需遵守vue的响应规则
         * 1.最好提前在store中初始化好所有所需属性
         * 2.当需要在对象上添加新属性时，应该：
         *  使用Vue.set(obj, 'newProp', 123) 或者
         *  以新对象替换老对象：
         *    state.obj = {...state.obj, newProp: 123}
         */

        // 使用常量代替mutation事件类型
        [SOME_MUTATION] (state, payload) {
            // mutate state
            state.count -= payload.amount;
        }
    }
});

export default store;
