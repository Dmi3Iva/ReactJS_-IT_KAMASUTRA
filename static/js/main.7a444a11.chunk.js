(this.webpackJsonpreact_js=this.webpackJsonpreact_js||[]).push([[0],{110:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length us ".concat(e," symbols")}}},120:function(e,t,n){e.exports={pagination:"Paginator_pagination__3WCVh",pagination__item:"Paginator_pagination__item__qZRBs",pagination__current:"Paginator_pagination__current__2XU1Y"}},146:function(e,t,n){e.exports={wrapper:"Preloader_wrapper__1QbnO","lds-ripple":"Preloader_lds-ripple__33-Mw"}},147:function(e,t,n){e.exports={formControl:"FormsControls_formControl__yXrOt",error:"FormsControls_error__be64g",formSummaryError:"FormsControls_formSummaryError__1-FTL"}},148:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"e",(function(){return b})),n.d(t,"c",(function(){return v})),n.d(t,"g",(function(){return O})),n.d(t,"d",(function(){return w})),n.d(t,"f",(function(){return P}));var r=n(11),a=n.n(r),o=n(25),c=n(21),i=n(7),u=n(24),s=n(213),l="PROFILE_REDUCER/ADD_POST",f="PROFILE_REDUCER/SET_USER_PROFILE",p="PROFILE_REDUCER/SET_STATUS",d="PROFILE_REDUCER/REMOVE_POST",m={PostsData:[{id:1,message:"There's my first post!",likesCount:10},{id:2,message:"Welcome to my page!",likesCount:20}],profile:null,newPostText:"",status:""},g=function(e){return{type:l,newPostText:e}},h=function(e){return{type:p,status:e}},E=function(e){return{type:"PROFILE_REDUCER/UPDATE_PROFILE_SUCCESS",profile:e}},b=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateProfilePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n({type:"PROFILE_REDUCER/SAVE_PROFILE_PHOTO",photos:r.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(h(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.resultCode&&n(h(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getUserProfile(e);case 2:r=t.sent,n({type:f,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},P=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.d.updateProfile(e);case 2:if(0!==(r=t.sent).data.resultCode){t.next=7;break}n(E),t.next=10;break;case 7:return o=r.data.messages.length>0?r.data.messages[0]:"unknown error",n(Object(s.stopSubmit)("profile",{_error:o})),t.abrupt("return",Promise.reject(o));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:for(var n=1;void 0!==e.PostsData[n-1];)++n;return Object(i.a)(Object(i.a)({},e),{},{PostsData:[].concat(Object(c.a)(e.PostsData),[{id:n,message:t.newPostText,likesCount:0}]),newPostText:""});case"PROFILE_REDUCER/UPDATE_NEW_POST_TEXT":return Object(i.a)(Object(i.a)({},e),{},{newPostText:t.postText});case f:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case p:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case d:return Object(i.a)(Object(i.a)({},e),{},{PostsData:e.PostsData.filter((function(e){return e.id!==t.postId}))});case"PROFILE_REDUCER/SAVE_PROFILE_PHOTO":return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});case"PROFILE_REDUCER/UPDATE_PROFILE_SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)({},t.profile)});default:return e}}},202:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var r=n(21),a=n(7),o={MessagesData:[{id:1,avatar:"ava",name:"Andrew",text:"How is your day?"},{id:2,avatar:"ava",name:"Me",text:"It's ok, thank you for asking"},{id:3,avatar:"ava",name:"Andrew",text:"You're welcome!"}],ContactsData:[{id:1,name:"Andrew"},{id:2,name:"Oleg"},{id:3,name:"Sasha"},{id:4,name:"Sveta"},{id:5,name:"Olga"},{id:6,name:"Kristy"}]},c=function(e){return{type:"ADD-MESSAGE",newMessage:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":for(var n=1;void 0!==e.MessagesData[n];)++n;return Object(a.a)(Object(a.a)({},e),{},{MessagesData:[].concat(Object(r.a)(e.MessagesData),[{id:n,avatar:"ava",name:"The GOD",text:t.newMessage}])});default:return e}}},207:function(e,t,n){e.exports=n.p+"static/media/freepik-avatar.5b019637.jpg"},217:function(e,t,n){e.exports={userPhoto:"users_userPhoto__3GUvv"}},219:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},220:function(e,t,n){e.exports={formSummaryError:"login_formSummaryError__r67RS"}},24:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return u}));var r=n(212),a=r.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"53d3dc64-a25c-445e-81a3-2b2dcf8f14a9"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},followUser:function(e){return a.post("follow/"+e,null).then((function(e){return e.data}))},unfollowUser:function(e){return a.delete("follow/"+e).then((function(e){return e.data}))},updateProfile:function(e){return a.put("profile",e)}},c={authMe:function(){return a.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},i={getUserProfile:function(e){return a.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return a.get("profile/status/"+e).then((function(e){return e.data}))},updateStatus:function(e){return a.put("profile/status/",{status:e}).then((function(e){return e.data}))},updateProfilePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})}},u={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},252:function(e,t,n){e.exports=n(472)},253:function(e,t,n){},47:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return p}));var r=n(9),a=n(0),o=n.n(a),c=n(147),i=n.n(c),u=n(142),s=function(e){e.input;var t=e.meta,n=t.touched,a=t.error,c=e.children,u=(Object(r.a)(e,["input","meta","children"]),n&&a);return o.a.createElement("div",{className:i.a.formControl+" "+(u&&i.a.error)},o.a.createElement("div",null,c),n&&a&&o.a.createElement("span",null,a))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("input",Object.assign({},t,n)))},p=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"text",c=arguments.length>5?arguments[5]:void 0;return o.a.createElement("div",null,o.a.createElement(u.a,{placeholder:e,name:t,validate:n,component:r,type:a}),c)}},472:function(e,t,n){"use strict";n.r(t);n(253),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(53),a=n.n(r),o=n(0),c=n.n(o),i=n(18),u=n(13),s=n(148),l=n(202),f=n(11),p=n.n(f),d=n(25),m=n(21),g=n(7),h=n(24),E=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(g.a)(Object(g.a)({},e),r):e}))},b={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[],fake:10},v=function(e){return{type:"FOLLOW",userId:e}},O=function(e){return{type:"UNFOLLOW",userId:e}},w=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},P=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},j=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},_=function(){var e=Object(d.a)(p.a.mark((function e(t,n,r,a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(j(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(a(n));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(g.a)(Object(g.a)({},e),{},{users:E(e.users,t.userId,"id",{followed:!0}),followingInProgress:e.followingInProgress.filter((function(e){return e!==t.userId}))});case"UNFOLLOW":return Object(g.a)(Object(g.a)({},e),{},{users:E(e.users,t.userId,"id",{followed:!1}),followingInProgress:e.followingInProgress.filter((function(e){return e!==t.userId}))});case"SET_USERS":return Object(g.a)(Object(g.a)({},e),{},{users:Object(m.a)(t.users)});case"SET_CURRENT_PAGE":return Object(g.a)(Object(g.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(g.a)(Object(g.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"TOGGLE_IS_FETCHING":return Object(g.a)(Object(g.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(g.a)(Object(g.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(m.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},S=n(52),U=n(214),y=n(209),x={initialized:!1},I=Object(u.combineReducers)({ProfilePage:s.b,MessagesPage:l.a,UsersPage:C,Auth:S.b,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(g.a)(Object(g.a)({},e),{},{initialized:!0});default:return e}},form:y.a}),R=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.compose,T=Object(u.createStore)(I,R(Object(u.applyMiddleware)(U.a)));window.store=T;var A=T,k=n(221),L=n(481),N=n(482),D=n(51),F=n(33),M=n(67),G=n(66),z=n(31),W=n(26),H=n(82),B=n.n(H),q=n(484);var V=B()((function(e){return{root:Object(z.a)({position:"fixed",bottom:0,backgroundColor:e.palette.primary.main,padding:20,width:"100%",boxShadow:"0 -5px 30px rgba(0, 0, 0, 0.5)"},e.breakpoints.up("sm"),{left:"50%",marginLeft:-300,maxWidth:600}),menu:{listStyle:"none",padding:0,margin:0,display:"flex"},item:{color:"#fff",textDecoration:"none",transition:"color .3s","&:hover":{color:"tomato"}},active:{color:"black"}}}))((function(e){var t=e.classes;return c.a.createElement("aside",{className:t.root},c.a.createElement(q.a,{display:"flex",justifyContent:"space-between",alignItems:"center",className:t.menu},c.a.createElement(q.a,null,c.a.createElement(W.b,{className:t.item,activeClassName:t.active,to:"/profile"},"Profile")),c.a.createElement(q.a,null,c.a.createElement(W.b,{className:t.item,activeClassName:t.active,to:"/dialogs"},"Messages")),c.a.createElement(q.a,null,c.a.createElement(W.b,{className:t.item,activeClassName:t.active,to:"/news"},"News")),c.a.createElement(q.a,null,c.a.createElement(W.b,{className:t.item,activeClassName:t.active,to:"/users"},"Find user")),c.a.createElement(q.a,null,c.a.createElement(W.b,{className:t.item,activeClassName:t.active,to:"/settings"},"Settings"))))})),X=n(17),Y=n(111),Z=n(120),J=n.n(Z),K=function(e){var t=e.currentPage,n=e.onPageChanged,r=e.pages,a=e.pagesCount,o=e.movePages,i=e.itemsPaginatorCount;return c.a.createElement("div",{className:J.a.pagination},!r.some((function(e){return e<11}))&&c.a.createElement("button",{onClick:function(){return o(-i)}},"Prev"),r.map((function(e){return c.a.createElement("div",{key:e,onClick:function(){n(e)},className:J.a.pagination__item+" "+(t===e&&J.a.pagination__current)},e)})),!r.some((function(e){return e>a-10}))&&c.a.createElement("button",{onClick:function(){return o(i)}},"Next"))},Q=function(e){var t=e.currentPage,n=e.itemsPaginatorCount,r=Math.floor(t/n)*n+1,a=Math.ceil(t/n)*n,i=Object(o.useState)({currentPage:e.currentPage,pagesCount:Math.ceil(e.totalUsersCount/e.pageSize),itemsPaginatorCount:n,leftEdge:r,rightEdge:a,Pages:Object(m.a)(Array(a-r+1)).map((function(e,t){return r+t}))}),u=Object(Y.a)(i,2),s=u[0],l=u[1];Object(o.useEffect)((function(){l((function(t){return Object(g.a)(Object(g.a)({},t),{},{pagesCount:Math.ceil(e.totalUsersCount/e.pageSize)})}))}),[e.totalUsersCount,e.pageSize]);return c.a.createElement(K,Object.assign({},e,{pages:s.Pages,movePages:function(e){var t=s.leftEdge+e<1?1:s.leftEdge+e,n=t+s.itemsPaginatorCount>s.pagesCount?s.pagesCount:t+s.itemsPaginatorCount;t>n&&(n=t),l((function(e){return Object(g.a)(Object(g.a)({},e),{},{leftEdge:t,rightEdge:n,Pages:Object(m.a)(Array(n-t+1)).map((function(e,n){return t+n}))})}))},pagesCount:s.pagesCount}))},$=n(217),ee=n.n($),te=n(207),ne=n.n(te),re=function(e){var t=e.id,n=e.photos,r=e.name,a=e.followed,o=e.followingInProgress,i=e.unfollow,u=e.follow,s=e.status;return c.a.createElement("div",{key:t},c.a.createElement("span",null,c.a.createElement("div",null,c.a.createElement(W.b,{to:"/profile/".concat(t)},c.a.createElement("img",{className:ee.a.userPhoto,src:null!=n.small?n.small:ne.a,alt:"avatar of ".concat(r)}))),c.a.createElement("div",null,a?c.a.createElement("button",{disabled:o.some((function(e){return t===e})),onClick:function(){i(t)}},"Unfollow"):c.a.createElement("button",{disabled:o.some((function(e){return t===e})),onClick:function(){u(t)}},"Follow"))),c.a.createElement("span",null,c.a.createElement("span",null,c.a.createElement("div",null,r),c.a.createElement("div",null,s))))},ae=function(e){var t=e.currentPage,n=e.pageSize,r=e.totalUsersCount,a=e.onPageChanged,o=e.followingInProgress,i=e.follow,u=e.unfollow,s=e.users;return c.a.createElement("div",null,c.a.createElement(Q,{currentPage:t,onPageChanged:a,totalUsersCount:r,pageSize:n,itemsPaginatorCount:10}),s.map((function(e){return c.a.createElement(re,Object.assign({},e,{followingInProgress:o,follow:i,unfollow:u}))})))},oe=n(71),ce=n(218),ie=Object(ce.a)((function(e){return e.UsersPage.users}),(function(e){return e.filter((function(e){return!0}))})),ue=function(e){return e.UsersPage.pageSize},se=function(e){return e.UsersPage.totalUsersCount},le=function(e){return e.UsersPage.currentPage},fe=function(e){return e.UsersPage.isFetching},pe=function(e){return e.UsersPage.followingInProgress},de=function(e){return e.Auth.isAuth},me=function(e){Object(M.a)(n,e);var t=Object(G.a)(n);function n(){var e;Object(D.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.requestUsers(t,e.props.pageSize)},e}return Object(F.a)(n,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,this.props.isFetching?c.a.createElement(oe.a,null):null,c.a.createElement(ae,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,users:this.props.users,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,followingInProgress:this.props.followingInProgress,follow:this.props.follow,unfollow:this.props.unfollow}))}}]),n}(c.a.Component),ge=Object(i.connect)((function(e){return{users:ie(e),pageSize:ue(e),totalUsersCount:se(e),currentPage:le(e),isFetching:fe(e),followingInProgress:pe(e),isAuth:de(e)}}),{follow:function(e){return function(){var t=Object(d.a)(p.a.mark((function t(n){var r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=h.d.followUser.bind(h.d),t.next=3,_(n,e,r,v);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(d.a)(p.a.mark((function t(n){var r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=h.d.unfollowUser.bind(h.d),t.next=3,_(n,e,r,O);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},toggleIsFetching:P,toggleFollowingInProgress:j,requestUsers:function(e,t){return function(){var n=Object(d.a)(p.a.mark((function n(r){var a;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(P(!0)),n.next=3,h.d.getUsers(e,t);case 3:a=n.sent,r(P(!1)),r({type:"SET_USERS",users:a.items}),r(w(e)),r({type:"SET_TOTAL_USERS_COUNT",totalUsersCount:a.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(me),he=n(219),Ee=n.n(he),be=n(483);var ve=B()((function(e){return console.log(e),{root:{background:e.palette.primary.main,marginBottom:30,display:"flex",padding:15,justifyContent:"space-between",alignItems:"center"},logo:{maxWidth:"100px",maxHeight:"100px"},loginName:{color:"white",marginRight:10},loginLink:{textDecoration:"none",marginLeft:10}}}))((function(e){var t=e.classes;return c.a.createElement("header",{className:t.root},c.a.createElement("img",{className:t.logo,src:Ee.a,alt:"Logo"}),c.a.createElement("div",{className:t.login},e.isAuth?c.a.createElement("div",null,c.a.createElement("span",{className:t.loginName},e.login)," ",c.a.createElement(be.a,{variant:"contained",color:"secondary",onClick:e.logout},"Log out")):c.a.createElement(W.b,{className:t.loginLink,to:"/login"},c.a.createElement(be.a,{variant:"contained",color:"secondary"},"Login"))))})),Oe=function(e){Object(M.a)(n,e);var t=Object(G.a)(n);function n(){return Object(D.a)(this,n),t.apply(this,arguments)}return Object(F.a)(n,[{key:"render",value:function(){return c.a.createElement(ve,{isAuth:this.props.isAuth,login:this.props.login,logout:this.props.logout})}}]),n}(c.a.Component),we=Object(i.connect)((function(e){return{isAuth:e.Auth.isAuth,login:e.Auth.login}}),{logout:S.d})(Oe),Pe=n(208),je=n(47),_e=n(110),Ce=n(220),Se=n.n(Ce),Ue=Object(Pe.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return c.a.createElement("div",null,c.a.createElement("form",{action:"/",method:"GET",onSubmit:t},Object(je.c)("Login","login",_e.b,je.a),Object(je.c)("password","password",_e.b,je.a,"password"),Object(je.c)("","rememberMe",null,je.a,"checkbox","rememberMe"),n&&c.a.createElement("div",{className:Se.a.formSummaryError},n),r&&c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{src:r,alt:"resolve this captcha"}),Object(je.c)("captcha","captcha",_e.b,je.a)),c.a.createElement("div",null,c.a.createElement(be.a,{color:"primary",variant:"contained",type:"submit"},"Login"))))})),ye=Object(i.connect)((function(e){return{isAuth:e.Auth.isAuth,captchaUrl:e.Auth.captchaUrl}}),{login:S.c})((function(e){return e.isAuth?c.a.createElement(X.a,{to:"/profile"}):c.a.createElement("div",null,c.a.createElement("h1",null,"Login"),c.a.createElement(Ue,{onSubmit:function(t){var n=t.login,r=t.password,a=t.rememberMe,o=t.captcha;e.login(n,r,a,o)},captchaUrl:e.captchaUrl}))})),xe=function(e){return function(t){return c.a.createElement(c.a.Suspense,{fallback:c.a.createElement(oe.a,null)},c.a.createElement(e,t))}},Ie=n(56),Re=c.a.lazy((function(){return n.e(4).then(n.bind(null,493))})),Te=c.a.lazy((function(){return n.e(3).then(n.bind(null,492))})),Ae=function(e){Object(M.a)(n,e);var t=Object(G.a)(n);function n(){return Object(D.a)(this,n),t.apply(this,arguments)}return Object(F.a)(n,[{key:"catchAllUnhandledError",value:function(e){console.log(e)}},{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledError)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledError)}},{key:"render",value:function(){if(!this.props.initialized)return c.a.createElement(oe.a,null);var e=this.props.classes;return c.a.createElement("div",{className:e.root},c.a.createElement(we,null),c.a.createElement("div",{className:e.main},c.a.createElement(X.d,null,c.a.createElement(X.b,{path:"/profile/:userId?",render:xe(Te)}),c.a.createElement(X.b,{exact:!0,path:"/",render:xe(Te)}),c.a.createElement(X.b,{exact:!0,path:"/dialogs",render:xe(Re)}),c.a.createElement(X.b,{exact:!0,path:"/news",render:function(){return c.a.createElement("div",null,"The page is being created")}}),c.a.createElement(X.b,{exact:!0,path:"/users",render:xe(ge)}),c.a.createElement(X.b,{exact:!0,path:"/settings",render:function(){return c.a.createElement("div",null,"The page is being created")}}),c.a.createElement(X.b,{exact:!0,path:"/login",render:xe(ye)}),c.a.createElement(X.b,{path:"*",render:function(){return c.a.createElement("div",null,"404 not found")}}))),c.a.createElement(V,null))}}]),n}(c.a.Component),ke=Object(u.compose)(X.g,Object(Ie.a)((function(e){return{root:{maxWidth:600,margin:"0 auto",paddingBottom:100,background:"#fff",minHeight:"100vh"},main:{padding:"0 15px"}}})),Object(i.connect)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Object(S.a)());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(Ae),Le=Object(k.a)({overrides:{MuiCssBaseline:{"@global":{body:{minHeight:"100%"},"#root":{minHeight:"100%"}}}},palette:{primary:{main:"#05668D"},secondary:{main:"#0A1128"},background:{default:"#d6d6d6"}}}),Ne=function(e){return c.a.createElement(W.a,null,c.a.createElement(i.Provider,{store:A},c.a.createElement(L.a,{theme:Le},c.a.createElement(N.a,null),c.a.createElement(ke,null))))};a.a.render(c.a.createElement(Ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return m}));var r=n(11),a=n.n(r),o=n(25),c=n(7),i=n(24),u=n(63),s="AUTH_REDUCER/SET_USER_DATA",l={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},f=function(){return function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r,o,c,s,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.authMe();case 2:0===(n=e.sent).resultCode?(r=n.data,o=r.id,c=r.login,s=r.email,t(g(o,c,s,!0))):(10===n.resultCode&&t(d()),l=n.messages.length>0?n.messages[0]:"some error",t(Object(u.a)("login",{_error:l})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(e,t,n,r){return function(){var c=Object(o.a)(a.a.mark((function o(c){var s,l;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.login(e,t,n,r);case 2:0===(s=a.sent).data.resultCode?c(f()):(10===s.data.resultCode&&c(d()),l=s.data.messages.length>0?s.data.messages[0]:"some error",c(Object(u.a)("login",{_error:l})));case 4:case"end":return a.stop()}}),o)})));return function(e){return c.apply(this,arguments)}}()},d=function(){return function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.c.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(h(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},m=function(){return function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.logout();case 2:0===e.sent.data.resultCode&&t(g(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return{type:s,data:{userId:e,login:t,email:n,isAuth:r}}},h=function(e){return{type:"AUTH_REDUCER/GET_CAPTCHA_URL_SUCCESS ",data:{captchaUrl:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(c.a)(Object(c.a)(Object(c.a)({},e),t.data),{},{isAuth:t.data.isAuth});case"AUTH_REDUCER/GET_CAPTCHA_URL_SUCCESS ":return Object(c.a)(Object(c.a)({},e),{},{captchaUrl:t.data.captchaUrl});default:return e}}},71:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(146),c=n.n(o);t.a=function(e){return a.a.createElement("div",{className:c.a.wrapper},a.a.createElement("div",{className:c.a["lds-ripple"]},a.a.createElement("div",null),a.a.createElement("div",null)))}}},[[252,1,2]]]);
//# sourceMappingURL=main.7a444a11.chunk.js.map