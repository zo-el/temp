(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02353afb"],{1681:function(t,e,n){},c5f7:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return"display"===t.internalMode?n("v-card",{staticClass:"pa-1 mb-1",attrs:{dark:"",outlined:""}},[n("v-card-text",{staticClass:"pl-0"},[t._v(" "+t._s(t.content)+" ")])],1):n("v-textarea",{staticClass:"ml-0 mr-0",attrs:{label:"Send a message",dense:"",dark:"",outlined:"","hide-details":"","full-width":"",rows:"3","append-icon":"mdi-send"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.createMessage(e)},"click:append":t.createMessage},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})},s=[],o=n("ec26"),i={name:"Message",components:{},props:["message","mode"],data:function(){return{internalMode:"",uuid:"",content:""}},methods:{createMessage:function(){var t={uuid:Object(o["a"])(),content:this.content};this.$emit("message-created",t),this.content=""}},created:function(){this.message&&(this.internalMode=this.mode,this.content=this.message.message.content,this.uuid=this.message.message.uuid)}},r=i,u=n("2877"),c=n("6544"),l=n.n(c),d=n("b0af"),h=n("99d9"),p=(n("a9e3"),n("5530")),f=(n("1681"),n("8654")),m=n("58df"),g=Object(m["a"])(f["a"]),w=g.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(p["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},f["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,n=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(n,e)+"px"}},genInput:function(){var t=f["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){f["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),v=Object(u["a"])(r,a,s,!1,null,null,null);e["default"]=v.exports;l()(v,{VCard:d["a"],VCardText:h["b"],VTextarea:w})}}]);
//# sourceMappingURL=chunk-02353afb.21d5a2af.js.map