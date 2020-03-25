//输出的name要和对象中的path相同
import Navigation from '@/navigation/navigation.vue'
import Module from '@/module/module.vue'
import StudentNew from '@/module/studentNew.vue'
import Login from '@/module/Login.vue'
export const studentMenu = [
    {
      path: '/studentMenu',
      title: '人脸库管理',
      name:'studentMenu',
      component: Navigation,
      show:true,
      children:[
        {path:'student',name:'student',title:'学生人脸库',component:Module,show:true},
        {path:'student/:id',name:'studentNew',title:'学生人脸库编辑',component:StudentNew,show:false,props:true},
      ]
    },
    {
      path: '/studentMenu',
      title: '考勤管理',
      name:'studentMenu',
      component: Navigation,
      show:true,
      children:[
        {path:'studentRecord',name:'studentRecord',title:'学生考勤记录',component:Module,show:true},
        {path:'facultyRecord',name:'facultyRecord',title:'教职工考勤记录',component:Module,show:true},
      ]
    }
]

export const testMenu = [
    {
      path: '/testMenu',
      title: '测试导航栏',
      name:'testMenu',
      component: Navigation,
      show:true,
      children:[
        {path:'bar1',name:'bar1',title:'导航栏1',component:Module,show:true},
        {path:'bar2',name:'bar2',title:'导航栏3',component:Module,show:true},
        {path:'bar3',name:'bar3',title:'导航栏4',component:Module,show:true}
      ]
    }
  ]

export const loginMenu = [
  {
    path: '/',
    title: '测试多个导航栏',
    component: Login
  }
]