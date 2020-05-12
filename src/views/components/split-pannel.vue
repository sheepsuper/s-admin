<template>
  <div class="split-box">
    <split-panel></split-panel>
  </div>
</template>

<script>
import SplitPanel from '_c/split-panel'
export default {
  components: {
    SplitPanel
  }
}
</script>

<style lang="less">
.split-box {
  width: 400px;
  height: 250px;
  background: rosybrown;
}
</style>
