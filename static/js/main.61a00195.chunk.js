(this.webpackJsonpdeploytest=this.webpackJsonpdeploytest||[]).push([[0],{19:function(e,t,a){e.exports=a(51)},24:function(e,t,a){},25:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},26:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),o=(a(24),a(25),a(26),a(8));function u(){return r.a.createElement(o.Spring,{from:{opacity:0,marginTop:-500},to:{opacity:1,marginTop:0}},(function(e){return r.a.createElement("div",{style:e},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Young Minds"),r.a.createElement("p",null,"A ",r.a.createElement("b",null,"STEM")," education initiative.")))}))}function i(){return r.a.createElement("div",{className:"footer"})}function m(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"active"},r.a.createElement("input",{type:"form",style:{flex:"10",padding:"5px"},placeholder:"Search here"})))}var s=a(2),d=a(3),b=a(5),E=a(4),p=a(6),h=a(7),f=function(e){Object(b.a)(a,e);var t=Object(E.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(o.Spring,{from:{opacity:0,margin:-500},to:{opacity:1,margin:0}},(function(e){return r.a.createElement("div",{className:"side"},r.a.createElement("h2",null,"Menu"),r.a.createElement("div",{className:"fakeimg"},r.a.createElement(p.a,{icon:h.d}),r.a.createElement("button",{className:"buttonobj button1"},"Home"),r.a.createElement("br",null),r.a.createElement(p.a,{icon:h.a}),r.a.createElement("button",{className:"buttonobj button1"},"Classroom"),r.a.createElement("br",null),r.a.createElement(p.a,{icon:h.c}),r.a.createElement("button",{className:"buttonobj button1"},"Resources"),r.a.createElement("br",null),r.a.createElement(p.a,{icon:h.b}),r.a.createElement("button",{className:"buttonobj button1"},"Calender"),r.a.createElement("br",null)))}))}}]),a}(r.a.Component),v=a(18),g=function(e){Object(b.a)(a,e);var t=Object(E.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return this.props.edd.map((function(e){return r.a.createElement("button",{className:"buttonobj button1 ",onClick:function(){return console.log(e.op1)}},e.branch)}))}}]),a}(r.a.Component),j=a(9),y=a(17),O=a.n(y);function N(){return r.a.createElement("div",{className:"fakeimg"},r.a.createElement("h1",null,"ScratchPad!"),r.a.createElement(j.a,{modal:!0,trigger:r.a.createElement("button",null,"Open")},r.a.createElement(O.a,{canvasProps:{className:"signatureCanvas"}})))}var S=function(e){Object(b.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={subject:"Maths",credits:"200 points!"},n}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"fakeimg"},r.a.createElement("h3",null,this.state.subject),r.a.createElement("h3",null,this.state.credits))}}]),a}(n.Component),w=function(e){Object(b.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={branch:""},e.onChange=function(t){return e.setState({branch:t.target.value})},e.onSubmit=function(t){t.preventDefault(),e.props.addbranch(e.state.branch),e.setState({branch:""})},e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(j.a,{modal:!0,trigger:r.a.createElement("button",null,"Add")},r.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},r.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add New Subject",value:this.state.branch,onChange:this.onChange}),r.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))))}}]),a}(r.a.Component),C=function(e){Object(b.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).addbranch=function(e){var t={id:5,branch:e};n.setState({Edd:[].concat(Object(v.a)(n.state.Edd),[t])})},n.state={Edd:[{id:1,branch:"Medical",op1:"MBBS",op2:"Placeholder",op3:"Placeholder2",op4:"Placeholder3",show:!1},{id:2,branch:"Engineering",op1:"Civil",op2:"Mechanical",op3:"Architecture",op4:"IT",show:!1},{id:3,branch:"Architecture",op1:"Some1",op2:"Some2",op3:"Some3",op4:"Some4",show:!1},{id:4,branch:"Law",op1:"Law1",op2:"Law2",op3:"Law3",op4:"Law4",show:!1}]},n}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement("h1",null,"FACULTY ",r.a.createElement(w,{addbranch:this.addbranch})),r.a.createElement("br",null),r.a.createElement("div",{className:"fakeimg"},r.a.createElement(g,{edd:this.state.Edd})),r.a.createElement("br",null),r.a.createElement("h2",null,"YEAR"),r.a.createElement("h5",null,"Title description,"),r.a.createElement("div",{className:"fakeimg"},"Image"),r.a.createElement("p",null,"Some text.."),r.a.createElement(N,null),r.a.createElement("br",null),r.a.createElement("h2",null,"Dashboard!"),r.a.createElement(S,null))}}]),a}(n.Component);function k(){return r.a.createElement("div",{className:"row"},r.a.createElement(f,null),r.a.createElement(C,null))}var x=function(){return r.a.createElement("div",{className:"App-header"},r.a.createElement(u,null),r.a.createElement(m,null),r.a.createElement(k,null),r.a.createElement(i,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.61a00195.chunk.js.map