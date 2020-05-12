<template>
  <div class="pannel-box">
    <div class="pannel pannel-left" style="{width:30%}"></div>
    <div class="pannel pannel-trigger"></div>
    <div class="pannel pannel-right" style="{left:30%}"></div>
  </div>
</template>

<script>
export default {
  name: 'split-panel',
  props: {
    value: {
      type: Number,
      default: 0.4
    }
  },
  computed: {
    offsetWidth() {
      let offset = this.value * 100
      // console.log(`${offset}%`);
      return `(${offset}%`
    }
  },
  methods: {}
}
</script>

<style lang="less">
.pannel-box {
  position: relative;
  width: 100%;
  height: 100%;
  .pannel {
    position: absolute;
    top: 0;
    height: 100%;
    &-left {
      left: 0;
      // width: 30%;
      background: royalblue;
    }
    &-right {
      // left: 30%;
      right: 0;
      bottom: 0;
      background: silver;
    }
    &-trigger {
      bottom: 0;
      width: 8px;
      background: red;
    }
  }
}
</style>
