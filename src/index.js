import './res/styles/index.less';
import 'element-ui/lib/theme-chalk/index.css';
import 'tailwindcss/tailwind.css'
import Vue from 'vue';
import less from 'less';
import ElementUI from 'element-ui'
import Login from "./components/Login/Login.vue";
import axios from "_axios@0.21.1@axios";
import Window from "./components/Window/Window.vue";

Vue.use(less);
Vue.use(ElementUI);
new Vue({
    el:'#window',
    render:(h,props)=>h(Window,{})
});
// new Vue({
//     el:"#title",
//     render:(h,props)=>h(TitleComp,{props:{arg1:'hello world!',arg2:'now you see arg2'}})
// })

// var item_list=[];

// var item_list=
//     [{
//     id:1,
//     // avatar:'https://pic2.zhimg.com/v2-d0d64eb5b831452ffb0a306899d7718e_1440w.jpg?source=172ae18b',
//     avatar:'',
//     name:'倪培浩',
//     is_male:true,
//     age:21,
//     height:175,
//     weight:60,
//     is_allergic:false,
//     detail:''
// },{
//     id:2,
//     avatar:'https://pic2.zhimg.com/v2-d0d64eb5b831452ffb0a306899d7718e_1440w.jpg?source=172ae18b',
//     // avatar:'',
//     name:'王小梅',
//     is_male:false,
//     age:18,
//     height:178,
//     weight:50,
//     is_allergic:true
// },{
//     id:3,
//     avatar:'',
//     name:'李建业',
//     is_male:true,
//     age:23,
//     height:185,
//     weight:70,
//     is_allergic:false
// }]

// var sidebar = new Vue({
//     el:'#sidebar',
//     render:(h,props)=>h(SideBar,{props:{}})
// })
//
// var login_mask = new Vue({
//     el:'#login_mask',
//     render:(h,props)=>h(Login,{
//         props:{},
//         on:{
//             'pass':function (sid){
//                 axios.post('http://localhost:3000/getInfo',{
//                     sid:sid,
//                 })
//                     .then(function (response) {
//                         if(response.data.length>0){
//                             for (let i = 0; i < response.data.length; i++) {
//                                 item_list.push(response.data[i])
//                                 infobox.$forceUpdate();
//                             }
//                         }
//                         console.log(response)
//                     })
//                     .catch(function (error) {
//                         console.log(error)
//                     })
//             }
//         }
//     })
// })
//
// var textbox = new Vue({
//     el:'#textbox',
//     render:(h,props)=>h(TextBox,{props:{}})
// })
//
// var detailbox = new Vue({
//     el:'#detailbox',
//     render:(h,props)=>h(Label,{props:{msg:'borderbox'}})
// })
//
// var infobox = new Vue({
//     el:'#infobox',
//     render:(h,props)=>h(InfoBox,
//         {props: {
//                 info_list:item_list
//             },
//             on:{
//                 'itemChange':function (args){
//                     console.log(detailbox)
//                     console.log(args)
//                 },
//                 'afterNextItem':function (args) {
//                     //     this.info_list.push({
//                     //     id:item_list.length+1,
//                     //     avatar:'',
//                     //     name:'占位',
//                     //     is_male:true,
//                     //     age:23,
//                     //     height:185,
//                     //     weight:70,
//                     //     is_allergic:false
//                     // })
//                     console.log(args)
//                 },
//                 'afterForwardItem':function (args) {
//                     console.log(args)
//                 },
//
//
//             }
//         },)
// })