import{as as e,ac as t,ad as l,c as a,e as o,a3 as i,w as s,Q as n,ag as d,l as r,a2 as c,k as u,t as m,ab as p,O as h,P as _,az as g,at as f}from"./index.BRpw1nKc.js";import{v as y}from"./el-loading.BV6rMv2f.js";import{_ as b}from"./index.B8TJitXy.js";import{E as V}from"./el-scrollbar.CSr5ETPp.js";import{_ as v}from"./FileUploads.CmqZ9qQ6.js";import{E as k,a as w}from"./el-descriptions-item.Il02_zQk.js";import{E as S,a as C}from"./el-table-column.CutgeWLk.js";import{E as U}from"./el-checkbox.EDgu4e6h.js";import"./el-tooltip.l0sNRNKZ.js";import"./el-popper.D4W13mvh.js";import{E as j}from"./el-link.DPD7VmMd.js";import{_ as x}from"./FileImage.CMtjsSwL.js";import{a as D,E as q}from"./el-select.5v61zF81.js";import{E as T}from"./el-dialog._ZabjypL.js";import{a as I,E}from"./el-form-item.BMwGbftj.js";import{E as A}from"./el-switch.DGE1lg0h.js";import{E as Q}from"./el-row.q_U4h3Z4.js";import{E as R}from"./el-col.CaebfPGa.js";import{_ as $}from"./index.CwjPZbsy.js";import{E as G}from"./el-date-picker.CSS3cjq0.js";import{E as O}from"./el-radio.DuW_wDn_.js";import{s as P}from"./screen-height.COx2xJHy.js";import{a as F}from"./index.Cp1HnnF1.js";import{g as L}from"./settings.HJzUBU6Z.js";import{_ as z}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./el-image-viewer.BB7HyzD-.js";import"./debounce.CixRjyEa.js";import"./el-text.D8Jxf6kI.js";import"./index.B5yjKjmX.js";import"./FilePreview.DjJYlL3Z.js";import"./clipboard.DxwZ1MhR.js";/* empty css                          */import"./el-card.BBukHcQ3.js";/* empty css                       */import"./permission.BG2swUZV.js";import"./group.D6uVsq_i.js";import"./tag.DI6CRSc4.js";import"./index.Dg10_69g.js";import"./_Uint8Array.CFsNisPO.js";import"./index.HiC8GQQr.js";import"./isUndefined.DgmxjSXK.js";import"./el-avatar.ByAhWF37.js";import"./castArray.CIpvmybx.js";import"./refs.BDPfTQKo.js";import"./tagsView.BGKYC20W.js";const N="/admin/content.Category/";function Y(t){return e({url:N+"contentRemove",method:"post",data:t})}const H={class:"app-container"},M={style:{}},B={class:"c-red"};const J=z({name:"ContentCategory",components:{Pagination:b},data:()=>({name:"内容分类",height:680,loading:!1,idkey:"category_id",query:{search_field:"category_name",search_exp:"like",date_field:"create_time"},exps:[{exp:"like",name:"包含"}],data:[],count:"",dialog:!1,dialogTitle:"",model:{category_id:"",category_unique:"",category_pid:0,category_name:"",image_id:0,image_url:"",title:"",keywords:"",description:"",remark:"",sort:250,images:[]},rules:{category_name:[{required:!0,message:"请输入分类名称",trigger:"blur"}]},trees:[],props:{checkStrictly:!0,value:"category_id",label:"category_name",emitPath:!1},isExpandAll:!1,selection:[],selectIds:"",selectTitle:"操作",selectDialog:!1,selectType:"",category_pid:"",is_disable:0,contentPk:"content_id",contentName:"内容",contentDialog:!1,contentDialogTitle:"",contentLoad:!1,contentData:[],contentCount:0,contentQuery:{page:1,limit:L(),search_field:"name",search_exp:"like",search_value:""},contentSelection:[],contentSelectIds:"",contentSelectTitle:"操作",contentSelectDialog:!1,contentSelectType:""}),created(){this.height=P(290),this.list()},methods:{list(){var t;this.loading=!0,(t=this.query,e({url:N+"list",method:"get",params:t})).then((e=>{this.data=e.data.list,this.trees=e.data.tree,this.exps=e.data.exps,this.count=e.data.count,this.isExpandAll=!1,this.loading=!1})).catch((()=>{this.loading=!1}))},add(e){this.dialog=!0,this.dialogTitle=this.name+"添加",this.reset(),e&&(this.model.category_pid=e[this.idkey])},edit(t){this.dialog=!0,this.dialogTitle=this.name+"修改："+t[this.idkey];var l,a={};a[this.idkey]=t[this.idkey],(l=a,e({url:N+"info",method:"get",params:l})).then((e=>{this.reset(e.data)})).catch((()=>{}))},cancel(){this.dialog=!1,this.reset()},submit(){this.$refs.ref.validate((l=>{var a;l&&(this.loading=!0,this.model[this.idkey]?(a=this.model,e({url:N+"edit",method:"post",data:a})).then((e=>{this.list(),this.dialog=!1,t.success(e.msg)})).catch((()=>{this.loading=!1})):function(t){return e({url:N+"add",method:"post",data:t})}(this.model).then((e=>{this.list(),this.dialog=!1,t.success(e.msg)})).catch((()=>{this.loading=!1})))}))},reset(e){if(this.model=e||this.$options.data().model,void 0!==this.$refs.ref)try{this.$refs.ref.resetFields(),this.$refs.ref.clearValidate()}catch(t){}},search(){this.list()},refresh(){const e=this.query.limit;this.query=this.$options.data().query,this.$refs.table.clearSort(),this.query.limit=e,this.list()},expandAll(e){this.expandFor(this.data,!e)},expandFor(e,t){e.forEach((e=>{this.$refs.table.toggleRowExpansion(e,t),e.children&&this.expandFor(e.children,t)}))},select(e){this.selection=e,this.selectIds=this.selectGetIds(e).toString()},selectGetIds(e){return F(e,this.idkey)},selectAlert(){l.alert("请选择需要操作的"+this.name,"提示",{type:"warning",callback:()=>{}})},selectOpen(e,t=""){if(t){this.$refs.table.clearSelection();const e=t.length;for(let l=0;l<e;l++)this.$refs.table.toggleRowSelection(t[l],!0)}this.selection.length?(this.selectTitle="操作","removec"===e?this.selectTitle=this.name+"解除内容":"editpid"===e?this.selectTitle=this.name+"修改上级":"disable"===e?this.selectTitle=this.name+"是否禁用":"dele"===e&&(this.selectTitle=this.name+"删除"),this.selectDialog=!0,this.selectType=e):this.selectAlert()},selectCancel(){this.selectDialog=!1},selectSubmit(){if(this.selection.length){const e=this.selectType;"removec"===e?this.removec(this.selection):"editpid"===e?this.editpid(this.selection):"disable"===e?this.disable(this.selection,!0):"dele"===e&&this.dele(this.selection),this.selectDialog=!1}else this.selectAlert()},removec(e){e.length?(this.loading=!0,Y({category_id:this.selectGetIds(e),content_ids:[]}).then((e=>{this.list(),t.success(e.msg)})).catch((()=>{this.loading=!1}))):this.selectAlert()},editpid(l){var a;(a={ids:this.selectGetIds(l),category_pid:this.category_pid},e({url:N+"editpid",method:"post",data:a})).then((e=>{this.list(),this.selectDialog=!1,t.success(e.msg)})).catch((()=>{this.loading=!1}))},disable(l,a=!1){if(0===l.length)this.selectAlert();else{this.loading=!0;var o=l[0].is_disable;a&&(o=this.is_disable),(i={ids:this.selectGetIds(l),is_disable:o},e({url:N+"disable",method:"post",data:i})).then((e=>{this.list(),t.success(e.msg)})).catch((()=>{this.list()}))}var i},dele(l){var a;l.length?(a={ids:this.selectGetIds(l)},e({url:N+"dele",method:"post",data:a})).then((e=>{this.list(),t.success(e.msg)})).catch((()=>{this.loading=!1})):this.selectAlert()},contentShow(e){this.contentDialog=!0,this.contentDialogTitle=this.name+"内容："+e.category_name,this.contentQuery.category_id=e.category_id,this.contentQuery.search_value="",this.content()},content(){var t;this.contentLoad=!0,(t=this.contentQuery,e({url:N+"content",method:"get",params:t})).then((e=>{this.contentData=e.data.list,this.contentCount=e.data.count,this.contentLoad=!1})).catch((()=>{this.contentLoad=!1}))},contentSort(e){this.contentQuery.sort_field=e.prop,this.contentQuery.sort_value="","ascending"===e.order&&(this.contentQuery.sort_value="asc",this.content()),"descending"===e.order&&(this.contentQuery.sort_value="desc",this.content())},contentSelect(e){this.contentSelection=e,this.contentSelectIds=this.contentSelectGetIds(e).toString()},contentSelectGetIds(e){return F(e,this.contentPk)},contentSelectAlert(){l.alert("请选择需要操作的"+this.contentName,"提示",{type:"warning",callback:()=>{}})},contentSelectOpen(e,t=""){t&&(this.$refs.contentRef.clearSelection(),this.$refs.contentRef.toggleRowSelection(t)),this.contentSelection.length?(this.contentSelectTitle="操作","contentRemove"===e&&(this.contentSelectTitle=this.name+"解除"+this.contentName),this.contentSelectDialog=!0,this.contentSelectType=e):this.contentSelectAlert()},contentSelectCancel(){this.contentSelectDialog=!1},contentSelectSubmit(){if(this.contentSelection.length){"contentRemove"===this.contentSelectType&&this.contentRemove(this.contentSelection),this.contentSelectDialog=!1}else this.contentSelectAlert()},contentRemove(e){e.length?(this.contentLoad=!0,Y({category_id:this.contentQuery.category_id,content_ids:this.contentSelectGetIds(e)}).then((e=>{this.content(),t.success(e.msg)})).catch((()=>{this.contentLoad=!1}))):this.contentSelectAlert()}}},[["render",function(e,t,l,P,F,L){const z=D,N=q,Y=O,J=g,K=G,W=f,X=$,Z=R,ee=Q,te=U,le=I,ae=A,oe=E,ie=T,se=S,ne=x,de=j,re=C,ce=k,ue=w,me=v,pe=V,he=b,_e=y;return a(),o("div",H,[i(ee,null,{default:s((()=>[i(Z,{class:"mb-2"},{default:s((()=>[i(N,{modelValue:F.query.search_field,"onUpdate:modelValue":t[0]||(t[0]=e=>F.query.search_field=e),class:"ya-search-field",placeholder:"查询字段"},{default:s((()=>[i(z,{value:F.idkey,label:"ID"},null,8,["value"]),i(z,{value:"category_unique",label:"标识"}),i(z,{value:"category_name",label:"名称"}),i(z,{value:"category_pid",label:"上级"}),i(z,{value:"is_disable",label:"禁用"}),i(z,{value:"title",label:"标题"}),i(z,{value:"keywords",label:"关键词"}),i(z,{value:"description",label:"描述"}),i(z,{value:"remark",label:"备注"})])),_:1},8,["modelValue"]),i(N,{modelValue:F.query.search_exp,"onUpdate:modelValue":t[1]||(t[1]=e=>F.query.search_exp=e),class:"ya-search-exp"},{default:s((()=>[(a(!0),o(n,null,d(F.exps,(e=>(a(),r(z,{key:e.exp,value:e.exp,label:e.name},null,8,["value","label"])))),128))])),_:1},8,["modelValue"]),"category_pid"===F.query.search_field?(a(),r(Y,{key:0,modelValue:F.query.search_value,"onUpdate:modelValue":t[2]||(t[2]=e=>F.query.search_value=e),options:F.trees,props:F.props,class:"ya-search-value",clearable:"",filterable:""},null,8,["modelValue","options","props"])):"is_disable"===F.query.search_field?(a(),r(N,{key:1,modelValue:F.query.search_value,"onUpdate:modelValue":t[3]||(t[3]=e=>F.query.search_value=e),class:"ya-search-value"},{default:s((()=>[i(z,{value:1,label:"是"}),i(z,{value:0,label:"否"})])),_:1},8,["modelValue"])):(a(),r(J,{key:2,modelValue:F.query.search_value,"onUpdate:modelValue":t[4]||(t[4]=e=>F.query.search_value=e),class:"ya-search-value",placeholder:"查询内容",clearable:""},null,8,["modelValue"])),i(N,{modelValue:F.query.date_field,"onUpdate:modelValue":t[5]||(t[5]=e=>F.query.date_field=e),class:"ya-date-field",placeholder:"时间类型"},{default:s((()=>[i(z,{value:"create_time",label:"添加时间"}),i(z,{value:"update_time",label:"修改时间"})])),_:1},8,["modelValue"]),i(K,{modelValue:F.query.date_value,"onUpdate:modelValue":t[6]||(t[6]=e=>F.query.date_value=e),type:"datetimerange",class:"ya-date-value","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"YYYY-MM-DD HH:mm:ss","default-time":[new Date(2024,1,1,0,0,0),new Date(2024,1,1,23,59,59)]},null,8,["modelValue","default-time"]),i(W,{type:"primary",onClick:t[7]||(t[7]=e=>L.search())},{default:s((()=>[c("查询")])),_:1}),i(W,{title:"重置",onClick:t[8]||(t[8]=e=>L.refresh())},{default:s((()=>[i(X,{"icon-class":"refresh"})])),_:1}),i(W,{type:"primary",onClick:t[9]||(t[9]=e=>L.add())},{default:s((()=>[c("添加")])),_:1})])),_:1})])),_:1}),i(ee,null,{default:s((()=>[i(Z,null,{default:s((()=>[i(te,{border:"",modelValue:F.isExpandAll,"onUpdate:modelValue":t[10]||(t[10]=e=>F.isExpandAll=e),class:"!mr-[10px] top-[3px]",title:"收起/展开",onChange:L.expandAll},{default:s((()=>[c(" 收起 ")])),_:1},8,["modelValue","onChange"]),i(W,{title:"删除",onClick:t[11]||(t[11]=e=>L.selectOpen("dele"))},{default:s((()=>[c("删除")])),_:1}),i(W,{title:"是否禁用",onClick:t[12]||(t[12]=e=>L.selectOpen("disable"))},{default:s((()=>[c("禁用")])),_:1}),i(W,{title:"修改上级",onClick:t[13]||(t[13]=e=>L.selectOpen("editpid"))},{default:s((()=>[c("上级")])),_:1}),i(W,{title:"解除内容",onClick:t[14]||(t[14]=e=>L.selectOpen("removec"))},{default:s((()=>[c("解除内容")])),_:1})])),_:1})])),_:1}),i(ie,{modelValue:F.selectDialog,"onUpdate:modelValue":t[18]||(t[18]=e=>F.selectDialog=e),title:F.selectTitle,"close-on-click-modal":!1,"close-on-press-escape":!1,top:"20vh"},{footer:s((()=>[i(W,{loading:F.loading,onClick:L.selectCancel},{default:s((()=>[c("取消")])),_:1},8,["loading","onClick"]),i(W,{loading:F.loading,type:"primary",onClick:L.selectSubmit},{default:s((()=>[c("提交")])),_:1},8,["loading","onClick"])])),default:s((()=>[i(oe,{ref:"selectRef","label-width":"120px"},{default:s((()=>["removec"===F.selectType?(a(),r(le,{key:0},{default:s((()=>[u("span",M,"确定要解除选中的"+m(F.name)+"的内容吗？",1)])),_:1})):"editpid"===F.selectType?(a(),r(le,{key:1,label:"上级"},{default:s((()=>[i(Y,{modelValue:F.category_pid,"onUpdate:modelValue":t[15]||(t[15]=e=>F.category_pid=e),options:F.trees,props:F.props,class:"w-full",placeholder:"一级分类",clearable:"",filterable:""},null,8,["modelValue","options","props"])])),_:1})):p("",!0),"disable"===F.selectType?(a(),r(le,{key:2,label:"是否禁用"},{default:s((()=>[i(ae,{modelValue:F.is_disable,"onUpdate:modelValue":t[16]||(t[16]=e=>F.is_disable=e),"active-value":1,"inactive-value":0},null,8,["modelValue"])])),_:1})):"dele"===F.selectType?(a(),r(le,{key:3},{default:s((()=>[u("span",B,"确定要删除选中的"+m(F.name)+"吗？",1)])),_:1})):p("",!0),i(le,{label:F.name+"ID"},{default:s((()=>[i(J,{modelValue:F.selectIds,"onUpdate:modelValue":t[17]||(t[17]=e=>F.selectIds=e),type:"textarea",autosize:"",disabled:""},null,8,["modelValue"])])),_:1},8,["label"])])),_:1},512)])),_:1},8,["modelValue","title"]),h((a(),r(re,{ref:"table",data:F.data,height:F.height,"row-key":F.idkey,"default-expand-all":"",onSelectionChange:L.select},{default:s((()=>[i(se,{type:"selection",width:"42",title:"全选/反选"}),i(se,{prop:"category_name",label:"名称","min-width":"250","show-overflow-tooltip":""}),i(se,{prop:"image_url",label:"图片","min-width":"62"},{default:s((e=>[i(ne,{"file-url":e.row.image_url,lazy:""},null,8,["file-url"])])),_:1}),i(se,{prop:"category_unique",label:"标识","min-width":"100","show-overflow-tooltip":""}),i(se,{prop:F.idkey,label:"ID","min-width":"80"},null,8,["prop"]),i(se,{prop:"is_disable",label:"禁用","min-width":"85"},{default:s((e=>[i(ae,{modelValue:e.row.is_disable,"onUpdate:modelValue":t=>e.row.is_disable=t,"active-value":1,"inactive-value":0,onChange:t=>L.disable([e.row])},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:1}),i(se,{prop:"sort",label:"排序","min-width":"85"}),i(se,{prop:"create_time",label:"添加时间",width:"165"}),i(se,{prop:"update_time",label:"修改时间",width:"165"}),i(se,{label:"操作",width:"170"},{default:s((e=>[i(de,{type:"primary",class:"mr-1",underline:!1,onClick:t=>L.contentShow(e.row)},{default:s((()=>[c(" 内容 ")])),_:2},1032,["onClick"]),i(de,{type:"primary",class:"mr-1",underline:!1,title:"添加下级",onClick:t=>L.add(e.row)},{default:s((()=>[c(" 添加 ")])),_:2},1032,["onClick"]),i(de,{type:"primary",class:"mr-1",underline:!1,onClick:t=>L.edit(e.row)},{default:s((()=>[c(" 修改 ")])),_:2},1032,["onClick"]),i(de,{type:"primary",underline:!1,onClick:t=>L.selectOpen("dele",[e.row])},{default:s((()=>[c(" 删除 ")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data","height","row-key","onSelectionChange"])),[[_e,F.loading]]),i(ee,null,{default:s((()=>[i(ue,{title:"",column:12,colon:!1},{default:s((()=>[i(ce,null,{default:s((()=>[c("共 "+m(F.count)+" 条",1)])),_:1})])),_:1})])),_:1}),i(ie,{modelValue:F.dialog,"onUpdate:modelValue":t[32]||(t[32]=e=>F.dialog=e),title:F.dialogTitle,"close-on-click-modal":!1,"close-on-press-escape":!1,"before-close":L.cancel,top:"5vh","destroy-on-close":""},{footer:s((()=>[i(W,{loading:F.loading,onClick:L.cancel},{default:s((()=>[c("取消")])),_:1},8,["loading","onClick"]),i(W,{loading:F.loading,type:"primary",onClick:L.submit},{default:s((()=>[c("提交")])),_:1},8,["loading","onClick"])])),default:s((()=>[i(pe,{native:"",height:F.height-50},{default:s((()=>[i(oe,{ref:"ref",rules:F.rules,model:F.model,"label-width":"100px"},{default:s((()=>[i(le,{label:"标识",prop:"category_unique"},{default:s((()=>[i(J,{modelValue:F.model.category_unique,"onUpdate:modelValue":t[19]||(t[19]=e=>F.model.category_unique=e),placeholder:"请输入分类标识（唯一）",clearable:""},null,8,["modelValue"])])),_:1}),i(le,{label:"上级",prop:"category_pid"},{default:s((()=>[i(Y,{modelValue:F.model.category_pid,"onUpdate:modelValue":t[20]||(t[20]=e=>F.model.category_pid=e),options:F.trees,props:F.props,class:"w-full",placeholder:"一级分类",clearable:"",filterable:""},null,8,["modelValue","options","props"])])),_:1}),i(le,{label:"名称",prop:"category_name"},{default:s((()=>[i(J,{modelValue:F.model.category_name,"onUpdate:modelValue":t[21]||(t[21]=e=>F.model.category_name=e),placeholder:"请输入分类名称",clearable:""},null,8,["modelValue"])])),_:1}),i(le,{label:"图片",prop:"image_id"},{default:s((()=>[i(ne,{modelValue:F.model.image_id,"onUpdate:modelValue":t[22]||(t[22]=e=>F.model.image_id=e),"file-url":F.model.image_url,height:100,upload:""},null,8,["modelValue","file-url"])])),_:1}),i(le,{label:"标题",prop:"title"},{default:s((()=>[i(J,{modelValue:F.model.title,"onUpdate:modelValue":t[23]||(t[23]=e=>F.model.title=e),placeholder:"title",clearable:""},null,8,["modelValue"])])),_:1}),i(le,{label:"关键词",prop:"keywords"},{default:s((()=>[i(J,{modelValue:F.model.keywords,"onUpdate:modelValue":t[24]||(t[24]=e=>F.model.keywords=e),placeholder:"keywords",clearable:""},null,8,["modelValue"])])),_:1}),i(le,{label:"描述",prop:"description"},{default:s((()=>[i(J,{modelValue:F.model.description,"onUpdate:modelValue":t[25]||(t[25]=e=>F.model.description=e),type:"textarea",autosize:"",placeholder:"description"},null,8,["modelValue"])])),_:1}),i(le,{label:"备注",prop:"remark"},{default:s((()=>[i(J,{modelValue:F.model.remark,"onUpdate:modelValue":t[26]||(t[26]=e=>F.model.remark=e),placeholder:"remark",clearable:""},null,8,["modelValue"])])),_:1}),i(le,{label:"排序",prop:"sort"},{default:s((()=>[i(J,{modelValue:F.model.sort,"onUpdate:modelValue":t[27]||(t[27]=e=>F.model.sort=e),placeholder:"250",clearable:""},null,8,["modelValue"])])),_:1}),i(le,{label:"图片列表",prop:"images"},{default:s((()=>[i(me,{modelValue:F.model.images,"onUpdate:modelValue":t[28]||(t[28]=e=>F.model.images=e),"upload-btn":"上传图片","file-type":"image","file-tip":"图片文件"},null,8,["modelValue"])])),_:1}),F.model[F.idkey]?(a(),r(le,{key:0,label:"添加时间",prop:"create_time"},{default:s((()=>[i(J,{modelValue:F.model.create_time,"onUpdate:modelValue":t[29]||(t[29]=e=>F.model.create_time=e),disabled:""},null,8,["modelValue"])])),_:1})):p("",!0),F.model[F.idkey]?(a(),r(le,{key:1,label:"修改时间",prop:"update_time"},{default:s((()=>[i(J,{modelValue:F.model.update_time,"onUpdate:modelValue":t[30]||(t[30]=e=>F.model.update_time=e),disabled:""},null,8,["modelValue"])])),_:1})):p("",!0),F.model.delete_time?(a(),r(le,{key:2,label:"删除时间",prop:"delete_time"},{default:s((()=>[i(J,{modelValue:F.model.delete_time,"onUpdate:modelValue":t[31]||(t[31]=e=>F.model.delete_time=e),disabled:""},null,8,["modelValue"])])),_:1})):p("",!0)])),_:1},8,["rules","model"])])),_:1},8,["height"])])),_:1},8,["modelValue","title","before-close"]),i(ie,{modelValue:F.contentDialog,"onUpdate:modelValue":t[39]||(t[39]=e=>F.contentDialog=e),title:F.contentDialogTitle,"close-on-click-modal":!1,"close-on-press-escape":!1,top:"5vh",width:"70%"},{default:s((()=>[i(ee,null,{default:s((()=>[i(Z,null,{default:s((()=>[i(W,{type:"primary",title:"解除",onClick:t[33]||(t[33]=e=>L.contentSelectOpen("contentRemove"))},{default:s((()=>[c(" 解除 ")])),_:1}),i(J,{modelValue:F.contentQuery.search_value,"onUpdate:modelValue":t[34]||(t[34]=e=>F.contentQuery.search_value=e),class:"ya-search-value",placeholder:"名称",clearable:""},null,8,["modelValue"]),i(W,{type:"primary",onClick:t[35]||(t[35]=e=>L.content())},{default:s((()=>[c("查询")])),_:1})])),_:1})])),_:1}),h((a(),r(re,{ref:"contentRef",data:F.contentData,height:F.height-60,onSortChange:L.contentSort,onSelectionChange:L.contentSelect},{default:s((()=>[i(se,{type:"selection",width:"42",title:"全选/反选"}),i(se,{prop:F.contentPk,label:"内容ID","min-width":"100",sortable:"custom"},null,8,["prop"]),i(se,{prop:"image_url",label:"图片","min-width":"62"},{default:s((e=>[i(ne,{"file-url":e.row.image_url,lazy:""},null,8,["file-url"])])),_:1}),i(se,{prop:"name",label:"名称","min-width":"230","show-overflow-tooltip":""}),i(se,{prop:"unique",label:"标识","min-width":"80","show-overflow-tooltip":""}),i(se,{prop:"category_names",label:"分类","min-width":"120","show-overflow-tooltip":""}),i(se,{prop:"tag_names",label:"标签","min-width":"120","show-overflow-tooltip":""}),i(se,{prop:"is_top",label:"置顶","min-width":"85",sortable:"custom"},{default:s((e=>[i(ae,{modelValue:e.row.is_top,"onUpdate:modelValue":t=>e.row.is_top=t,"active-value":1,"inactive-value":0,disabled:""},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),i(se,{prop:"is_hot",label:"热门","min-width":"85",sortable:"custom"},{default:s((e=>[i(ae,{modelValue:e.row.is_hot,"onUpdate:modelValue":t=>e.row.is_hot=t,"active-value":1,"inactive-value":0,disabled:""},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),i(se,{prop:"is_rec",label:"推荐","min-width":"85",sortable:"custom"},{default:s((e=>[i(ae,{modelValue:e.row.is_rec,"onUpdate:modelValue":t=>e.row.is_rec=t,"active-value":1,"inactive-value":0,disabled:""},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),i(se,{prop:"is_disable",label:"禁用","min-width":"85",sortable:"custom"},{default:s((e=>[i(ae,{modelValue:e.row.is_disable,"onUpdate:modelValue":t=>e.row.is_disable=t,"active-value":1,"inactive-value":0,disabled:""},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),i(se,{label:"操作",width:"70"},{default:s((e=>[i(de,{type:"primary",underline:!1,onClick:t=>L.contentSelectOpen("contentRemove",e.row)},{default:s((()=>[c(" 解除 ")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data","height","onSortChange","onSelectionChange"])),[[_e,F.contentLoad]]),h(i(he,{total:F.contentCount,"onUpdate:total":t[36]||(t[36]=e=>F.contentCount=e),page:F.contentQuery.page,"onUpdate:page":t[37]||(t[37]=e=>F.contentQuery.page=e),limit:F.contentQuery.limit,"onUpdate:limit":t[38]||(t[38]=e=>F.contentQuery.limit=e),onPagination:L.content},null,8,["total","page","limit","onPagination"]),[[_,F.contentCount>0]])])),_:1},8,["modelValue","title"]),i(ie,{modelValue:F.contentSelectDialog,"onUpdate:modelValue":t[41]||(t[41]=e=>F.contentSelectDialog=e),title:F.contentSelectTitle,"close-on-click-modal":!1,"close-on-press-escape":!1,top:"20vh"},{footer:s((()=>[i(W,{onClick:L.contentSelectCancel},{default:s((()=>[c("取消")])),_:1},8,["onClick"]),i(W,{type:"primary",onClick:L.contentSelectSubmit},{default:s((()=>[c("提交")])),_:1},8,["onClick"])])),default:s((()=>[i(oe,{ref:"contentSelectRef","label-width":"120px"},{default:s((()=>["contentRemove"===F.contentSelectType?(a(),r(le,{key:0,label:"分类ID"},{default:s((()=>[u("span",null,m(F.contentQuery[F.idkey]),1)])),_:1})):p("",!0),i(le,{label:F.contentName+"ID"},{default:s((()=>[i(J,{modelValue:F.contentSelectIds,"onUpdate:modelValue":t[40]||(t[40]=e=>F.contentSelectIds=e),type:"textarea",autosize:"",disabled:""},null,8,["modelValue"])])),_:1},8,["label"])])),_:1},512)])),_:1},8,["modelValue","title"])])}]]);export{J as default};