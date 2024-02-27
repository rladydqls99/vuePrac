<template>
  <div>
    <button type="button" v-on:click="increaseCounter">Add</button>
    <!-- 클릭시에 특정 파라미터 전달하고 싶을 때 -->
    <button type="button" v-on:click="setCounter(10)">set</button>
    <p>The Counter is : {{ counter }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    increaseCounter() {
      this.counter = this.counter + 1;
    },
    setCounter(params) {
      this.counter = params;
    },
  },
};
</script>
