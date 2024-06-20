import{b as e,_ as a,d as l,j as t,a as s,G as r,r as o,D as i,L as n,aB as u,a0 as v,c,l as f,w as m,O as d,k as p,n as y,g as h,ao as g,P as b,T as w,aQ as S,e as z,a3 as x,Q as _,h as E,aR as L,aS as T,aF as k,K as B,W as H,$ as R,p as C,J as N,o as W,aT as $,f as j,m as A,ab as M,Y as O,s as K}from"./index.BRpw1nKc.js";const P={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},Y=Symbol("scrollbarContextKey"),q=e({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean});var Q=a(l({__name:"thumb",props:q,setup(e){const a=e,l=t(Y),z=s("scrollbar");l||r("Thumb","can not inject scrollbar context");const x=o(),_=o(),E=o({}),L=o(!1);let T=!1,k=!1,B=S?document.onselectstart:null;const H=i((()=>P[a.vertical?"vertical":"horizontal"])),R=i((()=>(({move:e,size:a,bar:l})=>({[l.size]:a,transform:`translate${l.axis}(${e}%)`}))({size:a.size,move:a.move,bar:H.value}))),C=i((()=>x.value[H.value.offset]**2/l.wrapElement[H.value.scrollSize]/a.ratio/_.value[H.value.offset])),N=e=>{var a;if(e.stopPropagation(),e.ctrlKey||[1,2].includes(e.button))return;null==(a=window.getSelection())||a.removeAllRanges(),$(e);const l=e.currentTarget;l&&(E.value[H.value.axis]=l[H.value.offset]-(e[H.value.client]-l.getBoundingClientRect()[H.value.direction]))},W=e=>{if(!_.value||!x.value||!l.wrapElement)return;const a=100*(Math.abs(e.target.getBoundingClientRect()[H.value.direction]-e[H.value.client])-_.value[H.value.offset]/2)*C.value/x.value[H.value.offset];l.wrapElement[H.value.scroll]=a*l.wrapElement[H.value.scrollSize]/100},$=e=>{e.stopImmediatePropagation(),T=!0,document.addEventListener("mousemove",j),document.addEventListener("mouseup",A),B=document.onselectstart,document.onselectstart=()=>!1},j=e=>{if(!x.value||!_.value)return;if(!1===T)return;const a=E.value[H.value.axis];if(!a)return;const t=100*(-1*(x.value.getBoundingClientRect()[H.value.direction]-e[H.value.client])-(_.value[H.value.offset]-a))*C.value/x.value[H.value.offset];l.wrapElement[H.value.scroll]=t*l.wrapElement[H.value.scrollSize]/100},A=()=>{T=!1,E.value[H.value.axis]=0,document.removeEventListener("mousemove",j),document.removeEventListener("mouseup",A),M(),k&&(L.value=!1)};n((()=>{M(),document.removeEventListener("mouseup",A)}));const M=()=>{document.onselectstart!==B&&(document.onselectstart=B)};return u(v(l,"scrollbarElement"),"mousemove",(()=>{k=!1,L.value=!!a.size})),u(v(l,"scrollbarElement"),"mouseleave",(()=>{k=!0,L.value=T})),(e,a)=>(c(),f(w,{name:h(z).b("fade"),persisted:""},{default:m((()=>[d(p("div",{ref_key:"instance",ref:x,class:y([h(z).e("bar"),h(z).is(h(H).key)]),onMousedown:W},[p("div",{ref_key:"thumb",ref:_,class:y(h(z).e("thumb")),style:g(h(R)),onMousedown:N},null,38)],34),[[b,e.always||L.value]])])),_:1},8,["name"]))}}),[["__file","thumb.vue"]]);var X=a(l({__name:"bar",props:e({always:{type:Boolean,default:!0},minSize:{type:Number,required:!0}}),setup(e,{expose:a}){const l=e,s=t(Y),r=o(0),i=o(0),n=o(""),u=o(""),v=o(1),f=o(1);return a({handleScroll:e=>{if(e){const a=e.offsetHeight-4,l=e.offsetWidth-4;i.value=100*e.scrollTop/a*v.value,r.value=100*e.scrollLeft/l*f.value}},update:()=>{const e=null==s?void 0:s.wrapElement;if(!e)return;const a=e.offsetHeight-4,t=e.offsetWidth-4,r=a**2/e.scrollHeight,o=t**2/e.scrollWidth,i=Math.max(r,l.minSize),c=Math.max(o,l.minSize);v.value=r/(a-r)/(i/(a-i)),f.value=o/(t-o)/(c/(t-c)),u.value=i+4<a?`${i}px`:"",n.value=c+4<t?`${c}px`:""}}),(e,a)=>(c(),z(_,null,[x(Q,{move:r.value,ratio:f.value,size:n.value,always:e.always},null,8,["move","ratio","size","always"]),x(Q,{move:i.value,ratio:v.value,size:u.value,vertical:"",always:e.always},null,8,["move","ratio","size","always"])],64))}}),[["__file","bar.vue"]]);const D=e({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:E([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20},id:String,role:String,...L(["ariaLabel","ariaOrientation"])}),F={scroll:({scrollTop:e,scrollLeft:a})=>[e,a].every(T)},G=l({name:"ElScrollbar"});const I=K(a(l({...G,props:D,emits:F,setup(e,{expose:a,emit:l}){const t=e,r=s("scrollbar");let n,v;const d=o(),b=o(),w=o(),S=o(),x=i((()=>{const e={};return t.height&&(e.height=k(t.height)),t.maxHeight&&(e.maxHeight=k(t.maxHeight)),[t.wrapStyle,e]})),_=i((()=>[t.wrapClass,r.e("wrap"),{[r.em("wrap","hidden-default")]:!t.native}])),E=i((()=>[r.e("view"),t.viewClass])),L=()=>{var e;b.value&&(null==(e=S.value)||e.handleScroll(b.value),l("scroll",{scrollTop:b.value.scrollTop,scrollLeft:b.value.scrollLeft}))};const K=()=>{var e;null==(e=S.value)||e.update()};return B((()=>t.noresize),(e=>{e?(null==n||n(),null==v||v()):(({stop:n}=H(w,K)),v=u("resize",K))}),{immediate:!0}),B((()=>[t.maxHeight,t.height]),(()=>{t.native||R((()=>{var e;K(),b.value&&(null==(e=S.value)||e.handleScroll(b.value))}))})),C(Y,N({scrollbarElement:d,wrapElement:b})),W((()=>{t.native||R((()=>{K()}))})),$((()=>K())),a({wrapRef:b,update:K,scrollTo:function(e,a){O(e)?b.value.scrollTo(e):T(e)&&T(a)&&b.value.scrollTo(e,a)},setScrollTop:e=>{T(e)&&(b.value.scrollTop=e)},setScrollLeft:e=>{T(e)&&(b.value.scrollLeft=e)},handleScroll:L}),(e,a)=>(c(),z("div",{ref_key:"scrollbarRef",ref:d,class:y(h(r).b())},[p("div",{ref_key:"wrapRef",ref:b,class:y(h(_)),style:g(h(x)),onScroll:L},[(c(),f(A(e.tag),{id:e.id,ref_key:"resizeRef",ref:w,class:y(h(E)),style:g(e.viewStyle),role:e.role,"aria-label":e.ariaLabel,"aria-orientation":e.ariaOrientation},{default:m((()=>[j(e.$slots,"default")])),_:3},8,["id","class","style","role","aria-label","aria-orientation"]))],38),e.native?M("v-if",!0):(c(),f(X,{key:0,ref_key:"barRef",ref:S,always:e.always,"min-size":e.minSize},null,8,["always","min-size"]))],2))}}),[["__file","scrollbar.vue"]]));export{I as E};
