<template>
    <div>
        <div>mapState计数器：{{ count }}</div>
        <button @click="increment">增加</button>
        <button @click="decrement">减少</button>
        <div>
          <span>本地计数器: {{localCount}}</span>
          <input v-model="localCount">
        </div>
        <div>count计数器与本地数据之和：{{countPlusLocalState}}</div>
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'Counter',

  data () {
    return {
      localCount: 0
    };
  },

  computed: {
    localComputed () {
        return {};
    },
    ...mapState({
      // 箭头还是使代码更简练
      count: state => state.count,

      // 传字符串参数count 等同于 state => state.count
      countAlias: 'count',

      // 为了能够使用this获取局部状态，必须使用常规函数
      countPlusLocalState (state) {
        return state.count + +this.localCount;
      }
    })
  },

  // 当映射的计算属性的名称与state的子节点名称相同时，可以给mapState传一个字符串数组
  /**
   * computed: mapState([
   * // 映射 this.count 为 store.state.count
   * 'count'
   * ])
   *
   */

  // mapState函数返回一个对象，与局部计算属性混合使用

  methods: {
    increment () {
      this.$store.commit('increment');
    },
    decrement () {
      this.$store.commit('decrement');
    }
  }
};
</script>
