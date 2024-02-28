<!-- 자식 컴포넌트에서 부모 컴포넌트로 이벤트/ 데이터 전달하기 -->

<template>
  <div>자식 컴포넌트에서 부모 컴포넌트로 이벤트/ 데이터 전달하기</div>
</template>
<script>
export default {
  data() {
    return {
      msg: "자식 컴포넌트로부터 보내는 메시지",
    };
  },

  mounted() {
    this.$emit("send-message", this.msg);
  },
};
</script>

<style></style>
