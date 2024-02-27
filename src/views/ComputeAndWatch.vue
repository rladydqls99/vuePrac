<template>
  <h1>Full Name: {{ fullName }}</h1>
  <button type="button" v-on:click="changeName">변경</button>
</template>
<script>
export default {
  data() {
    return {
      firstName: "Kim",
      lastName: "yongbin",
      fullName: "",
    };
  },

  watch: {
    firstName() {
      this.fullName = this.firstName + " " + this.lastName;
    },
    lastName() {
      this.fullName = this.firstName + " " + this.lastName;
    },
  },

  methods: {
    changeName() {
      this.firstName = "park";
    },
  },
};
</script>

<!-- computed -------------------------------------------------------------------->
<!-- <template>
  <h1>Full Name: {{ fullName }}</h1>
</template>
<script>
export default {
  data() {
    return {
      firstName: "kim",
      lastName: "Yongbin",
    };
  },

  computed: {
    fullName() {
      return this.firstName + this.lastName;
    },
  },
};
</script> -->
