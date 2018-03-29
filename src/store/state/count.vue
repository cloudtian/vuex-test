<template>
    <div>
        <div>计数器：{{ count }}</div>
        <button @click="increment">增加</button>
        <button @click="decrement">减少</button>
    </div>
    
</template>
<script>
export default {
  computed: {
    count () {
      return this.$store.state.count;
    }
  },
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
