import Vuex from 'vuex';
import Vue from 'vue';
import types from './mutation-type';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        cart: {
            added: []
        },
        count: 0
    },
    mutations: {
        [types.CHECKOUT_REQUEST] (state) {
            
        },
        [types.CHECKOUT_SUCCESS] (state) {
            state.cart.added = [];
        },
        [types.CHECKOUT_FAILURE] (state, savedCartItems) {
            state.cart.added = savedCartItems;
        },
        increment (state) {
            state.count++;
        },
        incrementBy (state, {amount}) {
            state.count += amount;
        }
    },
    actions: {

        /* checkout ({ commit, state}, products) {

            // 把当前购物车的物品备份起来
            const savedCartItems = [...state.cart.added];

            // 发出结账请求，然后乐观的清空购物车
            commit(types.CHECKOUT_REQUEST);

            // 购物API 接受一个成功回调和一个失败回调
            shop.buyProducts(
                products,

                // 成功操作
                () => commit(types.CHECKOUT_SUCCESS),

                // 失败操作
                () => commit(types.CHECKOUT_FAILURE, savedCartItems)
            );
        }, */

        // 组合action，action通常是异步的
        actionA ({commit}) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('someMutation');
                    resolve();
                }, 1000);
            });
        },

        actionB ({dispatch, commit}) {
            return dispatch('actionA').then(() => {
                commit('someOtherMutation');
            });
        },

        // 利用async/await组合action
       /*  async actionC ({commit}) {
            commit('gotData', await getData());
        },
        async actionD ({dispatch, commit}) {
            await dispatch('actionC'); //等待actionC完成
            commit('gotOtherData', await getOtherData());
        }, */

        increment ({commit}) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('increment');
                    resolve();
                }, 1000);
            });
        },

        incrementBy ({commit}, payload) {
            setTimeout(() => {
                commit('incrementBy', payload);
            }, 1000);
        },

        incrementAddBy ({dispatch, commit}, payload) {
            return dispatch('increment').then(() => {
                commit('incrementBy', payload);
            });
        }

    }
});

export default store;
