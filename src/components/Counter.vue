<template>
  <div>
    <button @click="incrementAction(2)">Increment</button>
    <button @click="decrementAction(2)">Decrement</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  computed: {
    counter() {
      return this.$store.getters.getCounter
    }
  },
  methods: {
    ...mapActions({
      incrementAction: 'increment',
      decrementAction: 'decrement'
    })
  }
};
</script>