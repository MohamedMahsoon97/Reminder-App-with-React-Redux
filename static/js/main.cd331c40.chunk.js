(this["webpackJsonpreminder-app"]=this["webpackJsonpreminder-app"]||[]).push([[0],{110:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(9),c=n.n(a),i=n(34),o=n(35),d=n(44),s=n(41),l="ADD_REMINDER",m="REMOVE_REMINDER",u="CLEAR_REMINDER",b=n(21),j=n(37),p=n.n(j),h=n(38),O=n.n(h),x=(n(58),n.p+"static/media/OIP.c1b8dc27.jpeg"),f=(n(59),n(4)),v=function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={id:"",text:"",date:new Date},e.render_reminder=function(){var t=e.props.reminders;return Object(f.jsx)("ul",{className:"list-group",children:t.map((function(t){return Object(f.jsxs)("li",{className:"list-group-item",children:[Object(f.jsx)("div",{children:t.text}),Object(f.jsx)("div",{children:p()(new Date(t.date)).fromNow()}),Object(f.jsx)("button",{className:"remove btn btn-danger",onClick:function(){return e.props.remove_Reminder(t.id)},children:"remove"})]},t.id)}))})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("img",{src:x}),Object(f.jsx)("div",{className:"reminder-title text-center",children:Object(f.jsx)("h2",{children:"What should u do ?"})}),Object(f.jsx)("input",{onChange:function(t){return e.setState({text:t.target.value})},type:"text",value:this.state.text,placeholder:"type what do u think",className:"form-control"}),Object(f.jsx)(O.a,{value:this.state.date,className:"form-control",selected:this.state.date,onChange:function(t){return e.setState({date:t})},showTimeSelect:!0,timeFormat:"HH:mm",timeCaption:"time",dateFormat:"MMMM d, yyyy h:mm aa"}),Object(f.jsx)("button",{onClick:function(){e.props.add_Reminder(e.state.text,e.state.date),e.setState({text:"",date:""})},className:"btn-adcl btn btn-primary w-100 btn-block",children:"Add Reminder"}),Object(f.jsx)("button",{onClick:function(){return e.props.clear_Reminder()},className:"btn-adcl btn btn-danger w-100 btn-block",children:"Clear Reminders"}),this.render_reminder()]})}}]),n}(r.Component),y=Object(b.b)((function(e){return{reminders:e}}),{add_Reminder:function(e,t){return{type:l,text:e,date:t}},remove_Reminder:function(e){var t={type:m,id:e};return console.log("remove : ",t),t},clear_Reminder:function(){return{type:u}}})(v),k=n(43),R=n(42),g=n(16),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=[];return e=Object(g.read_cookie)("reminders"),t.type==l?(n=[].concat(Object(R.a)(e),[{text:t.text,date:t.date,id:Math.random()}]),Object(g.bake_cookie)("reminders",n),console.log(" from reducer ",n),n):t.type===m?(n=e.filter((function(e){return e.id!==t.id})),Object(g.bake_cookie)("reminders",n),n):t.type===u?(n=[],Object(g.bake_cookie)("reminders",n),n):e},N=(n(107),Object(k.a)(_));c.a.render(Object(f.jsx)(b.a,{store:N,children:Object(f.jsx)(y,{})}),document.getElementById("root"))},59:function(e,t,n){}},[[110,1,2]]]);
//# sourceMappingURL=main.cd331c40.chunk.js.map