(this["webpackJsonpredux-anecdotes"]=this["webpackJsonpredux-anecdotes"]||[]).push([[0],{13:function(t,e,n){t.exports=n(23)},22:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(5),c=n.n(i),l=n(7),u=n(2),o=n(11),m=n(12),d=function(){var t=Object(u.c)((function(t){return t.notification}));return r.a.createElement("div",{style:{padding:10}},t)},s=function(t){return t.thumbnail?r.a.createElement(r.a.Fragment,null,r.a.createElement("th",null,r.a.createElement("img",{src:t.src,alt:"theImage",width:"100",height:"60"})),r.a.createElement("th",null," ",t.quantity," "),r.a.createElement("th",null," $",t.price," ")):r.a.createElement(r.a.Fragment,null,r.a.createElement("th",null,r.a.createElement("img",{src:t.src,alt:"theImage",width:"250",height:"150"})),r.a.createElement("th",null," ",t.quantity," "),r.a.createElement("th",null," $",t.price," "))},b=n(1),f=n(3),p={inventory:[{id:1,src:"https://github.com/miketran238/ImageRepository/blob/master/public/img/tunnel.jpg?raw=true",quantity:5,price:5.5},{id:2,src:"https://github.com/miketran238/ImageRepository/blob/master/public/img/park.jpg?raw=true",quantity:10,price:3.99},{id:3,src:"https://github.com/miketran238/ImageRepository/blob/master/public/img/bridge.jpg?raw=true",quantity:2,price:10},{id:4,src:"https://github.com/miketran238/ImageRepository/blob/master/public/img/coast.jpg?raw=true",quantity:5,price:6},{id:5,src:"https://github.com/miketran238/ImageRepository/blob/master/public/img/rails.jpg?raw=true",quantity:10,price:2.5},{id:6,src:"https://github.com/miketran238/ImageRepository/blob/master/public/img/sky.jpg?raw=true",quantity:20,price:4.99}],cart:[],credit:29.99,own:[{id:7,src:"https://github.com/miketran238/ImageRepository/blob/master/public/img/boston.jpeg?raw=true",quantity:3,price:8},{id:8,src:"https://github.com/miketran238/ImageRepository/blob/master/public/img/moon.jpeg?raw=true",quantity:1,price:12},{id:9,src:"https://github.com/miketran238/ImageRepository/blob/master/public/img/sunset.jpeg?raw=true",quantity:2,price:15}],total:0,discount:[5,10,15]},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,e=arguments.length>1?arguments[1]:void 0;switch(console.log("state now: ",t),console.log("action",e),e.type){case"NEW":var n=[].concat(Object(f.a)(t.inventory),[e.data]),a=t;return a.inventory=n,a;case"BUY":var r=e.data.id,i=t.inventory.find((function(t){return t.id===r})),c=Object(b.a)(Object(b.a)({},i),{},{quantity:i.quantity-1});n=0===c.quantity?t.inventory.filter((function(t,e,n){return t.id!==r})):t.inventory.map((function(t){return t.id!==r?t:c}));var l=t.cart.find((function(t){return t.id===r})),u=void 0;if(i.quantity=1,void 0===l)u=[].concat(Object(f.a)(t.cart),[i]);else{var o=Object(b.a)(Object(b.a)({},l),{},{quantity:l.quantity+1});u=t.cart.map((function(t){return t.id!==r?t:o}))}var m=Object(b.a)(Object(b.a)({},t),{},{cart:u,inventory:n,total:t.total+i.price});return m;case"PURCHASE":if(e.price>t.credit)return window.alert("You do not have enough credit"),t;for(var d=Object(f.a)(t.own),s=function(){var e=t.cart[h];console.log(e.id);var n=d.find((function(t){return t.id===e.id}));if(void 0===n)d=[].concat(Object(f.a)(d),[e]);else{var a=Object(b.a)(Object(b.a)({},n),{},{quantity:n.quantity+e.quantity});d=d.map((function(t){return t.id!==e.id?t:a}))}},h=0;h<t.cart.length;h++)s();var y=t.credit-e.price,E=Object(b.a)(Object(b.a)({},t),{},{cart:[],credit:y,own:d,total:0});return window.alert("Purchase successfully"),E;case"QUANTITY_DOWN":var g=e.data.id,v=t.cart.find((function(t){return t.id===g})),O=Object(b.a)(Object(b.a)({},v),{},{quantity:v.quantity-1});u=0===O.quantity?t.cart.filter((function(t,e,n){return t.id!==g})):t.cart.map((function(t){return t.id!==g?t:O}));var j=t.inventory.find((function(t){return t.id===g}));if(n=t.inventory,void 0===j)v.quantity=1,n=[].concat(Object(f.a)(t.inventory),[v]);else{var w=Object(b.a)(Object(b.a)({},j),{},{quantity:j.quantity+1});n=t.inventory.map((function(t){return t.id!==g?t:w}))}var q=Object(b.a)(Object(b.a)({},t),{},{cart:u,inventory:n,total:t.total-v.price});return q;case"SELL":var I=e.data.id,k=t.own.find((function(t){return t.id===I})),T=Object(b.a)(Object(b.a)({},k),{},{quantity:k.quantity-1}),F=void 0;F=0===T.quantity?t.own.filter((function(t,e,n){return t.id!==I})):t.own.map((function(t){return t.id!==I?t:T}));var N=t.inventory.find((function(t){return t.id===I}));if(n=void 0,void 0===N)k.quantity=1,n=[].concat(Object(f.a)(t.inventory),[k]);else{var R=Object(b.a)(Object(b.a)({},N),{},{quantity:N.quantity+1});n=t.inventory.map((function(t){return t.id!==I?t:R}))}var C=t.credit+k.price,S=Object(b.a)(Object(b.a)({},t),{},{own:F,inventory:n,credit:C});return S;case"DISCOUNT":var A,Y=e.data.id;A=-1!==t.discount[Y]?t.total*(100-t.discount[Y])/100:t.total;var P=Object(f.a)(t.discount);return P[Y]=-1,Object(b.a)(Object(b.a)({},t),{},{discount:P,total:A});default:return t}},y=function(){var t=Object(u.b)(),e=Object(u.c)((function(t){return t.images.inventory}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null," Image "),r.a.createElement("th",null," Quanity "),r.a.createElement("th",null," Price "),r.a.createElement("th",null))),r.a.createElement("tbody",null,e.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement(s,{src:e.src,quantity:e.quantity,price:e.price,thumbnail:!1}),r.a.createElement("th",null," ",r.a.createElement("button",{onClick:function(){return n=e.id,void t(function(t){return{type:"BUY",data:{id:t}}}(n));var n}}," Buy ")," "))})))))},E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_NOTIFICATION":return e.notification;case"REMOVE_NOTIFICATION":return"";default:return t}},g=function(){var t=Object(u.b)(),e=Object(u.c)((function(t){return t.images.own}));return 0===e.length?r.a.createElement(r.a.Fragment,null,"You don't have any images"):r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null," Image "),r.a.createElement("th",null," Quanity "),r.a.createElement("th",null," Price "),r.a.createElement("th",null))),r.a.createElement("tbody",null,e.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement(s,{src:e.src,quantity:e.quantity,price:e.price,thumbnail:!1}),r.a.createElement("th",null," ",r.a.createElement("button",{onClick:function(){return n=e.id,a=e.price,t(function(t){return{type:"SELL",data:{id:t}}}(n)),t({type:"SET_NOTIFICATION",notification:"You have just sold your image for $".concat(a)}),void setTimeout((function(){t({type:"REMOVE_NOTIFICATION"})}),1e3);var n,a}}," Sell ")," "))})))))},v=function(){var t=Object(u.b)(),e=Object(u.c)((function(t){return t.images.cart})),n=Object(u.c)((function(t){return t.images.total}));return 0===e.length?r.a.createElement(r.a.Fragment,null,"Empty"):r.a.createElement(r.a.Fragment,null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null," Image "),r.a.createElement("th",null," Quanity "),r.a.createElement("th",null," Price "),r.a.createElement("th",null))),r.a.createElement("tbody",null,e.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement(s,{src:e.src,quantity:e.quantity,price:e.price,thumbnail:!0}),r.a.createElement("th",null," ",r.a.createElement("button",{onClick:function(){return n=e.id,void t(function(t){return{type:"QUANTITY_DOWN",data:{id:t}}}(n));var n}}," - ")," "))})))),"Total : $",n.toFixed(2)," ",r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return function(e){t({type:"PURCHASE",price:e})}(n)}}," ",r.a.createElement("b",null," Purchase ")," "))},O=function(){var t=Object(u.c)((function(t){return t.images.credit}));return r.a.createElement(r.a.Fragment,null,"Your Credit: $",t.toFixed(2))},j=(n(22),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"columnLeft"},r.a.createElement("h2",null," Store "),r.a.createElement(y,null)),r.a.createElement("div",{className:"columnRight"},r.a.createElement("h2",null,"Your Cart"),r.a.createElement(v,null))))}),w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null," Sell your own images "),r.a.createElement(g,null))},q=function(){var t=Object(a.useState)("buy"),e=Object(m.a)(t,2),n=e[0],i=e[1],c=function(t){return function(e){e.preventDefault(),i(t)}},l={padding:5};return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome to Mike's Image Repository"),r.a.createElement(O,null),r.a.createElement("div",null,r.a.createElement("a",{href:"",onClick:c("buy"),style:l},r.a.createElement("b",null," Buy ")),r.a.createElement("a",{href:"",onClick:c("sell"),style:l},r.a.createElement("b",null,"Sell "))),"buy"===n?r.a.createElement(j,null):"sell"===n?r.a.createElement(w,null):void 0)},I=function(){return(1e5*Math.random()).toFixed(0)},k=["If it hurts, do it more often","Adding manpower to a late software project makes it later!","The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.","Any fool can write code that a computer can understand. Good programmers write code that humans can understand.","Premature optimization is the root of all evil.","Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."].map((function(t){return{content:t,id:I(),votes:0}})),T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,e=arguments.length>1?arguments[1]:void 0;switch(console.log("state now: ",t),console.log("action",e),e.type){case"NEW":return[].concat(Object(f.a)(t),[e.data]);case"VOTE":var n=e.data.id,a=t.find((function(t){return t.id===n})),r=Object(b.a)(Object(b.a)({},a),{},{votes:a.votes+1}),i=t.map((function(t){return t.id!==n?t:r}));return i.sort((function(t,e){return e.votes-t.votes})),i;default:return t}},F=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_FILTER":return e.filter;default:return t}},N=Object(l.combineReducers)({images:h,anecdotes:T,filter:F,notification:E}),R=Object(l.createStore)(N,Object(o.composeWithDevTools)());c.a.render(r.a.createElement(u.a,{store:R},r.a.createElement(q,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.1de0bbb9.chunk.js.map