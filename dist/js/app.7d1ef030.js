(function(t){function e(e){for(var a,r,o=e[0],l=e[1],c=e[2],d=0,f=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&f.push(n[r][0]),n[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,o=1;o<s.length;o++){var l=s[o];0!==n[l]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},n={app:0},i=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"09e3":function(t,e,s){"use strict";s("1a92")},"0d67":function(t,e,s){var a=s("ded3").default,n=s("4082").default;s("99af"),t.exports={functional:!0,render:function(t,e){var s=e._c,i=(e._v,e.data),r=e.children,o=void 0===r?[]:r,l=i.class,c=i.staticClass,u=i.style,d=i.staticStyle,f=i.attrs,v=void 0===f?{}:f,p=n(i,["class","staticClass","style","staticStyle","attrs"]);return s("svg",a({class:["svg-inline--fa fa-twitter fa-w-16",l,c],style:[u,d],attrs:Object.assign({"aria-hidden":"true","data-prefix":"fab","data-icon":"twitter",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},v)},p),o.concat([s("path",{attrs:{fill:"currentColor",d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}})]))}}},1668:function(t,e,s){t.exports=s.p+"img/coding.7ab56a95.jpg"},"1a92":function(t,e,s){},"25ca":function(t,e,s){var a={"./beautiful-stories.jpg":"3e35","./coding.jpg":"1668","./designed-for-everyone.jpg":"bcd7"};function n(t){var e=i(t);return s(e)}function i(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=i,t.exports=n,n.id="25ca"},3034:function(t,e,s){},"3e35":function(t,e,s){t.exports=s.p+"img/beautiful-stories.abd940b5.jpg"},"49d0":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-wrapper"},[s("div",{staticClass:"app"},[s("Navigation"),s("router-view"),s("Footer")],1)])},i=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",[s("nav",{staticClass:"container"},[s("div",{staticClass:"branding"},[s("router-link",{staticClass:"container",attrs:{to:{name:"Home"}}},[t._v("Umut's Blog")])],1),s("div",{staticClass:"nav-links"},[s("ul",{directives:[{name:"show",rawName:"v-show",value:!t.mobile,expression:"!mobile"}]},[s("router-link",{staticClass:"link",attrs:{to:"#"}},[t._v("Home")]),s("router-link",{staticClass:"link",attrs:{to:"#"}},[t._v("Blogs")]),s("router-link",{staticClass:"link",attrs:{to:"#"}},[t._v("Create Post")]),s("router-link",{staticClass:"link",attrs:{to:"#"}},[t._v("Login/Register")])],1)])]),s("menuIcon",{directives:[{name:"show",rawName:"v-show",value:t.mobile,expression:"mobile"}],staticClass:"menu-icon",on:{click:t.toggleMobileNav}}),s("transition",{attrs:{name:"mobile-nav"}},[s("ul",{directives:[{name:"show",rawName:"v-show",value:t.mobileNav,expression:"mobileNav"}],staticClass:"mobile-nav"},[s("router-link",{staticClass:"link",attrs:{to:"#"}},[t._v("Home")]),s("router-link",{staticClass:"link",attrs:{to:"#"}},[t._v("Blogs")]),s("router-link",{staticClass:"link",attrs:{to:"#"}},[t._v("Create Post")]),s("router-link",{staticClass:"link",attrs:{to:"#"}},[t._v("Login/Register")])],1)])],1)},o=[],l=s("b50c"),c=s.n(l),u={name:"navigation",components:{menuIcon:c.a},data:function(){return{mobile:null,mobileNav:null,windowWidth:null}},created:function(){window.addEventListener("resize",this.checkScreen),this.checkScreen()},methods:{checkScreen:function(){this.windowWidth=window.innerWidth,this.windowWidth<=750?this.mobile=!0:(this.mobile=!1,this.mobileNav=!1)},toggleMobileNav:function(){this.mobileNav=!this.mobileNav}}},d=u,f=(s("09e3"),s("2877")),v=Object(f["a"])(d,r,o,!1,null,"61bd60a9",null),p=v.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",[s("div",{staticClass:"container"},[s("div",{staticClass:"left"},[s("div",{staticClass:"col-1"},[s("router-link",{staticClass:"header",attrs:{to:{name:"home"}}},[t._v("Umut's Blog")]),s("ul",[s("li",[s("a",{attrs:{href:"#"}},[s("youTube",{staticClass:"svg-icon"})],1)]),s("li",[s("a",{attrs:{href:"#"}},[s("twitter",{staticClass:"svg-icon"})],1)]),s("li",[s("a",{attrs:{href:"#"}},[s("instagram",{staticClass:"svg-icon"})],1)]),s("li",[s("a",{attrs:{href:"#"}},[s("linkedin",{staticClass:"svg-icon"})],1)])])],1),s("div",{staticClass:"col-2"},[s("ul",[s("router-link",{staticClass:"link",attrs:{to:{name:"home"}}},[t._v("Home")]),s("router-link",{staticClass:"link",attrs:{to:{name:"blogs"}}},[t._v("Blogs")]),t.user?s("router-link",{staticClass:"link",attrs:{to:{name:"newpost"}}},[t._v("Create Post")]):t._e(),t.user?t._e():s("router-link",{staticClass:"link",attrs:{to:{name:"login"}}},[t._v("Login In / Register")])],1)])]),t._m(0)])])},h=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"right"},[s("p",[t._v("Copyright 2022 All Rights Reserved")])])}],m=s("c482"),w=s.n(m),b=s("0d67"),C=s.n(b),y=s("8a1b"),_=s.n(y),k=s("8fec"),x=s.n(k),S={name:"footer-vue",components:{youTube:w.a,twitter:C.a,instagram:_.a,linkedin:x.a}},j=S,O=(s("8ba8"),Object(f["a"])(j,g,h,!1,null,"1613dac2",null)),P=O.exports,M={name:"app",components:{Navigation:p,Footer:P},data:function(){return{}},created:function(){},mounted:function(){},methods:{},watch:{}},z=M,B=(s("5c0b"),Object(f["a"])(z,n,i,!1,null,null,null)),H=B.exports,T=s("8c4f"),N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("BlogPost",{attrs:{post:t.welcomeScreen}}),t._l(t.sampleBlogPost,(function(t,e){return s("BlogPost",{key:e,attrs:{post:t}})}))],2)},L=[],V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blog-wrapper no-user"},[a("div",{staticClass:"blog-content"},[a("div",[(t.post.welcomeScreen,a("h2",[t._v(t._s(t.post.title))])),t.post.welcomeScreen?a("p",[t._v(t._s(t.post.blogPost))]):a("p",{staticClass:"content-preview"},[t._v(t._s(t.post.blogHTML))]),t.post.welcomeScreen?a("router-link",{staticClass:"link link-light",attrs:{to:"#"}},[t._v(" Login/Register"),a("Arrow",{staticClass:"arrow arrow-light"})],1):a("router-link",{staticClass:"link",attrs:{to:"#"}},[t._v("View The Post"),a("Arrow",{staticClass:"arrow"})],1)],1)]),a("div",{staticClass:"blog-photo"},[t.post.welcomeScreen?a("img",{attrs:{src:s("25ca")("./"+t.post.photo+".jpg"),alt:""}}):a("img",{attrs:{src:s("25ca")("./"+t.post.blogCoverPhoto+".jpg"),alt:""}})])])},E=[],$=s("e08e"),R=s.n($),W={name:"blogPost",props:["post"],components:{Arrow:R.a}},F=W,U=(s("a51c"),Object(f["a"])(F,V,E,!1,null,null,null)),A=U.exports,I={name:"Home",components:{BlogPost:A},data:function(){return{welcomeScreen:{title:"Welcome!",blogPost:"Welcome Umut's Blog",welcomeScreen:!0,photo:"coding"},sampleBlogPost:[{title:"This is a Filter Title!",blogHTML:"This is a filter blog post title!",blogCoverPhoto:"beautiful-stories"},{title:"This is a Filter Title2!",blogHTML:"This is a filter blog post title!",blogCoverPhoto:"designed-for-everyone"}]}}},D=I,J=Object(f["a"])(D,N,L,!1,null,null,null),q=J.exports;a["a"].use(T["a"]);var G=[{path:"/",name:"Home",component:q}],K=new T["a"]({mode:"history",base:"/",routes:G}),Q=K,X=s("2f62");a["a"].use(X["a"]);var Y=new X["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Z=s("5873");a["a"].use(Z["a"]),a["a"].config.productionTip=!1,new a["a"]({router:Q,store:Y,render:function(t){return t(H)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";s("9c0c")},"8a1b":function(t,e,s){var a=s("ded3").default,n=s("4082").default;s("99af"),t.exports={functional:!0,render:function(t,e){var s=e._c,i=(e._v,e.data),r=e.children,o=void 0===r?[]:r,l=i.class,c=i.staticClass,u=i.style,d=i.staticStyle,f=i.attrs,v=void 0===f?{}:f,p=n(i,["class","staticClass","style","staticStyle","attrs"]);return s("svg",a({class:["svg-inline--fa fa-instagram fa-w-14",l,c],style:[u,d],attrs:Object.assign({"aria-hidden":"true","data-prefix":"fab","data-icon":"instagram",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},v)},p),o.concat([s("path",{attrs:{fill:"currentColor",d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}})]))}}},"8ba8":function(t,e,s){"use strict";s("3034")},"8fec":function(t,e,s){var a=s("ded3").default,n=s("4082").default;s("99af"),t.exports={functional:!0,render:function(t,e){var s=e._c,i=(e._v,e.data),r=e.children,o=void 0===r?[]:r,l=i.class,c=i.staticClass,u=i.style,d=i.staticStyle,f=i.attrs,v=void 0===f?{}:f,p=n(i,["class","staticClass","style","staticStyle","attrs"]);return s("svg",a({class:["svg-inline--fa fa-linkedin fa-w-14",l,c],style:[u,d],attrs:Object.assign({"aria-hidden":"true","data-prefix":"fab","data-icon":"linkedin",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},v)},p),o.concat([s("path",{attrs:{fill:"currentColor",d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}})]))}}},"9c0c":function(t,e,s){},a51c:function(t,e,s){"use strict";s("49d0")},b50c:function(t,e,s){var a=s("ded3").default,n=s("4082").default;s("99af"),t.exports={functional:!0,render:function(t,e){var s=e._c,i=(e._v,e.data),r=e.children,o=void 0===r?[]:r,l=i.class,c=i.staticClass,u=i.style,d=i.staticStyle,f=i.attrs,v=void 0===f?{}:f,p=n(i,["class","staticClass","style","staticStyle","attrs"]);return s("svg",a({class:["svg-inline--fa fa-bars fa-w-14",l,c],style:[u,d],attrs:Object.assign({"aria-hidden":"true","data-prefix":"far","data-icon":"bars",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},v)},p),o.concat([s("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})]))}}},bcd7:function(t,e,s){t.exports=s.p+"img/designed-for-everyone.e5c67be6.jpg"},c482:function(t,e,s){var a=s("ded3").default,n=s("4082").default;s("99af"),t.exports={functional:!0,render:function(t,e){var s=e._c,i=(e._v,e.data),r=e.children,o=void 0===r?[]:r,l=i.class,c=i.staticClass,u=i.style,d=i.staticStyle,f=i.attrs,v=void 0===f?{}:f,p=n(i,["class","staticClass","style","staticStyle","attrs"]);return s("svg",a({class:["svg-inline--fa fa-youtube fa-w-18",l,c],style:[u,d],attrs:Object.assign({"aria-hidden":"true","data-prefix":"fab","data-icon":"youtube",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},v)},p),o.concat([s("path",{attrs:{fill:"currentColor",d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"}})]))}}},e08e:function(t,e,s){var a=s("ded3").default,n=s("4082").default;s("99af"),t.exports={functional:!0,render:function(t,e){var s=e._c,i=(e._v,e.data),r=e.children,o=void 0===r?[]:r,l=i.class,c=i.staticClass,u=i.style,d=i.staticStyle,f=i.attrs,v=void 0===f?{}:f,p=n(i,["class","staticClass","style","staticStyle","attrs"]);return s("svg",a({class:["svg-inline--fa fa-arrow-right fa-w-14",l,c],style:[u,d],attrs:Object.assign({"aria-hidden":"true","data-prefix":"fal","data-icon":"arrow-right",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},v)},p),o.concat([s("path",{attrs:{fill:"currentColor",d:"M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"}})]))}}}});
//# sourceMappingURL=app.7d1ef030.js.map