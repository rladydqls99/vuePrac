<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="index" v-for="(product, index) in productList">
          <td>{{ product.product_name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.delivery_price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      productList: [
        {
          product_name: "기계식키보드",
          price: 10000,
          category: "노트북",
          delivery_price: 1000,
        },
        {
          product_name: "마우스",
          price: 1002300,
          category: "기계",
          delivery_price: 2000,
        },
        {
          product_name: "종이컵",
          price: 1120000,
          category: "종이",
          delivery_price: 3000,
        },
        {
          product_name: "연필",
          price: 10032100,
          category: "필기구",
          delivery_price: 4000,
        },
      ],
    };
  },
};
</script>
<style scoped>
table {
  font-family: Arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
