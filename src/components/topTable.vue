<template>
  <el-row>
    <el-col :span="24">
      <el-table
        ref="multipleTable"
        :border="true"
        :header-cell-style="{background:'#a4aec7',color:'#fff',textAlign:'center'}"
        :cell-style="{textAlign:'center'}"
        :data="pagination?dataSource:myData"
        @selection-change="tabSelect"
        style="width: 100%">

        <el-table-column
          v-if="columns.length>0 && columns[0].type=='selection'?true:false"
          type="selection"
          width="55">
        </el-table-column>

        <el-table-column
           v-for="(item,key) in columns"
           v-if="item.type=='selection'?false:true"
          :key="key"
          :prop="item.dataIndex"
          :width="item.width?item.width:'auto'"
          :type="item.type=='selection'?'selection':''"
          :label="item.title">

              <template  slot-scope="scope">
                <div v-if="!item.type">
                  {{scope.row[item.dataIndex]}}
                </div>
                <div v-if="item.type && item.type =='image'">
                     <img src="../../build/logo.png" :width="item.width?parseFloat(item.width)-15:'100'" style="margin: 0 auto;"/>
                </div>
                <div v-if="item.type == 'operate' && item.operate">
                  <el-button v-for="items in item.operate" :key="items.name"  @click="handleClick(scope.row,items.click)" type="text" size="small">
                    {{items.name}}
                  </el-button>
                </div>
              </template>

              <el-table-column
                  v-if="item.child"
                  v-for="items in item.child"
                  :prop="items.dataIndex"
                  :label="items.title"
                  :width="item.width?item.width:'auto'">
              </el-table-column>
        </el-table-column>

      </el-table>
    </el-col>
    <el-col :span="24" style="overflow: hidden;" v-if="pagination">
      <div class="my-page">
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="pagination && pagination.current"
        :page-size="10"
        layout="prev, pager, next, jumper"
        :total="pagination && pagination.total">
        </el-pagination>
       </div>
    </el-col>
     <el-col :span="24" style="overflow: hidden;" v-if="!pagination">
      <div class="my-page">
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="myPagination.current"
        :page-size="10"
        layout="prev, pager, next, jumper"
        :total="myPagination.total">
        </el-pagination>
       </div>
    </el-col>
  </el-row>
</template>

<script>
//@Select列表多选函数
//@Change分页
export default {
  name: 'topTable',
  props:{
      columns:{ type : Array , default : [] , required : true },//表头,type为image图片，operate为操作，selection多行选择
      dataSource:{ type : Array , default : [] , required : true },//列表数据
      pagination:{ type : Object | String , default : '' , required : false },//分页
  },
  data () {
    return {
        data:[],//后台不分页全部数据
        myData:[],//不分页一页数据
        myPagination:{
          total:0,
          current:1
        }
    }
  },
  created(){
    console.log(this.pagination)
    if(!this.pagination){
      this.data = JSON.parse(JSON.stringify(this.dataSource))
      let data = JSON.parse(JSON.stringify(this.data))
      let myData = data.splice(0,10)
      this.myPagination= {
        total:this.data.length,
        current:1
      }
      this.myData = myData
    }
  },
  methods:{
    handleClick(row,click){//操作
      click(row)
    },
    handleSizeChange(val){
      //一页多少条
    },
    handleCurrentChange(val){//分页第几页
      if(!this.pagination){//前端分页
      console.log(5555)
        this.data = JSON.parse(JSON.stringify(this.dataSource))
        let data = JSON.parse(JSON.stringify(this.data))
        let myData = data.splice((val-1)*10,10)
        this.myPagination= {
          total:this.data.length,
          current:val
        }
        this.myData = myData
      }else{//后端
          this.$emit('Change',val,10)
      }
      this.$refs.multipleTable.clearSelection();//取消全选
    },
    tabSelect(val){//多条选择
       this.$emit('Select',val)
    }
  }
}
</script>

<style scoped>
.my-page{
    float: right;
    margin-top: 10px;
}
</style>
