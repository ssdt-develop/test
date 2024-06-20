import{ac as e,c as l,l as a,w as o,a3 as d,e as m,Q as u,ag as t,ab as n,k as _,t as s,a2 as i,az as V,at as p}from"./index.BRpw1nKc.js";import{E as r}from"./el-scrollbar.CSr5ETPp.js";import{E as c}from"./el-row.q_U4h3Z4.js";import{E as f}from"./el-col.CaebfPGa.js";import{a as b,E as h}from"./el-form-item.BMwGbftj.js";import{s as U}from"./screen-height.COx2xJHy.js";import{s as y}from"./setting.DYedjNo8.js";import{_ as g}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./castArray.CIpvmybx.js";import"./_Uint8Array.CFsNisPO.js";import"./tagsView.BGKYC20W.js";const x={key:0},v={key:1},w={key:2};const k=g({name:"SystemSettingServer",data:()=>({name:"服务器信息",height:680,loading:!1,model:{}}),created(){this.height=U(210),this.info()},methods:{info(){y().then((e=>{this.model=e.data}))},refresh(){this.loading=!0,y({force:1}).then((l=>{this.model=l.data,this.loading=!1,e.success(l.msg)})).catch((()=>{this.loading=!1}))}}},[["render",function(e,U,y,g,k,j){const z=V,P=b,S=h,E=f,D=p,q=c,A=r;return l(),a(A,{native:"",height:k.height},{default:o((()=>[d(q,null,{default:o((()=>[d(E,{span:12},{default:o((()=>[d(S,{model:k.model,"label-width":"150px"},{default:o((()=>[d(P,{label:"ThinkPHP"},{default:o((()=>[d(z,{modelValue:k.model.thinkphp,"onUpdate:modelValue":U[0]||(U[0]=e=>k.model.thinkphp=e)},null,8,["modelValue"])])),_:1}),d(P,{label:"OS"},{default:o((()=>[d(z,{modelValue:k.model.system_info,"onUpdate:modelValue":U[1]||(U[1]=e=>k.model.system_info=e)},null,8,["modelValue"])])),_:1}),d(P,{label:"Web"},{default:o((()=>[d(z,{modelValue:k.model.server_software,"onUpdate:modelValue":U[2]||(U[2]=e=>k.model.server_software=e)},null,8,["modelValue"])])),_:1}),d(P,{label:"MySQL"},{default:o((()=>[d(z,{modelValue:k.model.mysql,"onUpdate:modelValue":U[3]||(U[3]=e=>k.model.mysql=e)},null,8,["modelValue"])])),_:1}),d(P,{label:"PHP"},{default:o((()=>[d(z,{modelValue:k.model.php_version,"onUpdate:modelValue":U[4]||(U[4]=e=>k.model.php_version=e)},null,8,["modelValue"])])),_:1}),d(P,{label:"Protocol"},{default:o((()=>[d(z,{modelValue:k.model.server_protocol,"onUpdate:modelValue":U[5]||(U[5]=e=>k.model.server_protocol=e)},null,8,["modelValue"])])),_:1}),d(P,{label:"IP"},{default:o((()=>[d(z,{modelValue:k.model.ip,"onUpdate:modelValue":U[6]||(U[6]=e=>k.model.ip=e)},null,8,["modelValue"])])),_:1}),d(P,{label:"Domain"},{default:o((()=>[d(z,{modelValue:k.model.domain,"onUpdate:modelValue":U[7]||(U[7]=e=>k.model.domain=e)},null,8,["modelValue"])])),_:1}),d(P,{label:"Port"},{default:o((()=>[d(z,{modelValue:k.model.port,"onUpdate:modelValue":U[8]||(U[8]=e=>k.model.port=e)},null,8,["modelValue"])])),_:1}),d(P,{label:"php_sapi_name"},{default:o((()=>[d(z,{modelValue:k.model.php_sapi_name,"onUpdate:modelValue":U[9]||(U[9]=e=>k.model.php_sapi_name=e)},null,8,["modelValue"])])),_:1}),d(P,{label:"max_execution_time"},{default:o((()=>[d(z,{modelValue:k.model.max_execution_time,"onUpdate:modelValue":U[10]||(U[10]=e=>k.model.max_execution_time=e)},null,8,["modelValue"])])),_:1}),d(P,{label:"upload_max_filesize"},{default:o((()=>[d(z,{modelValue:k.model.upload_max_filesize,"onUpdate:modelValue":U[11]||(U[11]=e=>k.model.upload_max_filesize=e)},null,8,["modelValue"])])),_:1}),d(P,{label:"post_max_size",class:"ya-margin-bottom"},{default:o((()=>[d(z,{modelValue:k.model.post_max_size,"onUpdate:modelValue":U[12]||(U[12]=e=>k.model.post_max_size=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1}),d(E,{span:12},{default:o((()=>[d(S,{model:k.model,"label-width":"150px"},{default:o((()=>[d(P,{label:"缓存类型",prop:"type"},{default:o((()=>[d(z,{modelValue:k.model.cache_type,"onUpdate:modelValue":U[13]||(U[13]=e=>k.model.cache_type=e)},null,8,["modelValue"])])),_:1}),"redis"===k.model.cache_type?(l(),m("div",x,[d(P,{label:"Redis"},{default:o((()=>[d(z,{modelValue:k.model.redis_version,"onUpdate:modelValue":U[14]||(U[14]=e=>k.model.redis_version=e)},null,8,["modelValue"])])),_:1}),d(P,{label:"运行时长"},{default:o((()=>[d(z,{modelValue:k.model.uptime_in_days,"onUpdate:modelValue":U[15]||(U[15]=e=>k.model.uptime_in_days=e)},null,8,["modelValue"])])),_:1}),d(P,{label:"已用内存"},{default:o((()=>[d(z,{modelValue:k.model.used_memory_human,"onUpdate:modelValue":U[16]||(U[16]=e=>k.model.used_memory_human=e)},null,8,["modelValue"])])),_:1}),d(P,{label:"峰值内存"},{default:o((()=>[d(z,{modelValue:k.model.used_memory_peak_human,"onUpdate:modelValue":U[17]||(U[17]=e=>k.model.used_memory_peak_human=e)},null,8,["modelValue"])])),_:1}),d(P,{label:"Lua内存"},{default:o((()=>[d(z,{modelValue:k.model.used_memory_lua_human,"onUpdate:modelValue":U[18]||(U[18]=e=>k.model.used_memory_lua_human=e)},null,8,["modelValue"])])),_:1}),d(P,{label:"客户端数"},{default:o((()=>[d(z,{modelValue:k.model.connected_clients,"onUpdate:modelValue":U[19]||(U[19]=e=>k.model.connected_clients=e)},null,8,["modelValue"])])),_:1}),d(P,{label:"总连接数"},{default:o((()=>[d(z,{modelValue:k.model.total_connections_received,"onUpdate:modelValue":U[20]||(U[20]=e=>k.model.total_connections_received=e)},null,8,["modelValue"])])),_:1}),d(P,{label:"总命令数"},{default:o((()=>[d(z,{modelValue:k.model.total_commands_processed,"onUpdate:modelValue":U[21]||(U[21]=e=>k.model.total_commands_processed=e)},null,8,["modelValue"])])),_:1}),d(P,{label:"内存碎片比率"},{default:o((()=>[d(z,{modelValue:k.model.mem_fragmentation_ratio,"onUpdate:modelValue":U[22]||(U[22]=e=>k.model.mem_fragmentation_ratio=e)},null,8,["modelValue"])])),_:1}),d(P,{label:"DB0",class:"ya-margin-bottom"},{default:o((()=>[d(z,{modelValue:k.model.db0,"onUpdate:modelValue":U[23]||(U[23]=e=>k.model.db0=e)},null,8,["modelValue"])])),_:1}),(l(),m(u,null,t(15,(e=>(l(),m(u,null,[k.model["db"+e]?(l(),a(P,{key:e,label:"DB"+e,class:"ya-margin-bottom"},{default:o((()=>[d(z,{modelValue:k.model["db"+e],"onUpdate:modelValue":l=>k.model["db"+e]=l},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["label"])):n("",!0)],64)))),64))])):"memcache"===k.model.cache_type?(l(),m("div",v,[d(P,{label:"memcache"},{default:o((()=>[d(z,{modelValue:k.model.version,"onUpdate:modelValue":U[24]||(U[24]=e=>k.model.version=e)},null,8,["modelValue"])])),_:1}),d(P,{label:"运行秒数"},{default:o((()=>[d(z,{modelValue:k.model.uptime,"onUpdate:modelValue":U[25]||(U[25]=e=>k.model.uptime=e)},null,8,["modelValue"])])),_:1}),d(P,{label:"读取字节总数"},{default:o((()=>[d(z,{modelValue:k.model.bytes_read,"onUpdate:modelValue":U[26]||(U[26]=e=>k.model.bytes_read=e)},null,8,["modelValue"])])),_:1}),d(P,{label:"写入字节总数"},{default:o((()=>[d(z,{modelValue:k.model.bytes_written,"onUpdate:modelValue":U[27]||(U[27]=e=>k.model.bytes_written=e)},null,8,["modelValue"])])),_:1}),d(P,{label:"分配的内存数"},{default:o((()=>[d(z,{modelValue:k.model.limit_maxbytes,"onUpdate:modelValue":U[28]||(U[28]=e=>k.model.limit_maxbytes=e)},null,8,["modelValue"])])),_:1}),d(P,{label:"当前打开链接数"},{default:o((()=>[d(z,{modelValue:k.model.curr_connections,"onUpdate:modelValue":U[29]||(U[29]=e=>k.model.curr_connections=e)},null,8,["modelValue"])])),_:1}),d(P,{label:"曾打开连接总数"},{default:o((()=>[d(z,{modelValue:k.model.total_connections,"onUpdate:modelValue":U[30]||(U[30]=e=>k.model.total_connections=e)},null,8,["modelValue"])])),_:1}),d(P,{label:"执行get命令总数"},{default:o((()=>[d(z,{modelValue:k.model.cmd_get,"onUpdate:modelValue":U[31]||(U[31]=e=>k.model.cmd_get=e)},null,8,["modelValue"])])),_:1}),d(P,{label:"执行set命令总数"},{default:o((()=>[d(z,{modelValue:k.model.cmd_set,"onUpdate:modelValue":U[32]||(U[32]=e=>k.model.cmd_set=e)},null,8,["modelValue"])])),_:1}),d(P,{label:"flush_all命令总数"},{default:o((()=>[d(z,{modelValue:k.model.cmd_flush,"onUpdate:modelValue":U[33]||(U[33]=e=>k.model.cmd_flush=e)},null,8,["modelValue"])])),_:1}),d(P,{label:"当前服务器时间",class:"ya-margin-bottom"},{default:o((()=>[d(z,{modelValue:k.model.time,"onUpdate:modelValue":U[34]||(U[34]=e=>k.model.time=e)},null,8,["modelValue"])])),_:1})])):"wincache"===k.model.cache_type?(l(),m("div",w,[d(P,{label:"缓存信息",prop:"wincache_info"},{default:o((()=>[_("pre",null,s(k.model.wincache_info),1)])),_:1})])):n("",!0)])),_:1},8,["model"])])),_:1}),d(E,{span:24},{default:o((()=>[d(S,{model:k.model,"label-width":"150px"},{default:o((()=>[d(P,null,{default:o((()=>[d(D,{loading:k.loading,title:"刷新",onClick:U[35]||(U[35]=e=>j.refresh())},{default:o((()=>[i("刷新")])),_:1},8,["loading"])])),_:1})])),_:1},8,["model"])])),_:1})])),_:1})])),_:1},8,["height"])}]]);export{k as default};
