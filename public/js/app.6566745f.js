(function(t){function e(e){for(var s,a,i=e[0],u=e[1],c=e[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&f.push(n[a][0]),n[a]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);h&&h(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],s=!0,a=1;a<r.length;a++){var u=r[a];0!==n[u]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var s={},n={app:0},o=[];function a(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"9b4670c0"}[t]+".js"}function i(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r=n[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,s){r=n[t]=[e,s]}));e.push(r[2]=s);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=a(t);var c=new Error;o=function(e){u.onerror=u.onload=null,clearTimeout(l);var r=n[t];if(0!==r){if(r){var s=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",c.name="ChunkLoadError",c.type=s,c.request=o,r[1](c)}n[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=s,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(r,s,function(e){return t[e]}.bind(null,s));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var h=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},1:function(t,e){},"2a9b":function(t,e,r){"use strict";var s=r("ca3a"),n=r.n(s);n.a},"303e":function(t,e,r){"use strict";var s=r("6a94"),n=r.n(s);n.a},"3f05":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[null==t.$root.currentUser?r("selectUser",{attrs:{userlist:t.userlist}}):t._e(),t.ischat?t._e():r("userListC",{attrs:{islogin:t.isLogin,users:t.users,selectuser:t.selectuser,unreadlist:t.unreadlist}}),t.ischat?r("chatUser",{attrs:{touser:t.touser,closechat:t.closechat,newMsg:t.newMsg}}):t._e()],1)},o=[],a=(r("4160"),r("a630"),r("a434"),r("3ca3"),r("159b"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"selectUser"},[r("h1",[t._v("选择你聊天的角色")]),r("div",{staticClass:"list"},t._l(t.userlist,(function(e,s){return r("div",{key:s,staticClass:"item",on:{click:function(r){return t.selectEvent(e)}}},[r("img",{attrs:{src:e.headerImg}}),r("span",[t._v(t._s(e.userName))])])})),0)])}),i=[],u=r("ef27"),c=r.n(u),l=c.a.connect("http://localhost:3000");console.log(l),l.on("connect",(function(){console.log("建立起链接")}));var h=l,f={props:["userlist"],methods:{selectEvent:function(t){this.$root.currentUser=t,localStorage.currentUser=JSON.stringify(t),console.log(h),h.emit("login",t)}}},v=f,d=(r("2a9b"),r("2877")),p=Object(d["a"])(v,a,i,!1,null,"f5bb839c",null),g=p.exports,m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"userlist"},[r("div",{staticClass:"nav"},[r("div",{staticClass:"headerimg"},[null!=t.$root.currentUser?r("img",{class:{online:t.islogin},attrs:{src:t.$root.currentUser.headerImg}}):t._e()]),r("div",{staticClass:"title"},[t._v("消息")]),r("div",{staticClass:"headerimg"})]),r("div",{staticClass:"user"},t._l(t.friend,(function(e,s){return r("div",{key:s,staticClass:"useritem",on:{click:function(r){return t.selectuser(e)}}},[r("div",{staticClass:"left"},[r("div",{staticClass:"headerimg"},[r("img",{class:{online:e.isOnline},attrs:{src:e.headerImg,alt:""}}),r("div",{class:{unread:t.unreadlist.includes(e.id)}})])]),r("div",{staticClass:"right"},[r("span",{staticClass:"username"},[t._v(t._s(e.userName))]),r("span",{staticClass:"message"})])])})),0)])},_=[],b=(r("4de4"),{props:["islogin","users","selectuser","unreadlist"],computed:{friend:function(){var t=this.$root.currentUser;if(null==t)return[];var e=t.id;return null==e?[]:this.users.filter((function(t){return t.id!=e}))}}}),k=b,y=(r("c688"),Object(d["a"])(k,m,_,!1,null,"68fc6959",null)),C=y.exports,j=r("bc3a"),w=r.n(j),S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"chatuser"},[r("div",{staticClass:"header"},[r("span",{staticClass:"back",on:{click:t.closechat}},[t._v("X")]),r("div",[t._v(t._s(t.toUserName))])]),r("div",{ref:"chatbox",staticClass:"chatlist"},t._l(t.chatlist,(function(e,s){return r("div",{key:s,staticClass:"chatitem",class:{self:e.from.id==t.$root.currentUser.id}},[r("div",{staticClass:"headerimg"},[r("img",{attrs:{src:e.from.headerImg,alt:""}})]),r("div",{staticClass:"chatcontent"},[t._v(" "+t._s(e.content)+" ")])])})),0),r("div",{staticClass:"inputcom"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.inputData,expression:"inputData"}],attrs:{type:"text"},domProps:{value:t.inputData},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.sendEvent(e)},input:function(e){e.target.composing||(t.inputData=e.target.value)}}}),r("button",{on:{click:t.sendEvent}},[t._v("发送")])])])},O=[],x={props:["touser","closechat","newMsg"],data:function(){return{inputData:"",chatlist:[]}},computed:{toUserName:function(){return null==this.touser?"":this.touser.userName}},methods:{sendEvent:function(){var t={from:this.$root.currentUser,to:this.touser,content:this.inputData,time:(new Date).getTime(),isread:!1};this.chatlist.push(t),h.emit("sendMsg",t),this.saveStorage()},saveStorage:function(){var t="chat-user-"+this.$root.currentUser.userName+"-"+this.touser.userName;localStorage[t]=JSON.stringify(this.chatlist),this.inputData=""},getStorage:function(){var t="chat-user-"+this.$root.currentUser.userName+"-"+this.touser.userName,e=localStorage[t];null!=e&&(this.chatlist=JSON.parse(localStorage[t]),console.log(this.chatlist))},updateChatBox:function(){var t=this.$refs.chatbox;t.scrollTop=t.scrollHeight-t.clientHeight},sendReadMsg:function(){h.emit("readMsg",{self:this.$root.currentUser.id,userId:this.touser.id})}},beforeMount:function(){this.getStorage(),this.sendReadMsg()},mounted:function(){this.updateChatBox()},updated:function(){this.updateChatBox()},watch:{newMsg:function(t){this.chatlist.push(t),this.saveStorage(),this.sendReadMsg()}}},$=x,E=(r("8c7f"),Object(d["a"])($,S,O,!1,null,"a86956e4",null)),U=E.exports,M={name:"app",components:{selectUser:g,userListC:C,chatUser:U},data:function(){return{userlist:[],isLogin:!1,users:[],touser:null,ischat:!1,unreadlist:[],newMsg:null}},computed:{usersObj:function(){var t={};return this.users.forEach((function(e){t[e.id]=e})),t}},beforeMount:function(){var t=this;w.a.get("http://localhost:3000/api/userlist").then((function(e){t.userlist=e.data.recordset}))},mounted:function(){var t=this,e=this;h.on("login",(function(t){"ok"==t.state&&(e.isLogin=!0,h.emit("users"))})),h.on("logout",(function(t){console.log(t.content),e.isLogin=!1,h.disconnect()})),h.on("disconnect",(function(t){console.log(t),e.isLogin=!1})),h.on("users",(function(e){t.users=e,console.log(t.users)})),h.on("unreadMsg",(function(e){e.forEach((function(e){t.saveStorage(e.fromId,e),t.unreadlist.push(e.fromId)}))})),h.on("accept",(function(e){console.log(e),t.ischat&&(t.touser.id==e.from.id||1==e.to.isGroup&&e.to.id==t.touser.id)?t.newMsg=e:(t.saveStorage(e.from.id,e),t.unreadlist.push(e.from.id))}))},methods:{selectuser:function(t){this.touser=t,this.ischat=!0;for(var e=0;e<this.unreadlist.length;e++)if(this.unreadlist[e]==this.touser.id){this.unreadlist.splice(e,1);break}},closechat:function(){this.touser=null,this.ischat=!1},saveStorage:function(t,e){var r=this.usersObj[t],s="chat-user-"+this.$root.currentUser.userName+"-"+r.userName,n={from:r,to:this.$root.currentUser,content:e.content,time:e.time,isread:e.isread},o=[];null!=localStorage[s]?(o=JSON.parse(localStorage[s]),o=Array.from(o),o.push(n)):o.push(n),localStorage[s]=JSON.stringify(o)}}},N=M,L=(r("5c0b"),Object(d["a"])(N,n,o,!1,null,null,null)),P=L.exports,D=(r("d3b7"),r("8c4f")),I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),s("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},T=[],H=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("h1",[t._v(t._s(t.msg))]),t._m(0),r("h3",[t._v("Installed CLI Plugins")]),t._m(1),r("h3",[t._v("Essential Links")]),t._m(2),r("h3",[t._v("Ecosystem")]),t._m(3)])},J=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),r("br"),t._v(" check out the "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[t._v("router")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],A={name:"HelloWorld",props:{msg:String}},K=A,W=(r("303e"),Object(d["a"])(K,H,J,!1,null,"ead786b0",null)),B=W.exports,R={name:"Home",components:{HelloWorld:B}},F=R,V=Object(d["a"])(F,I,T,!1,null,null,null),q=V.exports;s["a"].use(D["a"]);var z=[{path:"/",name:"Home",component:q},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],G=new D["a"]({routes:z}),X=G,Y=r("2f62");s["a"].use(Y["a"]);var Q=new Y["a"].Store({state:{},mutations:{},actions:{},modules:{}});s["a"].config.productionTip=!1,new s["a"]({data:{currentUser:null},router:X,store:Q,render:function(t){return t(P)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var s=r("9c0c"),n=r.n(s);n.a},6548:function(t,e,r){},"6a94":function(t,e,r){},"8c7f":function(t,e,r){"use strict";var s=r("6548"),n=r.n(s);n.a},"9c0c":function(t,e,r){},c688:function(t,e,r){"use strict";var s=r("3f05"),n=r.n(s);n.a},ca3a:function(t,e,r){},cf05:function(t,e,r){t.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.6566745f.js.map