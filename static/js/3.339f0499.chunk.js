(this.webpackJsonpreact_js=this.webpackJsonpreact_js||[]).push([[3],{295:function(e,t,a){},296:function(e,t,a){},297:function(e,t,a){e.exports={profile:"Profile_profile__3VnSr"}},298:function(e,t,a){"use strict";a.r(t);var n=a(37),o=a(38),r=a(40),l=a(39),u=a(0),s=a.n(u),i=a(295),c=a.n(i);var f=function(e){return s.a.createElement("div",{className:c.a.avatar},s.a.createElement("img",{src:e.photos.small,alt:"ava "}))},m=a(296),p=a.n(m),d=s.a.memo((function(e){return s.a.createElement("div",{className:p.a.post},s.a.createElement("p",null,e.text),s.a.createElement("span",null,e.likesCount))})),E=function(e){return s.a.createElement("div",null,s.a.createElement("h3",null,"MyPosts"),e.Posts)},b=a(15),v=Object(b.b)((function(e){return{Posts:e.ProfilePage.PostsData.map((function(e){return s.a.createElement(d,{key:e.id,text:e.message,likesCount:e.likesCount})}))}}),null)(E),h=a(297),P=a.n(h),g=a(96),j=a(89),O=a(128),S=a(86),y=a(34),k=Object(S.a)(10),N=Object(O.a)({form:"writeNewPost"})((function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"newPostText"},"Write your new post!")),s.a.createElement("div",null,s.a.createElement(j.a,{component:y.b,name:"newPostText",validate:[S.b,k]}))),s.a.createElement("button",{type:"submit"},"Send new post"))})),w=function(e){return s.a.createElement("div",{style:{margin:"20px"}},s.a.createElement(N,{onSubmit:function(t){console.log(t),e.addPost(t.newPostText)}}))},C=Object(b.b)((function(e){return{}}),{addPost:g.a})(w),M=a(42),x=a(129),_=function(e){return s.a.createElement("div",null,s.a.createElement("div",{className:"status",style:{fontFamily:"Roboto",color:"tomato"}},!e.editMode&&s.a.createElement("div",null,s.a.createElement("span",{onDoubleClick:function(){e.setEditMode(!0)}},e.status||"-----")),e.editMode&&s.a.createElement("input",{autoFocus:!0,onBlur:function(){return e.setStatus(e.status)},value:e.status,onChange:function(t){e.onChangeStatus(t.target.value)}})),s.a.createElement("div",{className:"fullName"},e.profile.fullName),s.a.createElement("div",{className:"aboutMe"},e.profile.aboutMe),s.a.createElement("div",null,e.profile.lookingForAJob&&e.profile.lookingForAJobDescription),s.a.createElement("div",null,0!==e.profile.contacts.length&&"\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0435\u0442\u0438"),0!==e.profile.contacts.length&&Object.values(e.profile.contacts).filter((function(e){return e})).map((function(e){return s.a.createElement("div",{className:"Contacts__item",key:e},e)})))},A=Object(b.b)((function(e){return{profile:e.ProfilePage.profile,status:e.ProfilePage.status}}),{getStatus:g.c,updateStatus:g.e})((function(e){var t=Object(u.useState)(!1),a=Object(x.a)(t,2),n=a[0],o=a[1],r=Object(u.useState)(e.status),l=Object(x.a)(r,2),i=l[0],c=l[1];Object(u.useEffect)((function(){e.getStatus(e.profile.userId),c(e.status)}),[e.status]);return s.a.createElement(_,{profile:e.profile,status:i,editMode:n,onChangeStatus:function(e){c(e)},setStatus:function(){e.updateStatus(i),o(!1)},setEditMode:function(e){o(e)}})})),F=function(e){return e.profile?s.a.createElement("div",{className:P.a.profile},s.a.createElement(f,{photos:e.profile.photos}),s.a.createElement(A,{profile:e.profile,status:e.status}),s.a.createElement(C,null),s.a.createElement(v,null)):s.a.createElement(M.a,null)},I=a(10),D=a(8),J=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;this.props.getUserProfile(e||this.props.myId)}},{key:"render",value:function(){return s.a.createElement(F,this.props)}}]),a}(s.a.Component);t.default=Object(D.d)(Object(b.b)((function(e){return{profile:e.ProfilePage.profile,status:e.ProfilePage.status,myId:e.Auth.isAuth?e.Auth.userId:void 0}}),{getUserProfile:g.d,getStatus:g.c}),I.f)(J)}}]);
//# sourceMappingURL=3.339f0499.chunk.js.map