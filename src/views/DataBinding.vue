<!-- radio --------------------------------------------------------------->
<template>
  <div>
    <label
      ><input type="radio" v-bind:value="radioValue1" v-model="picked" />{{
        radioValue1
      }}</label
    >
    <label
      ><input type="radio" v-bind:value="radioValue2" v-model="picked" />{{
        radioValue2
      }}</label
    >
    <label
      ><input type="radio" v-bind:value="radioValue3" v-model="picked" />{{
        radioValue3
      }}</label
    >
    <br />
    <span>선택한 지역:{{ picked }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      picked: "",
      radioValue1: "서울",
      radioValue2: "부산",
      radioValue3: "제주",
    };
  },
};
</script>

<!-- checkbox --------------------------------------------------------------->
<!-- <template>
    <div>
      <label><input type="checkbox" v-model="checked" true-value="yes" false-value="no">{{ checked }}</label>
    </div>
</template>
<script>
export default {
    data() {
        return {
            checked: false
    }
},   
}
</script> -->

<!-- select --------------------------------------------------------------->
<!-- <template>
    <div>
       <select v-model="city">
        <option value="02">seoul</option>
        <option value="21">busan</option>
        <option value="042">daejeon</option>
    </select>
    </div>
</template>
<script>
export default {
    data() {
        return {
            city: '21'
    }
},   
}
</script> -->

<!-- textarea --------------------------------------------------------------->
<!-- <template>
    <div>
       <textarea v-model="message"></textarea>
    </div>
</template>
<script>
export default {
    data() {
        return {
            message: '123'
    }
},   
}
</script> -->

<!-- number input --------------------------------------------------------------->
<!-- <template>
    <div>
       <input type="number" v-model.number="numberModel"/>
    </div>
</template>
<script>
export default {
    data() {
        return {
            numberModel: 123
    }
},   
}
</script> -->

<!-- input --------------------------------------------------------------->
<!-- <template>
    <div>
       <input type="text" v-model="valueModel"/>
    </div>
</template>
<script>
export default {
    data() {
        return {
            valueModel: 'abc123'
    }
},   
}
</script> -->

<!-- raw html --------------------------------------------------------------->
<!-- <template>
    <div>
        <div>{{ htmlString }}</div>
        <div v-html="htmlString"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            htmlString: '<p style="color:red;"> This is a red string. </p>',
    }
},   
}
</script> -->
