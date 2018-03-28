<template>
    <div>
        <counter></counter>
        <hr>
        <map-state-counter></map-state-counter>
    </div>
</template>

<script>
import Counter from '../store/count/count.vue';
import store from '../store/count/count.js';
import MapStateCounter from '../store/count/mapStateCount.vue';

export default {
  store,
  components: {
    Counter,
    MapStateCounter
  }
};
</script>
