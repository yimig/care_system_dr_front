import './res/styles/index.less';
import 'element-ui/lib/theme-chalk/index.css';
import 'tailwindcss/tailwind.css'
import Vue from 'vue';
import less from 'less';
import ElementUI from 'element-ui'
import SideBarComp from "./components/SideBar/SideBar.vue";
import InfoBox from "./components/InfoBox/InfoBox.vue";

Vue.use(less);
Vue.use(ElementUI);
// new Vue({
//     el:'#sidebar',
//     render:(h,props)=>h(TestComp,{content:"content here",arg:"arg here"})
// });
// new Vue({
//     el:"#title",
//     render:(h,props)=>h(TitleComp,{props:{arg1:'hello world!',arg2:'now you see arg2'}})
// })

new Vue({
    el:'#sidebar',
    render:(h,props)=>h(SideBarComp,{props:{}})
})

new Vue({
    el:'#infobox',
    render:(h,props)=>h(InfoBox,{props:
            {
                info_list:[{
                    id:1,
                    // avatar:'https://pic2.zhimg.com/v2-d0d64eb5b831452ffb0a306899d7718e_1440w.jpg?source=172ae18b',
                    avatar:'',
                    name:'倪培浩',
                    is_male:true,
                    age:21,
                    height:175,
                    weight:60,
                    is_allergic:false
                },{
                    id:2,
                    // avatar:'https://pic2.zhimg.com/v2-d0d64eb5b831452ffb0a306899d7718e_1440w.jpg?source=172ae18b',
                    avatar:'',
                    name:'王小梅',
                    is_male:false,
                    age:18,
                    height:178,
                    weight:50,
                    is_allergic:true
                },{
                    id:3,
                    avatar:'',
                    name:'李建业',
                    is_male:true,
                    age:23,
                    height:185,
                    weight:70,
                    is_allergic:false
                }]
            }})
})