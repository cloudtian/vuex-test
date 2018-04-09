<template>
   <div>
        <div>action异步计数器：{{ count }}</div>
        <button @click="increment">increment增加</button>
        <button @click="add">add增加</button>
        amount:<input v-model="amount">
        <button @click="incrementBy({amount: +amount})">追加amount</button>
        <button @click="incrementAddBy({amount: +amount})">先自加再追加amount</button>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
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
        ...mapActions([

            // 将this.increment映射为this.$store.dispatch('increment')
            'increment',

            // 将this.incrementBy(amount)映射为this.$store.dispatch('increment', amount)
            'incrementBy',

            'incrementAddBy'
        ]),
        ...mapActions({

            // 将this.add()映射为this.$store.dispatch('increment')
            add: 'increment'
        })
    }
};
</script>
