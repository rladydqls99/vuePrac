<!-- 부모 컴포넌트에서 자식 컴포넌트 데이터 동기화 -->

<template>
  <button type="button" @click="childFunc" ref="btn">
    부모 컴포넌트에서 자식 컴포넌트 데이터 동기화
  </button>
</template>

<script>
export default {
  data() {
    return {
      msg: "message",
    };
  },

  methods: {
    childFunc() {
      this.msg = "changed message";
    },
  },
};
</script>

<style></style>
