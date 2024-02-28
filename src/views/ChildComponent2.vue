<!-- 부모 컴포넌트에서 자식 컴포넌트 함수 직접 호출 -->

<template>
  <div>123</div>
</template>

<script>
export default {
  methods: {
    callFromParent() {
      console.log("부모 컴포넌트에서 직접 호출한 함수2");
    },
  },
};
</script>

<style></style>
