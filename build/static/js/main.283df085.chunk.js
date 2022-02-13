(this["webpackJsonpproject-3-frontend"]=this["webpackJsonpproject-3-frontend"]||[]).push([[0],{238:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(78),r=c.n(n),A=(c(97),c(7)),l=c(2),i=c(3),o=c(79),j=c.p+"static/media/logo.7fc8e315.jpg";function d(){return window.localStorage.getItem("token")}function b(){return window.localStorage.removeItem("token")}function m(){var e=d();if(!e)return!1;var t=e.split(".");return t.length<3?(b(),!1):JSON.parse(atob(t[1]))}function u(){var e=m();return!!e&&Math.round(Date.now()/1e3)<e.exp}function h(e){var t=m();return!!t&&(!!u()&&e===t.sub)}function x(){return window.localStorage.getItem("profileId")}var O=c(0);var v=function(){var e=s.a.useState(!1),t=Object(i.a)(e,2),c=t[0],a=t[1],n=u(),r=Object(l.g)(),d=function(){return a(!c)},m=function(){b(),r("/")};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("nav",{className:"nav nav-toggle",children:[Object(O.jsx)(A.b,{to:"/",children:Object(O.jsx)("img",{src:j,className:"logo"})}),Object(O.jsxs)(A.b,{to:"/",className:"brand-name",children:[Object(O.jsx)("span",{className:"title-word-4",children:"Honey"}),Object(O.jsx)("span",{className:"title-word-5",children:"&"}),Object(O.jsx)("span",{className:"title-word-6",children:"Thyme"})]}),Object(O.jsx)("div",{className:"nav-buttons",children:n?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("button",{className:"cocktails-button",children:Object(O.jsx)("a",{href:"/cocktails",className:"nav-button-dark",children:"Cocktails"})}),Object(O.jsx)("button",{className:"profile-button",children:Object(O.jsx)("a",{href:"/profile",className:"nav-button-dark",children:"Profile"})}),Object(O.jsx)("button",{className:"logout-button",onClick:m,children:Object(O.jsx)("a",{href:"/",className:"nav-button-light",children:"Log out"})})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("button",{className:"login-button",children:Object(O.jsx)("a",{href:"/login",className:"nav-button-dark",children:"Login"})}),Object(O.jsx)("button",{className:"register-button",children:Object(O.jsx)("a",{href:"/register",className:"nav-button-light",children:"Register"})})]})})]}),Object(O.jsxs)("nav",{className:"nav burger-toggle",children:[Object(O.jsx)(A.b,{to:"/",children:Object(O.jsx)("img",{src:j,className:"logo"})}),Object(O.jsx)(A.b,{to:"/",className:"brand-name"}),Object(O.jsx)("div",{className:"burger-icon",onClick:d,children:Object(O.jsx)(o.a,{toggled:c,toggle:a})}),Object(O.jsx)("div",{className:c?"side-nav-menu-container active":"side-nav-menu-container",children:Object(O.jsx)("div",{onClick:d,children:Object(O.jsx)("div",{className:"nav-buttons",children:Object(O.jsx)("ul",{children:n?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("li",{className:"li-buttons",children:Object(O.jsx)("a",{href:"/cocktails",className:"li-hrefs",children:"Cocktails"})}),Object(O.jsx)("li",{className:"li-buttons",children:Object(O.jsx)("a",{href:"/profile",className:"li-hrefs",children:"Profile"})}),Object(O.jsx)("li",{className:"li-buttons",onClick:m,children:Object(O.jsx)("a",{href:"/",className:"li-hrefs",children:"Log out"})})]}):Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"auth-burger",children:[Object(O.jsx)("li",{className:"li-buttons",children:Object(O.jsx)("a",{href:"/login",className:"li-hrefs",children:"Login"})}),Object(O.jsx)("li",{className:"li-buttons",children:Object(O.jsx)("a",{href:"/register",className:"li-hrefs",children:"Register"})})]})})})})})})]})]})},p=c(5),g=c(4),f=c.n(g),N=c(19),w=c.n(N),k=c(8),y=c.n(k),L="https://honeyandthyme.herokuapp.com/api";function C(){return{headers:{Authorization:"Bearer ".concat(d())}}}function S(){return y.a.get("".concat(L,"/cocktails/"))}function P(e){return y.a.get("".concat(L,"/cocktails/").concat(e))}function D(e){return y.a.delete("".concat(L,"/cocktails/").concat(e),C())}function I(e,t){return y.a.post("".concat(L,"/cocktails/").concat(e,"/saved/"),t,C())}function B(e,t,c){return y.a.delete("".concat(L,"/cocktails/").concat(e,"/saved/").concat(t),C(),c)}function F(e){return console.log(e),y.a.post("".concat(L,"/register/"),e)}function H(e){return console.log(e),y.a.post("".concat(L,"/login/"),e)}function W(e,t){return y.a.post("".concat(L,"/cocktails/").concat(e,"/comments/"),t,C())}function Q(e,t){return y.a.delete("".concat(L,"/cocktails/").concat(e,"/comments/").concat(t),C())}var T=function(){return Object(O.jsx)("div",{className:"error-title",children:Object(O.jsx)("h2",{children:"Something went wrong"})})};var E=function(){return Object(O.jsx)("div",{className:"spinner-border",role:"status",children:Object(O.jsx)("span",{className:"visually-hidden",children:"Loading..."})})};var X=function(e){var t=e.image,c=e.name,a=e.cocktailId;return Object(O.jsx)("div",{children:Object(O.jsx)(A.b,{to:"/cocktails/".concat(a),children:Object(O.jsx)("img",{src:t,className:"photo",alt:c})})})};var U=function(e){var t=e.trigger,c=e.setTrigger;return Object(O.jsx)("div",{children:t?Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"popup",children:Object(O.jsxs)("div",{className:"popup-card text-center",children:[Object(O.jsx)("div",{className:"close-btn-area",children:Object(O.jsx)("a",{className:"close",onClick:function(){return c(!1)},children:"x"})}),Object(O.jsx)("div",{className:"center",children:Object(O.jsx)("img",{src:j,className:"register-logo"})}),Object(O.jsx)("div",{className:"card-header",children:Object(O.jsx)("h1",{className:"popup-header",children:"Welcome To Honey&Thyme"})}),Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsx)("div",{className:"popup-card-title",children:Object(O.jsx)("h2",{className:"find-here",children:"Find your new cocktail recipe here!"})}),Object(O.jsxs)("div",{className:"popup-btns-container",children:[Object(O.jsx)("div",{children:Object(O.jsx)("button",{className:"login-button",children:Object(O.jsx)("a",{href:"/login",className:"nav-button-dark",children:"Login"})})}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{className:"register-button",children:Object(O.jsx)("a",{href:"/register",className:"nav-button-light",children:"Register"})})})]})]})]})})}):""})};var V=function(){var e=a.useState(null),t=Object(i.a)(e,2),c=t[0],s=t[1],n=a.useState(!1),r=Object(i.a)(n,2),A=r[0],l=r[1],o=a.useState(!1),j=Object(i.a)(o,2),d=j[0],b=j[1],m=!c&&!A;return a.useEffect((function(){var e=function(){var e=Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S();case 3:t=e.sent,s(t.data),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),l(!0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),a.useEffect((function(){setTimeout((function(){!0===u()?b(!1):b(!0)}),6e3)}),[]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"mask d-flex align-items-center h-100 gradient-custom-3",children:Object(O.jsx)("div",{className:"container h-100",children:Object(O.jsxs)("div",{className:"landing",children:[Object(O.jsxs)("h1",{className:"landing-title text-center",children:[Object(O.jsx)("span",{className:"title-word title-word-1",children:"Honey"}),Object(O.jsx)("span",{className:"title-word title-word-2",children:"&"}),Object(O.jsx)("span",{className:"title-word title-word-3",children:"Thyme"})]}),Object(O.jsx)("h4",{className:"landing-subtitle text-center",children:"get your next cocktail idea"}),Object(O.jsxs)("h2",{className:"landing-title text-center",children:[Object(O.jsx)("span",{className:"title-word title-word-2",children:"."}),Object(O.jsx)("span",{className:"title-word title-word-1",children:"."}),Object(O.jsx)("span",{className:"title-word title-word-3",children:"."})]})]})})}),Object(O.jsxs)(w.a,{className:"photo-list-1",elementType:"ul",options:{fitWidth:!1,columnWidth:200,gutter:30,itemSelector:".photo-item"},disableImagesLoaded:!1,updateOnEachImageLoad:!1,children:[A&&Object(O.jsx)(T,{}),m&&Object(O.jsx)(E,{}),c&&c.map((function(e){return Object(O.jsx)("li",{className:"photo-item",children:Object(O.jsx)(X,{image:e.image,cocktailId:e.id},e.id)},e.id)}))]}),Object(O.jsx)(U,{trigger:d,setTrigger:b,className:"popup-home"})]})};var J=function(){var e=s.a.useState(null),t=Object(i.a)(e,2),c=t[0],a=t[1];return s.a.useEffect((function(){var e=function(){var e=Object(p.a)(f.a.mark((function e(){var t,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=x(),e.next=4,s=t,y.a.get("".concat(L,"/profile/").concat(s,"/"),C());case 4:c=e.sent,console.log(c.data),a(c.data),console.log(c.data.url),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}var s}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"back-button-area",children:Object(O.jsx)("button",{type:"button",className:"back-button",children:Object(O.jsx)("a",{href:"javascript:window.history.back();",className:"back-button-light",children:"Back"})})}),Object(O.jsx)("div",{className:"container mt-6",children:Object(O.jsx)("div",{className:"row d-flex justify-content-center",children:Object(O.jsx)("div",{className:"col-md-12",children:Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"text-center",children:[Object(O.jsx)("div",{className:"text-center mt-3",children:Object(O.jsx)("div",{className:"profile-image",children:c&&Object(O.jsx)("img",{src:c.profileImage,alt:"profile image",className:"rounded-circle"})})}),Object(O.jsx)("div",{className:"px-4 mt-1",children:Object(O.jsx)("h5",{className:"username",children:c&&c.username})}),Object(O.jsx)("div",{className:"hr-div",children:Object(O.jsx)("hr",{className:"hr"})})]})})})})})]}),Object(O.jsx)("div",{className:"section saved-title",children:Object(O.jsx)("p",{className:"saved-title1",children:"Your Saved Cocktails"})}),Object(O.jsxs)("div",{className:"mask d-flex align-items-center h-100 gradient-custom-3",children:[Object(O.jsx)("div",{className:"line-1",children:Object(O.jsx)("hr",{})}),Object(O.jsx)("div",{className:"container-xl h-100",children:Object(O.jsx)("div",{className:"photo-list-2",children:Object(O.jsx)(w.a,{className:"photo-list",elementType:"ul",options:{fitWidth:!1,columnWidth:200,gutter:30,itemSelector:".photo-item"},disableImagesLoaded:!1,updateOnEachImageLoad:!1,children:c&&c.savedCocktail.length>0&&c.savedCocktail.map((function(e){return Object(O.jsx)("li",{className:"photo-item",children:Object(O.jsx)(X,{className:"photo-list-3",image:e.cocktail.image,cocktailId:e.cocktail.id,profileid:e.owner},e.id)},e.id)}))})})})]})]})},Z=c(18),z=c(6),R={username:"",password:""};var q=function(){var e=Object(l.g)(),t=s.a.useState(R),c=Object(i.a)(t,2),a=c[0],n=c[1],r=s.a.useState(!1),A=Object(i.a)(r,2),o=A[0],d=A[1],b=function(e){n(Object(z.a)(Object(z.a)({},a),{},Object(Z.a)({},e.target.name,e.target.value)))};console.log(a);var m=function(){var t=Object(p.a)(f.a.mark((function t(c){var s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),console.log(a),t.prev=2,console.log(a),t.next=6,H(a);case 6:s=t.sent,console.log(s.data.token),console.log("hello"),console.log(s.data),r=s.data.id,window.localStorage.setItem("profileId",r),n=s.data.token,console.log(n),window.localStorage.setItem("token",n),e("/cocktails"),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(2),d(!0);case 18:case"end":return t.stop()}var n,r}),t,null,[[2,15]])})));return function(e){return t.apply(this,arguments)}}();return console.log(a),Object(O.jsx)("div",{className:"mask d-flex align-items-center h-100 gradient-custom-3",children:Object(O.jsx)("div",{className:"container h-100",children:Object(O.jsx)("div",{className:"row d-flex justify-content-center align-items-center h-100",children:Object(O.jsx)("div",{className:"col-12 col-md-8 col-lg-6 col-xl-7",children:Object(O.jsx)("div",{className:"login-register-card",children:Object(O.jsx)("div",{className:"card",children:Object(O.jsxs)("div",{className:"card-body p-5",children:[Object(O.jsx)("div",{className:"center",children:Object(O.jsx)("img",{src:j,className:"register-logo"})}),Object(O.jsx)("h5",{className:"login-title text-center",children:"Welcome Back"}),Object(O.jsxs)("form",{onSubmit:m,children:[Object(O.jsxs)("div",{className:"form-outline mb-2",children:[Object(O.jsx)("input",{type:"username",name:"username",id:"form3Example3cg",className:"form-control form-control-lg",onChange:b}),Object(O.jsx)("label",{className:"form-label",children:"Username"})]}),Object(O.jsxs)("div",{className:"form-outline mb-2",children:[Object(O.jsx)("input",{type:"password",name:"password",id:"form3Example4cg",className:"form-control form-control-lg",onChange:b}),Object(O.jsx)("label",{className:"form-label",children:"Password"})]}),o&&Object(O.jsx)("p",{children:"Password or Email were incorrect."}),Object(O.jsx)("div",{className:"d-flex justify-content-center",children:Object(O.jsx)("button",{type:"submit",className:"red-button",children:"Login"})}),Object(O.jsxs)("p",{className:"text-center mt-5 mb-0 already",children:["Not a member yet? ",Object(O.jsx)("button",{type:"button",className:"white-button",children:Object(O.jsx)("a",{href:"/register",className:"white-button-light",children:"Register"})})]})]})]})})})})})})})},G={username:"",profileImage:"",email:"",password:"",passwordConfirmation:""};var M=function(){var e=Object(l.g)(),t=s.a.useState(G),c=Object(i.a)(t,2),a=c[0],n=c[1],r=s.a.useState(!1),A=Object(i.a)(r,2),o=A[0],d=A[1],b=function(e){n(Object(z.a)(Object(z.a)({},a),{},Object(Z.a)({},e.target.name,e.target.value)))},m=function(){var t=Object(p.a)(f.a.mark((function t(c){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.prev=1,t.next=4,F(a);case 4:e("/login"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}();console.log(a);var u=function(){var e=Object(p.a)(f.a.mark((function e(t){var c,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=new FormData).append("file",t.target.files[0]),c.append("upload_preset","k6rjoaav"),d(!0),e.next=6,y.a.post("https://api.cloudinary.com/v1_1/esin/image/upload",c);case 6:s=e.sent,n(Object(z.a)(Object(z.a)({},a),{},{profileImage:s.data.url})),console.log(s.data.url),d(!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"mask d-flex align-items-center h-100 gradient-custom-3",children:Object(O.jsx)("div",{className:"container h-100",children:Object(O.jsx)("div",{className:"row d-flex justify-content-center align-items-center h-100",children:Object(O.jsx)("div",{className:"col-12 col-md-8 col-lg-6 col-xl-7",children:Object(O.jsx)("div",{className:"login-register-card",children:Object(O.jsx)("div",{className:"card",children:Object(O.jsxs)("div",{className:"card-body p-5",children:[Object(O.jsx)("div",{className:"center",children:Object(O.jsx)("img",{src:j,className:"register-logo"})}),Object(O.jsx)("h5",{className:"register-title text-center",children:"Welcome to Honey & Thyme"}),Object(O.jsx)("p",{className:"register-subtitle text-center",children:"Find new cocktails to try"}),Object(O.jsxs)("form",{onSubmit:m,children:[Object(O.jsxs)("div",{className:"form-outline mb-2",children:[Object(O.jsx)("input",{type:"text",name:"username",id:"form3Example1cg",className:"form-control form-control-lg",onChange:b}),Object(O.jsx)("label",{className:"form-label",children:"Username"})]}),Object(O.jsxs)("div",{className:"form-outline mb-2",children:[o&&Object(O.jsx)(E,{}),Object(O.jsx)("input",{type:"file",name:"profileImage",id:"form3Example3cg",accept:"image/png, image/jpg",className:"form-control form-control-lg",onChange:u}),Object(O.jsx)("label",{className:"form-label",children:"Profile Image"})]}),Object(O.jsxs)("div",{className:"form-outline mb-2",children:[Object(O.jsx)("input",{type:"email",name:"email",id:"form3Example3cg",className:"form-control form-control-lg",onChange:b}),Object(O.jsx)("label",{className:"form-label",children:"Your Email"})]}),Object(O.jsxs)("div",{className:"form-outline mb-2",children:[Object(O.jsx)("input",{type:"password",name:"password",id:"form3Example4cg",className:"form-control form-control-lg",onChange:b}),Object(O.jsx)("label",{className:"form-label",children:"Password"})]}),Object(O.jsxs)("div",{className:"form-outline mb-2",children:[Object(O.jsx)("input",{type:"password",name:"passwordConfirmation",id:"form3Example4cdg",className:"form-control form-control-lg",onChange:b}),Object(O.jsx)("label",{className:"form-label",children:"Repeat password"})]}),Object(O.jsx)("div",{className:"d-flex justify-content-center",children:Object(O.jsx)("button",{type:"submit",className:"red-button",children:"Register"})}),Object(O.jsxs)("p",{className:"text-center mt-5 mb-0 already",children:["Already a member? ",Object(O.jsx)("button",{type:"button",className:"white-button",children:Object(O.jsx)("a",{href:"/login",className:"white-button-light",children:"Login"})})]})]})]})})})})})})})};var K=function(){var e,t=s.a.useState(null),c=Object(i.a)(t,2),a=c[0],n=c[1],r=s.a.useState(!1),A=Object(i.a)(r,2),l=A[0],o=A[1],j=s.a.useState(""),d=Object(i.a)(j,2),b=d[0],m=d[1],u=!a&&!l;return s.a.useEffect((function(){var e=function(){var e=Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S();case 3:t=e.sent,n(t.data),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),o(!0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),console.log(a),console.log(b),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"bar",children:Object(O.jsx)("input",{className:"example",type:"search",placeholder:"Search cocktails...",onChange:function(e){e.preventDefault(),m(e.target.value)}})}),Object(O.jsx)("div",{children:Object(O.jsxs)(w.a,{className:"photo-list",elementType:"ul",options:{fitWidth:!1,columnWidth:200,gutter:30,itemSelector:".photo-item"},disableImagesLoaded:!1,updateOnEachImageLoad:!1,children:[l&&Object(O.jsx)(T,{}),u&&Object(O.jsx)(E,{}),a&&(e=a,e.filter((function(e){return e.name.toLowerCase().includes(b.toLowerCase())}))).map((function(e){return Object(O.jsx)("li",{className:"photo-item",children:Object(O.jsx)(X,{image:e.image,cocktailId:e.id},e.id)},e.id)}))]})})]})};var Y=function(e){var t=e.content,c=e.owner,a=e.handleDelete;return Object(O.jsx)("div",{children:Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:"right",children:Object(O.jsxs)("div",{className:"senderBubble",children:[Object(O.jsxs)("p",{className:"sender",children:[Object(O.jsx)("strong",{children:c.username}),Object(O.jsx)("br",{}),t]}),Object(O.jsx)("div",{className:"delete-div",children:h(c.id)&&Object(O.jsx)("a",{className:"delete",onClick:a,children:"x"})})]})})})})};var _=function(e){var t=e.fetchCocktail,c=e.setCocktail,a=s.a.useState(""),n=Object(i.a)(a,2),r=n[0],A=n[1],o=s.a.useState(!1),j=Object(i.a)(o,2),d=j[0],b=j[1],m=Object(l.h)().cocktailId,u=x();console.log(d);var h={content:r,cocktail:m,owner:u};console.log(typeof m,typeof u),console.log(m,u);var v=function(){var e=Object(p.a)(f.a.mark((function e(a){var s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,W(m,h);case 4:return e.next=6,P(m);case 6:s=e.sent,c(s.data),A(""),t(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),b(!0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"message-area",children:Object(O.jsx)("form",{onSubmit:v,children:Object(O.jsxs)("div",{className:"field",children:[Object(O.jsx)("div",{className:"control1",children:Object(O.jsx)("textarea",{className:"textarea border",name:"content",onChange:function(e){A(e.target.value),console.log(e.target.value)},value:r})}),Object(O.jsx)("div",{className:"control2",children:Object(O.jsx)("button",{type:"login-button",className:"message-button",children:"Comment"})})]})})})};var $=function(){var e=Object(l.h)().cocktailId,t=x(),c={cocktail:e,owner:t},a=s.a.useState(null),n=Object(i.a)(a,2),r=n[0],o=n[1],j=s.a.useState(!1),d=Object(i.a)(j,2),b=d[0],m=d[1],v=s.a.useState(!1),g=Object(i.a)(v,2),N=g[0],w=g[1],k=s.a.useState(null),y=Object(i.a)(k,2),L=y[0],C=y[1],S=!r&&!b,F=u();console.log(F);var H=s.a.useCallback((function(){var c=function(){var c=Object(p.a)(f.a.mark((function c(){var a;return f.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,P(e);case 3:a=c.sent,console.log(a.data),o(a.data),a.data.savedBy.map((function(e){String(e.owner.id)===t&&(w(!0),C(e.id)),console.log(e)})),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(0),console.log(c.t0);case 12:case"end":return c.stop()}}),c,null,[[0,9]])})));return function(){return c.apply(this,arguments)}}();c()}),[e,t]);s.a.useEffect((function(){H()}),[e,H]);var W=function(){var t=Object(p.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm("Do you want to delete this cocktail?")){t.next=10;break}return t.prev=1,t.next=4,D(e);case 4:l.a.push("/cocktails"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(){return t.apply(this,arguments)}}(),X=function(){var t=Object(p.a)(f.a.mark((function t(c){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm("Do you want to delete this comment?")){t.next=10;break}return t.prev=1,t.next=4,Q(e,c);case 4:H(),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),m(!0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}(),U=function(){var t=Object(p.a)(f.a.mark((function t(a){var s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,I(e,c);case 4:s=t.sent,console.log("hi",s.data.id),C(s.data.id),w(!0),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),m(!0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}(),V=function(){var t=Object(p.a)(f.a.mark((function t(a){var s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,B(e,L,c);case 4:s=t.sent,console.log(s.data),w(!1),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"back-button-area",children:Object(O.jsx)("button",{type:"button",className:"back-button",children:Object(O.jsx)("a",{href:"javascript:window.history.back();",className:"back-button-light",children:"Back"})})}),Object(O.jsx)("div",{className:"card mb-3",children:Object(O.jsxs)("div",{className:"row g-0",children:[b&&Object(O.jsx)(T,{}),S&&Object(O.jsx)(E,{}),r&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"col-md-6",children:Object(O.jsx)("img",{src:r.image,className:"img-fluid",alt:r.name})}),Object(O.jsx)("div",{className:"col-md-6",children:Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsx)("div",{className:"save-button-area",children:N?Object(O.jsx)("button",{type:"save-button",className:"message-button",onClick:V,children:"Remove Save"}):Object(O.jsx)("button",{type:"save-button",className:"message-button",onClick:U,children:"Save"})}),Object(O.jsx)("p",{className:"card-title",children:r.name}),Object(O.jsx)("p",{className:"card-text",children:r.about}),Object(O.jsxs)("p",{className:"card-text",children:[Object(O.jsx)("strong",{children:"Serves"})," ",r.serves]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("strong",{children:"Ingredients"})," "]}),Object(O.jsx)("ul",{className:"card-text",children:Object(O.jsx)("div",{className:"container ingredients",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"col",children:[Object(O.jsxs)("div",{className:"ingredients-all",children:[Object(O.jsx)("p",{className:"ingredients-title",children:"Spirit"}),Object(O.jsx)("div",{className:"ingredients-each",children:r.ingredientsSpirit.map((function(e){return Object(O.jsx)("li",{children:e},e)}))})]}),Object(O.jsxs)("div",{className:"ingredients-all",children:[Object(O.jsx)("p",{className:"ingredients-title",children:"Drinks"}),Object(O.jsx)("div",{className:"ingredients-each",children:r.ingredientsDrinks.map((function(e){return Object(O.jsx)("li",{children:e},e)}))})]})]}),Object(O.jsxs)("div",{className:"col",children:[Object(O.jsxs)("div",{className:"ingredients-all",children:[Object(O.jsx)("p",{className:"ingredients-title",children:"Produce"}),Object(O.jsx)("div",{className:"ingredients-each",children:r.ingredientsProduce.map((function(e){return Object(O.jsx)("li",{children:e},e)}))})]}),Object(O.jsxs)("div",{className:"ingredients-all",children:[Object(O.jsx)("p",{className:"ingredients-title",children:"Other"}),Object(O.jsx)("div",{className:"ingredients-each",children:r.ingredientsOther.map((function(e){return Object(O.jsx)("li",{children:e},e)}))})]})]})]})})}),Object(O.jsxs)("div",{className:"recipe-container",children:[Object(O.jsx)("p",{children:Object(O.jsx)("strong",{children:"Recipe"})}),Object(O.jsx)("div",{className:"recipe",children:r.recipe.map((function(e){return Object(O.jsxs)("li",{children:[" ",e]},e)}))})]})]})}),h(r.owner)&&Object(O.jsxs)("div",{className:"buttons",children:[Object(O.jsx)(A.b,{to:"/cocktails/".concat(e,"/edit"),children:"Edit this Cocktail"}),Object(O.jsx)("button",{onClick:W,children:"Delete this Cocktail"})]}),Object(O.jsxs)("div",{className:"column",children:[Object(O.jsx)("div",{className:"comments-area",children:Object(O.jsx)("div",{className:"comments",children:Object(O.jsxs)("h2",{className:"comments-title",children:["Comments ",Object(O.jsx)("img",{src:"data:image/png;base64,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",className:"arrow"})]})})}),r.comments.map((function(e){return Object(O.jsx)(Y,{content:e.content,owner:e.owner,handleDelete:function(){return X(e.id)}},e.id)}))]}),u()&&Object(O.jsx)(_,{fetchcocktail:H,cocktailId:e,setCocktail:o})]})]})})]})};var ee=function(){return Object(O.jsxs)(A.a,{children:[Object(O.jsx)(v,{}),Object(O.jsxs)(l.d,{children:[Object(O.jsx)(l.b,{exact:!0,path:"/",element:Object(O.jsx)(V,{})}),Object(O.jsx)(l.b,{path:"/cocktails",element:Object(O.jsx)(K,{})}),Object(O.jsx)(l.b,{path:"/cocktails/:cocktailId",element:Object(O.jsx)($,{})}),Object(O.jsx)(l.b,{path:"/profile",element:Object(O.jsx)(J,{})}),Object(O.jsx)(l.b,{path:"/register",element:Object(O.jsx)(M,{})}),Object(O.jsx)(l.b,{path:"/login",element:Object(O.jsx)(q,{})})]})]})};r.a.render(Object(O.jsx)(ee,{}),document.getElementById("root"))},97:function(e,t,c){}},[[238,1,2]]]);
//# sourceMappingURL=main.283df085.chunk.js.map