<template>
  <div>
    tel:17364541310
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    }
  },
  mounted() {
    this.$bus.$on('on-click', message => {
      this.message = message
    })
  }
}
</script>
