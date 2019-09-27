<template>
  <el-row>
    <el-col :span="24">
      <el-table
        v-bind="$props"
        v-loading="$store.state.startData.loading"
        ref="multipleTable"
        :border="true"
        :header-cell-style="{background:'#a4aec7',color:'#fff',textAlign:'center'}"
        :cell-style="{textAlign:'center'}"
        :data="pagination?dataSource:myData"
        @selection-change="tabSelect"
        style="width: 100%">

        <el-table-column
          v-if="isSelect"
          type="selection"
          width="55">
        </el-table-column>

        <el-table-column
           v-for="(item,key) in columns"
          :key="key"
          :prop="item.dataIndex"
          :width="item.width?item.width:'auto'"
          :label="item.title">

              <template  slot-scope="scope">
                <div v-if="!item.type && !item.slot">
                  {{scope.row[item.dataIndex]}}
                </div>
                <slot v-if="item.slot" :name="item.slot" v-bind:[item[slot]]="scope.row"></slot>
              </template>

              <el-table-column
                  v-for="(items,key) in item.child?item.child:[]"
                  :key="key"
                  :prop="items.dataIndex"
                  :label="items.title"
                  :width="items.width?items.width:'auto'">
                  <template  slot-scope="scope">
                    <div v-if="!items.type && !items.slot">
                      {{scope.row[items.dataIndex]}}
                    </div>
                     <slot v-if="items.slot" :name="items.slot" v-bind:[items[slot]]="scope.row"></slot>
                  </template>
              </el-table-column>

        </el-table-column>

      </el-table>
    </el-col>
    <el-col :span="24" style="overflow: hidden;" v-if="pagination && isPag">
      <div class="my-page">
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="pagination && pagination.pageIndex"
        :page-size="10"
        layout="prev, pager, next, jumper"
        :total="pagination && pagination.totalCount">
        </el-pagination>
       </div>
       <div class="my-page" style="padding-top: 7px;margin-right: 15px;color:#606266">
         共{{pagination && pagination.totalCount}}条
       </div>
    </el-col>
     <el-col :span="24" style="overflow: hidden;" v-if="!pagination && isPag">
      <div class="my-page">
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="myPagination.pageIndex"
        :page-size="10"
        layout="prev, pager, next, jumper"
        :total="myPagination.totalCount">
        </el-pagination>
       </div>
      <div class="my-page" style="padding-top: 7px;margin-right: 15px;color:#606266">
        共{{pagination && pagination.totalCount}}条
      </div>
    </el-col>
  </el-row>
</template>
<!-- 列表table组件 -->
<script>
//@Select列表多选函数
//@Change分页
// import helpers from '../helpers.js'
export default {
  name: 'TopTable',
  props:{
      columns:{ type : Array , default : [] , required : true },//表头,type为image图片，operate为操作，selection多行选择，有slot值时type将失效
      dataSource:{ type : Array , default : [] , required : true },//列表数据
      pagination:{ type : Object | String , default : '' , required : false },//分页
      isPag:{type : Boolean , default : true , required : false},
      isSelect:{type : Boolean , default : false , required : false},//是否有选择check
  },
  data () {
    return {
        data:[],//后台不分页全部数据
        myData:[],//不分页一页数据
        // hostName:helpers.hostName,
        myPagination:{
          totalCount:0,
          pageIndex:1
        },
        slot:'slot',//编辑器报错
    }
  },
  created(){
    if(!this.pagination && this.isPag){
      this.data = JSON.parse(JSON.stringify(this.dataSource))
      let data = JSON.parse(JSON.stringify(this.data))
      let myData = data.splice(0,10)
      this.myPagination= {
        totalCount:this.data.length,
        pageIndex:1
      }
      this.myData = myData
    }else{
      this.myData = this.dataSource
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
          totalCount:this.data.length,
          pageIndex:val
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
