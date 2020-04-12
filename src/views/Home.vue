<template>
  <div class="home">
    home page
    <h3>{{food}}</h3>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <button @click="handleClick('replace')">替换到parent</button>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
  props:{
    food:{
      type: String,
      default: 'apple'
    }
  },
  // 组件内部守卫
  beforeRouteEnter (to, from, next) {
    // console.log(to);
    next()
  },
  methods: {
    handleClick(type) {
      if (type === "back") {
        this.$router.back();
      } else if (type === "push") {
        this.$router.push("/parent");
      }else if(type === 'replace') {
        this.$router.replace('/parent')
      }
    }
  }
};
</script>
