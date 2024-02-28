<!-- 부모 컴포넌트에서 자식 컴포넌트 데이터 옵션 값 직접 변경하기 -->

<template>
  <h1>{{ msg }}</h1>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello",
    };
  },
};
</script>

<style></style>
