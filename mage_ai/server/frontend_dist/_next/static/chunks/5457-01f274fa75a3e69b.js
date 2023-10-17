"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5457],{94629:function(e,n,r){r.d(n,{Z:function(){return j}});var t=r(82394),i=r(21831),o=r(82684),u=r(50724),l=r(82555),s=r(97618),c=r(70613),d=r(94636),a=r(68899),f=r(28598);function p(e,n){var r=e.children,t=e.noPadding;return(0,f.jsx)(a.HS,{noPadding:t,ref:n,children:r})}var h=o.forwardRef(p),b=r(62547),g=r(97927),v=r(35686),O=r(98464),S=r(46684),I=r(70515),P=r(53808),m=r(19183);function E(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function T(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?E(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function N(e,n){var r,t=e.addProjectBreadcrumbToCustomBreadcrumbs,p=e.after,E=e.afterHeader,N=e.afterHidden,j=e.afterWidth,k=e.afterWidthOverride,y=e.appendBreadcrumbs,M=e.before,R=e.beforeWidth,A=e.breadcrumbs,_=e.children,Z=e.errors,C=e.headerMenuItems,x=e.headerOffset,w=e.hideAfterCompletely,G=e.mainContainerHeader,H=e.navigationItems,B=e.setAfterHidden,L=e.setErrors,D=e.subheaderChildren,Y=e.subheaderNoPadding,U=e.title,W=e.uuid,K=(0,m.i)().width,F="dashboard_after_width_".concat(W),q="dashboard_before_width_".concat(W),z=(0,o.useRef)(null),V=(0,o.useState)(k?j:(0,P.U2)(F,j)),Q=V[0],$=V[1],J=(0,o.useState)(!1),X=J[0],ee=J[1],ne=(0,o.useState)(M?Math.max((0,P.U2)(q,R),13*I.iI):null),re=ne[0],te=ne[1],ie=(0,o.useState)(!1),oe=ie[0],ue=ie[1],le=(0,o.useState)(null)[1],se=v.ZP.projects.list({},{revalidateOnFocus:!1}).data,ce=null===se||void 0===se?void 0:se.projects,de={label:function(){var e;return null===ce||void 0===ce||null===(e=ce[0])||void 0===e?void 0:e.name},linkProps:{href:"/"}},ae=[];A&&(t&&ae.push(de),ae.push.apply(ae,(0,i.Z)(A))),(null===A||void 0===A||!A.length||y)&&(null===ce||void 0===ce?void 0:ce.length)>=1&&(null!==A&&void 0!==A&&A.length||ae.unshift({bold:!y,label:function(){return U}}),ae.unshift(de)),(0,o.useEffect)((function(){null===z||void 0===z||!z.current||X||oe||null===le||void 0===le||le(z.current.getBoundingClientRect().width)}),[X,Q,oe,re,z,le,K]),(0,o.useEffect)((function(){X||(0,P.t8)(F,Q)}),[N,X,Q,F]),(0,o.useEffect)((function(){oe||(0,P.t8)(q,re)}),[oe,re,q]);var fe=(0,O.Z)(j);return(0,o.useEffect)((function(){k&&fe!==j&&$(j)}),[k,j,fe]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(c.Z,{title:U}),(0,f.jsx)(d.Z,{breadcrumbs:ae,menuItems:C,project:null===ce||void 0===ce?void 0:ce[0],version:null===ce||void 0===ce||null===(r=ce[0])||void 0===r?void 0:r.version}),(0,f.jsxs)(a.Nk,{ref:n,children:[0!==(null===H||void 0===H?void 0:H.length)&&(0,f.jsx)(a.lm,{showMore:!0,children:(0,f.jsx)(g.Z,{navigationItems:H,showMore:!0})}),(0,f.jsx)(s.Z,{flex:1,flexDirection:"column",children:(0,f.jsxs)(b.Z,{after:p,afterHeader:E,afterHeightOffset:S.Mz,afterHidden:N,afterMousedownActive:X,afterWidth:Q,before:M,beforeHeightOffset:S.Mz,beforeMousedownActive:oe,beforeWidth:a.k1+(M?re:0),headerOffset:x,hideAfterCompletely:!B||w,leftOffset:M?a.k1:null,mainContainerHeader:G,mainContainerRef:z,setAfterHidden:B,setAfterMousedownActive:ee,setAfterWidth:$,setBeforeMousedownActive:ue,setBeforeWidth:te,children:[D&&(0,f.jsx)(h,{noPadding:Y,children:D}),_]})})]}),Z&&(0,f.jsx)(u.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===L||void 0===L?void 0:L(null)},children:(0,f.jsx)(l.Z,T(T({},Z),{},{onClose:function(){return null===L||void 0===L?void 0:L(null)}}))})]})}var j=o.forwardRef(N)},28795:function(e,n,r){var t;r.d(n,{B:function(){return i},M:function(){return t}}),function(e){e.BACKFILLS="backfills",e.BLOCK_RUNS="block_runs",e.DASHBOARD="dashboard",e.EDIT="edit",e.MONITOR="monitor",e.PIPELINE_LOGS="pipeline_logs",e.PIPELINE_RUNS="pipeline_runs",e.RUNS="runs",e.SETTINGS="settings",e.SYNCS="syncs",e.TRIGGERS="triggers"}(t||(t={}));var i="cancel_all_running_pipeline_runs"},75457:function(e,n,r){r.d(n,{Z:function(){return y}});var t=r(82394),i=r(21831),o=r(82684),u=r(34376),l=r(50724),s=r(94629),c=r(15338),d=r(82555),a=r(55485),f=r(85854),p=r(38276),h=r(35686),b=r(38626),g=r(44897),v=r(42631),O=r(70515),S=b.default.div.withConfig({displayName:"indexstyle__BannerStyle",componentId:"sc-1te3pmf-0"})(["border-radius:","px;padding:","px;"," "," ",""],v.n_,3*O.iI,(function(e){return"\n    box-shadow: ".concat((e.theme.shadow||g.Z.shadow).small,";\n  ")}),(function(e){return e.background&&"\n    background: ".concat(e.background,";\n  ")}),(function(e){return e.backgroundImage&&'\n    background-image: url("'.concat(e.backgroundImage,'");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n  ')})),I=r(46684),P=r(85010),m=r(72619),E=r(19183),T=r(28598);function N(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function j(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?N(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function k(e,n){var r=e.after,t=e.afterHidden,b=e.afterWidth,g=e.before,v=e.beforeWidth,N=e.breadcrumbs,k=e.buildSidekick,y=e.children,M=e.errors,R=e.headline,A=e.pageName,_=e.pipeline,Z=e.setErrors,C=e.subheader,x=e.subheaderBackground,w=e.subheaderBackgroundImage,G=e.subheaderButton,H=e.subheaderNoPadding,B=e.subheaderText,L=e.title,D=e.uuid,Y=(0,E.i)().height,U=(0,u.useRouter)().query.pipeline,W=null===_||void 0===_?void 0:_.uuid,K=h.ZP.pipelines.detail(W,{includes_outputs:!1},{revalidateOnFocus:!1}).data,F=null===K||void 0===K?void 0:K.pipeline;(0,o.useEffect)((function(){(0,m.bB)(K,Z)}),[K,Z]);var q=(0,o.useMemo)((function(){return r||(k?k({height:Y,heightOffset:I.Mz,pipeline:F}):null)}),[r,k,Y,F]),z=b||(q?50*O.iI:null),V=(0,o.useMemo)((function(){var e=[];return F?(e.push.apply(e,[{label:function(){return"Pipelines"},linkProps:{href:"/pipelines"}}]),N?(e.push({label:function(){return F.uuid},linkProps:{as:"/pipelines/".concat(W,"/triggers"),href:"/pipelines/[pipeline]/triggers"}}),e.push.apply(e,(0,i.Z)(N)),e[e.length-1].bold=!0):e.push({bold:!0,label:function(){return F.name}})):null!==K&&void 0!==K&&K.error&&e.push({bold:!0,danger:!0,label:function(){return"Error loading pipeline"}}),e}),[N,null===K||void 0===K?void 0:K.error,F,W]);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(s.Z,{after:q,afterHidden:t,afterWidth:z,before:g,beforeWidth:v,breadcrumbs:V,navigationItems:(0,P.H)(A,F,U),ref:n,subheaderChildren:"undefined"!==typeof C&&C,subheaderNoPadding:H,title:F?L?L(F):F.name:null,uuid:D,children:[(G||B)&&(0,T.jsx)(p.Z,{mb:O.Mq,mt:O.cd,mx:O.cd,children:(0,T.jsx)(S,{background:x,backgroundImage:w,children:(0,T.jsxs)(a.ZP,{alignItems:"center",children:[G,B&&(0,T.jsx)(p.Z,{ml:3}),B]})})}),R&&(0,T.jsx)(p.Z,{p:O.cd,children:(0,T.jsxs)(p.Z,{mt:O.cd,px:O.cd,children:[(0,T.jsx)(f.Z,{level:5,children:R}),(0,T.jsx)(c.Z,{light:!0,mt:O.cd,short:!0})]})}),y]}),M&&(0,T.jsx)(l.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===Z||void 0===Z?void 0:Z(null)},children:(0,T.jsx)(d.Z,j(j({},M),{},{onClose:function(){return null===Z||void 0===Z?void 0:Z(null)}}))})]})}var y=o.forwardRef(k)},85010:function(e,n,r){r.d(n,{H:function(){return l}});var t=r(57653),i=r(72473),o=r(28795),u=r(50178);function l(e,n,r){var l=(n||{}).uuid||r,s=[{Icon:i.Bf,id:o.M.TRIGGERS,isSelected:function(){return o.M.TRIGGERS===e},label:function(){return"Triggers"},linkProps:{as:"/pipelines/".concat(l,"/triggers"),href:"/pipelines/[pipeline]/triggers"}},{Icon:i.Pf,id:o.M.RUNS,isSelected:function(){return o.M.RUNS===e},label:function(){return"Runs"},linkProps:{as:"/pipelines/".concat(l,"/runs"),href:"/pipelines/[pipeline]/runs"}},{Icon:i.dE,id:o.M.BACKFILLS,isSelected:function(){return o.M.BACKFILLS===e},label:function(){return"Backfills"},linkProps:{as:"/pipelines/".concat(l,"/backfills"),href:"/pipelines/[pipeline]/backfills"}},{Icon:i.UL,id:o.M.PIPELINE_LOGS,isSelected:function(){return o.M.PIPELINE_LOGS===e},label:function(){return"Logs"},linkProps:{as:"/pipelines/".concat(l,"/logs"),href:"/pipelines/[pipeline]/logs"}},{Icon:i.ug,id:o.M.MONITOR,isSelected:function(){return o.M.MONITOR===e},label:function(){return"Monitor"},linkProps:{as:"/pipelines/".concat(l,"/monitors"),href:"/pipelines/[pipeline]/monitors"}}];return t.qL.INTEGRATION===(null===n||void 0===n?void 0:n.type)&&s.unshift({Icon:i.Nt,id:o.M.SYNCS,isSelected:function(){return o.M.SYNCS===e},label:function(){return"Syncs"},linkProps:{as:"/pipelines/".concat(l,"/syncs"),href:"/pipelines/[pipeline]/syncs"}}),(0,u.Ct)()||(s.unshift({Icon:i.EK,disabled:!l,id:o.M.EDIT,isSelected:function(){return o.M.EDIT===e},label:function(){return"Edit pipeline"},linkProps:{as:"/pipelines/".concat(l,"/edit"),href:"/pipelines/[pipeline]/edit"}}),s.push({Icon:i.Zr,id:o.M.SETTINGS,isSelected:function(){return o.M.SETTINGS===e},label:function(){return"Pipeline settings"},linkProps:{as:"/pipelines/".concat(l,"/settings"),href:"/pipelines/[pipeline]/settings"}})),s.unshift({Icon:i.G6,id:o.M.DASHBOARD,isSelected:function(){return o.M.DASHBOARD===e},label:function(){return"Dashboard"},linkProps:{as:"/pipelines/".concat(l,"/dashboard"),href:"/pipelines/[pipeline]/dashboard"}}),s}},57653:function(e,n,r){r.d(n,{$1:function(){return d},G7:function(){return f},LM:function(){return p},Mj:function(){return h},QK:function(){return c},a_:function(){return g},kA:function(){return b},qL:function(){return u},r0:function(){return a}});var t,i,o,u,l=r(82394),s=r(72473);!function(e){e.INTEGRATION="integration",e.PYTHON="python",e.PYSPARK="pyspark",e.STREAMING="streaming"}(u||(u={}));var c,d,a,f=(t={},(0,l.Z)(t,u.INTEGRATION,"Integration"),(0,l.Z)(t,u.PYTHON,"Standard"),(0,l.Z)(t,u.PYSPARK,"PySpark"),(0,l.Z)(t,u.STREAMING,"Streaming"),t),p="all",h=(u.PYTHON,u.INTEGRATION,u.STREAMING,i={},(0,l.Z)(i,p,s.ie),(0,l.Z)(i,u.INTEGRATION,s.YC),(0,l.Z)(i,u.PYTHON,s.El),(0,l.Z)(i,u.STREAMING,s.dB),i);!function(e){e.ACTIVE="active",e.INACTIVE="inactive",e.NO_SCHEDULES="no_schedules",e.RETRY="retry",e.RETRY_INCOMPLETE_BLOCK_RUNS="retry_incomplete_block_runs"}(c||(c={})),function(e){e.GROUP="group_by",e.HISTORY_DAYS="from_history_days",e.STATUS="status[]",e.TAG="tag[]",e.TYPE="type[]"}(d||(d={})),function(e){e.STATUS="status",e.TAG="tag",e.TYPE="type"}(a||(a={}));var b=[c.ACTIVE,c.INACTIVE,c.NO_SCHEDULES],g=(o={},(0,l.Z)(o,u.PYTHON,"python3"),(0,l.Z)(o,u.PYSPARK,"pysparkkernel"),o)}}]);