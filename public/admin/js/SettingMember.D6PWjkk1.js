import{ac as e,c as t,l as i,w as a,a3 as o,a2 as r,at as l}from"./index.BRpw1nKc.js";import{E as s}from"./el-row.q_U4h3Z4.js";import{E as m}from"./el-col.CaebfPGa.js";import{a as d,E as p}from"./el-form-item.BMwGbftj.js";import{_ as n}from"./FileImage.CMtjsSwL.js";import{s as j}from"./screen-height.COx2xJHy.js";import{m as u,h as f}from"./setting.CQWAwSOL.js";import{_ as h}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./castArray.CIpvmybx.js";import"./_Uint8Array.CFsNisPO.js";import"./el-dialog._ZabjypL.js";import"./refs.BDPfTQKo.js";import"./isUndefined.DgmxjSXK.js";import"./el-text.D8Jxf6kI.js";import"./el-avatar.ByAhWF37.js";import"./el-image-viewer.BB7HyzD-.js";import"./debounce.CixRjyEa.js";import"./index.CwjPZbsy.js";import"./index.B5yjKjmX.js";import"./el-loading.BV6rMv2f.js";import"./index.B8TJitXy.js";import"./el-select.5v61zF81.js";import"./el-popper.D4W13mvh.js";import"./el-scrollbar.CSr5ETPp.js";import"./index.HiC8GQQr.js";import"./el-table-column.CutgeWLk.js";import"./el-checkbox.EDgu4e6h.js";import"./el-tooltip.l0sNRNKZ.js";import"./FilePreview.DjJYlL3Z.js";import"./clipboard.DxwZ1MhR.js";/* empty css                          */import"./el-card.BBukHcQ3.js";import"./el-link.DPD7VmMd.js";import"./el-switch.DGE1lg0h.js";/* empty css                       */import"./el-date-picker.CSS3cjq0.js";import"./permission.BG2swUZV.js";import"./index.Cp1HnnF1.js";import"./group.D6uVsq_i.js";import"./tag.DI6CRSc4.js";import"./index.Dg10_69g.js";import"./tagsView.BGKYC20W.js";const g=h({name:"SettingMember",data:()=>({name:"会员设置",height:680,loading:!1,model:{default_avatar_id:0,default_avatar_url:""},rules:{}}),created(){this.height=j(210),this.info()},methods:{info(){u().then((e=>{this.model=e.data}))},refresh(){this.loading=!0,u().then((t=>{this.model=t.data,this.loading=!1,e.success(t.msg)})).catch((()=>{this.loading=!1}))},submit(){this.$refs.ref.validate((t=>{t&&(this.loading=!0,f(this.model).then((t=>{this.loading=!1,e.success(t.msg)})).catch((()=>{this.loading=!1})))}))}}},[["render",function(e,j,u,f,h,g){const c=n,_=d,x=l,v=p,b=m,w=s;return t(),i(w,null,{default:a((()=>[o(b,{span:14},{default:a((()=>[o(v,{ref:"ref",model:h.model,rules:h.rules,"label-width":"120px"},{default:a((()=>[o(_,{label:"默认头像",prop:"default_avatar_id"},{default:a((()=>[o(c,{modelValue:h.model.default_avatar_id,"onUpdate:modelValue":j[0]||(j[0]=e=>h.model.default_avatar_id=e),"file-url":h.model.default_avatar_url,"file-title":"上传头像","file-tip":"图片小于 50 KB，jpg、png格式，128 x 128。",height:100,avatar:"",upload:""},null,8,["modelValue","file-url"])])),_:1}),o(_,null,{default:a((()=>[o(x,{loading:h.loading,onClick:j[1]||(j[1]=e=>g.refresh())},{default:a((()=>[r("刷新")])),_:1},8,["loading"]),o(x,{loading:h.loading,type:"primary",onClick:j[2]||(j[2]=e=>g.submit())},{default:a((()=>[r("提交")])),_:1},8,["loading"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])),_:1})}]]);export{g as default};
