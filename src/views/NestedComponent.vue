<template>
  <div>
    <input v-model="title" v-focus />
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

  directives: {
    focus: {
      mounted(el) {
        el.focus();
      },
    },
  },
};
</script>

<style></style>
