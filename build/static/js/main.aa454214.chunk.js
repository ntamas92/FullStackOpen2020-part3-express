(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(14),c=t.n(o),u=(t(20),t(4)),i=t(2),l=function(e){var n=e.filterText,t=e.onFilterChange;return r.a.createElement("p",null,"filter shown with",r.a.createElement("input",{value:n,onChange:t}))},m=function(e){var n=e.name,t=e.number,a=e.setNewNameHandler,o=e.setNewNumberHandler,c=e.addNewNameHandler;return r.a.createElement("form",{onSubmit:c},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:n,onChange:a})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:t,onChange:o})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},s=function(e,n){return function(){window.confirm("Delete ".concat(e.name,"?"))&&n(e)}},d=function(e){var n=e.persons,t=e.filterText,a=e.deletionHandler;return r.a.createElement("ul",null,n.filter((function(e){return e.name.toUpperCase().includes(t.toUpperCase())})).map((function(e){return r.a.createElement("li",{key:e.name},e.name,": ",e.number,r.a.createElement("button",{type:"button",onClick:s(e,a)},"delete"))})))},f=t(3),h=t.n(f),b="/api/persons",p=function(e){return e},v=function(){var e=h.a.get(b).then((function(e){return e.data}));return p(e)},E=function(e){var n=h.a.post(b,e).then((function(e){return e.data}));return p(n)},w=function(e,n){var t=h.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}));return p(t)},N=function(e){var n=h.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}));return p(n)},g=function(e){var n=e.message,t=e.isError;return null===n?null:t?r.a.createElement("div",{className:"notificationBar"},r.a.createElement("div",{className:"errorNotification"},n)):r.a.createElement("div",{className:"notificationBar"},r.a.createElement("div",{className:"infoNotification"},n))},j={message:null,isError:!1},O=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(""),s=Object(i.a)(c,2),f=s[0],h=s[1],b=Object(a.useState)(""),p=Object(i.a)(b,2),O=p[0],k=p[1],C=Object(a.useState)(""),H=Object(i.a)(C,2),S=H[0],y=H[1],x=Object(a.useState)(j),T=Object(i.a)(x,2),B=T[0],U=T[1],A=function(e,n){U({message:e,isError:n}),setTimeout((function(){U(j)}),5e3)};Object(a.useEffect)((function(){v().then((function(e){return o(e)}))}),[]);var D=function(e){if(window.confirm("".concat(f," is already added to the phonebook, replace the old number with a new one?"))){var n=Object(u.a)(Object(u.a)({},e),{},{number:O});w(e.id,n).then((function(){o(t.map((function(e){return e.id!==n.id?e:n}))),A("Updated ".concat(e.name,"'s phone number."),!1)})).catch((function(e){A("Error happened: ".concat(e),!0)}))}};return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(g,B),r.a.createElement(l,{filterText:S,onFilterChange:function(e){return y(e.target.value)}}),r.a.createElement("h3",null,"Add a new"),r.a.createElement(m,{name:f,setNewNameHandler:function(e){return h(e.target.value)},number:O,setNewNumberHandler:function(e){return k(e.target.value)},addNewNameHandler:function(e){e.preventDefault();var n=t.find((function(e){return e.name===f}));if(void 0===n){var a={name:f,number:O};E(a).then((function(e){o(t.concat(e)),A("Added ".concat(a.name),!1)})).catch((function(e){console.log(e.response),A(e.response.data.error,!0)}))}else D(n)}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(d,{persons:t,filterText:S,deletionHandler:function(e){N(e.id).then((function(n){o(t.filter((function(n){return n.name!==e.name}))),A("Removed ".concat(e.name),!1)}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.aa454214.chunk.js.map