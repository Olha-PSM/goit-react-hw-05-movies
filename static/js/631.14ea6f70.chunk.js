"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[631],{713:function(n,e,r){r.d(e,{Bt:function(){return l},Mc:function(){return u},PY:function(){return c},bI:function(){return p},y:function(){return d}});var t=r(861),a=r(757),i=r.n(a),s=r(294),o="ef2f77713a3dddac14be60644348e486",c=function(){var n=(0,t.Z)(i().mark((function n(){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s.Z.defaults.baseURL="https://api.themoviedb.org/3/trending/movie/day",n.next=3,(0,s.Z)({params:{api_key:o,language:"en-US"}});case 3:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s.Z.defaults.baseURL="https://api.themoviedb.org/3/movie",n.next=3,(0,s.Z)("".concat(e),{params:{api_key:o}});case 3:return r=n.sent,t=r.data,n.abrupt("return",t);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s.Z.defaults.baseURL="https://api.themoviedb.org/3/search/movie",n.next=3,(0,s.Z)({params:{api_key:o,query:e}});case 3:return r=n.sent,t=r.data,n.abrupt("return",t.results);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s.Z.defaults.baseURL="https://api.themoviedb.org/3/movie",n.next=3,(0,s.Z)("".concat(e,"/credits"),{params:{api_key:o}});case 3:return r=n.sent,t=r.data,n.abrupt("return",t);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s.Z.defaults.baseURL="https://api.themoviedb.org/3/movie",n.next=3,(0,s.Z)("".concat(e,"/reviews"),{params:{api_key:o}});case 3:return r=n.sent,t=r.data,n.abrupt("return",t);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},871:function(n,e,r){r.d(e,{a:function(){return c}});var t,a=r(137),i=r(168),s=r(924).ZP.div(t||(t=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),o=r(184),c=function(){return(0,o.jsx)(s,{children:(0,o.jsx)(a.NB,{visible:!0,height:"100",width:"100",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#fc5c7d","#fc5c7d","#fc5c7d","#fc5c7d","#fc5c7d"]})})}},631:function(n,e,r){r.r(e),r.d(e,{default:function(){return S}});var t,a,i,s,o,c,u,p,d=r(861),l=r(439),f=r(757),v=r.n(f),h=r(713),x=r(791),m=r(871),g=r(689),b=r(168),w=r(924),Z=r(87),j=w.ZP.div(t||(t=(0,b.Z)(["\n  display: flex;\n  margin: 24px;\n  gap: 24px;\n"]))),k=w.ZP.div(a||(a=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding-bottom: 20px;\n"]))),y=w.ZP.img(i||(i=(0,b.Z)(["\n  width: 240px;\n  height: auto;\n  padding-top: 12px;\n"]))),_=w.ZP.h2(s||(s=(0,b.Z)(["\n  font-size: 26px;\n  margin-bottom: 12px;\n"]))),P=(0,w.ZP)(Z.rU)(o||(o=(0,b.Z)(["\n  display: block;\n  width: 100px;\n  text-align: center;\n  margin: 15px;\n  padding: 5px 15px 5px 15px;\n  border: 1px solid grey;\n  border-radius: 15px;\n  text-decoration: none;\n  background-color: #a2a8d3;\n  color: white;\n  &:hover {\n    background-color: #38598b;\n    font-weight: 500;\n  }\n"]))),U=w.ZP.li(c||(c=(0,b.Z)(["\n  font-weight: 700;\n  font-size: 20px;\n  margin-bottom: 15px;\n"]))),L=(0,w.ZP)(Z.OL)(u||(u=(0,b.Z)(["\n  font-weight: 900;\n  font-size: 20px;\n  color: black;\n\n  &.active {\n    color: orange;\n  }\n"]))),R=w.ZP.ul(p||(p=(0,b.Z)(["\n  display: flex;\n  margin: 24px;\n  gap: 24px;\n"]))),C=r(184);function S(){var n,e,r=(0,g.TH)(),t=null!==(n=null===r||void 0===r||null===(e=r.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies",a=(0,g.UO)().movieId,i=(0,x.useState)(null),s=(0,l.Z)(i,2),o=s[0],c=s[1],u=(0,x.useState)(!1),p=(0,l.Z)(u,2),f=p[0],b=p[1];(0,x.useEffect)((function(){var n=function(){var n=(0,d.Z)(v().mark((function n(){var e;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,b(!0),n.next=4,(0,h.Mc)(a);case 4:e=n.sent,c(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log("Error",n.t0.message);case 11:return n.prev=11,b(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[a]);return(0,C.jsxs)(C.Fragment,{children:[f&&(0,C.jsx)(m.a,{}),(0,C.jsx)(P,{to:t,children:" Go Back "}),(0,C.jsxs)(j,{children:[(0,C.jsx)("div",{children:(0,C.jsx)(y,{alt:null===o||void 0===o?void 0:o.title,src:null!==o&&void 0!==o&&o.poster_path?"https://image.tmdb.org/t/p/w500".concat(null===o||void 0===o?void 0:o.poster_path):"https://www.reelviews.net/resources/img/default_poster.jpg"})}),(0,C.jsxs)(k,{children:[(0,C.jsx)(_,{children:null===o||void 0===o?void 0:o.title}),(0,C.jsxs)("p",{children:["User scores: ",(0,C.jsxs)("b",{children:[Math.round(10*(null===o||void 0===o?void 0:o.vote_average)),"%"]})]}),(0,C.jsx)(_,{children:"Overview"}),(0,C.jsx)("p",{children:null===o||void 0===o?void 0:o.overview}),(0,C.jsx)(_,{children:"Genres"}),(0,C.jsx)("p",{children:null===o||void 0===o?void 0:o.genres.map((function(n){return n.name})).join(", ")})]})]}),(0,C.jsxs)("div",{children:[(0,C.jsx)(_,{children:"Previus information"}),(0,C.jsxs)(R,{children:[(0,C.jsx)(U,{children:(0,C.jsx)(L,{to:"cast",children:"Cast"})}),(0,C.jsx)(U,{children:(0,C.jsx)(L,{to:"reviews",children:"Reviews"})})]}),(0,C.jsx)(g.j3,{})]})]})}}}]);
//# sourceMappingURL=631.14ea6f70.chunk.js.map