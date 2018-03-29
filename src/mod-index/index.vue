<template>
    <div>
        state:
        <count></count>
        <hr>
        mapState:
        <map-state-count></map-state-count>
        <hr>
        getters/mapGetters:
        <!-- <getter-todos></getter-todos> -->
        <hr/>
        CountMutation/mapMutations:
        <count-mutation></count-mutation>
    </div>
</template>

<script>
import Count from '../store/state/count.vue';
// import store from '../store/state/count.js';
import MapStateCount from '../store/state/mapStateCount.vue';

// import store from '../store/getter/todos.js';
// import GetterTodos from '../store/getter/todos.vue';

import store from '../store/mutation/count.js';
import CountMutation from '../store/mutation/count.vue';

export default {
  store,
  components: {
    Count,
    MapStateCount,

    // GetterTodos,
    CountMutation
  }
};
</script>
