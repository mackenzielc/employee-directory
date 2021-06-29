(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{11:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},38:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(21),s=n.n(c),r=(n(11),n(31),n(0)),i=function(){return Object(r.jsx)("header",{children:Object(r.jsx)("h1",{className:"text-center",children:"Company ABC Employee Directory"})})},o=n(4),l=n(5),d=n(22),h=n(23),j=n(26),u=n(25),m=(n(33),function(e){return Object(r.jsx)("nav",{className:"navbar navbar-light bg-light justify-content-center",children:Object(r.jsx)("form",{className:"form-inline m-2",onSubmit:e.handleFormSubmit,children:Object(r.jsx)("input",{className:"form-control",value:e.value,name:"search",onChange:e.handleInputChange,type:"search",placeholder:"Search"})})})}),b=n(6),p=n(8),f=(n(38),function(e){return Object(r.jsxs)("table",{className:"table table-striped table-sortable text-center",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{scope:"col",children:"Image"}),Object(r.jsx)("th",{scope:"col","data-field":"name","data-sortable":"true",children:Object(r.jsxs)("span",{onClick:function(){return e.sortBy("name","last","first")},children:["Name \xa0",Object(r.jsx)(b.a,{icon:p.a})]})}),Object(r.jsx)("th",{scope:"col",children:Object(r.jsxs)("span",{onClick:function(){return e.sortBy("phone")},children:["Phone \xa0",Object(r.jsx)(b.a,{icon:p.a})]})}),Object(r.jsx)("th",{scope:"col",children:Object(r.jsxs)("span",{onClick:function(){return e.sortBy("email")},children:["Email \xa0",Object(r.jsx)(b.a,{icon:p.a})]})}),Object(r.jsx)("th",{scope:"col",children:Object(r.jsxs)("span",{onClick:function(){return e.sortBy("dob","date")},children:["Date of Birth \xa0",Object(r.jsx)(b.a,{icon:p.a})]})})]})}),Object(r.jsx)("tbody",{children:e.state.filteredEmployees.map((function(t){var n=t.name,a=n.first,c=n.last,s="".concat(a," ").concat(c),i=e.formatDate(t.dob.date);return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:Object(r.jsx)("img",{src:t.picture.thumbnail,alt:s})}),Object(r.jsx)("td",{className:"align-middle",children:s}),Object(r.jsx)("td",{className:"align-middle",children:Object(r.jsx)("a",{href:"tel:+1".concat(t.phone),children:t.phone})}),Object(r.jsx)("td",{className:"align-middle email",children:Object(r.jsx)("a",{href:"mailto:".concat(t.email),children:t.email})}),Object(r.jsx)("td",{className:"align-middle",children:i})]},t.login.uuid)}))})]})}),O=n(24),x=n.n(O),y=function(){return x.a.get("https://randomuser.me/api/?results=50&nat=us")},g=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={search:"",employees:[],filteredEmployees:[],sortDirections:e.initialSortDirections},e.handleInputChange=function(t){var n=t.target.value;e.setState({search:n}),e.filterEmployees(n.toLowerCase())},e.handleFormSubmit=function(e){e.preventDefault()},e.sortBy=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,c=e.state.filteredEmployees;e.state.sortDirections[t]?e.setState({filteredEmployees:c.reverse(),sortDirections:Object(l.a)(Object(l.a)({},e.initialSortDirections),{},Object(o.a)({},t,"asc"===e.state.sortDirections[t]?"desc":"asc"))}):(c=e.state.filteredEmployees.sort((function(e,c){return e=e[t],c=c[t],n?a&&e[n]===c[n]?e[a].localeCompare(c[a]):e[n].localeCompare(c[n]):e.localeCompare(c)})),e.setState({filteredEmployees:c,sortDirections:Object(l.a)(Object(l.a)({},e.initialSortDirections),{},Object(o.a)({},t,"asc"))}))},e.filterEmployees=function(t){t?e.setState({filteredEmployees:e.state.employees.filter((function(n){return n.name.first.toLowerCase().concat(" ",n.name.last.toLowerCase()).includes(t)||n.phone.includes(t)||n.phone.replace(/[^\w\s]/gi,"").includes(t)||n.email.includes(t)||e.formatDate(n.dob.date).includes(t)}))}):e.setState({filteredEmployees:e.state.employees})},e.formatDate=function(e){e=new Date(e);var t=[];return t.push(("0"+(e.getMonth()+1)).slice(-2)),t.push(("0"+e.getDate()).slice(-2)),t.push(e.getFullYear()),t.join("-")},e}return Object(h.a)(n,[{key:"initialSortDirections",get:function(){return{name:"",phone:"",email:"",dob:""}}},{key:"componentDidMount",value:function(){var e=this;y().then((function(t){return e.setState({employees:t.data.results,filteredEmployees:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(m,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),Object(r.jsx)("div",{className:"container mt-4",children:Object(r.jsx)(f,{state:this.state,sortBy:this.sortBy,filterEmployees:this.filterEmployees,formatDate:this.formatDate})})]})}}]),n}(a.Component),v=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i,{}),Object(r.jsx)(g,{})]})};n(56);s.a.render(Object(r.jsx)(v,{}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.0f61a6ad.chunk.js.map