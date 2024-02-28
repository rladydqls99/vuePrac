<template>
  <child-component ref="child_component" />
  <child-component-2 ref="child_component2" />
  <child-component-3 ref="child_component3" />
  <button type="button" @click="changeChildData">change</button>

  <child-component-4 @send-message="sendMessage" />

  <button type="button" @click="checkChild">자식 컴포넌트 데이터 조회</button>
  <child-component-5 ref="child_component5" />
</template>

<script>
import ChildComponent from "./ChildComponent.vue";
import ChildComponent2 from "./ChildComponent2.vue";
import ChildComponent3 from "./ChildComponent3.vue";
import ChildComponent4 from "./ChildComponent4.vue";
import ChildComponent5 from "./ChildComponent5.vue";
export default {
  components: {
    ChildComponent,
    ChildComponent2,
    ChildComponent3,
    ChildComponent4,
    ChildComponent5,
  },

  mounted() {
    this.$refs.child_component.$refs.btn.click();

    this.$refs.child_component2.callFromParent();
  },

  methods: {
    changeChildData() {
      this.$refs.child_component3.msg = "변경완료";
    },

    sendMessage(data) {
      console.log(data);
    },

    checkChild() {
      alert(this.msg);
    },
  },

  computed: {
    msg() {
      return this.$refs.child_component5.msg;
    },
  },
};
</script>

<style></style>
