(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2287],{87992:function(e,r,n){"use strict";n.r(r);var u=n(77837),t=n(82394),s=n(38860),i=n.n(s),d=n(82684),l=n(34376),a=n(71180),o=n(15338),c=n(93808),f=n(28274),_=n(38276),p=n(75499),v=n(30160),w=n(36043),h=n(35686),m=n(98464),j=n(72473),b=n(70515),P=n(24755),Z=n(14875),O=n(3917),x=n(50178),g=n(15610),y=n(42122),E=n(69419),S=n(28598);function k(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);r&&(u=u.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,u)}return n}function N(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?k(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function D(){var e=(0,l.useRouter)(),r=(0,x.PR)()||{},n=(r.id,r.owner),u=(0,d.useState)(null),t=u[0],s=u[1],i=h.ZP.users.list({},{revalidateOnFocus:!1}),c=i.data,k=i.mutate,D=(0,d.useMemo)((function(){return(null===c||void 0===c?void 0:c.users)||[]}),[null===c||void 0===c?void 0:c.users]),R=h.ZP.users.detail(null===t||void 0===t?void 0:t.user_id,{},{revalidateOnFocus:!1}),A=R.data,U=R.mutate,C=null===A||void 0===A?void 0:A.user,F=(0,E.iV)(),M=(0,m.Z)(F);(0,d.useEffect)((function(){var e=F.add_new_user,r=F.user_id;if(!(0,y.Xy)(F,M)){var n=N(N({},M),F);r?n.user_id=r:delete n.user_id,e?n.add_new_user=e:delete n.add_new_user,s(n)}}),[F,M]);var I=null===t||void 0===t?void 0:t.add_new_user,T=(0,d.useMemo)((function(){return I?(0,S.jsx)(_.Z,{p:b.cd,children:(0,S.jsx)(w.Z,{newUser:!0,onSaveSuccess:function(){(0,g.u7)({add_new_user:null,user_id:null}),k()},title:"Add new user",user:{}})}):C?(0,S.jsx)(_.Z,{p:b.cd,children:(0,S.jsx)(w.Z,{hideFields:[Z.s7],onDeleteSuccess:function(){(0,g.u7)({add_new_user:null,user_id:null}),k()},onSaveSuccess:function(){(0,g.u7)({add_new_user:null,user_id:null}),U(),k()},showDelete:!0,title:"Edit user",user:C})}):null}),[U,k,I,C]);return(0,S.jsxs)(f.Z,{after:T,afterHidden:!C&&!I,appendBreadcrumbs:!0,breadcrumbs:[{bold:!0,label:function(){return"Users"},linkProps:{href:"/settings/workspace/users"}}],title:"Users",uuidItemSelected:P.B2.USERS,uuidWorkspaceSelected:P.Pl.USER_MANAGEMENT,children:[n&&(0,S.jsx)(_.Z,{p:b.cd,children:(0,S.jsx)(a.Z,{beforeIcon:(0,S.jsx)(j.DN,{}),onClick:function(){return(0,g.u7)({add_new_user:1,user_id:null})},primary:!0,children:"Add new user"})}),(0,S.jsx)(o.Z,{light:!0}),(0,S.jsx)(p.Z,{columnFlex:[null,1,1,1,1,null,null],columns:[{label:function(){return""},uuid:"avatar"},{uuid:"Username"},{uuid:"First name"},{uuid:"Last name"},{uuid:"Email"},{uuid:"Role"},{rightAligned:!0,uuid:"Created"}],isSelectedRow:function(e){var r;return(null===(r=D[e])||void 0===r?void 0:r.id)===(null===C||void 0===C?void 0:C.id)},onClickRow:function(r){var n,u=null===(n=D[r])||void 0===n?void 0:n.id;e.push("/settings/workspace/users/".concat(u))},rows:D.map((function(e){var r=e.avatar,n=e.created_at,u=e.email,t=e.first_name,s=(e.id,e.last_name),i=e.roles_display,d=e.roles_new,l=e.username,a=d||[];return a.sort((function(e,r){return e.id-r.id})),[(0,S.jsx)(v.ZP,{large:!0,rightAligned:!0,children:r},"avatar"),(0,S.jsx)(v.ZP,{children:l||"-"},"username"),(0,S.jsx)(v.ZP,{default:!0,children:t||"-"},"firstName"),(0,S.jsx)(v.ZP,{default:!0,children:s||"-"},"lastName"),(0,S.jsx)(v.ZP,{default:!0,children:u},"email"),(0,S.jsx)(v.ZP,{default:!0,children:a.length>0?a[0].name:i},"roles"),(0,S.jsx)(v.ZP,{monospace:!0,default:!0,children:n&&(0,O.d$)(n)},"created")]})),uuid:"pipeline-runs"})]})}D.getInitialProps=(0,u.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),r.default=(0,c.Z)(D)},48673:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings/workspace/users",function(){return n(87992)}])}},function(e){e.O(0,[844,2083,8013,600,4636,8264,4666,5499,3684,6043,9774,2888,179],(function(){return r=48673,e(e.s=r);var r}));var r=e.O();_N_E=r}]);