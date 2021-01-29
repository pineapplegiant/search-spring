(this["webpackJsonpsearch-spring"]=this["webpackJsonpsearch-spring"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),r=c.n(n),a=c(6),i=c.n(a),l=(c(14),c(3)),o=(c(15),c.p+"static/media/search.99a39d29.svg"),j=c.p+"static/media/shopping.6e3afc0a.svg";var u=function(e){return Object(s.jsxs)("div",{className:"shopping logo-bg",children:[Object(s.jsx)("img",{className:"shopping__img",src:j,alt:"Shopping Cart"}),Object(s.jsx)("span",{className:"shopping__count",children:"0"})]})};var h=function(){return Object(s.jsxs)("header",{children:[Object(s.jsx)("h1",{className:"hero-text",children:"Search Springly Fashion"}),Object(s.jsx)(u,{})]})},p=c.p+"static/media/arrow.6e5063c1.svg";var m=function(e){return Object(s.jsxs)("div",{className:"pagination",children:[Object(s.jsxs)("h1",{className:"pagination__title",children:["Showing ",e.begin,"-",e.end," of ",e.totalResults,' results for "',e.query.toUpperCase(),'"']}),Object(s.jsxs)("div",{className:"pagination__links",children:[Object(s.jsx)("a",{href:"#",children:Object(s.jsx)("img",{className:"arrow left",src:p,alt:"toggle previous pagination"})}),Object(s.jsx)("a",{href:"#",children:Object(s.jsx)("img",{className:"arrow right",src:p,alt:"toggle previous pagination"})})]})]})};var b=function(e){var t="https://placekitten.com/467/700";return Object(s.jsxs)("div",{className:"item",children:[Object(s.jsx)("img",{className:"item__img",src:e.imageUrl?e.imageUrl:t,alt:e.name,onError:function(e){e.target.src=t}}),Object(s.jsx)("h1",{className:"item__title",children:e.title?e.title.split(" ").slice(-3).join(" "):"lol"}),Object(s.jsxs)("div",{className:"item__price",children:[Object(s.jsxs)("p",{className:"item__price__current",children:["$",e.price]}),Object(s.jsxs)("p",{className:"item__price__msrp",children:["$",e.msrp]})]})]})},g=c(5),O=c.n(g),d=c(7);var x=function(e,t){var c=Object(n.useState)({}),s=Object(l.a)(c,2),r=s[0],a=s[1],i=Object(n.useState)(!0),o=Object(l.a)(i,2),j=o[0],u=o[1],h=Object(n.useState)(!1),p=Object(l.a)(h,2),m=p[0],b=p[1];return Object(n.useEffect)((function(){u(!0),function(){var c=Object(d.a)(O.a.mark((function c(){return O.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,fetch("http://api.searchspring.net/api/search/search.json?siteId=scmq7n&q=".concat(e,"&resultsFormat=native&page=").concat(t)).then((function(e){return e.json()})).then((function(e){a(e),u(!1)})).catch((function(e){b(!0),console.log("lol u messed up:",e)}));case 2:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}()()}),[e,t]),[r,j,m]},f=c(8),v=c.n(f);var _=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)("new-arrivals"),i=Object(l.a)(a,2),j=i[0],u=i[1],p=Object(n.useState)(1),g=Object(l.a)(p,2),O=g[0],d=(g[1],x(j,O)),f=Object(l.a)(d,3),_=f[0],N=f[1],S=f[2],w=function(e){u(c),e.preventDefault()};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(h,{}),Object(s.jsxs)("form",{onSubmit:w,className:"search",children:[Object(s.jsx)("button",{onClick:w,className:"search__submit-button",type:"submit",children:Object(s.jsx)("img",{className:"search__img",src:o,alt:"Search button"})}),Object(s.jsx)("input",{value:c,onChange:function(e){return r(e.target.value)},placeholder:"Search for clothing",className:"search__input",type:"text"})]}),Object(s.jsx)("main",{className:"results",children:Object(s.jsx)("div",{className:"results__response",children:N?Object(s.jsx)(v.a,{type:"Oval",color:"#707070",height:100,width:100,timeout:3e3}):S?Object(s.jsx)("div",{children:"An error has occurred in your request"}):Object(s.jsx)(m,{})&&_.results.map((function(e){return Object(s.jsx)(b,{imageUrl:e.imageUrl,description:e.name,title:e.title,price:e.price,msrp:e.msrp},e.id)}))})})]})};var N=function(e){return Object(s.jsx)("footer",{children:Object(s.jsx)("p",{children:"\xa9 2021 Searchspring API - All rights reserved."})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,39)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),r(e),a(e)}))};i.a.render(Object(s.jsxs)(r.a.StrictMode,{children:[Object(s.jsx)(_,{}),Object(s.jsx)(N,{})]}),document.getElementById("root")),S()}},[[38,1,2]]]);
//# sourceMappingURL=main.ff5f7e63.chunk.js.map