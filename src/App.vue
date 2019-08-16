<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html{
     margin: 0;
    padding: 0;
    word-break: break-all;
    word-wrap: break-word;
    white-space: normal;
    text-indent: 0;
    border: 0;
    vertical-align: baseline;
}
body{
  margin: 0;
  padding: 0;
  background: #edf1f7;
}
#app {
 margin: 0;
 padding: 0;
 text-align: center;
 background: #edf1f7;
}
.my-color{
  color: #ccc;
}
.my-form-item{
  margin: 20px 0px;
}
</style>
