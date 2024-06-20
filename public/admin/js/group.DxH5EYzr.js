import{ac as e,ad as l,c as t,e as i,a3 as a,w as o,Q as s,ag as d,l as r,a2 as u,k as n,t as c,ab as m,O as h,P as p,az as f,at as _}from"./index.BRpw1nKc.js";import{v as g}from"./el-loading.BV6rMv2f.js";import{_ as y}from"./FilePreview.DjJYlL3Z.js";import{E as b}from"./el-scrollbar.CSr5ETPp.js";import{_ as v}from"./index.B8TJitXy.js";import{E as V,a as k}from"./el-table-column.CutgeWLk.js";import"./el-checkbox.EDgu4e6h.js";import"./el-tooltip.l0sNRNKZ.js";import"./el-popper.D4W13mvh.js";import{E as w}from"./el-link.DPD7VmMd.js";import{a as S,E as C}from"./el-select.5v61zF81.js";import{E as j}from"./el-dialog._ZabjypL.js";import{a as U,E as D}from"./el-form-item.BMwGbftj.js";import{E as q}from"./el-switch.DGE1lg0h.js";import{E as x}from"./el-row.q_U4h3Z4.js";import{E as T}from"./el-col.CaebfPGa.js";import{_ as I}from"./index.CwjPZbsy.js";import{E as Q}from"./el-date-picker.CSS3cjq0.js";import{s as R}from"./screen-height.COx2xJHy.js";import{a as A}from"./index.Cp1HnnF1.js";import{g as $}from"./settings.HJzUBU6Z.js";import{l as E,i as G,e as P,a as O,f as L,d as z,b as F,c as Y}from"./group.D6uVsq_i.js";import{_ as N}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./el-image-viewer.BB7HyzD-.js";import"./debounce.CixRjyEa.js";import"./clipboard.DxwZ1MhR.js";import"./_Uint8Array.CFsNisPO.js";import"./index.HiC8GQQr.js";import"./isUndefined.DgmxjSXK.js";import"./castArray.CIpvmybx.js";import"./refs.BDPfTQKo.js";import"./tagsView.BGKYC20W.js";const H={class:"app-container"},M={style:{}},B={class:"c-red"};const J=N({name:"FileGroup",components:{Pagination:v},data:()=>({name:"文件分组",height:680,loading:!1,idkey:"group_id",exps:[{exp:"like",name:"包含"}],query:{page:1,limit:$(),search_field:"group_name",search_exp:"like",date_field:"create_time"},data:[],count:0,dialog:!1,dialogTitle:"",model:{group_id:"",group_name:"",group_desc:"",remark:"",sort:250},rules:{group_name:[{required:!0,message:"请输入名称",trigger:"blur"}]},selection:[],selectIds:"",selectTitle:"操作",selectDialog:!1,selectType:"",is_disable:0,filePk:"file_id",fileName:"文件",fileDialog:!1,fileDialogTitle:"",fileLoad:!1,fileData:[],fileCount:0,fileQuery:{page:1,limit:$(),search_field:"file_name",search_exp:"like",search_value:""},fileSelection:[],fileSelectIds:"",fileSelectTitle:"操作",fileSelectDialog:!1,fileSelectType:""}),created(){this.height=R(),this.list()},methods:{list(){this.loading=!0,E(this.query).then((e=>{this.data=e.data.list,this.count=e.data.count,this.exps=e.data.exps,this.loading=!1})).catch((()=>{this.loading=!1}))},add(){this.dialog=!0,this.dialogTitle=this.name+"添加",this.reset()},edit(e){this.dialog=!0,this.dialogTitle=this.name+"修改："+e[this.idkey];var l={};l[this.idkey]=e[this.idkey],G(l).then((e=>{this.reset(e.data)})).catch((()=>{}))},cancel(){this.dialog=!1,this.reset()},submit(){this.$refs.ref.validate((l=>{l&&(this.loading=!0,this.model[this.idkey]?P(this.model).then((l=>{this.list(),this.dialog=!1,e.success(l.msg)})).catch((()=>{this.loading=!1})):O(this.model).then((l=>{this.list(),this.dialog=!1,e.success(l.msg)})).catch((()=>{this.loading=!1})))}))},reset(e){if(this.model=e||this.$options.data().model,void 0!==this.$refs.ref)try{this.$refs.ref.resetFields(),this.$refs.ref.clearValidate()}catch(l){}},search(){this.query.page=1,this.list()},refresh(){const e=this.query.limit;this.query=this.$options.data().query,this.$refs.table.clearSort(),this.query.limit=e,this.list()},sort(e){this.query.sort_field=e.prop,this.query.sort_value="","ascending"===e.order&&(this.query.sort_value="asc",this.list()),"descending"===e.order&&(this.query.sort_value="desc",this.list())},select(e){this.selection=e,this.selectIds=this.selectGetIds(e).toString()},selectGetIds(e){return A(e,this.idkey)},selectAlert(){l.alert("请选择需要操作的"+this.name,"提示",{type:"warning",callback:()=>{}})},selectOpen(e,l=""){if(l){this.$refs.table.clearSelection();const e=l.length;for(let t=0;t<e;t++)this.$refs.table.toggleRowSelection(l[t],!0)}this.selection.length?(this.selectTitle="操作","removef"===e?this.selectTitle=this.name+"解除文件":"disable"===e?this.selectTitle=this.name+"禁用":"dele"===e&&(this.selectTitle=this.name+"删除"),this.selectDialog=!0,this.selectType=e):this.selectAlert()},selectCancel(){this.selectDialog=!1},selectSubmit(){if(this.selection.length){const e=this.selectType;"removef"===e?this.removef(this.selection):"disable"===e?this.disable(this.selection,!0):"dele"===e&&this.dele(this.selection,!0),this.selectDialog=!1}else this.selectAlert()},removef(l){l.length?(this.loading=!0,L({group_id:this.selectGetIds(l),file_ids:[]}).then((l=>{this.list(),e.success(l.msg)})).catch((()=>{this.loading=!1}))):this.selectAlert()},disable(l,t=!1){if(l.length){this.loading=!0;var i=l[0].is_disable;t&&(i=this.is_disable),z({ids:this.selectGetIds(l),is_disable:i}).then((l=>{this.list(),e.success(l.msg)})).catch((()=>{this.list()}))}else this.selectAlert()},dele(l){l.length?(this.loading=!0,F({ids:this.selectGetIds(l)}).then((l=>{this.list(),e.success(l.msg)})).catch((()=>{this.loading=!1}))):this.selectAlert()},fileShow(e){this.fileDialog=!0,this.fileDialogTitle=this.name+"文件："+e.group_name,this.fileQuery.group_id=e.group_id,this.fileQuery.search_value="",this.file()},file(){this.fileLoad=!0,Y(this.fileQuery).then((e=>{this.fileData=e.data.list,this.fileCount=e.data.count,this.fileLoad=!1})).catch((()=>{this.fileLoad=!1}))},fileSort(e){this.fileQuery.sort_field=e.prop,this.fileQuery.sort_value="","ascending"===e.order&&(this.fileQuery.sort_value="asc",this.file()),"descending"===e.order&&(this.fileQuery.sort_value="desc",this.file())},fileSelect(e){this.fileSelection=e,this.fileSelectIds=this.fileSelectGetIds(e).toString()},fileSelectGetIds(e){return A(e,this.filePk)},fileSelectAlert(){l.alert("请选择需要操作的"+this.fileName,"提示",{type:"warning",callback:()=>{}})},fileSelectOpen(e,l=""){l&&(this.$refs.fileRef.clearSelection(),this.$refs.fileRef.toggleRowSelection(l)),this.fileSelection.length?(this.fileSelectTitle="操作","fileRemove"===e&&(this.fileSelectTitle="解除分组"),this.fileSelectDialog=!0,this.fileSelectType=e):this.fileSelectAlert()},fileSelectCancel(){this.fileSelectDialog=!1},fileSelectSubmit(){if(this.fileSelection.length){"fileRemove"===this.fileSelectType&&this.fileRemove(this.fileSelection),this.fileSelectDialog=!1}else this.fileSelectAlert()},fileRemove(l){l.length?(this.fileLoad=!0,L({group_id:this.fileQuery.group_id,file_ids:this.fileSelectGetIds(l)}).then((l=>{this.file(),e.success(l.msg)})).catch((()=>{this.fileLoad=!1}))):this.fileSelectAlert()}}},[["render",function(e,l,R,A,$,E){const G=S,P=C,O=f,L=Q,z=_,F=I,Y=T,N=x,J=U,K=q,W=D,X=j,Z=V,ee=w,le=k,te=v,ie=b,ae=y,oe=g;return t(),i("div",H,[a(N,null,{default:o((()=>[a(Y,{class:"mb-2"},{default:o((()=>[a(P,{modelValue:$.query.search_field,"onUpdate:modelValue":l[0]||(l[0]=e=>$.query.search_field=e),class:"ya-search-field",placeholder:"查询字段"},{default:o((()=>[a(G,{value:$.idkey,label:"ID"},null,8,["value"]),a(G,{value:"group_name",label:"名称"}),a(G,{value:"group_desc",label:"描述"}),a(G,{value:"remark",label:"备注"}),a(G,{value:"is_disable",label:"禁用"})])),_:1},8,["modelValue"]),a(P,{modelValue:$.query.search_exp,"onUpdate:modelValue":l[1]||(l[1]=e=>$.query.search_exp=e),class:"ya-search-exp"},{default:o((()=>[(t(!0),i(s,null,d($.exps,(e=>(t(),r(G,{key:e.exp,value:e.exp,label:e.name},null,8,["value","label"])))),128))])),_:1},8,["modelValue"]),"is_disable"===$.query.search_field?(t(),r(P,{key:0,modelValue:$.query.search_value,"onUpdate:modelValue":l[2]||(l[2]=e=>$.query.search_value=e),class:"ya-search-value"},{default:o((()=>[a(G,{value:1,label:"是"}),a(G,{value:0,label:"否"})])),_:1},8,["modelValue"])):(t(),r(O,{key:1,modelValue:$.query.search_value,"onUpdate:modelValue":l[3]||(l[3]=e=>$.query.search_value=e),class:"ya-search-value",placeholder:"搜索文件",clearable:""},null,8,["modelValue"])),a(P,{modelValue:$.query.date_field,"onUpdate:modelValue":l[4]||(l[4]=e=>$.query.date_field=e),class:"ya-date-field",placeholder:"时间类型"},{default:o((()=>[a(G,{value:"create_time",label:"添加时间"}),a(G,{value:"update_time",label:"修改时间"})])),_:1},8,["modelValue"]),a(L,{modelValue:$.query.date_value,"onUpdate:modelValue":l[5]||(l[5]=e=>$.query.date_value=e),type:"datetimerange",class:"ya-date-value","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"YYYY-MM-DD HH:mm:ss","default-time":[new Date(2024,1,1,0,0,0),new Date(2024,1,1,23,59,59)]},null,8,["modelValue","default-time"]),a(z,{type:"primary",onClick:l[6]||(l[6]=e=>E.search())},{default:o((()=>[u("查询")])),_:1}),a(z,{title:"重置",onClick:l[7]||(l[7]=e=>E.refresh())},{default:o((()=>[a(F,{"icon-class":"refresh"})])),_:1}),a(z,{type:"primary",onClick:l[8]||(l[8]=e=>E.add())},{default:o((()=>[u("添加")])),_:1})])),_:1})])),_:1}),a(N,null,{default:o((()=>[a(Y,null,{default:o((()=>[a(z,{title:"删除",onClick:l[9]||(l[9]=e=>E.selectOpen("dele"))},{default:o((()=>[u("删除")])),_:1}),a(z,{title:"是否禁用",onClick:l[10]||(l[10]=e=>E.selectOpen("disable"))},{default:o((()=>[u("禁用")])),_:1}),a(z,{title:"解除文件",onClick:l[11]||(l[11]=e=>E.selectOpen("removef"))},{default:o((()=>[u("解除文件")])),_:1})])),_:1})])),_:1}),a(X,{modelValue:$.selectDialog,"onUpdate:modelValue":l[14]||(l[14]=e=>$.selectDialog=e),title:$.selectTitle,"close-on-click-modal":!1,"close-on-press-escape":!1,top:"20vh"},{footer:o((()=>[a(z,{onClick:E.selectCancel},{default:o((()=>[u("取消")])),_:1},8,["onClick"]),a(z,{type:"primary",onClick:E.selectSubmit},{default:o((()=>[u("提交")])),_:1},8,["onClick"])])),default:o((()=>[a(W,{ref:"selectRef","label-width":"120px"},{default:o((()=>["removef"===$.selectType?(t(),r(J,{key:0},{default:o((()=>[n("span",M,"确定要解除选中的"+c($.name)+"的文件吗？",1)])),_:1})):"disable"===$.selectType?(t(),r(J,{key:1,label:"是否禁用"},{default:o((()=>[a(K,{modelValue:$.is_disable,"onUpdate:modelValue":l[12]||(l[12]=e=>$.is_disable=e),"active-value":1,"inactive-value":0},null,8,["modelValue"])])),_:1})):"dele"===$.selectType?(t(),r(J,{key:2},{default:o((()=>[n("span",B,"确定要删除选中的"+c($.name)+"吗？",1)])),_:1})):m("",!0),a(J,{label:$.name+"ID"},{default:o((()=>[a(O,{modelValue:$.selectIds,"onUpdate:modelValue":l[13]||(l[13]=e=>$.selectIds=e),type:"textarea",autosize:"",disabled:""},null,8,["modelValue"])])),_:1},8,["label"])])),_:1},512)])),_:1},8,["modelValue","title"]),h((t(),r(le,{ref:"table",data:$.data,height:$.height,onSortChange:E.sort,onSelectionChange:E.select},{default:o((()=>[a(Z,{type:"selection",width:"42",title:"全选/反选"}),a(Z,{prop:$.idkey,label:"ID",width:"80",sortable:"custom"},null,8,["prop"]),a(Z,{prop:"group_name",label:"名称","min-width":"130","show-overflow-tooltip":""}),a(Z,{prop:"group_desc",label:"描述","min-width":"160","show-overflow-tooltip":""}),a(Z,{prop:"remark",label:"备注","min-width":"150","show-overflow-tooltip":""}),a(Z,{prop:"is_disable",label:"禁用","min-width":"85",sortable:"custom"},{default:o((e=>[a(K,{modelValue:e.row.is_disable,"onUpdate:modelValue":l=>e.row.is_disable=l,"active-value":1,"inactive-value":0,onChange:l=>E.disable([e.row])},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:1}),a(Z,{prop:"sort",label:"排序","min-width":"85",sortable:"custom"}),a(Z,{prop:"create_time",label:"添加时间",width:"165",sortable:"custom"}),a(Z,{prop:"update_time",label:"修改时间",width:"165",sortable:"custom"}),a(Z,{label:"操作",width:"130"},{default:o((e=>[a(ee,{type:"primary",class:"mr-1",underline:!1,onClick:l=>E.fileShow(e.row)},{default:o((()=>[u("文件")])),_:2},1032,["onClick"]),a(ee,{type:"primary",class:"mr-1",underline:!1,onClick:l=>E.edit(e.row)},{default:o((()=>[u("修改")])),_:2},1032,["onClick"]),a(ee,{type:"primary",underline:!1,onClick:l=>E.selectOpen("dele",[e.row])},{default:o((()=>[u("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data","height","onSortChange","onSelectionChange"])),[[oe,$.loading]]),h(a(te,{total:$.count,"onUpdate:total":l[15]||(l[15]=e=>$.count=e),page:$.query.page,"onUpdate:page":l[16]||(l[16]=e=>$.query.page=e),limit:$.query.limit,"onUpdate:limit":l[17]||(l[17]=e=>$.query.limit=e),onPagination:E.list},null,8,["total","page","limit","onPagination"]),[[p,$.count>0]]),a(X,{modelValue:$.dialog,"onUpdate:modelValue":l[25]||(l[25]=e=>$.dialog=e),title:$.dialogTitle,"close-on-click-modal":!1,"close-on-press-escape":!1,"before-close":E.cancel,top:"5vh"},{footer:o((()=>[a(z,{loading:$.loading,onClick:E.cancel},{default:o((()=>[u("取消")])),_:1},8,["loading","onClick"]),a(z,{loading:$.loading,type:"primary",onClick:E.submit},{default:o((()=>[u("提交")])),_:1},8,["loading","onClick"])])),default:o((()=>[a(ie,{native:"",height:$.height-30},{default:o((()=>[a(W,{ref:"ref",rules:$.rules,model:$.model,"label-width":"100px"},{default:o((()=>[a(J,{label:"名称",prop:"group_name"},{default:o((()=>[a(O,{modelValue:$.model.group_name,"onUpdate:modelValue":l[18]||(l[18]=e=>$.model.group_name=e),placeholder:"请输入名称",clearable:""},null,8,["modelValue"])])),_:1}),a(J,{label:"描述",prop:"group_desc"},{default:o((()=>[a(O,{modelValue:$.model.group_desc,"onUpdate:modelValue":l[19]||(l[19]=e=>$.model.group_desc=e),type:"textarea",autosize:"",placeholder:"请输入描述"},null,8,["modelValue"])])),_:1}),a(J,{label:"备注",prop:"remark"},{default:o((()=>[a(O,{modelValue:$.model.remark,"onUpdate:modelValue":l[20]||(l[20]=e=>$.model.remark=e),placeholder:"请输入备注",clearable:""},null,8,["modelValue"])])),_:1}),a(J,{label:"排序",prop:"sort"},{default:o((()=>[a(O,{modelValue:$.model.sort,"onUpdate:modelValue":l[21]||(l[21]=e=>$.model.sort=e),type:"number"},null,8,["modelValue"])])),_:1}),$.model[$.idkey]?(t(),r(J,{key:0,label:"添加时间",prop:"create_time"},{default:o((()=>[a(O,{modelValue:$.model.create_time,"onUpdate:modelValue":l[22]||(l[22]=e=>$.model.create_time=e),disabled:""},null,8,["modelValue"])])),_:1})):m("",!0),$.model[$.idkey]?(t(),r(J,{key:1,label:"修改时间",prop:"update_time"},{default:o((()=>[a(O,{modelValue:$.model.update_time,"onUpdate:modelValue":l[23]||(l[23]=e=>$.model.update_time=e),disabled:""},null,8,["modelValue"])])),_:1})):m("",!0),$.model.delete_time?(t(),r(J,{key:2,label:"删除时间",prop:"delete_time"},{default:o((()=>[a(O,{modelValue:$.model.delete_time,"onUpdate:modelValue":l[24]||(l[24]=e=>$.model.delete_time=e),disabled:""},null,8,["modelValue"])])),_:1})):m("",!0)])),_:1},8,["rules","model"])])),_:1},8,["height"])])),_:1},8,["modelValue","title","before-close"]),a(X,{modelValue:$.fileDialog,"onUpdate:modelValue":l[32]||(l[32]=e=>$.fileDialog=e),title:$.fileDialogTitle,"close-on-click-modal":!1,"close-on-press-escape":!1,top:"5vh",width:"70%"},{default:o((()=>[a(N,null,{default:o((()=>[a(Y,null,{default:o((()=>[a(z,{type:"primary",title:"解除",onClick:l[26]||(l[26]=e=>E.fileSelectOpen("fileRemove"))},{default:o((()=>[u(" 解除 ")])),_:1}),a(O,{modelValue:$.fileQuery.search_value,"onUpdate:modelValue":l[27]||(l[27]=e=>$.fileQuery.search_value=e),class:"ya-search-value",placeholder:"名称",clearable:""},null,8,["modelValue"]),a(z,{type:"primary",onClick:l[28]||(l[28]=e=>E.file())},{default:o((()=>[u("查询")])),_:1})])),_:1})])),_:1}),h((t(),r(le,{ref:"fileRef",data:$.fileData,height:$.height-50,onSortChange:E.fileSort,onSelectionChange:E.fileSelect},{default:o((()=>[a(Z,{type:"selection",width:"42",title:"全选/反选"}),a(Z,{prop:$.filePk,label:"ID",width:"80",sortable:"custom"},null,8,["prop"]),a(Z,{prop:"file_url",label:"文件","min-width":"90"},{default:o((e=>[a(ae,{file:e.row,lazy:""},null,8,["file"])])),_:1}),a(Z,{prop:"file_type_name",label:"类型","min-width":"85",sortable:"custom"}),a(Z,{prop:"file_name",label:"名称","min-width":"120",sortable:"custom","show-overflow-tooltip":""}),a(Z,{prop:"file_ext",label:"后缀","min-width":"85",sortable:"custom"}),a(Z,{prop:"file_size",label:"大小","min-width":"85",sortable:"custom","show-overflow-tooltip":""}),a(Z,{prop:"group_name",label:"分组","min-width":"120","show-overflow-tooltip":""}),a(Z,{prop:"tag_names",label:"标签","min-width":"130","show-overflow-tooltip":""}),a(Z,{prop:"is_disable",label:"禁用","min-width":"85",sortable:"custom"},{default:o((e=>[a(K,{modelValue:e.row.is_disable,"onUpdate:modelValue":l=>e.row.is_disable=l,"active-value":1,"inactive-value":0,disabled:""},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),a(Z,{prop:"sort",label:"排序","min-width":"85",sortable:"custom"}),a(Z,{label:"操作","min-width":"70"},{default:o((e=>[a(ee,{type:"primary",underline:!1,onClick:l=>E.fileSelectOpen("fileRemove",e.row)},{default:o((()=>[u(" 解除 ")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data","height","onSortChange","onSelectionChange"])),[[oe,$.fileLoad]]),h(a(te,{total:$.fileCount,"onUpdate:total":l[29]||(l[29]=e=>$.fileCount=e),page:$.fileQuery.page,"onUpdate:page":l[30]||(l[30]=e=>$.fileQuery.page=e),limit:$.fileQuery.limit,"onUpdate:limit":l[31]||(l[31]=e=>$.fileQuery.limit=e),onPagination:E.file},null,8,["total","page","limit","onPagination"]),[[p,$.fileCount>0]])])),_:1},8,["modelValue","title"]),a(X,{modelValue:$.fileSelectDialog,"onUpdate:modelValue":l[34]||(l[34]=e=>$.fileSelectDialog=e),title:$.fileSelectTitle,"close-on-click-modal":!1,"close-on-press-escape":!1,top:"20vh","append-to-body":""},{footer:o((()=>[a(z,{onClick:E.fileSelectCancel},{default:o((()=>[u("取消")])),_:1},8,["onClick"]),a(z,{type:"primary",onClick:E.fileSelectSubmit},{default:o((()=>[u("提交")])),_:1},8,["onClick"])])),default:o((()=>[a(W,{ref:"fileSelectRef","label-width":"120px"},{default:o((()=>["fileRemove"===$.fileSelectType?(t(),r(J,{key:0,label:"分组ID"},{default:o((()=>[n("span",null,c($.fileQuery[$.idkey]),1)])),_:1})):m("",!0),a(J,{label:$.fileName+"ID"},{default:o((()=>[a(O,{modelValue:$.fileSelectIds,"onUpdate:modelValue":l[33]||(l[33]=e=>$.fileSelectIds=e),type:"textarea",autosize:"",disabled:""},null,8,["modelValue"])])),_:1},8,["label"])])),_:1},512)])),_:1},8,["modelValue","title"])])}]]);export{J as default};
