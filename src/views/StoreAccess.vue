<template>
  <p>Count: {{ count }}</p>
  <button type="button" @click="increment">Increment</button>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
  },

  created() {
    console.log(this.$store.getters.cartCount);
  },

  methods: {
    increment() {
      return this.$store.commit("increment");
    },
  },
};
</script>

<style></style>
