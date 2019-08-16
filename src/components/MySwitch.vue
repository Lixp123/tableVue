<template>
  <div style="position: relative;display: inline-block;">
   <el-switch :width="60" v-bind="$attrs" :value="value" @change="change">
   </el-switch>
    <a :class="value?'is-enable':'is-prohibit'" @click="change">{{name?name:value?'启用':'禁用'}}</a>
 </div>
</template>
<script>

export default {
  name: 'MySwitch',
  model: {
    prop: 'value',
    event: 'change'
  },
  props:{
    value:{ type : Boolean , default : false , required : false },
    name:{ type : String , default : '' , required : false }
  },
  data () {
    return {

    }
  },
  created(){
    console.log(this)
  },
  methods:{
    change(val){
      if(typeof val == 'object'){
          this.$emit('change', !this.value)
      }else{
          this.$emit('change', val)
      }

    }
  }
}
</script>

<style scoped>
.is-prohibit{
    position: absolute;
    right: 10px;
    color: #fff;
    /* display: block; */
    z-index: 0;
    top:1px;
    cursor:pointer;
    user-select: none;
  }
.is-enable{
    position: absolute;
    left: 10px;
    color: #fff;
    /* display: block; */
    z-index: 0;
    top:1px;
    cursor:pointer;
    user-select: none;
  }
</style>
