<template>
  <div>
    <select v-model="selectedValue" @change="changeSelect">
      <option value="seoul">seoul</option>
      <option value="busan">busan</option>
      <option value="daejeon">daejeon</option>
    </select>
    <p>{{ selectedValue }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedValue: "",
    };
  },

  methods: {
    changeSelect() {
      alert(this.selectedValue);
    },
  },
};
</script>
