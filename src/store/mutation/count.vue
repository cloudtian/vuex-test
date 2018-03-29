<template>
    <div>
        <div>mutations计数器：{{ count }}</div>
        <button @click="increment">increment增加</button>
        <button @click="add">add增加</button>
        <button @click="decrement">decrement减少</button>
        amount:<input v-model="amount">
        <button @click="incrementPayload({amount: +amount})">追加amount</button>
        <button @click="dec({amount: +amount})">减少amount</button>
    </div>
    
</template>
<script>
import {mapState, mapMutations} from 'vuex';
import {SOME_MUTATION} from './mutation-type';

export default {
    data () {
        return {
            amount: 0
        };
    },
    computed: {
        ...mapState([
            'count'
        ])
    },
    methods: {
        ...mapMutations([

            // 将 this.increment()映射为 this.$store.commit('increment')
            'increment',

            // mapMutations也支持载荷
            // 将this.incrementPayload(amount)映射为this.$store.commit('incrementPayload', amount)
            'incrementPayload'
        ]),
        ...mapMutations({

            // 将this.add()映射为this.$store.commit('increment')
            add: 'increment',

            dec: SOME_MUTATION
        }),
        decrement () {
            this.$store.commit('decrement');
        }
  }
};
</script>
