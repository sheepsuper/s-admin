<template>
  <div>argu:{{name}}</div>
</template>

<script>
export default {
  name: 'argu',
  props:{
    name:{
      type: [String,Number],
      default: 'sheep'
    }
  }
};
</script>

<style lang="less" scope>
</style>
