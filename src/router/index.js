//输出的name要和对象中的path相同
import Navigation from '@/navigation/navigation.vue'
import Module from '@/app/module.vue'
import StudentNew from '@/app/studentNew.vue'
import Login from '@/app/Login.vue'
import Child from '@/navigation/child'
import  setHook  from '../components/hook.js'
let hook =  setHook(Login)
export default  [
    {
      path: '/studentMenu',
      title: '人脸库管理',
      name:'studentMenu',
      component: Navigation,
      show:true,
      children:[
        {
          path:'student',
          name:'student',
          title:'学生人脸库',
          component:Child,//中间组件
          show:true, 
          children:[
            {path:'studentRecord',name:'studentRecord',title:'学生考勤记录',component:Module,show:true},
            {path:'studentRecord/:id',name:'studentNew',title:'学生人脸库编辑',component:StudentNew,show:false,props:true},
          ]
        },
      ]
    },
    {
      path: '/login',
      title: '登录',
      name:'login',
      component:hook,
      show:false,
    }
]