<template>
  <el-row style="height: 100%;">
    <div class="fix">
       <div style="width: 100%;height: 58px;border-bottom:1px solid #e6e6e6;"></div>
      <el-menu
        :default-active="fullPath"
        @open="handleOpen"
        @close="handleClose"
        @select="handSelect"
        class="my-menu"
     >
        <el-submenu 
          v-for="(item,key) in getMenu"
          :key="key" 
          :index="item.path" 
          class="my-menu" >
          <template slot="title"  >
            <div class="my-submenu" style="font-size: 16px;">{{item.title}}</div>
          </template>
          <div style="background: #edf1f7;text-align: left;">
            <el-menu-item v-for="itemChilder in getChildren(item.children)" :key="itemChilder.path" class="my-menu-item " :index="item.path+'/'+itemChilder.path">
              <span style="font-size: 14px;padding-left: 40px;">{{itemChilder.title}}</span>
            </el-menu-item>
          </div>
        </el-submenu>
      </el-menu>
    </div>
    <div class="my-keep">
     <keep-alive :include="include">
        <router-view/>
     </keep-alive>
   </div>
  </el-row>
</template>

<script>
import  routers from '@/router/index.js'
export default {
  name: 'navigation',
  data () {
    return {
      myMenu: [],
      count: this.$store.state.startData.count,
      fullPath:'',
      include:[],
      allMenu:[]
    }
  },
  computed:{
    getMenu(){
      return this.myMenu.filter(item=>{
        return item.show
      })
    }
  },
  beforeUpdate(){
     this.setMenu()
     this.setInclude()
  },
  created(){
      this.setMenu()
      this.setInclude()
      this.fullPath = this.$route.fullPath
  },
  methods:{
      setMenu(){
        let root = this.$router.history && this.$router.history.current && this.$router.history.current.path
        if(root.split('/')[1] == 'studentMenu'){
           this.myMenu = routers[0].children
        }       
      },
      getChildren(data){
        return data.filter(item=>{
          return item.show
        })
      },
      setInclude(){
          let allMenu = []
          let paths = []
          let index = ''
          this.myMenu.forEach(item=>{
            item.children && item.children.length>0 && item.children.forEach(items=>{
              if(items.show){
                allMenu.push(items.name);
                paths.push(items.path)
              }
            })
          })
          this.allMenu = allMenu
          paths.forEach((item,key)=>{
            if(this.$route.path.indexOf(item)>=0){
              index = key
            }
          })
          if(index !==''){
            this.fullPath = allMenu[index]
            this.include = [allMenu[index]]
          }
      },
      // addOne(){
      //   const { dispatch } = this.$store
      //   dispatch({type:'startData/addOne',payload:{data:1}})
      //   this.count = this.$store.state.startData.count
      // },
      handleOpen(key, keyPath){
      },
      handleClose(key, keyPath){
      },
      handSelect(key, keyPath){
        if(this.$router && this.$route.fullPath != key){
            this.$router.pops(key)
        }
        
      }
  }
}
</script>

<style scoped>
.fix{
  position: fixed;
  background: #fff;
  width: 160px;
  top:0;
  left: 0;
  bottom: 0;
  border-right:1px solid #e6e6e6;
  text-align: center;
  z-index: 1000000;
  /* padding: 0 1px; */
}
.my-menu{
  border:1px solid #fff;
  font-size: 16px !important;
}
.my-menu-item{
  width: 100%;
  min-width:auto;
  padding: 0 !important;
}
.my-submenu{
   text-align: left !important;
   width: 100%;
   height: 100%;
}
.my-keep{
  margin-left: 160px;
}
</style>
