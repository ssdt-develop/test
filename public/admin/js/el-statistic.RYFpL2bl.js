import{b as s,h as t,d as e,a,D as i,aV as r,aS as l,c as f,e as n,n as p,g as o,f as u,a2 as c,t as d,ab as x,k as S,ao as v,_ as y,s as g}from"./index.BRpw1nKc.js";const m=s({decimalSeparator:{type:String,default:"."},groupSeparator:{type:String,default:","},precision:{type:Number,default:0},formatter:Function,value:{type:t([Number,Object]),default:0},prefix:String,suffix:String,title:String,valueStyle:{type:t([String,Object,Array])}}),b=e({name:"ElStatistic"});const $=g(y(e({...b,props:m,setup(s,{expose:t}){const e=s,y=a("statistic"),g=i((()=>{const{value:s,formatter:t,precision:a,decimalSeparator:i,groupSeparator:f}=e;if(r(t))return t(s);if(!l(s))return s;let[n,p=""]=String(s).split(".");return p=p.padEnd(a,"0").slice(0,a>0?a:0),n=n.replace(/\B(?=(\d{3})+(?!\d))/g,f),[n,p].join(p?i:"")}));return t({displayValue:g}),(s,t)=>(f(),n("div",{class:p(o(y).b())},[s.$slots.title||s.title?(f(),n("div",{key:0,class:p(o(y).e("head"))},[u(s.$slots,"title",{},(()=>[c(d(s.title),1)]))],2)):x("v-if",!0),S("div",{class:p(o(y).e("content"))},[s.$slots.prefix||s.prefix?(f(),n("div",{key:0,class:p(o(y).e("prefix"))},[u(s.$slots,"prefix",{},(()=>[S("span",null,d(s.prefix),1)]))],2)):x("v-if",!0),S("span",{class:p(o(y).e("number")),style:v(s.valueStyle)},d(o(g)),7),s.$slots.suffix||s.suffix?(f(),n("div",{key:1,class:p(o(y).e("suffix"))},[u(s.$slots,"suffix",{},(()=>[S("span",null,d(s.suffix),1)]))],2)):x("v-if",!0)],2)],2))}}),[["__file","statistic.vue"]]));export{$ as E};
