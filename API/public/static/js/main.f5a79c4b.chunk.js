(window.webpackJsonpcodetest=window.webpackJsonpcodetest||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(5),c=n.n(s),o=(n(16),n(1)),i=n.n(o),l=n(3),u=n(6),d=n(7),h=n(9),p=n(8),m=n(2),v=n(10),f=(n(18),function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(h.a)(this,Object(p.a)(t).call(this))).state={apiError:!1,apiSuccess:!1,student:{name:"",dob:""}},e.apiPath="http://localhost:3000/users/",e.handleStudentDelete=e.handleStudentDelete.bind(Object(m.a)(e)),e.handleStudentAdd=e.handleStudentAdd.bind(Object(m.a)(e)),e.handleAddStudentChange=e.handleAddStudentChange.bind(Object(m.a)(e)),e}return Object(v.a)(t,e),Object(d.a)(t,[{key:"handleStudentDelete",value:function(){var e=Object(l.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,null,null,e.next=5,fetch(this.apiPath,{method:"delete",body:JSON.stringify({_id:t})});case 5:e.sent.json(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0),this.setState({apiError:e.t0});case 13:case"end":return e.stop()}},e,this,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()},{key:"handleStudentAdd",value:function(){var e=Object(l.a)(i.a.mark(function e(t){var n,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=null,a=null,e.next=5,fetch(this.apiPath,{method:"post",body:JSON.stringify({_id:t})});case 5:n=e.sent,a=n.json(),this.setState({apiSuccess:a}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0),this.setState({apiError:e.t0});case 14:case"end":return e.stop()}},e,this,[[0,10]])}));return function(t){return e.apply(this,arguments)}}()},{key:"handleAddStudentChange",value:function(e){var t={name:null,dob:null};"name"===e.target.name?t.name=e.target.value:t.dob=e.target.value,this.setState({student:t})}},{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=null,n=null,e.next=5,fetch(this.apiPath);case 5:return t=e.sent,e.next=8,t.json();case 8:n=e.sent,this.setState({apiSuccess:n}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0),this.setState({apiError:e.t0});case 16:case"end":return e.stop()}},e,this,[[0,12]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App container"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{className:"col-6"},r.a.createElement("h1",null,"Students"),console.log(this.state),console.log(typeof this.state.api_success),this.state.apiSuccess&&this.state.api_success.map(function(t){return r.a.createElement("div",{style:{display:"inline"}},r.a.createElement("p",null,t.name),r.a.createElement("p",null,t.dob),r.a.createElement("button",{onClick:function(){return e.handleStudentDelete(t._id)}},"Delete"))})),r.a.createElement("div",{className:"col-6"},r.a.createElement("h1",null,"Add a student"),r.a.createElement("form",{onSubmit:this.handleStudentAdd},r.a.createElement("input",{type:"text",placeholder:"name",value:this.state.student.name,onChange:this.handleAddStudentChange,name:"name"}),r.a.createElement("input",{type:"text",placeholder:"Date of Birth (yyyy-mm-dd)",value:this.state.student.dob,name:"dob",pattern:"[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])"}),r.a.createElement("button",{type:"submit"},"Submit")))))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.f5a79c4b.chunk.js.map