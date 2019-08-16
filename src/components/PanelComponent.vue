<template>
  <div class="hello">
    <div class="box-card" style="box-shadow:0 0px 0px 0 rgba(0,0,0,.1)" :body-style="{padding: '20px 20px 10px 20px',borderBottom:'0px solid #EBEEF5'}">
      <div class="clearfix">
        <el-button class="my-button" type="primary"></el-button>
        <span >{{title}}</span>
      </div>
      <div style="margin-top: 18px;">
        <slot></slot>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'PanelComponent',
  props:{
      title:{ type : String , default : '' , required : false }
  },
  data () {
    return {

    }
  },
  created(){
    console.log(this.$children)
  },
  methods:{

  }
}
</script>

<style scoped>
  .el-card{
        border: 0px solid #fff !important;
  }
.my-page{
    float: right;
    margin-top: 10px;
}
.my-button{
    margin: 0;
    width: 5px;
    padding: 0px;
    height: 20px;
    margin-right: 10px;
    display: inline;
    border-radius: 0;
    float: left;
  }
</style>
