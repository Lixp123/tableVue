<template>
  <div class="hello">
    {{num}}
    <Calendar :arr="[1,2]" data="111">
    </Calendar>
  </div>
</template>

<script>
export default {
  name: 'module',
  data () {
    return {
      num:1
    }
  },
  created(){
   
  },
  methods:{
    
  }
}
</script>

<style scoped>
  
</style>
