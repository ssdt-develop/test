import{b as s,h as a,d as e,a as t,c as o,e as r,n as d,g as l,f as y,a2 as f,t as i,ab as n,k as c,ao as h,_ as v,s as b}from"./index.BRpw1nKc.js";const p=s({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:a([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),u=e({name:"ElCard"});const S=b(v(e({...u,props:p,setup(s){const a=t("card");return(s,e)=>(o(),r("div",{class:d([l(a).b(),l(a).is(`${s.shadow}-shadow`)])},[s.$slots.header||s.header?(o(),r("div",{key:0,class:d(l(a).e("header"))},[y(s.$slots,"header",{},(()=>[f(i(s.header),1)]))],2)):n("v-if",!0),c("div",{class:d([l(a).e("body"),s.bodyClass]),style:h(s.bodyStyle)},[y(s.$slots,"default")],6),s.$slots.footer||s.footer?(o(),r("div",{key:1,class:d(l(a).e("footer"))},[y(s.$slots,"footer",{},(()=>[f(i(s.footer),1)]))],2)):n("v-if",!0)],2))}}),[["__file","card.vue"]]));export{S as E};
