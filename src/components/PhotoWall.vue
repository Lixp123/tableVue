<template>
  <div>

    <div style="border: 1px solid #edf1f7;padding:20px;border-radius: 10px;" v-if="imgUrl.length>0">
      <div>
        <div v-for="item in imgUrl" :key="item" style="position: relative;display: inline-block;">
          <img  :src="item.url" class="my-image">
          <div class="my-active">待审核</div>
        </div>
      </div>
      <div class="my-upload" v-for="(item,key) in imgUrl" :key="key" v-if="isEdit">
        <el-button  type="text" size="small" @click="examine(key)">审核</el-button>
        <el-button  type="text" size="small" @click="handleRemove(key)">删除</el-button>
      </div>
    </div>

    <div class="my-center">
      <el-upload
      :disabled="imgUrl.length>=number"
      :show-file-list="false"
      ref="upload"
      :on-progress="progress"
      style="display: inline-block;"
      :file-list="imgUrl"
      :limit="4"
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture"
      :on-success="onSuccess"
      :on-remove="handleRemove">
       <el-button size="small" :disabled="imgUrl.length>=number" type="primary">上传照片</el-button>
      </el-upload>
      <span class="my-color" style="margin-left: 10px;font-size: 14px;">最多上传4张</span>
    </div>

  </div>
</template>
<script>
//@getUrl上传删除获,取全部图片
//@examine审核事件
export default {
  name: 'PhotoWall',
  props:{
      isEdit:{ type : Boolean , default : false , required : false },//有无审核删除状态
      number:{ type : Number , default : '' , required : false },//最多可以多少张图片
      imgs:{ type : Array , default : [] , required : false },//绑定图片数据
      state:{ type : String , default : '' , required : false }//状态字段
  },
  data () {
    return {
       imgUrl:[],
    }
  },
  created(){
    this.imgUrl = this.imgs
  },
  methods:{
    handleRemove(file, fileList) {
      let img = {}
      if(typeof file=='number' && !fileList){
       img = this.imgUrl.splice(file,1)
      }else{
        this.imgUrl = fileList
      }
      this.$emit('getUrl',this.imgUrl,img,'remove')
    },
    onSuccess(val,file){
      this.imgUrl.push(file)
      this.$emit('getUrl',this.imgUrl,file,'add')
    },
    examine(key){
      this.$emit('examine',this.imgUrl[key])
    },
    progress(event, file, fileList){
      console.log(event, file, fileList)
    }
  }
}
</script>

<style scoped>
  .my-active{
     bottom: 8px;
     height: 35px;
     right: 8px;
     left: 0px;
     position: absolute;
     background: rgba(0,0,0,.5);
     transition: opacity .3s;
     color: #fff;
     text-align: center;
     line-height: 35px;
  }
  .my-image{
    background-color: #fbfdff;
    border: 1px dashed #c0ccda;
    border-radius: 6px;
    box-sizing: border-box;
    width: 148px;
    height: 148px;
    cursor: pointer;
    line-height: 146px;
    vertical-align: top;
    margin-right: 8px;
    margin-bottom: 8px;
    position: relative;
    overflow: hidden;
  }
   .my-upload{
    width: 148px;
    margin-right: 8px;
    text-align: center;
    display: inline-block;
  }
  .my-center{
    display: flex;
    align-items: center;
    justify-content: left;
    margin-top: 20px;
  }
</style>
