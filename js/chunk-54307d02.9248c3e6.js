(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54307d02"],{"2dac":function(e,n,s){"use strict";s.r(n);var t=function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("v-card",{attrs:{flat:""}},[s("div",{staticClass:"chat-container rounded",attrs:{id:"container"},on:{scroll:e.personScroll}},[s("ul",{staticClass:"pb-10 pl-0"},e._l(e.messages,(function(e){return s("li",{key:e.message.uuid,staticClass:"message"},[s("message",{key:e.message.uuid,attrs:{message:e,mode:"display"}})],1)})),0)]),s("v-card-actions",{staticClass:"pa-0 pt-1"},[s("message",{attrs:{mode:"create"},on:{"message-created":e.messageCreated}})],1)],1)},a=[],c=(s("d3b7"),s("5530")),o=s("2f62"),l={name:"Messages",components:{Message:function(){return s.e("chunk-02353afb").then(s.bind(null,"c5f7"))}},data:function(){return{personScrolling:!1}},methods:Object(c["a"])(Object(c["a"])({},Object(o["b"])("elementalChat",["addMessageToChannel"])),{},{messageCreated:function(e){this.addMessageToChannel({channel:this.channel,message:e})},personScroll:function(){var e=this,n=this.$el.querySelector("#container");n.onscroll=function(){e.personScrolling=!0;var s=n.offsetHeight+n.scrollTop;s===n.scrollHeight&&(e.personScrolling=!1)}},scrollToEnd:function(){if(!this.personScrolling){var e=this.$el.querySelector("#container");e.scrollTop=e.scrollHeight}}}),computed:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(o["c"])(["connectedToHolochain","today"])),Object(o["c"])("elementalChat",["channel"])),{},{messages:function(){return this.channel.messages}}),watch:{channel:function(){this.scrollToEnd()}},mounted:function(){this.scrollToEnd()}},r=l,i=(s("b5cc"),s("2877")),u=s("6544"),d=s.n(u),h=s("b0af"),f=s("99d9"),g=Object(i["a"])(r,t,a,!1,null,null,null);n["default"]=g.exports;d()(g,{VCard:h["a"],VCardActions:f["a"]})},"379f":function(e,n,s){},b5cc:function(e,n,s){"use strict";var t=s("379f"),a=s.n(t);a.a}}]);
//# sourceMappingURL=chunk-54307d02.9248c3e6.js.map