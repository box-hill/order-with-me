(this["webpackJsonporder-with-me"]=this["webpackJsonporder-with-me"]||[]).push([[0],{46:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t),n.d(t,"categories",(function(){return c}));var c=[{name:"Meat",imgUrl:"./img/meat.jpg"},{name:"Soup",imgUrl:"https://images.unsplash.com/photo-1611345157614-26d3bdd10c93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"},{name:"Sides",imgUrl:"./img/sides.jpg"},{name:"Dessert",imgUrl:"./img/dessert.jpeg"},{name:"Drinks",imgUrl:"https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"}]},56:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n.n(c),i=n(35),r=n.n(i),s=n(12),l=n(6),o=n(17),d=n(9),j=n(36),b=Object({NODE_ENV:"production",PUBLIC_URL:"/order-with-me",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API:"AIzaSyBLTan2KI4dsEV8C0xo0UTtCacBjyNdvHg",REACT_APP_FIREBASE_AUTHDOMAIN:"order-with-me.firebaseapp.com",REACT_APP_FIREBASE_DATABASE_URL:"https://order-with-me-default-rtdb.firebaseio.com",REACT_APP_FIREBASE_PROJECTID:"order-with-me",REACT_APP_FIREBASE_STORAGEBUCKET:"order-with-me.appspot.com",REACT_APP_FIREBASE_MESSAGINGSENDERID:"679599040721",REACT_APP_FIREBASE_APPID:"1:679599040721:web:ac37f3cda188977820bdf0"}),u={apiKey:b.REACT_APP_FIREBASE_API,authDomain:b.REACT_APP_FIREBASE_AUTHDOMAIN,databaseURL:b.REACT_APP_FIREBASE_DATABASE_URL,projectId:b.REACT_APP_FIREBASE_PROJECTID,storageBucket:b.REACT_APP_FIREBASE_STORAGEBUCKET,messagingSenderId:b.REACT_APP_FIREBASE_MESSAGINGSENDERID,appId:b.REACT_APP_FIREBASE_APPID},m=Object(j.a)(u),O=n(10),f=(n(46),n(1));var h=function(e){return Object(f.jsx)(o.b,{to:e.link,children:Object(f.jsx)("li",{children:e.text})})};var g=function(){return Object(f.jsx)("nav",{children:Object(f.jsxs)("ul",{children:[Object(f.jsx)(h,{link:"/table",text:"Table"}),Object(f.jsx)(h,{link:"/menu",text:"Menu"}),Object(f.jsx)(h,{link:"/cart",text:"Cart"}),Object(f.jsx)(h,{link:"/orders",text:"Orders"})]})})},v=n(15);var p=function(){return Object(f.jsx)("div",{className:"card",children:Object(f.jsxs)("div",{className:"loader",children:[Object(f.jsx)("div",{className:"spin"}),Object(f.jsx)("div",{className:"bounce"})]})})};function x(e){var t=e.orders,n=e.loading,i=e.loadingOrder,r=e.validSession,o=(e.pendingOrders,Object(c.useState)(0)),d=Object(l.a)(o,2),j=d[0],b=d[1],u=a.a.useState([]),m=Object(l.a)(u,2),O=m[0],h=m[1];return Object(c.useEffect)((function(){function e(){var e=Math.floor(Date.now()/1e3);b(e)}e();var t=setInterval((function(){return e()}),1e3);return function(){clearInterval(t)}}),[]),Object(c.useEffect)((function(){var e=[];try{null!==t&&0!==t.length&&Object.keys(t).map((function(n){t[n].forEach((function(t){var n=t.id,c=t.quantity,a=t.name;if(!0===t.pending){var i=e.filter((function(e){return e.id===n}));e=0===i.length?[].concat(Object(v.a)(e),[{id:n,quantity:c,name:a}]):e.map((function(e){return e.id===n?Object(s.a)(Object(s.a)({},e),{},{quantity:e.quantity+c}):e})),h(e)}}))}))}catch(n){console.error(n)}}),[t]),r?n||i||0===j?Object(f.jsx)("div",{className:"main-content",children:Object(f.jsx)(p,{})}):null===t?Object(f.jsx)("div",{className:"main-content",children:"You currently have no pending orders!"}):Object(f.jsxs)("div",{className:"order-content",children:[Object(f.jsx)("div",{className:"order-container",children:Object.keys(t).map((function(e){return t[e].map((function(e,t){return e.pending?Object(f.jsxs)("div",{className:"order-item-view",children:[Object(f.jsx)("img",{src:e.imageUrl,alt:e.name}),Object(f.jsxs)("div",{className:"order-item-info",children:[Object(f.jsx)("div",{children:e.quantity}),Object(f.jsx)("div",{children:e.name})]}),Object(f.jsx)("div",{children:S(j,e.orderedAt)})]},t):null}))}))}),Object(f.jsx)("div",{children:O.map((function(e,t){return Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:e.quantity}),Object(f.jsxs)("span",{children:[" - ",e.name]})]},t)}))})]}):Object(f.jsx)("div",{className:"main-content",children:"Enter a table to get started!"})}function S(e,t){var n=e-t;if(n>=6e3)return"99:99";var c=Math.floor(n/60).toString(10),a=n%60,i=a.toString(10);return a<10&&(i="0".concat(a)),c+":"+i}var E=function(e){var t=e.label,n=e.validSession,a=e.setValidSession,i=e.globalTableId,r=e.setGlobalTableId,s=Object(c.useState)(""),o=Object(l.a)(s,2),d=o[0],j=o[1],b=Object(c.useState)(!0),u=Object(l.a)(b,2),m=u[0],O=u[1];Object(c.useEffect)((function(){/^[a-zA-Z0-9]{4}$/.test(d)?O(!1):O(!0)}),[d]);var h="Current Table: "+i;return Object(f.jsx)("div",{className:"main-content",children:Object(f.jsxs)("form",{className:"form-table",style:{backgroundImage:"linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('./img/shopfront.jpg')"},children:[Object(f.jsx)("label",{children:n?h:t}),Object(f.jsxs)("div",{children:[Object(f.jsx)("input",{type:"text",minLength:4,maxLength:4,onChange:function(e){j(e.currentTarget.value)},value:d}),Object(f.jsx)("button",{onClick:function(e){e.preventDefault();var t=d;/^[a-zA-Z0-9]{4}$/.test(t)?(a(!0),localStorage.setItem("tableId",t),localStorage.setItem("sessionTimeStamp",Date.now().toString(10)),r(d)):console.log("incorrect table id")},disabled:m,children:n?"Change Table":"Join Table"})]})]})})},A=n(55).categories;var I=function(){return Object(f.jsx)("div",{className:"main-content",children:Object(f.jsx)("div",{className:"menu-grid",children:A.map((function(e,t){return Object(f.jsx)("div",{className:"grid-item",style:{backgroundImage:"linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(".concat(e.imgUrl,")")},children:Object(f.jsx)(o.b,{to:"/menu/".concat(e.name.toLowerCase()),children:e.name})},t)}))})})};var y=function(e){var t=e.setGlobalTableId,n=e.validSession,c=e.setValidSession;return e.loading?Object(f.jsx)("div",{children:"Loading...."}):Object(f.jsx)("div",{className:"fill-screen",children:n?Object(f.jsx)(I,{}):Object(f.jsx)(E,{label:"Enter your 4 Digit Table ID to get Started!",setValidSession:c,setGlobalTableId:t})})},T=[{category:"Meat",name:"Wagyuu Beef",id:"10",imgUrl:"https://cdn.shopify.com/s/files/1/0482/3233/files/LoneMountainWagyu-seotool-64272-WhatToPair-blogbanner1.jpg?v=1609320587",price:"$35.00"},{category:"Meat",name:"Sliced Pork Belly",id:"11",imgUrl:"https://unclesbutchery.com/wp-content/uploads/2020/04/Sliced-Pork-BellyRolled-Thumb.jpg",price:"$17.00"},{category:"Meat",name:"Beef tongue",id:"12",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWvN-LvhcMYHPRhHI5kD8RzaZ7-G-gwiIHTHFUCxOQL6eQAnU8LOjYKwyOJm3mpF_wT6I&usqp=CAU",price:"$19.00"},{category:"Meat",name:"Sliced Beef",id:"13",imgUrl:"https://www.mychineserecipes.com/wp-content/uploads/2019/03/beef-slices.jpg",price:"$17.00"},{category:"Meat",name:"Sliced Mutton",id:"14",imgUrl:"https://my-test-11.slatic.net/p/bbafaf71ad7dfc2f59ad9f50af3d3023.jpg",price:"$18.50"},{category:"Meat",name:"Sliced Steak",id:"15",imgUrl:"https://media-cdn.tripadvisor.com/media/photo-s/0e/cb/4c/b2/sliced-steak.jpg",price:"$12.00"}].concat([{category:"Soup",name:"Spicy Soup Base",id:"51",imgUrl:"#",price:"$16.00"},{category:"Soup",name:"Chicken Broth Soup Base",id:"52",imgUrl:"#",price:"$15.00"}],[{category:"Drinks",name:"Coke",id:"101",imgUrl:"#",price:"$2.50"}]);var N=function(e){var t=e.match.params.category,n=T.filter((function(e){return e.category.toLowerCase()===t.toLowerCase()}));return Object(f.jsx)("div",{className:"fill-screen",children:Object(f.jsx)("div",{className:"items-container",children:n.map((function(e,n){return Object(f.jsx)(o.b,{to:"/menu/".concat(t,"/").concat(e.id),children:Object(f.jsxs)("div",{className:"item-container",children:[Object(f.jsx)("img",{className:"item-img",src:e.imgUrl,alt:e.name}),Object(f.jsxs)("div",{className:"text-container",children:[Object(f.jsx)("div",{children:e.name}),Object(f.jsx)("div",{children:e.price})]})]})},n)}))})})};var _=function(){var e=Object(c.useState)(!0),t=Object(l.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(null),s=Object(l.a)(r,2),o=s[0],d=s[1],j=a.a.useState([]),b=Object(l.a)(j,2),u=b[0],h=b[1],g=Object(c.useState)(0),p=Object(l.a)(g,2),x=p[0],E=p[1];function A(e){try{var t=e.target.getAttribute("data-key"),n=t.slice(0,4),c=t.slice(4,24),a=t.slice(24,t.length),i=Object(O.b)(m);if(null!=o){var r=o[n].orders[c],s=r.filter((function(e){return e.id===a}))[0],l=r.indexOf(s);Object(O.g)(Object(O.e)(i,"tables/".concat(n,"/orders/").concat(c,"/").concat(l)),{pending:!1})}}catch(d){console.error(d)}}return Object(c.useEffect)((function(){function e(){var e=Math.floor(Date.now()/1e3);E(e)}e();var t=setInterval((function(){return e()}),1e3),n=Object(O.b)(m),c=Object(O.e)(n,"tables/");return Object(O.c)(c,(function(e){var t=e.val();console.log(t),null===t&&i(!1),d(t)})),function(){clearInterval(t)}}),[]),Object(c.useEffect)((function(){if(null!=o){i(!1);var e=[];Object.keys(o).map((function(t){var n=o[t].orders;Object.keys(n).map((function(c){n[c].forEach((function(n){n.pending&&(n.tableId=t,n.uid=t+c+n.id,e=null===e?[n]:[].concat(Object(v.a)(e),[n]))}))}))})),h(e),console.log(e)}}),[o]),n||0===x?Object(f.jsx)("div",{children:"Loading..."}):Object(f.jsxs)("div",{className:"kitchen-content",children:[Object(f.jsxs)("div",{className:"kitchen-item",children:[Object(f.jsx)("div",{children:"Name: "}),Object(f.jsx)("div",{children:"Quantity: "}),Object(f.jsx)("div",{children:"Table: "}),Object(f.jsx)("div",{children:"Timer: "})]}),u.map((function(e){return Object(f.jsxs)("div",{className:"kitchen-item",children:[Object(f.jsx)("div",{children:e.name}),Object(f.jsx)("div",{children:e.quantity}),Object(f.jsx)("div",{children:e.tableId}),Object(f.jsx)("div",{children:S(x,e.orderedAt)}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{onClick:A,"data-key":e.uid,children:"Completed"})})]},e.uid)}))]})};function C(e){var t=e.match.params,n=t.id,a=(t.category,e.cart),i=e.setCart,r=Object(c.useState)(0),o=Object(l.a)(r,2),d=o[0],j=o[1];function b(e){if("plus"===e)j(d+1);else{if("minus"===e&&d<=0)return;"minus"===e&&j(d-1)}}var u=function(e){var t=T.filter((function(t){return t.id===e}));return 0===t.length?(console.log("cannot find item"),null):t.length>1?(console.log("duplicate items"),null):t[0]}(n);return null===u?null:Object(f.jsx)("div",{className:"main-content",children:Object(f.jsxs)("div",{className:"item-view",children:[Object(f.jsx)("img",{src:u.imgUrl,alt:u.name}),Object(f.jsxs)("div",{className:"item-info",children:[Object(f.jsx)("div",{children:null===u?null:u.name}),Object(f.jsx)("div",{children:null===u?null:u.price})]}),Object(f.jsxs)("div",{className:"item-buttons-container",children:[Object(f.jsxs)("div",{className:"item-buttons",children:[Object(f.jsx)("button",{onClick:function(){return b("minus")},children:"-"}),Object(f.jsxs)("span",{children:["Quantity: ",d]}),Object(f.jsx)("button",{onClick:function(){return b("plus")},children:"+"})]}),Object(f.jsx)("button",{onClick:function(){if(0!==d){var e=a.filter((function(e){return e.id===n}));if(e.length>0){var t=e[0].quantity+d;i(Object(v.a)(a).map((function(e){return e.id===n?Object(s.a)(Object(s.a)({},e),{},{quantity:t,name:u.name,price:u.price,imageUrl:u.imgUrl}):e})))}else i(a.concat({id:n,quantity:d,name:u.name,price:u.price,imageUrl:u.imgUrl}))}},disabled:0===d,children:"Add to cart"})]})]})})}function R(e){var t=e.cart,n=e.setCart,a=e.validSession,i=e.globalTableId,r=Object(c.useState)(""),o=Object(l.a)(r,2),d=o[0],j=o[1];function b(e,c){var a=t.filter((function(e){return e.id===c}))[0].quantity;a<=1&&"minus"===e||("plus"===e?a++:"minus"===e&&a--,n(Object(v.a)(t).map((function(e){return e.id===c?Object(s.a)(Object(s.a)({},e),{},{quantity:a}):e}))))}return Object(c.useEffect)((function(){var e=t.reduce((function(e,t){return e+P(t.price)*t.quantity}),0);j(k(e))}),[t]),Object(f.jsxs)("div",{className:"cart-content",children:[Object(f.jsx)("div",{className:"cart-container",children:t.map((function(e,c){var a=P(e.price);return Object(f.jsxs)("div",{className:"cart-item-view",children:[Object(f.jsx)("img",{src:e.imageUrl,alt:e.name}),Object(f.jsxs)("div",{className:"cart-item-info",children:[Object(f.jsx)("div",{children:e.name}),Object(f.jsx)("div",{children:e.price})]}),Object(f.jsx)("div",{className:"item-buttons-container",children:Object(f.jsxs)("div",{className:"item-buttons",children:[Object(f.jsx)("button",{onClick:function(){return b("minus",e.id)},disabled:1===e.quantity,children:"-"}),Object(f.jsx)("div",{children:e.quantity}),Object(f.jsx)("button",{onClick:function(){return b("plus",e.id)},children:"+"})]})}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{className:"remove-button",onClick:function(){return function(e){var c=Object(v.a)(t);c=c.filter((function(t){return t.id!==e})),n(c)}(e.id)},children:"Remove"})}),Object(f.jsx)("div",{children:k(a*e.quantity)})]},c)}))}),Object(f.jsxs)("div",{className:"checkout-info",children:[Object(f.jsxs)("div",{children:["Total: ",Object(f.jsx)("span",{children:d})]}),Object(f.jsxs)("div",{children:["Table: ",i]}),Object(f.jsx)("button",{onClick:function(){if(a){var e=Math.floor(Date.now()/1e3),c=Object(v.a)(t);c=c.map((function(t){return Object(s.a)(Object(s.a)({},t),{},{pending:!0,orderedAt:e})})),console.log(c),function(e){var t=Object(O.b)(m),n=Object(O.d)(Object(O.a)(Object(O.e)(t),"tables/tableId/orders/")).key;Object(O.f)(Object(O.e)(t,"tables/".concat(i,"/orders/").concat(n)),e)}(c),n([])}},disabled:!a||0===t.length,children:"Order"}),a?null:Object(f.jsx)("div",{children:"Enter a table before ordering!"})]})]})}function P(e){"$"===e.charAt(0)&&(e=e.slice(1));var t=-1;if(e.includes(".")){t=e.indexOf(".");var n=parseInt(e.slice(0,t),10),c=e.slice(t+1),a=null;return 1===c.length?100*n+10*(a=parseInt(e.slice(t+1),10)):(2===c.length&&(a=parseInt(e.slice(t+1),10)),100*n+a)}return 100*parseInt(e,10)}function k(e){if(!1===Number.isInteger(e))return"";var t=e%100,n=t.toString(10);t<10&&(n="0".concat(t));var c=Math.floor(e/100);return"$".concat(c,".").concat(n)}var w=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(!0),j=Object(l.a)(r,2),b=j[0],u=j[1],h=Object(c.useState)(!0),v=Object(l.a)(h,2),p=v[0],S=v[1],A=Object(c.useState)(null),T=Object(l.a)(A,2),P=T[0],k=T[1],w=a.a.useState([]),U=Object(l.a)(w,2),B=U[0],D=U[1],M=a.a.useState([]),q=Object(l.a)(M,2),F=(q[0],q[1]),G=Object(c.useState)([]),L=Object(l.a)(G,2),H=L[0],$=L[1],V=Object(c.useState)(!1),W=Object(l.a)(V,2),J=W[0],K=W[1];return Object(c.useEffect)((function(){!function(){var e=localStorage.getItem("sessionTimeStamp");if(null===e)localStorage.clear();else if(Date.now()-parseInt(e)<36e5){K(!0);var t=localStorage.getItem("tableId");null!=t&&i(t);var n=localStorage.getItem("cart");null!=n&&$(JSON.parse(n))}u(!1)}()}),[]),Object(c.useEffect)((function(){var e=JSON.stringify(H);localStorage.setItem("cart",e)}),[H]),Object(c.useEffect)((function(){if(!0===J&&""!==n){var e=Object(O.b)(m),t=Object(O.e)(e,"tables/".concat(n,"/orders"));Object(O.c)(t,(function(e){var t=e.val();k(t),null===t&&S(!1)}))}}),[J,n]),Object(c.useEffect)((function(){if(null!=P){S(!1);var e=[],t=[];Object.keys(P).map((function(n){var c=P[n],a=c.filter((function(e){return!0===e.pending}));e=e.concat(a);var i=c.filter((function(e){return!1===e.pending}));t=t.concat(i)})),D(e),console.log("pending"),console.table(e),F(t),console.log("past"),console.table(t)}}),[P]),Object(f.jsx)("div",{className:"app",children:Object(f.jsxs)(o.a,{basename:"/",children:[Object(f.jsx)(g,{}),Object(f.jsxs)(d.c,{children:[Object(f.jsx)(d.a,{exact:!0,path:"/",component:function(){return Object(f.jsx)(y,{setGlobalTableId:i,validSession:J,setValidSession:K,loading:b})}}),Object(f.jsx)(d.a,{path:"/menu/:category/:id",component:function(e){return Object(f.jsx)(C,Object(s.a)(Object(s.a)({},e),{},{cart:H,setCart:$}))}}),Object(f.jsx)(d.a,{path:"/menu/:category",component:N}),Object(f.jsx)(d.a,{path:"/menu",component:I}),Object(f.jsx)(d.a,{path:"/table",component:function(){return Object(f.jsx)(E,{label:"Enter your 4 Digit Table ID to get Started!",validSession:J,setValidSession:K,globalTableId:n,setGlobalTableId:i})}}),Object(f.jsx)(d.a,{exact:!0,path:"/cart",component:function(){return Object(f.jsx)(R,{cart:H,setCart:$,validSession:J,globalTableId:n})}}),Object(f.jsx)(d.a,{exact:!0,path:"/orders",component:function(){return Object(f.jsx)(x,{orders:P,loading:b,loadingOrder:p,pendingOrders:B,validSession:J})}}),Object(f.jsx)(d.a,{exact:!0,path:"/kitchen",component:_})]})]})})};r.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(w,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.d3efab9c.chunk.js.map