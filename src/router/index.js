
import Navigation from '@/navigation/navigation'
import Module from '@/module/module'
import StudentNew from '@/module/studentNew'
export default  {
  routes: [
    {
      path: '/face',
      name: '人脸库管理',
      component: Navigation,
      show:true,
      children:[
        {path:'student',name:'学生人脸库',component:Module,show:true},
        {path:'student/:id',name:'学生人脸库编辑',component:StudentNew,show:false},
        {path:'facultyStaff',name:'教职工人脸库',component:Module,show:true},
        {path:'enterStatistics',name:'人脸录入统计',component:Module,show:true}
      ]
    },
    {
      path: '/attendance',
      name: '考勤管理',
      component: Navigation,
      show:true,
      children:[
        {path:'studentRecord',name:'学生考勤记录',component:Module,show:true},
        {path:'facultyRecord',name:'教职工考勤记录',component:Module,show:true},
      ]
    },
    {
      path: '/',//刚进入
      name: '人脸库管理',
      component: Navigation,
      show:false
    },
  ]
}
