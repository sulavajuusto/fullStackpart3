(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{22:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r),c=t(17),a=t.n(c),u=(t(22),t(8)),i=t(3),s=t(0),l=function(e){var n=e.filterOnChange;return Object(s.jsxs)("div",{children:["filter shown persons with ",Object(s.jsx)("input",{onChange:n})]})},d=function(e){var n=e.addPerson,t=e.newName,r=e.newNumber,o=e.handleNumberChange,c=e.handlePersonChange;return Object(s.jsxs)("form",{onSubmit:n,children:[Object(s.jsxs)("div",{children:["name: ",Object(s.jsx)("input",{value:t,onChange:c})]}),Object(s.jsxs)("div",{children:["number: ",Object(s.jsx)("input",{value:r,onChange:o})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",children:"add"})})]})},f=function(e){var n=e.filteredPersons,t=e.deletePerson;return Object(s.jsx)("ul",{children:n.map((function(e){return Object(s.jsxs)("li",{children:[e.name," ",e.number,Object(s.jsx)("button",{onClick:function(){return t(e.id)},children:"Delete"})]},e.id)}))})},j=function(e){var n=e.message;return null===n?null:Object(s.jsx)("div",{className:"confirm",children:n})},b=function(e){var n=e.error;return null===n?null:Object(s.jsx)("div",{className:"error",children:n})},h=t(4),m=t.n(h),O="/api/persons",v=function(){return m.a.get(O).then((function(e){return e.data}))},p=function(e){return m.a.post(O,e).then((function(e){return e.data}))},x=function(e){return m.a.delete("".concat(O,"/").concat(e)).then((function(e){return e.data}))},g=function(e,n){return m.a.put("".concat(O,"/").concat(e),n).then((function(e){return e.data}))},w=function(){var e=Object(r.useState)([]),n=Object(i.a)(e,2),t=n[0],o=n[1],c=Object(r.useState)(1),a=Object(i.a)(c,2),h=a[0],m=a[1],O=Object(r.useState)(""),w=Object(i.a)(O,2),C=w[0],S=w[1],P=Object(r.useState)(""),N=Object(i.a)(P,2),y=N[0],k=N[1],T=Object(r.useState)([]),A=Object(i.a)(T,2),D=A[0],E=A[1],I=Object(r.useState)(null),J=Object(i.a)(I,2),L=J[0],B=J[1],M=Object(r.useState)(null),q=Object(i.a)(M,2),z=q[0],F=q[1];Object(r.useEffect)((function(){v().then((function(e){o(e),m(G(e)),E(e)}))}),[]);var G=function(e){var n=0;if(e.length>0)for(var t=0;t<e.length;t++){var r=e[t];r.id>n&&(n=r.id)}return console.log("highest id ".concat(n)),n},H=function(){var e=t.find((function(e){return e.name===C}));if(y===e.number)window.alert("".concat(C," is already added to phonebook"));else if(window.confirm("".concat(C," is already added to phonebook, replace the old number with a new one?"))){var n=Object(u.a)(Object(u.a)({},e),{},{number:y});g(e.id,n).then((function(e){var n=t.map((function(n){return n.id!==e.id?n:e}));o(n),E(n),F("".concat(e.name," phone number was set to ").concat(e.number," ")),setTimeout((function(){F(null)}),5e3)})).catch((function(e){console.log(e.response.data.error),B(e.response.data.error),setTimeout((function(){B(null)}),5e3)}))}};return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(j,{message:z}),Object(s.jsx)(b,{error:L}),Object(s.jsx)(l,{filterOnChange:function(e){var n=t.filter((function(n){var t;return-1!==n.name.toString().toLowerCase().indexOf(null===(t=e.target.value)||void 0===t?void 0:t.toString().toLowerCase())}));E(n)}}),Object(s.jsx)("h3",{children:"Add a new person"}),Object(s.jsx)(d,{addPerson:function(e){if(e.preventDefault(),t.findIndex((function(e){return e.name===C}))>-1)H();else{var n=h;n++,p({name:C,number:y}).then((function(e){var n=t.concat(e);o(n),E(n),F("".concat(e.name," was added")),setTimeout((function(){F(null)}),5e3)})).catch((function(e){console.log(e.response.data.error),B(e.response.data.error),setTimeout((function(){B(null)}),5e3)})),m(n)}S(""),k("")},newName:C,newNumber:y,handleNumberChange:function(e){k(e.target.value)},handlePersonChange:function(e){S(e.target.value)}}),Object(s.jsx)("h2",{children:"Numbers"}),Object(s.jsx)(f,{filteredPersons:D,deletePerson:function(e){if(window.confirm("Are you sure you want to delete the user?")){var n=t.find((function(n){return n.id===e}));x(e).then((function(n){console.log(n);var r=t.filter((function(n){return n.id!==e}));o(r),E(r)})).catch((function(e){B("Person '".concat(n.name,"' was already removed from server")),setTimeout((function(){B(null)}),5e3)}))}else console.log(e)}})]})};a.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(w,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.8d954fad.chunk.js.map