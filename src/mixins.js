import axios from "axios";

export default {
  methods: {
    // $api라는 메서드 정의
    async $api(url, method, data) {
      return (
        await axios({
          method: method,
          url,
          data,
        }).catch((e) => {
          console.log(e);
        })
      ).data;
    },
  },
};
