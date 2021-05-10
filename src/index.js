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
                name:'王小明',
                is_male:true,
                age:18,
                height:178,
                weight:70,
                is_allergic:true
            }})
})