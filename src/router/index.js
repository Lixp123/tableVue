//输出的name要和对象中的path相同
import Navigation from '@/navigation/navigation.vue'
import Module from '@/module/module.vue'
import StudentNew from '@/module/studentNew.vue'
import Login from '@/module/Login.vue'
export const studentMenu = [
    {
      path: '/studentMenu',
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
      path: '/studentMenu',
      name: '考勤管理',
      component: Navigation,
      show:true,
      children:[
        {path:'studentRecord',name:'学生考勤记录',component:Module,show:true},
        {path:'facultyRecord',name:'教职工考勤记录',component:Module,show:true},
      ]
    }
]

export const testMenu = [
    {
      path: '/testMenu',
      name: '测试导航栏',
      component: Navigation,
      show:true,
      children:[
        {path:'bar1',name:'导航栏1',component:Module,show:true},
        {path:'bar2',name:'导航栏3',component:Module,show:true},
        {path:'bar3',name:'导航栏4',component:Module,show:true}
      ]
    }
  ]

export const loginMenu = [
  {
    path: '/',
    name: '测试多个导航栏',
    component: Login
  }
]