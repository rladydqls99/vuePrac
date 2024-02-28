<template>
  <h2>{{ title }}</h2>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "page title",
      required: true,
      validator: function (title) {
        return ["a", "b"].indexOf(title) !== -1;
      },
    },
  },

  created() {
    this.getType();
  },

  methods: {
    getType() {
      console.log(typeof this.title);
    },
  },
};
</script>

<style></style>
