"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[469],{713:function(e,t,n){n.d(t,{Bt:function(){return f},Mc:function(){return s},PY:function(){return u},bI:function(){return l},y:function(){return p}});var r=n(861),a=n(757),i=n.n(a),o=n(294),c="ef2f77713a3dddac14be60644348e486",u=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.Z.defaults.baseURL="https://api.themoviedb.org/3/trending/movie/day",e.next=3,(0,o.Z)({params:{api_key:c,language:"en-US"}});case 3:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.Z.defaults.baseURL="https://api.themoviedb.org/3/movie",e.next=3,(0,o.Z)("".concat(t),{params:{api_key:c}});case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.Z.defaults.baseURL="https://api.themoviedb.org/3/search/movie",e.next=3,(0,o.Z)({params:{api_key:c,query:t}});case 3:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.Z.defaults.baseURL="https://api.themoviedb.org/3/movie",e.next=3,(0,o.Z)("".concat(t,"/credits"),{params:{api_key:c}});case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.Z.defaults.baseURL="https://api.themoviedb.org/3/movie",e.next=3,(0,o.Z)("".concat(t,"/reviews"),{params:{api_key:c}});case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},871:function(e,t,n){n.d(t,{a:function(){return u}});var r,a=n(137),i=n(168),o=n(924).ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),c=n(184),u=function(){return(0,c.jsx)(o,{children:(0,c.jsx)(a.NB,{visible:!0,height:"100",width:"100",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#fc5c7d","#fc5c7d","#fc5c7d","#fc5c7d","#fc5c7d"]})})}},49:function(e,t,n){n.d(t,{e:function(){return f}});var r,a,i=n(87),o=n(689),c=n(168),u=n(924),s=u.ZP.ul(r||(r=(0,c.Z)(["\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 24px;\n"]))),l=u.ZP.li(a||(a=(0,c.Z)(["\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 24px;\n  font-size: 14px;\n  line-height: 14px;\n  font-style: normal;\n  font-weight: 400;\n  color: black;\n"]))),p=n(184),f=function(e){var t=e.movies,n=(0,o.TH)();return(0,p.jsx)(s,{children:t.map((function(e){var t=e.id,r=e.poster_path,a=e.title;return(0,p.jsx)(l,{children:(0,p.jsx)(i.rU,{to:"/movies/".concat(t),state:{from:n},children:(0,p.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w500".concat(r):"https://www.reelviews.net/resources/img/default_poster.jpg",alt:a})})},t)}))})}},469:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var r,a,i,o,c=n(861),u=n(439),s=n(757),l=n.n(s),p=n(49),f=n(713),d=n(94),m=n(87),h=n(168),g=n(924),v=g.ZP.div(r||(r=(0,h.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #852397;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),b=g.ZP.form(a||(a=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),x=g.ZP.button(i||(i=(0,h.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    color: black;\n    background-color: rgba(255, 255, 126, 1);\n  }\n  outline: none;\n"]))),y=g.ZP.input(o||(o=(0,h.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n"]))),w=n(791),j={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},k=w.createContext&&w.createContext(j),Z=["attr","size","title"];function O(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e){return e&&e.map((function(e,t){return w.createElement(e.tag,E({key:t},e.attr),_(e.child))}))}function C(e){return function(t){return w.createElement(N,P({attr:E({},e.attr)},t),_(e.child))}}function N(e){var t=function(t){var n,r=e.attr,a=e.size,i=e.title,o=O(e,Z),c=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),w.createElement("svg",P({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,o,{className:n,style:E(E({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),i&&w.createElement("title",null,i),e.children)};return void 0!==k?w.createElement(k.Consumer,null,(function(e){return t(e)})):t(j)}function U(e){return C({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"},child:[]}]})(e)}var L=n(184),Q=function(){var e,t=(0,m.lr)(),n=(0,u.Z)(t,2),r=n[0],a=n[1],i=null!==(e=r.get("searchQuery"))&&void 0!==e?e:"";return(0,L.jsx)(v,{children:(0,L.jsxs)(b,{onSubmit:function(e){e.preventDefault(),""!==e.target.elements.searchQuery.value.trim()?a({searchQuery:e.target.elements.searchQuery.value}):d.Am.warn("Please, fill input search field")},children:[(0,L.jsx)(y,{type:"text",placeholder:"Enter movie...",name:"searchQuery",defaultValue:i}),(0,L.jsx)(x,{type:"submit",children:(0,L.jsx)(U,{size:"2em"})})]})})},D=n(871);function R(){var e=(0,w.useState)([]),t=(0,u.Z)(e,2),n=t[0],r=t[1],a=(0,m.lr)(),i=(0,u.Z)(a,1)[0],o=(0,w.useState)(!1),s=(0,u.Z)(o,2),d=s[0],h=s[1],g=i.get("searchQuery");return(0,w.useEffect)((function(){if(g){var e=function(){var e=(0,c.Z)(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(!0),e.next=4,(0,f.bI)(g);case 4:t=e.sent,r(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error",e.t0.message);case 11:return e.prev=11,h(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}}),[g]),(0,L.jsxs)(L.Fragment,{children:[d&&(0,L.jsx)(D.a,{}),(0,L.jsx)(Q,{}),n.length>0&&(0,L.jsx)(p.e,{movies:n})]})}}}]);
//# sourceMappingURL=469.81682d97.chunk.js.map