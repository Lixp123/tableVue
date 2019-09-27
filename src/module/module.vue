<template>
  <div class="hello">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
           <el-button class="my-button" type="primary"></el-button>
        <span>人脸库管理＞学生人脸库</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
      </div>
      <el-form :model="formData" ref="formData" label-width="100px" class="demo-dynamic">
        <el-row style="margin-top: 15px;">
          <el-col :span="8">
            <el-form-item
              label="年级"
              prop="grade"
            >
              <el-select v-model="formData.grade" placeholder="请选择">
                <el-option
                  v-for="item in grades"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item
              label="班级"
              prop="myClass"
            >
              <el-select v-model="formData.myClass" placeholder="请选择">
                <el-option
                  v-for="item in myClass"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              </el-form-item>
           </el-col>

            <el-col :span="8">
              <el-form-item
                label="状态"
                prop="state"
              >
                <el-select v-model="formData.state" placeholder="请选择">
                  <el-option
                    v-for="item in state"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                </el-form-item>
             </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item
              label="姓名"
              prop="name"
            >
                <el-input v-model="formData.name" placeholder="请输入姓名" style="max-width: 217px;"></el-input>
              </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="证件号码"
              prop="certificates"
            >
                <el-input v-model="formData.certificates" placeholder="请输入证件号码" style="max-width: 217px;"></el-input>
              </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label=""
            >
              <el-button type="primary">搜索</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-row class="text item" style="overflow: hidden;margin-top: 15px;">
          <div style="float: right;">
            <el-button type="primary" @click="dialogVisible=true">批量审核</el-button>
            <el-button type="primary">批量禁用/启用<i class="el-icon-check"></i></el-button>
            <el-button type="primary">批量导入/导出<i class="el-icon-check"></i></el-button>
          </div>
      </el-row>
      <div class="text item">
        <TopTable :columns="columns" :dataSource="dataSource" :pagination="pagination"  @Select="select" @Change="onChange" :isSelect="true">
          <template #state="{ state }" >
              <el-button   @click="operatEexamine(state)" type="text" size="small">
                审核9
              </el-button>
              <el-button   @click="edit(scope.data)" type="text" size="small">
                编辑
              </el-button>
           </template>
        </topTable>
      </div>
    </el-card>
    <el-dialog
      title="人脸照片批量审核"
      :visible.sync="dialogVisible"
      width="30%"
      >
      <div style="margin: 10px 3px;">审核意见</div>
      <div>
        <el-radio v-model="myExamine" label="1">审核通过</el-radio>
        <el-radio v-model="myExamine" label="2">审核不通过</el-radio>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="人脸照片审核"
      :visible.sync="singleVisible"
      width="760px"
      >
        <div style="width: 100%;text-align: center;">
          <img src="../../build/logo.png" class="my-img"/>
          <img src="../../build/logo.png" class="my-img"/>
          <img src="../../build/logo.png" class="my-img"/>
          <img src="../../build/logo.png" class="my-img"/>
        </div>
        <el-row :span="24" style="margin-top: 15px;">
          <el-col :span="6" v-for="(item,key) in imgExamine" :key="key">
            <div style="margin-top: 10px;"><el-radio v-model="imgExamine[key]" label="1">符合要求</el-radio></div>
            <div style="margin-top: 10px;"><el-radio v-model="imgExamine[key]" label="2">不符合要求</el-radio></div>
          </el-col>
        </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="singleVisible = false">取 消</el-button>
        <el-button type="primary" @click="singleVisible = false">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import topTable from '@/components/topTable.vue'
export default {
  name: 'module',
  data () {
    return {
        columns: [
          {
              title: '人脸',
              dataIndex: 'faceUrl',
              type:'image',
              width:'100px'
          },
          {
              title: '姓名',
              dataIndex: 'name',
          },
          {
              title: '姓别',
              dataIndex: 'sex',
          },
          {
              title: '证件号',
              dataIndex: 'papers',
              width:'200'
          },
          {
              title: '年级/班别',
              dataIndex: 'gradeClass',
          },
          {
              title: '采集时间',
              dataIndex: 'date',
          },
          {
              title: '审核状态',
              dataIndex: 'state',
          },
          {
              title: '操作',
              dataIndex: 'on',
              width:'150px',
              slot:"state"
          },
        ],
        dataSource:[],
        pagination:{
          total:1000,//多少页
          defaultPageSize:10,//多少条
          currentPage:1,//当前页
        },
        formData: {
          grade: '',
          myClass:'',
          state:'',
          name:'',
          certificates:''
        },
        grades:[
          {value:'',label:'全部'},
          {value:1,label:'一年级'},
          {value:2,label:'二年级'},
          {value:3,label:'三年级'}
        ],
        myClass:[
          {value:'',label:'全部'},
          {value:1,label:'一班'},
          {value:2,label:'二班'},
          {value:3,label:'实验班'},
        ],
        state:[
          {value:'',label:'全部'},
          {value:1,label:'待审核'},
          {value:2,label:'审核通过'},
          {value:3,label:'审核失败'},
          {value:4,label:'未上传'},
        ],
        dialogVisible:false,//批量审核弹框
        myExamine:'',//是否通过
        singleVisible:false,//单个审核弹框
        imgExamine:['','','','']//单个审核
    }
  },
  created(){
    let dataSource = []//模拟数据
    for(let i=1;i<11;i++){
      let obj ={id:1,date:'2019-3-11',name:'大鹏',faceUrl:'771',sex:'女',papers:'36253215546254',gradeClass:'一年级/一班',state:'未审核'}
      obj.id = i
      obj.papers +=i
      obj.name ='大鹏'+i
      dataSource.push(obj)
    }
    this.dataSource = dataSource
  },
  methods:{
    operatEexamine(row,data){//审核
    console.log(row)
      this.singleVisible = true
    },
    edit(row,data){//编辑
      this.$router.push('/face/student/edit')
    },
    Prohibit(row){//禁用

      this.$confirm(row.state?'被禁用的用户将不能通过人脸设备':'启用后用户将可通过人脸设备', row.state?'确定禁用':'确定启用', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(() => {

        }).catch(() => {

        });
    },
    onChange(page,pageSize){//分页函数
      let dataSource = this.dataSource
      dataSource.forEach(item=>{
        Object.keys(item).forEach(items=>{
          item[items] =item[items]+page
        })
      })
      this.dataSource = dataSource
    },
    select(val){//全选
       console.log(val)
    },
  }
}
</script>

<style scoped>
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
    height: 20px;
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
</style>
