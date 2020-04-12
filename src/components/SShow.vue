<template>
  <div>SShow:{{content}}</div>
</template>

<script>
export default {
  name:'SShow',
  props:{
    content:{
      type: [String,Number],
      default: ''
    }
  }
}
</script>
