(this.webpackJsonptraining=this.webpackJsonptraining||[]).push([[0],{214:function(e,t,n){"use strict";n.r(t);var a,c,r=n(0),i=n.n(r),o=n(8),u=n.n(o),s=n(30),j=n(6),b=n(15),d=n(49),l=n(93),O=n(246),p=n(248),v=n(11),f=n(65),g="push_ups",h="squats",x="plank",m=[g,h,x],S=(a={},Object(v.a)(a,g,"\u041e\u0442\u0436\u0438\u043c\u0430\u043d\u0438\u044f"),Object(v.a)(a,h,"\u041f\u0440\u0438\u0441\u0435\u0434\u0430\u043d\u0438\u044f"),Object(v.a)(a,x,"\u041f\u043b\u0430\u043d\u043a\u0430 (\u0441\u0435\u043a.)"),a),y=m.reduce((function(e,t){return Object(s.a)(Object(s.a)({},e),{},Object(v.a)({},t,null))}),{}),C={required:!0},J=f.b().shape(m.reduce((function(e,t){return Object(s.a)(Object(s.a)({},e),{},Object(v.a)({},t,f.a().positive('\u041f\u043e\u043b\u0435 "'.concat(S[t],'" \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0447\u0438\u0441\u043b\u043e\u043c')).integer('\u041f\u043e\u043b\u0435 "'.concat(S[t],'" \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0446\u0435\u043b\u044b\u043c \u0447\u0438\u0441\u043b\u043e\u043c')).required('\u041f\u043e\u043b\u0435 "'.concat(S[t],'" \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e')).typeError('\u041f\u043e\u043b\u0435 "'.concat(S[t],'" \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c'))))}),{})),w="training",D=n(13),F=function(){var e,t=Object(d.b)({resolver:Object(l.yupResolver)(J)}),n=t.register,a=t.handleSubmit,c=t.errors,i=t.reset,o=Object(r.useContext)(E),u=o.data,s=o.update;return Object(D.jsxs)("form",{onSubmit:a((function(e){s(e),i(y)})),children:[m.map((function(e){var t,a;return Object(D.jsx)("div",{children:Object(D.jsx)(p.a,{name:e,label:S[e],type:"number",inputRef:n(C),defaultValue:null===u||void 0===u||null===(t=u[0])||void 0===t?void 0:t[e],error:Boolean(c[e]),helperText:null===(a=c[e])||void 0===a?void 0:a.message})},e)})),Object(D.jsx)(O.a,{type:"submit",variant:"contained",color:"primary",disabled:(e=c,!("{}"===JSON.stringify(e))),disableElevation:!0,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})},I=n(245),k=n(247),q=function(){var e=Object(r.useContext)(E).data;return e.length?Object(D.jsx)(I.a,{children:e.map((function(e){return Object(D.jsx)(k.a,{children:Object.entries(e).map((function(e){var t=Object(b.a)(e,2),n=t[0],a=t[1];return"date"===n?"\u0414\u0430\u0442\u0430: ".concat(new Date(a).toLocaleDateString("ru-RU")):"".concat(S[n],": ").concat(a)})).join(" | ")},e.date)}))}):"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445"},B=JSON.parse(null!==(c=localStorage.getItem(w))&&void 0!==c?c:"[]"),E=Object(r.createContext)({data:B,update:function(){}}),L=function(){var e=Object(r.useState)(B),t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(D.jsxs)("div",{children:[Object(D.jsx)("p",{children:"App"}),Object(D.jsxs)(E.Provider,{value:{data:n,update:function(e){a((function(t){var n=[Object(s.a)({date:Date.now()},e)].concat(Object(j.a)(t));return localStorage.setItem(w,JSON.stringify(n)),n}))}},children:[Object(D.jsx)(F,{}),Object(D.jsx)(q,{})]})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,250)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};u.a.render(Object(D.jsx)(i.a.StrictMode,{children:Object(D.jsx)(L,{})}),document.getElementById("root")),N()}},[[214,1,2]]]);
//# sourceMappingURL=main.b410ccf1.chunk.js.map