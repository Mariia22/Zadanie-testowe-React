(this["webpackJsonpzadanie-testowe-react"]=this["webpackJsonpzadanie-testowe-react"]||[]).push([[0],{26:function(t,e,n){},46:function(t,e,n){},48:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),s=n(18),r=n.n(s),u=(n(26),n(21)),o=n(3),b=n(9),i=n.n(b),j=n(19),f=n(20),l=n.n(f),p=function(){var t=Object(j.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json");case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=(n(46),n(2));var d=function(){var t=Object(c.useState)([]),e=Object(o.a)(t,2),n=e[0],a=e[1],s=Object(c.useState)(null),r=Object(o.a)(s,2),b=r[0],i=r[1],j=Object(c.useState)([]),f=Object(o.a)(j,2),l=f[0],d=f[1],O=Object(c.useState)([]),m=Object(o.a)(O,2),v=m[0],x=m[1],g=Object(c.useState)(!0),_=Object(o.a)(g,2),w=_[0],N=_[1];function S(){if(n.length>0){var t=Math.floor(Math.random()*n.length),e=n[t];x(e),d([].concat(Object(u.a)(l),[e])),l.length>0&&N(!1)}}return Object(c.useEffect)((function(){p().then((function(t){return a(t.data)})).catch((function(t){return i(t)}))}),[]),Object(c.useEffect)((function(){S()}),[n]),Object(h.jsxs)("div",{className:"app",children:[b&&Object(h.jsx)("div",{children:b.message}),Object(h.jsx)("p",{className:"app__quote",children:v.quote}),Object(h.jsx)("p",{className:"app__author",children:v.author}),Object(h.jsxs)("div",{className:"app__buttons",children:[Object(h.jsx)("button",{disabled:w,onClick:function(){var t=l[l.length-2];x(t),l.splice(-1,1),d(l),l.length<2&&N(!0)},className:"app__button",children:"Previous"}),Object(h.jsx)("button",{onClick:S,className:"app__button",children:"Random quote"})]})]})};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(d,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.21e1d5c4.chunk.js.map