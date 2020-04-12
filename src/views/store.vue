<template>
  <div>store
    <s-input @input="handleInput"/>
    <p>{{inputValue}}</p>
    <s-show :content="inputValue"/>
  </div>
</template>

<script>
import SInput from '_c/SInput'
import SShow from '_c/SShow'
export default {
  name: 'store',
  components:{
    SInput,
    SShow
  },
  data(){
    return{
      inputValue:''
    }
  },
  methods:{
    handleInput(value){
      this.inputValue = value
    }
  }
}
</script>
