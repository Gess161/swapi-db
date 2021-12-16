(this["webpackJsonpswapi-db"]=this["webpackJsonpswapi-db"]||[]).push([[0],{76:function(e,n,t){"use strict";t.r(n);var r,a,i,c=t(0),s=t.n(c),o=t(26),l=t.n(o),u=t(23),d=t(4),p=t(7),j=t(6),b=j.c.div(r||(r=Object(p.a)(["\n    display: flex;\n    width: 90%;\n    max-width: 100%;\n    flex-direction: column;\n    margin: 100px auto 0;\n    justify-content: center;\n"]))),f=function(){return Object(u.b)()},x=u.c,h="FETCH_FILMS_REQUEST",m="FETCH_FILMS_SUCCES",g="FETCH_FILMS_FAILURE",O="FETCH_PEOPLE_REQUEST",v="FETCH_PEOPLE_SUCCES",w="FETCH_PEOPLE_FAILURE",y=function(e){return{type:h,payload:e}},E=j.c.div(a||(a=Object(p.a)(["\n    display: flex;\n    width: 40%;\n    height: 60px;\n    margin: 5px auto;\n    justify-content: center;\n    align-items: center;\n    border-radius: 15px;\n    border: 1px solid white;\n\n    @media(max-width: 400px){\n        width: 90%;\n    }\n"]))),S=t(2);function k(e){var n=e.episode,t=e.title,r=Object(d.g)();return Object(S.jsx)(E,{children:Object(S.jsxs)("div",{onClick:function(){return r("/film/".concat(n))},children:[" ",t," "]})})}var C=j.c.div(i||(i=Object(p.a)(['\n    display: flex;\n    justify-self: center;\n    align-self: center;\n    display: flex;\n    width: 100px;\n    height: 100px;\n    :after {\n        content: " ";\n        display: flex;\n        width: 64px;\n        height: 64px;\n        margin: 8px;\n        border-radius: 50%;\n        border: 6px solid #fff;\n        border-color: #fff transparent #fff transparent;\n        opacity: 0.5;\n        animation: lds-dual-ring 1.2s linear infinite;\n    }\n    @keyframes lds-dual-ring {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n\n'])));function I(){return Object(S.jsx)(C,{})}function F(){var e=f(),n=x((function(e){return e.rootReducer.filmsReducer})).films,t=Object(d.g)();return Object(c.useEffect)((function(){n.length<1&&e(y(""))}),[]),Object(S.jsxs)(b,{children:[n.length>0?n.map((function(e){return Object(S.jsx)(k,{navigate:t,episode:e.episode_id,title:e.title},e.title)})):Object(S.jsx)(I,{}),Object(S.jsx)(d.a,{})]})}function R(){return Object(S.jsx)(F,{})}var _,L=t.p+"static/media/404.f7e4d6de.svg",P=j.c.div(_||(_=Object(p.a)(["\n    padding: 10px;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    img {\n        opacity: 0.95;\n        display: flex;\n        width: 200px;\n        height: 200px;\n    }\n    p { \n        margin-top: 10px;\n        font-size: 22px;\n        display: flex;\n        padding: 10px;\n    }\n"])));function J(){return Object(S.jsxs)(P,{children:[Object(S.jsx)("img",{src:L}),Object(S.jsx)("p",{children:"It seems like the page you searching was destroyed by this thing above..."})]})}function T(){return Object(S.jsx)(J,{})}var N,U=t(44);function z(e){return e.replace("".concat("https://www.swapi.tech/api/people"),"").replace(/\//g,"")}function H(e){return"".concat("https://starwars-visualguide.com/assets/img/characters/"+e+".jpg")}var M,q=j.c.div(N||(N=Object(p.a)(["\n\n    display: flex;\n    margin: 0 auto;\n    padding: 10px;\n\n    div {\n        display: flex;\n        flex-direction: column;\n    }\n    p {\n        font-size: 22px;\n        justify-content: center;\n        display: flex;\n        padding: 5px;\n    }\n    img {\n        border-radius: 15px;\n        display: flex;\n    }\n\n    @media(max-width: 400px){\n        img {\n            width: 100%;\n        }\n    }\n"])));function D(e){var n=e.name,t=e.id,r=e.image,a=e.reference;return Object(S.jsx)(q,{children:Object(S.jsxs)("div",{ref:a,children:[Object(S.jsx)("img",{src:r,alt:"jedi"},t+"img"),Object(S.jsx)("p",{children:n},t+"name")]},t)},t)}var A,Q=j.c.div(M||(M=Object(p.a)(["\n    border-radius: 15px;\n    display: flex;\n    width: 100%;\n    margin: 0 auto;\n    flex-wrap: wrap;\n    flex-direction: row;\n    justify-content: center;\n"])));function V(){var e=x((function(e){return e.rootReducer.peopleReducer})),n=e.people,t=f(),r=e.next,a=function(){t({type:O,payload:r})};return Object(c.useEffect)((function(){a()}),[]),Object(S.jsx)(U.a,{dataLength:n.length,hasMore:!!r,loader:Object(S.jsx)(C,{}),next:a,children:Object(S.jsx)(Q,{children:n.map((function(e,t){return n.length,Object(S.jsx)(D,{name:e.name,image:H(z(e.url))},e.name)}))})})}function B(){return Object(S.jsx)(V,{})}var W=j.c.div(A||(A=Object(p.a)(["\n    margin: 0 auto;\n    width: 85%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n\n    h1 {\n        justify-content: center;\n        display: flex;\n        font-size: 28px;\n        padding: 5px;\n    }\n\n    p {\n        padding: 5px;\n        justify-content: center;\n        width: 100%;\n        display: flex;\n    }\n\n    img {\n        margin: 0 auto;\n        padding: 10px;\n        width: 80%;\n        display: flex;\n    }\n"]))),G=t.p+"static/media/logo.1b3980e8.png";function K(){return Object(S.jsxs)(W,{children:[Object(S.jsx)("h1",{children:"Welcome to SWDatabase!"}),Object(S.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat eleifend commodo. Vivamus sed luctus justo, eget tempor nulla. Mauris lorem ex, porta non neque id, pharetra lacinia mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis et euismod velit. Donec eu odio est. Sed feugiat cursus sapien, eu accumsan tellus convallis eget."}),Object(S.jsx)("p",{children:"Donec ornare lobortis augue, sed feugiat nisl congue nec. Vestibulum auctor, est a maximus posuere, enim elit convallis libero, at fermentum dolor elit non erat. Cras bibendum aliquet est non finibus. Ut ut fringilla urna. Cras ultrices interdum tortor, eget tincidunt magna venenatis id. Fusce enim mi, scelerisque id elementum et, semper ac lorem. Maecenas finibus non mi sit amet suscipit. Ut pharetra sem et diam tempus egestas ac bibendum lorem. Vivamus ac blandit turpis. Curabitur pharetra velit eu magna facilisis, sit amet porta ipsum lobortis. Pellentesque pharetra justo eget dolor mollis, a dignissim lectus porta."}),Object(S.jsx)("img",{alt:"logo",src:G})]})}function X(e){return Object(S.jsx)(K,{})}var Y,Z=t(13),$=j.c.nav(Y||(Y=Object(p.a)(["\n    display: flex;\n    flex-direction: row;\n    width: 90%;\n    height: 60px;\n    padding : 20px;\n    margin: 10px auto;\n    color: white;\n    align-items: center;\n\n    img {\n        filter: invert(100%) sepia(1%) saturate(6%) hue-rotate(25deg) brightness(120%) contrast(103%);\n        padding: 0;\n    }\n\n    ul { \n        height: 40px;\n        justify-content: space-evenly;\n        width: 100%;\n        display: flex;\n        flex-direction: row;\n        color: white;\n    }\n\n    li {\n        padding: 5px;\n        width: 70px;\n        border: 1px solid white;\n        border-radius: 15px;\n        justify-content: center;\n        align-items: center;\n        display: flex;\n        text-decoration: none;\n\n        a {\n            text-decoration: none;\n            color: white;\n        }\n    }\n\n\n"]))),ee=t.p+"static/media/lightSide.e7e23661.svg";function ne(){return Object(S.jsx)($,{children:Object(S.jsxs)("ul",{children:[Object(S.jsx)("img",{alt:"dark or light side",src:ee}),Object(S.jsx)("li",{children:Object(S.jsx)(Z.b,{to:"/",children:"Home"})}),Object(S.jsx)("li",{children:Object(S.jsx)(Z.b,{to:"/films",children:"Films"})}),Object(S.jsx)("li",{children:Object(S.jsx)(Z.b,{to:"/people",children:"People"})})]})})}var te,re=t.p+"static/media/light-bg.168e7e4d.png",ae=j.c.div(te||(te=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    min-height: 100%;\n    margin: 0 auto;\n"])));function ie(){return Object(S.jsxs)(ae,{children:[Object(S.jsx)(ne,{}),Object(S.jsx)(d.a,{})]})}var ce,se=t(8),oe=t.n(se),le=t(15),ue=t(18),de=j.c.div(ce||(ce=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 95%;\n    height: 400px;\n    padding: 5px;\n    margin: 0 auto;\n    align-items: center;\n\n"])));function pe(e){var n=[];return e.map((function(e){return n.push(z(e))})),n}var je,be=t(17),fe=t.n(be),xe=window.localStorage,he="swCache";function me(e){var n=Promise.all(e.map(function(){var e=Object(le.a)(oe.a.mark((function e(n){var t,r,a,i;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t="".concat("https://www.swapi.tech/api/people/"+n),!(r=xe.getItem("".concat(he,".").concat(t)))){e.next=4;break}return e.abrupt("return",JSON.parse(r));case 4:return e.next=6,fe.a.get(t);case 6:return a=e.sent,i=a.data.result.properties,xe.setItem("".concat(he,".").concat(t),JSON.stringify(i)),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));return n}var ge=j.c.div(je||(je=Object(p.a)(["\n    display: flex;\n    width: 90%;\n    flex-direction: column;\n\n    * {\n        padding: 5px;\n    }\n    \n"])));function Oe(e){var n=e.filmId,t=e.film,r=t.title,a=t.opening_crawl,i=t.director,c=t.producer;return Object(S.jsxs)(ge,{children:[Object(S.jsx)("h1",{children:r&&r}),Object(S.jsxs)("h3",{children:["Episode ",n]}),Object(S.jsx)("p",{children:a}),Object(S.jsxs)("h4",{children:["Director: ",i]}),Object(S.jsxs)("h4",{children:["Producer: ",c]}),Object(S.jsx)("h2",{children:"Characters:"})]})}function ve(e){var n=f(),t=Object(c.useState)([]),r=Object(ue.a)(t,2),a=r[0],i=r[1],s=x((function(e){return e.rootReducer.filmsReducer.films})),o=Object(d.g)(),l=e.params.filmId;return Object(c.useEffect)((function(){if((l<=0||l>s.length)&&o("/404"),s.length>0){var e=pe(s[l-1].characters);Object(le.a)(oe.a.mark((function n(){var t,r;return oe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,me(e);case 2:t=n.sent,r=t.map((function(e){var n=e.name,t=z(e.url);return{id:t,name:n,image:H(t)}})),i(r);case 5:case"end":return n.stop()}}),n)})))()}else n(y(""))}),[s,l]),Object(S.jsxs)(de,{children:[s.length>0?Object(S.jsx)(Oe,{filmId:l,film:s[l-1]}):null,Object(S.jsx)(Q,{children:a.length>0?Object.values(a).map((function(e){return Object(S.jsx)(D,{name:e.name,id:e.id,image:e.image},e.id)})):Object(S.jsx)(I,{})})]})}function we(){var e=Object(d.h)();return Object(S.jsx)(ve,{params:e})}function ye(){return Object(S.jsx)(d.d,{children:Object(S.jsxs)(d.b,{path:"/",element:Object(S.jsx)(ie,{}),children:[Object(S.jsx)(d.b,{index:!0,element:Object(S.jsx)(X,{})}),Object(S.jsx)(d.b,{path:"films",element:Object(S.jsx)(R,{})}),Object(S.jsx)(d.b,{path:"film/:filmId",element:Object(S.jsx)(we,{})}),Object(S.jsx)(d.b,{path:"people",element:Object(S.jsx)(B,{})}),Object(S.jsx)(d.b,{path:"*",element:Object(S.jsx)(T,{})})]})})}t.p;var Ee,Se=Object(j.b)(Ee||(Ee=Object(p.a)(["\n    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');\n\n    * {\n        box-sizing: border-box;\n        padding: 0;\n        margin: 0;\n    }\n\n    li {\n        list-style-type: none;\n    }\n    \n    body {\n        margin: 0 auto;\n        width: 100%;\n        height: 100vh;\n        background: ",";\n        font-family: 'Roboto', sans-serif;\n        color: white;\n        position: relative;\n        &:before{\n            content: '';\n            display: flex;\n            width: 100vw;\n            height: 100%;\n            background: url(",");\n            background-size: cover;\n            z-index: -1;\n            opacity: 0.5;\n            position: absolute;\n        }\n    }\n"])),"#0F0F0E",re),ke={};function Ce(){return Object(S.jsx)("div",{className:"App",children:Object(S.jsxs)(j.a,{theme:ke,children:[Object(S.jsx)(Se,{}),Object(S.jsx)(ye,{})]})})}var Ie=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,77)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),r(e),a(e),i(e),c(e)}))},Fe=t(45),Re=t(10),_e=t(9),Le={pending:!1,error:"",films:[]};var Pe=t(30),Je={pending:!1,error:null,people:[],person:{},next:""};var Te=Object(Re.b)({peopleReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case O:return Object(_e.a)(Object(_e.a)({},e),{},{pending:!0});case v:return Object(_e.a)(Object(_e.a)({},e),{},{pending:!1,people:[].concat(Object(Pe.a)(e.people),Object(Pe.a)(n.payload.results)),next:n.payload.next,error:null});case w:return Object(_e.a)(Object(_e.a)({},e),{},{pending:!1,error:n.payload.error});default:return e}},filmsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case h:return Object(_e.a)(Object(_e.a)({},e),{},{pending:!0});case m:return Object(_e.a)(Object(_e.a)({},e),{},{pending:!1,films:n.payload,error:null});case g:return Object(_e.a)(Object(_e.a)({},e),{},{pending:!1,error:n.payload.error});default:return e}}}),Ne=t(46),Ue=t(29),ze=t(16),He=window.localStorage,Me="swCache";function qe(e){return De.apply(this,arguments)}function De(){return(De=Object(le.a)(oe.a.mark((function e(n){var t,r,a,i;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=He.getItem("".concat(Me,".").concat(n)))){e.next=3;break}return e.abrupt("return",JSON.parse(t));case 3:if(""===n){e.next=11;break}return e.next=6,fe.a.get(n);case 6:return r=e.sent,He.setItem("".concat(Me,".").concat(n),JSON.stringify(r)),e.abrupt("return",r);case 11:return a="".concat("https://www.swapi.tech/api/films"),e.next=14,fe.a.get(a);case 14:return i=e.sent,He.setItem("".concat(Me,".").concat(a),JSON.stringify(i)),e.abrupt("return",i);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ae=oe.a.mark(Qe);function Qe(e){var n,t,r,a,i,c,s;return oe.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return n=e.payload,o.prev=1,o.next=4,Object(ze.a)(qe,n);case 4:for(t=o.sent,r=t.data.result,a=[],i=0;i<r.length;i++)c=r[i].properties,s=c.episode_id,a.splice(s-1,0,c);return o.next=10,Object(ze.b)({type:m,payload:a});case 10:o.next=15;break;case 12:o.prev=12,o.t0=o.catch(1),console.log(o.t0);case 15:case"end":return o.stop()}}),Ae,null,[[1,12]])}var Ve=window.localStorage,Be="swCache",We="".concat("https://www.swapi.tech/api/people");function Ge(e){return Ke.apply(this,arguments)}function Ke(){return(Ke=Object(le.a)(oe.a.mark((function e(n){var t,r,a;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=Ve.getItem("".concat(Be,".").concat(n)))){e.next=3;break}return e.abrupt("return",JSON.parse(t));case 3:if(""===n){e.next=11;break}return e.next=6,fe.a.get(n);case 6:return r=e.sent,Ve.setItem("".concat(Be,".").concat(n),JSON.stringify(r)),e.abrupt("return",r);case 11:return e.next=13,fe.a.get(We);case 13:return a=e.sent,Ve.setItem("".concat(Be,".").concat(We),JSON.stringify(a)),e.abrupt("return",a);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Xe=oe.a.mark(Ye);function Ye(e){var n,t,r,a,i;return oe.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n=e.payload,c.prev=1,c.next=4,Object(ze.a)(Ge,n);case 4:return t=c.sent,r=t.data,a=r.results,i=r.next,c.next=8,Object(ze.b)({type:v,payload:{results:a,next:i}});case 8:c.next=13;break;case 10:c.prev=10,c.t0=c.catch(1),console.log(c.t0);case 13:case"end":return c.stop()}}),Xe,null,[[1,10]])}var Ze=oe.a.mark($e);function $e(){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ue.a)(h,Qe);case 2:return e.next=4,Object(Ue.a)(O,Ye);case 4:case"end":return e.stop()}}),Ze)}var en=Object(Ne.a)(),nn=Object(Fe.a)({middleware:function(e){return e({thunk:!1,serializableCheck:!1}).concat(en)},reducer:{rootReducer:Te}});en.run($e),l.a.render(Object(S.jsx)(s.a.StrictMode,{children:Object(S.jsx)(Z.a,{children:Object(S.jsx)(u.a,{store:nn,children:Object(S.jsx)(Ce,{})})})}),document.getElementById("root")),Ie()}},[[76,1,2]]]);
//# sourceMappingURL=main.5d877f2e.chunk.js.map