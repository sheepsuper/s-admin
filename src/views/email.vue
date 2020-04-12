<template>
  <div>
    email:74851556@qq.com
    <button @click="handleClick">按我</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$bus.$emit("on-click", "hello sheep");
    }
  },
  mounted() {
    console.log(this.$bus);
  }
};
</script>
