"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[961,527],{687:function(e,n,r){r.d(n,{BG:function(){return o},FE:function(){return l},Me:function(){return f},uy:function(){return h},wr:function(){return c}});var t=r(861),a=r(757),s=r.n(a),i=r(243);function c(){return u.apply(this,arguments)}function u(){return(u=(0,t.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/movie/day");case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.Z.defaults.baseURL="https://api.themoviedb.org/3/",i.Z.defaults.params={api_key:"7194b7b08f433157032a7a5a310c946f"};var o=function(){var e=(0,t.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(n,"?&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function l(e){return p.apply(this,arguments)}function p(){return(p=(0,t.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("search/movie?query=".concat(n));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return d.apply(this,arguments)}function d(){return(d=(0,t.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(n,"/credits"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,t.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(n,"/reviews"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},527:function(e,n,r){r.r(n);var t=r(184);n.default=function(){return(0,t.jsx)("div",{children:(0,t.jsx)("h3",{children:"Not found page!"})})}},854:function(e,n,r){r.d(n,{a:function(){return s}});var t=r(920),a=r(184),s=function(){return(0,a.jsx)(t.Rf,{color:"#4fa94d",width:"100",visible:!0,ariaLabel:"falling-lines-loading"})}},566:function(e,n){n.Z=function(e){return e?"https://image.tmdb.org/t/p/w300".concat(e):"https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"}},961:function(e,n,r){r.r(n);var t=r(861),a=r(439),s=r(757),i=r.n(s),c=r(791),u=r(689),o=r(87),l=r(527),p=r(687),f=r(854),d=r(566),h=r(184);n.default=function(){var e,n,r=(0,u.UO)().moviesId,s=(0,c.useState)(null),v=(0,a.Z)(s,2),x=v[0],m=v[1],j=(0,c.useState)(!1),w=(0,a.Z)(j,2),g=w[0],b=w[1],Z=(0,u.TH)();(0,c.useEffect)((function(){function e(){return(e=(0,t.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.BG)(r);case 3:n=e.sent,m(n),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),b(!0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[r]);var k=(0,c.useRef)(null!==(e=null===(n=Z.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/");return(0,h.jsxs)(h.Fragment,{children:[g&&(0,h.jsx)(l.default,{}),x&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o.OL,{to:k.current,children:"Go back"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("img",{src:(0,d.Z)(x.poster_path),alt:"Poster movie",width:"300px"}),(0,h.jsxs)("h2",{children:[x.original_title,(0,h.jsxs)("span",{children:[" (",x.release_date.substr(0,[4]),")"]})]}),(0,h.jsxs)("p",{children:["User Score: ",x.vote_average]}),(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsx)("p",{children:x.overview}),(0,h.jsx)("h3",{children:"Genres"}),(0,h.jsx)("ul",{children:x.genres.map((function(e,n){var r=e.name;return(0,h.jsx)("li",{children:r},n)}))})]})]}),x&&(0,h.jsxs)("div",{children:[(0,h.jsx)("h3",{children:"Additional information"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(o.OL,{to:"cast",children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(o.OL,{to:"reviews",children:"Reviews"})})]})]}),(0,h.jsx)(c.Suspense,{fallback:(0,h.jsxs)("div",{children:["Loading subpage...",(0,h.jsx)(f.a,{})]}),children:(0,h.jsx)(u.j3,{})})]})}}}]);
//# sourceMappingURL=961.fce9d128.chunk.js.map