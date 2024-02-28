<template>
  <div>
    <input v-model="title" />
    <PageTitle :title="title" />
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
export default {
  components: { PageTitle },

  data() {
    return {
      title: "a",
    };
  },
};
</script>

<style></style>
