<template>
  <div>provide inject child</div>
</template>

<script>
export default {
  inject: ["itemLength"],

  mounted() {
    console.log(this.itemLength);
  },
};
</script>

<style></style>
