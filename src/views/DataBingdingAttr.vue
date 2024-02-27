<!-- inline style -------------------------------------------------------->
<template>
  <div v-bind:style="styleObject">inline Style Binding</div>
</template>
<script>
export default {
  data() {
    return {
      styleObject: {
        color: "red",
        fontSize: "24px",
      },
    };
  },
};
</script>

<!-- class -------------------------------------------------------->
<!-- <template>
    <div class="container" v-bind:class="{
        'active': isActive, 'text-red': hasError
    }">Class Binding</div>
</template>
<script>
export default {
    data() {
        return {
            isActive:true,
            hasError:false
    }
},   
}
</script>
<style scoped>
    .container{
        width: 100%;
        height: 200px;
    }
    .active {
        background-color: yellow;
        font-weight: bold;
    }
    .text-red{
        color:red
    }

</style> -->

<!-- button -------------------------------------------------------->
<!-- <template>
    <div>
     <input type="text" v-model="textValue"/>
     <button type="button" v-bind:disabled="textValue==''">click</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            textValue:''
    }
},   
}
</script> -->

<!-- img ------------------------------------------------------------>
<!-- <template>
    <div>
      <img v-bind:src="imgSrc"/>
    </div>
</template>
<script>
export default {
    data() {
        return {
            imgSrc: 'https://kr.vuejs.org/images/logo/png'
    }
},   
}
</script> -->
