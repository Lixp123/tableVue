<template>
  <div class="hello">
    <el-card class="box-card" :body-style="{padding: '18px'}">
      <div class="clearfix">
        <span >人脸库管理＞学生人脸库>编辑</span>
      </div>
    </el-card>
    <div style="padding: 20px;">
      <el-form :model="FormData" ref="dynamicValidateForm" label-width="100px" style="padding: 40px;border-radius: 10px;overflow: hidden;background: #fff;box-shadow:0 2px 12px 0 rgba(0,0,0,.1)">
        <PanelComponent title="人脸照片">
          <PhotoWall :isEdit="true" state="state" :number="4" @getUrl="getStudentUrl" :imgs="[]" @examine="studentExamine"></PhotoWall>
          <el-form-item
              class="my-form-item"
              prop="similarity"
              label="相似值"
              :rules="[
              ]"
            >
              <el-input v-model="FormData.similarity" style="width: 120px;"></el-input>
              <span class="my-color" style="margin-left: 10px;">人脸照比对相似度达到此设置值，即可通过人脸设备</span>
          </el-form-item>
        </PanelComponent>
        <PanelComponent title="学生信息">
          <el-row>
            <el-col :span="9">
              <el-form-item
                label="姓名:"
                :rules="[
                  ]">
                  刘凯飞
              </el-form-item>
            </el-col>
            <el-col :span="9">
              <el-form-item
                label="年级班别:"
                :rules="[
                  ]">
                  三年级一班
              </el-form-item>
            </el-col>
            <el-col :span="9">
              <el-form-item
                label="姓别:"
                :rules="[
                  ]">
                  男
              </el-form-item>
            </el-col>
            <el-col :span="9">
              <el-form-item
                label="证  件  号:"
                :rules="[
                  ]">
                  111111111111
              </el-form-item>
            </el-col>
          </el-row>
        </PanelComponent>
        <PanelComponent title="家长人脸照片">
          <div>
           <el-form-item
             prop="fatherState"
             label="爸爸人脸照片:"
             :rules="[
               ]">
               <MySwitch  v-model="FormData.fatherState"></MySwitch>
           </el-form-item>
            <PhotoWall :isEdit="true" state="state" :number="4" @getUrl="getFatherUrl" :imgs="[]" @examine="examine"></PhotoWall>
          </div>
          <div style="margin-top: 20px;border-top: 1px solid #edf1f7;">
            <el-form-item
             prop="momState"
             label="妈妈人脸照片:"
             :rules="[
               ]">
                <MySwitch  v-model="FormData.momState"></MySwitch>
            </el-form-item>
            <PhotoWall :isEdit="true" state="state" :number="4" @getUrl="getFatherUrl" :imgs="[]" @examine="examine"></PhotoWall>
          </div>
          <div style="margin-top: 20px;border-top: 1px solid #edf1f7;">
            <el-form-item
             prop="grandpaState"
             label="爷爷人脸照片:"
             :rules="[
               ]">
              <MySwitch  v-model="FormData.grandpaState"></MySwitch>
            </el-form-item>
            <PhotoWall :isEdit="true" state="state" :number="4" @getUrl="getFatherUrl" :imgs="[]" @examine="examine"></PhotoWall>
          </div>
          <div style="margin-top: 20px;border-top: 1px solid #edf1f7;">
            <el-form-item
             prop="grandmaState"
             label="奶奶人脸照片:"
             :rules="[
               ]">
               <MySwitch  v-model="FormData.grandmaState"></MySwitch>
            </el-form-item>
            <PhotoWall :isEdit="true" state="state" :number="4" @getUrl="getFatherUrl" :imgs="[]" @examine="examine"></PhotoWall>
          </div>
        </PanelComponent>
        <el-form-item style="margin-top:30px;">
          <el-button type="primary" @click="submitForm('dynamicValidateForm')">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import PanelComponent from '@/components/PanelComponent.vue'
import PhotoWall from '@/components/PhotoWall.vue'
import MySwitch from '@/components/MySwitch.vue'
export default {
  name: 'studentNew',
  data () {
    return {
      FormData:{
        similarity:'',
        fatherState:true,
        momState:true,
        grandpaState:false,
        grandmaState:false
      },
    }
  },
  created(){

  },
  methods:{
      getStudentUrl(arr,obj,type){//学生图片数据
        console.log(arr,obj,type,7)
      },
      studentExamine(obj){//学生审核
        console.log(obj,8)
      },
      getFatherUrl(arr,obj,type){//父亲图片数据
        console.log(arr,obj,type,1)
      },
      examine(obj){//审核
        console.log(obj,2)
      },
      submitForm(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            return false;
          }
        });
      }
  },
  components:{
    PanelComponent,
    PhotoWall,
    MySwitch
  }
}
</script>

<style scoped>
  .el-card{
    border-radius: 0px;
  }
  .hello{
    text-align: left;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";

  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    /* width: 100%; */
  }
  .my-button{
    margin: 0;
    width: 5px;
    padding: 0px;
    height: 10px;
    margin-right: 10px;
    display: inline;
    border-radius: 0;
    float: left;
  }
  .my-img{
    width: 170px;
    border: 1px solid #edf1f7;
    border-radius: 10px;
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

</style>
