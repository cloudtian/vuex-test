<template>
    <div>
        <counter></counter>
    </div>
</template>

<script>
import Counter from '../store/count/count.vue';
import store from '../store/count/count.js';

export default {
  store,
  components: {
    Counter
  }
};
</script>
