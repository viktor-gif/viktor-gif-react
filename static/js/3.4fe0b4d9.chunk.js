(this["webpackJsonpviktor-gif-react"]=this["webpackJsonpviktor-gif-react"]||[]).push([[3],{299:function(e,a,s){e.exports={dialogs:"Dialogs_dialogs__3i6Ij",dialogsItems:"Dialogs_dialogsItems__2mqmt",item:"Dialogs_item__Yd-kV",dialogsPhoto:"Dialogs_dialogsPhoto__3F8gt",active:"Dialogs_active__29h-a",messages:"Dialogs_messages__1dMiD",message:"Dialogs_message__3VF5g",formMessage:"Dialogs_formMessage__jpzeW"}},300:function(e,a,s){"use strict";s.r(a);var t=s(10),i=s(8),o=s(130),m=s(145),n=s(0),l=s.n(n),g=s(131),r=s(132),d=s(299),c=s.n(d),u=s(11),_=function(e){var a="/dialogs/"+e.id;return l.a.createElement(u.b,{to:a,activeClassName:c.a.active},l.a.createElement("div",{className:c.a.item},l.a.createElement("img",{className:c.a.dialogsPhoto,src:e.photo,alt:"User"}),e.name))},f=s(39),v=s(18),E=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:c.a.message},e.message))},b=Object(f.a)(10),p=Object(r.a)({form:"addMessageForm"})((function(e){return l.a.createElement("form",{onSubmit:e.handleSubmit,className:c.a.formMessage},l.a.createElement(g.a,{validate:[f.b,b],component:v.b,name:"addMessageField",placeholder:"Enter your message..."}),l.a.createElement("button",null,"send message"))})),h=function(e){var a=e.dialogsPage.dialogs.map((function(e){return l.a.createElement(_,{id:e.id,key:e.id,name:e.name,photo:e.photo})})),s=e.dialogsPage.messages.map((function(e){return l.a.createElement(E,{id:e.id,key:e.id,message:e.message})}));return l.a.createElement("div",{className:c.a.dialogs},l.a.createElement("div",{className:c.a.dialogsItems},a),l.a.createElement("div",{className:c.a.messages},s,l.a.createElement(p,{onSubmit:function(a){e.addMessage(a.addMessageField)}})))};a.default=Object(i.d)(Object(t.b)((function(e){return{dialogsPage:e.dialogsPage}}),{addMessage:o.a}),m.a)(h)}}]);
//# sourceMappingURL=3.4fe0b4d9.chunk.js.map