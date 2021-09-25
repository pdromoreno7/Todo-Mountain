(this["webpackJsonpcurso-intro-react"]=this["webpackJsonpcurso-intro-react"]||[]).push([[0],{25:function(n,e,t){},29:function(n,e,t){},30:function(n,e,t){"use strict";t.r(e);var o=t(2),r=t.n(o),a=t(7),c=t.n(a),i=(t(25),t(11)),s=t(5);function d(){var n=function(n,e){var t=Object(o.useState)(!1),r=Object(s.a)(t,2),a=r[0],c=r[1],i=Object(o.useState)(!0),d=Object(s.a)(i,2),l=d[0],u=d[1],p=Object(o.useState)(e),b=Object(s.a)(p,2),x=b[0],h=b[1];return Object(o.useEffect)((function(){setTimeout((function(){try{var t,o=localStorage.getItem(n);o?t=JSON.parse(o):(localStorage.setItem(n,JSON.stringify(e)),t=e),h(t),u(!1)}catch(a){c(a)}}),1e3)}),[]),{item:x,saveItem:function(e){try{var t=JSON.stringify(e);localStorage.setItem(n,t),h(e)}catch(a){c(a)}},loading:l,error:a}}("TODOS_V1",[]),e=n.item,t=n.saveItem,a=n.loading,c=n.error,d=Object(o.useState)(""),l=Object(s.a)(d,2),u=l[0],p=l[1],b=r.a.useState(!1),x=Object(s.a)(b,2),h=x[0],m=x[1],j=e.filter((function(n){return!0===n.completed})).length,f=e.length,g=[];g=!u.length>=1?e:e.filter((function(n){var e=n.text.toLowerCase(),t=u.toLowerCase();return e.includes(t)}));return{loading:a,error:c,totalTodos:f,completedTodos:j,searchValue:u,setSearchValue:p,searchedTodos:g,addTodo:function(n){var o=Object(i.a)(e);o.push({completed:!1,text:n}),t(o)},toggleCompleteTodo:function(n){var o=e.findIndex((function(e){return e.text===n})),r=Object(i.a)(e);r[o].completed=!r[o].completed,t(r)},deleteTodo:function(n){var o=e.findIndex((function(e){return e.text===n})),r=Object(i.a)(e);r.splice(o,1),t(r)},openModal:h,setOpenModal:m}}var l,u=t(3),p=t(10),b=t(4),x=t(1),h=b.a.button(l||(l=Object(u.a)(["\n  background-color: var(--secun-color);\n  box-shadow: 0px 5px 25px rgba(97, 218, 250, 0.5);\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  font-size: 30px;\n  position: fixed;\n  bottom: 60px;\n  right: 24px;\n  font-weight: bold;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 54px;\n  width: 54px;\n\n  path {\n    stroke: white;\n  }\n  transform: rotate(0);\n  transition: 0.3s ease;\n  :hover {\n    transform: rotate(224deg);\n  }\n"])));function m(n){return Object(x.jsx)(h,{onClick:function(){n.setOpenModal(!n.openModal)},children:Object(x.jsx)(p.a,{})})}t(29);var j,f,g=b.a.header(j||(j=Object(u.a)(["\n  .header__box {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    color: white;\n  }\n  .header__title {\n    letter-spacing: 8px;\n    margin-bottom: 20px;\n    font-weight: var (--normal-font);\n  }\n  .header__search {\n    margin-bottom: 30px;\n  }\n"])));function O(n){var e=n.children;n.loading;return Object(x.jsx)(g,{children:Object(x.jsx)("div",{className:"header__container",children:Object(x.jsxs)("div",{className:"header__box mobile-container",children:[Object(x.jsx)("h1",{className:"header__title",children:"TODO"}),Object(x.jsx)("div",{className:"header__search",children:e})]})})})}var _=b.a.section(f||(f=Object(u.a)(["\n  margin-top: 40px;\n  transition: 1s;\n  .counter__container {\n    text-align: center;\n\n    p {\n      font-size: var(--h3-font-size);\n      color: var(--font-color-1);\n    }\n  }\n  /* .TodoCounter-loading {\n    opacity: 25%;\n  } */\n"])));function v(n){var e=n.totalTodos,t=n.completedTodos,o=n.loading;return Object(x.jsx)(_,{className:"".concat(!!o&&"TodoCounter-loading"),children:Object(x.jsx)("div",{className:"bd-container counter__container",children:Object(x.jsxs)("p",{children:["Has completado"," ",Object(x.jsx)("strong",{className:"counter__complete",children:t})," de"," ",Object(x.jsx)("strong",{children:e})," Todos"]})})})}var y,T,w=t(18),N=b.a.li(y||(y=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  /* justify-content: space-between; */\n  width: 90%;\n  height: 50px;\n  /* border-bottom: 1px solid #ccc; */\n  background: var(--white);\n  padding: 0 30px;\n  margin: 3px 0;\n  border-radius: 7px;\n  transition: 1s;\n  /* cursor: pointer; */\n  :hover {\n    box-shadow: 1px 14px 25px 0px #b3b3b3;\n    transform: translateY(-0.05rem);\n  }\n  .todoItem__box {\n    width: 100%;\n    display: flex;\n    align-items: center;\n  }\n  .todoItem__box-completed {\n    text-decoration: line-through;\n  }\n  p {\n    color: var(--font-color-1);\n    /* cursor: pointer; */\n  }\n  .todoItem__check {\n    cursor: pointer;\n  }\n  .todoItem__check-active {\n    path {\n      color: #05c005;\n    }\n  }\n  .todoItem__delate {\n    justify-self: flex-end;\n    cursor: pointer;\n    :hover {\n      path {\n        stroke: red;\n      }\n    }\n  }\n"])));function k(n){var e=n.text,t=n.completed,o=n.onComplete,r=n.onDelete;return Object(x.jsxs)(N,{children:[Object(x.jsx)("span",{className:"todoItem__check ".concat(t&&"todoItem__check-active"),onClick:o,children:Object(x.jsx)(w.a,{})}),Object(x.jsx)("div",{className:"todoItem__box ".concat(t&&"todoItem__box-completed"),children:Object(x.jsx)("p",{children:e})}),Object(x.jsx)("span",{className:"todoItem__delate",onClick:r,children:Object(x.jsx)(p.b,{})})]})}var S,I=b.a.section(T||(T=Object(u.a)(["\n  padding: 7px 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 67vh;\n  .todoList__box {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    padding: 25px 0;\n    overflow: hidden;\n    transition: 1s;\n  }\n"])));function C(n){return Object(x.jsxs)(I,{className:"mobile-container transicion-one",children:[n.error&&n.onError(),n.loading&&n.onLoading(),!n.loading&&!n.totalTodos&&n.onEmptyTodos(),!!n.totalTodos&&!n.searchedTodos.length&&n.onEmptySearchResults(n.searchText),Object(x.jsx)("ul",{className:"todoList__box",children:n.searchedTodos.map(n.render)})]})}var M,z=b.a.div(S||(S=Object(u.a)(["\n  background: rgba(32, 35, 41, 0.3);\n  position: fixed;\n  top: -10px;\n  left: -10px;\n  right: -10px;\n  bottom: -10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  transition: 1s;\n"])));function E(n){var e=n.children;return c.a.createPortal(Object(x.jsx)(z,{children:e}),document.getElementById("modal"))}var B=b.a.form(M||(M=Object(u.a)(['\n  background-color: var(--main-color);\n  padding: 70px 20px;\n  border-radius: 10px;\n  box-shadow: 1px 14px 25px 0px #3d3d3d;\n  width: 80%;\n  display: flex;\n  /* gap: 1.5rem; */\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transition: 1s;\n  .form__title {\n    font-size: var(--h2-font-size);\n    color: var(--font-color-1);\n    font-weight: var(--medium-font);\n    margin-bottom: 1.5rem;\n  }\n  textarea {\n    font-family: "Poppins";\n    width: 100%;\n    height: 150px;\n    font-size: 1rem;\n    padding: 1.2rem;\n    color: var(--font-color-1);\n    /* background-color: var(--deep-dark); */\n    outline: none;\n    border: none;\n    border-radius: 8px;\n    margin-bottom: 1.5rem;\n    /* margin-top: 1rem; */\n    :focus {\n      border: #a2a3a3 solid 1px;\n    }\n  }\n  .form__butomBox {\n    display: flex;\n    /* gap: 1rem; */\n  }\n  .form__butomBox-submit {\n    font-family: "Poppins";\n    padding: 10px 25px;\n    outline: none;\n    border: none;\n    color: white;\n    background-color: var(--secun-color);\n    border-radius: 15px;\n    cursor: pointer;\n    :hover {\n      background-color: var(--tercer-color);\n      transition: 1s;\n    }\n  }\n  .form__butomBox-cancel {\n    margin-right: 1rem;\n    font-family: "Poppins";\n    padding: 10px 15px;\n    outline: none;\n    border: #a2a3a3 solid 1px;\n    color: var(--font-color-1);\n    background-color: white;\n    border-radius: 15px;\n    cursor: pointer;\n    :hover {\n      background-color: #d11a51d6;\n      color: white;\n      transition: 1s;\n    }\n  }\n'])));function V(n){var e=n.addTodo,t=n.setOpenModal,o=r.a.useState(""),a=Object(s.a)(o,2),c=a[0],i=a[1];return Object(x.jsxs)(B,{onSubmit:function(n){n.preventDefault(),e(c),t(!1)},className:"mobile-container",children:[Object(x.jsx)("label",{className:"form__title",children:"A\xf1adir un todo"}),Object(x.jsx)("textarea",{value:c,onChange:function(n){i(n.target.value)},placeholder:"Escribe aqu\xed tu tarea..."}),Object(x.jsxs)("div",{className:"form__butomBox",children:[Object(x.jsx)("button",{className:"form__butomBox-cancel",type:"buttom",onClick:function(){t(!1)},children:"Cancelar"}),Object(x.jsx)("button",{className:"form__butomBox-submit",type:"submit",children:"A\xf1adir"})]})]})}var L,D=t(19),J=b.a.div(L||(L=Object(u.a)(["\n  height: 50vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  .spinning {\n    animation: spinner 1s linear infinite;\n    color: var(--secun-color);\n  }\n\n  @keyframes spinner {\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"])));function P(){return Object(x.jsx)(J,{children:Object(x.jsx)(D.a,{size:60,className:"spinning"})})}var A,H=t(20),R=b.a.div(A||(A=Object(u.a)(["\n  .search__container {\n    display: flex;\n    justify-content: center;\n  }\n  .search__box {\n    position: relative;\n    width: 100%;\n  }\n  .search__box-button {\n    height: 100%;\n    position: absolute;\n    right: 0;\n    top: 0;\n    cursor: pointer;\n    border: none;\n    background: none;\n    margin-right: 20px;\n    color: #7a7a7a;\n  }\n\n  .search__box-input {\n    border: none;\n    font-size: 1rem;\n    height: 50px;\n    border-radius: 5px;\n    padding: 5px 40px 5px 20px;\n    transition: 1s;\n    width: 100%;\n  }\n  /* .search__box-input:hover {\n    box-shadow: 0 0 5pt 0.5pt #7a7a7a;\n  } */\n  .search__box-input:focus {\n    outline: none;\n    box-shadow: 0 0 5pt 2pt #4b4b4b;\n  }\n  /* .search__box input:disabled {\n    opacity: 50%;\n  } */\n"])));function q(n){var e=n.searchValue,t=n.setSearchValue,o=n.loading;return Object(x.jsx)(R,{className:"".concat(!!o&&"TodoCounter-loading"),children:Object(x.jsx)("form",{className:"search__container ",children:Object(x.jsxs)("div",{className:"search__box",children:[Object(x.jsx)("input",{type:"text",placeholder:"Buscar una tarea",value:e,className:"search__box-input",onChange:function(n){t(n.target.value)},disabled:o}),Object(x.jsx)("button",{className:"search__box-button",type:"submit",children:Object(x.jsx)(H.a,{size:15})})]})})})}var F=function(){var n=d(),e=n.error,t=n.loading,o=n.searchedTodos,r=n.toggleCompleteTodo,a=n.deleteTodo,c=n.openModal,i=n.setOpenModal,s=n.searchValue,l=n.setSearchValue,u=n.addTodo,p=n.totalTodos,b=n.completedTodos;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(O,{loading:t,children:Object(x.jsx)(q,{loading:t,searchValue:s,setSearchValue:l})}),Object(x.jsx)(v,{loading:t,totalTodos:p,completedTodos:b}),Object(x.jsx)(C,{error:e,loading:t,totalTodos:p,searchedTodos:o,searchText:s,onError:function(){return Object(x.jsx)("p",{children:"Hubo un error"})},onLoading:function(){return Object(x.jsx)(P,{})},onEmptyTodo:function(){return Object(x.jsx)("p",{children:"Crea tu primer todo!"})},onEmptySearchResults:function(n){return Object(x.jsxs)("p",{children:["No hay resultado para ",n," "]})},render:function(n){return Object(x.jsx)(k,{text:n.text,completed:n.completed,onComplete:function(){return r(n.text)},onDelete:function(){return a(n.text)}},n.text)}}),!!c&&Object(x.jsx)(E,{children:Object(x.jsx)(V,{addTodo:u,setOpenModal:i})}),Object(x.jsx)(m,{setOpenModal:i,openModal:c})]})};c.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(F,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.6e62abe5.chunk.js.map