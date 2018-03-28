<template>
    <div>
        state:
        <counter></counter>
        <hr>
        mapState:
        <map-state-counter></map-state-counter>
        <hr>
        getters/mapGetters:
        <getter-todos></getter-todos>
    </div>
</template>

<script>
import Counter from '../store/count/count.vue';
// import store from '../store/count/count.js';
import MapStateCounter from '../store/count/mapStateCount.vue';

import store from '../store/getter/todos.js';
import GetterTodos from '../store/getter/todos.vue';

export default {
  store,
  components: {
    Counter,
    MapStateCounter,
    GetterTodos
  }
};
</script>
