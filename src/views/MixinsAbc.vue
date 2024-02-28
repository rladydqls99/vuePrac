<script>
import ApiMixin from "../api.js";
export default {
  // 이 방법은 컴포넌트에 mixins를 등록하는 방법이고, 전역으로 등록하는 방법은 mixins.js와 main.js를 보면 됨
  mixins: [ApiMixin],

  data() {
    return {
      productList: [],
    };
  },

  async mounted() {
    this.productList = await this.$callAPI(
      "https://12e591e7-a5d1-426c-a139-ae4455013f8e.mock.pstmn.io/list",
      "get"
    );
    console.log(this.productList);
  },
};
</script>
