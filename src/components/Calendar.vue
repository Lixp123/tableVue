<template>
  <div style="text-align:left">
    <div style="margin-left:30px;margin-top:30px">
      日期： <el-date-picker
        v-model="date"
        type="month"
        placeholder="选择月">
      </el-date-picker>
    </div>
       <table style="width:849px;">
        <tbody>
          <th>周日</th>
          <th>周一</th>
          <th>周二</th>
          <th>周三</th>
          <th>周四</th>
          <th>周五</th>
          <th>周六</th>
          <th v-for="(itme,key) in dataSource" :key="key" class="my-th">
            <div class="my-th-num">{{itme.num}}</div>
           <!-- <el-button type="text" :class="itme.state =='旷课'?'my-danger':itme.state =='迟到'?'my-warning':itme.state =='早退'?'my-early':'' ">{{itme.state}}</el-button> -->
          </th>
       </tbody>
      </table>
  </div>
</template>
<!-- 日历 -->
<script>

export default {
  name: 'Calendar',
  props:{
    arr:{type : Array|Object , default: [] , required: false }
  },
  data () {
    return {
      dataSource:[],
      date:new Date()
    }
  },
  watch:{
    arr(val,oldVal){
        let dataSource = this.dataSource
        dataSource.forEach(item=>{
          val.forEach(ite=>{
            if(item.num == ite.num){
              item.state = ite.state
            }
          })
        })
        this.dataSource = dataSource
    },
    date(val,oldVal){
      if(val){
        let time =  val.getFullYear()+'-'+(val.getMonth()+1)
        this.changeTime(val,time)
      }else{
        let date = new Date()
        let time =  date.getFullYear()+'-'+(date.getMonth()+1)
        this.changeTime(date,time)
      } 
    }
  },
  created(){
    let date = new Date()
    let time =  date.getFullYear()+'-'+(date.getMonth()+1)
    this.changeTime(date,time)
  },
  methods:{
    getOneWeek(time){//获取月第一天周几
      var date=new Date(time);
      date=new Date(date.setDate(1))
      var weekday=date.getDay();
      return weekday
    },
    changeTime(time,day){
      let date=new Date(time.setDate(1))
      var weekday=date.getDay();
      let data = []

      let num = this.getDays(day)
      let arr = this.arr
      for(let i=1;i<=num;i++){
        let obj = {num:1,state:''}
        arr.length >0 && arr.forEach(item=>{
          if(item.num ==i){
            obj.state = item.state
          }
        })
        obj.num = i
        data.push(obj)
      }
      for(let i=0;i<weekday;i++){
         let obj = {num:'',state:''}
         data.unshift(obj)
      }
      this.dataSource = data
    },
    getDays(day){//获取月多少天
        var curDate = new Date(day);
        var curMonth = curDate.getMonth();
        curDate.setMonth(curMonth + 1);
        curDate.setDate(0);
        return curDate.getDate();
    }
  },
}
</script>

<style scoped>
table{
  color: #505050;
  border-color: #ccc;
  border-spacing:0px;
  border-collapse:inherit;
  text-align: left;
  border-left: 1px solid #ccc;
  border-top: 1px solid #ccc;
  margin: 30px;
}
th{
  width: 120px;
  text-align: center;
  padding: 0;
  margin: 0;
  height: 50px;
  line-height: 60px;
  display: inline-block;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.my-th{
  height: 60px;
  position: relative;
}
.my-th-num{
  position: absolute;
  left: 0;
  top: 0;
  line-height: initial;
  width: 40%;
}
.my-warning{
  color: #e6a23c;
}
.my-danger{
  color: #f56c6c;
}
.my-early{
  color:#8080FF;
}
</style>
