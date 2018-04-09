import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const moduleA = {
    state: {
        count: 0
    },
    mutations: {
        incrememt (state) {

            // 这里的state对象是模块的局部状态
            state.count++;
        }
    },

    // 对于模块内部的action，局部状态通过context.state暴露出来，根节点状态则为context.rootState
    actions: {
        incrememtIfOddOnRootSum ({state, commit, rootState}) {
            if ((state.count + rootState.count) % 2 === 1) {
                commit('increment');
            }
        }
    },
    getters: {
        dobuleCount (state) {
            return state.count * 2;
        },

        // 对于模块内部的getter，根节点状态会作为第三个参数暴露出来
        sumWithRootCount (state, getters, rootState) {
            return state.count + rootState.count;
        }
    }
};

const moduleB = {
    state: {},
    mutations: {},
    actions: {}
};

const store = new Vuex.Store({
    modules: {
        a: moduleA,
        b: moduleB,

        // 命名空间
        account: {
            namespaced: true,

            // 模块内容（module,assets）

            // 模块内的状态已经是嵌套的了，使用namespaced属性不会对其产生影响
            state: {},
            getters: {
                isAdmin () {
                    // => getters['account/isAdmin'] 
                }
            },
            actions: {
                login () {
                    // => dispatch['account/login'] 
                }
            },
            mutations: {
                login () {
                    // => commit['account/login'] 
                }
            },

            // 嵌套模块
            modules: {
                // 继承父模块的命名空间
                myPage: {
                    state: {},
                    getters: {
                        profile () {
                            // => getters['account/profile']
                        }
                    }
                },
                
                // 进一步嵌套命名空间
                posts: {
                    namespaced: true,
                    state: {},
                    getters: {
                        popular () {
                            // => getters['account/posts/popular']
                        }
                    }
                }
            }

        },


        // 在带命名空间的模块内访问全局内容
        foo: {
            namespaced: true,

            getters: {
                // 在这个模块的getter中，getters被局部化了
                // 可以使用getter的第四个参数来调用rootGetters
                someGetter (state, getters, rootState, rootGetters) {
                    getters.someOtherGetter // -> foo/someOtherGetter
                    rootGetters.someOtherGetter // -> someOtherGetter
                },
                someOtherGetter: state => {}
            },

            actions: {
                // 在这个模块中，dispatch和commit也被局部化了
                // 可以接受root属性以访问根dispatch或commit
                someAction ({dispatch, commit, getters, rootGetters}) {
                    getters.someGetter // -> foo/someGetter
                    rootGetters.someGetter // ->someGetter

                    dispatch('someOtherAction') // -> foo/someOtherAction
                    dispatch('someOtherAction', null, {root: true}) // -> someOtherAction

                    commit('someMutation') // -> foo/someMutation
                    commit('someMutation', null, {root: true}) // -> someMutation
                },
                someOtherAction (ctx, payload) {},

                // 在带命名空间的模块注册全局action
                someAction: {
                    root: true,
                    handler (namespacedContext, payload) {
                        // -> someAction
                    }
                }

            }
        }
    },

    actions: {
        someOtherAction ({dispatch}) {
            dispatch('someAction');

            // someAction在foo模块中注册的全局action
        }
    }
});

// store.state.a => moduleA的状态
// store.state.b => moduleB的状态


// 模块动态注册
// 注册模块 myModule
store.registerModule('myModule', {});
// 注册嵌套模块 nested/myModule
store.registerModule(['nested', 'myModule'], {});

// 动态卸载模块
store.unregisterModule(moduleName)