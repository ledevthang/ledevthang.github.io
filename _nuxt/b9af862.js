(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1202:function(e,t,n){"use strict";n.r(t);n(23),n(20),n(27),n(8),n(28),n(19),n(29);var r=n(11),o=n(4),c=(n(58),n(36),n(57),n(87)),l=n(61),d=n.n(l),m=n(81);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={data:function(){return{valid:!0,companyAddress:"",companyAddressRules:[function(e){return!!e||"Company name is required"},function(e){return e&&d.a.isAddress(e)||"Company name not valid"}],email:"test@gmail.com",emailRules:[function(e){return!!e||"Email is required"},function(e){return/.+@.+\..+/.test(e)||"Email not valid"}],phone:"0961675873",phoneRules:[function(e){return!!e||"Phone number is required"},function(e){return/((09|03|07|08|05)+([0-9]{8})\b)/.test(e)||"Phone number not valid"}],company:"Test company",companyRules:[function(e){return!!e||"Company name is required"}],checkbox:!1,count:0,showSuccessDialog:!1,hash:null,msg:null}},computed:f({},Object(c.c)("walletStore",["currentAddress"])),watch:{currentAddress:function(e){e&&(this.companyAddress=this.currentAddress)}},created:function(){this.companyAddress=this.currentAddress},methods:f(f({},Object(c.b)("companyStore",["changeTriggerUpdate"])),{},{register:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$refs.form.validate()){t.next=13;break}return t.prev=1,t.next=4,m.g(e.companyAddress,e.company,e.phone,e.email,.01,e.currentAddress);case 4:data=t.sent,setTimeout((function(){data.tx.txHash?(e.msg=data.tx.msg,e.hash=data.tx.txHash,e.showSuccessDialog=!0,e.$router.push("/company")):(e.msg=data.tx.msg,e.hash=null,e.showSuccessDialog=!0),e.changeTriggerUpdate()}),2e3),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(1),e.msg="Something wrong, please try again XD",e.hash=null,e.showSuccessDialog=!0;case 13:case"end":return t.stop()}}),t,null,[[1,8]])})))()},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()}})},y=n(86),x=n(131),w=n.n(x),O=n(324),S=n(299),_=n(85),j=n(1155),k=n(1259),A=n(1150),D=n(1262),component=Object(y.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{value:e.companyAddress,disabled:"",rules:e.companyAddressRules,label:"Company address",required:"",outlined:""}}),e._v(" "),n("v-text-field",{attrs:{rules:e.emailRules,label:"Email",required:"",solo:"",outlined:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),n("v-text-field",{attrs:{rules:e.phoneRules,label:"Phone number",required:"",solo:"",outlined:""},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),e._v(" "),n("v-text-field",{attrs:{rules:e.companyRules,label:"Company name",required:"",solo:"",outlined:""},model:{value:e.company,callback:function(t){e.company=t},expression:"company"}}),e._v(" "),n("div",{staticStyle:{color:"black","font-weight":"bold",display:"flex","align-items":"center","justify-content":"space-between"}},[n("v-btn",{staticClass:"mr-4",attrs:{disabled:!e.valid,color:"success"},on:{click:e.register}},[e._v("\n      Register\n    ")]),e._v(" "),n("div",[n("b",[e._v("\n        Register now for only 0.01 ETH\n      ")])])],1),e._v(" "),n("v-dialog",{attrs:{width:"300px"},model:{value:e.showSuccessDialog,callback:function(t){e.showSuccessDialog=t},expression:"showSuccessDialog"}},[n("v-card",{staticStyle:{padding:"10px","text-align":"center"},attrs:{light:""}},[n("v-card-actions",{staticStyle:{"flex-direction":"column"}},[n("div",{staticClass:"text-zone",staticStyle:{width:"100%"}},[n("b",{staticStyle:{"font-size":"20px"}},[e._v(e._s(e.msg))]),e._v(" "),e.hash?n("div",[n("a",{attrs:{href:e.$getScanLink(e.hash,"tx")}},[e._v("\n              "+e._s(e.hash)+"\n            ")])]):e._e()]),e._v(" "),n("v-spacer"),e._v(" "),n("div",{staticClass:"action-zone",staticStyle:{margin:"20px 0"}},[n("v-btn",{attrs:{color:"#28a745",medium:"",depressed:"",dark:""},on:{click:function(t){e.showSuccessDialog=!1}}},[e._v("\n            Good!\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;w()(component,{VBtn:O.a,VCard:S.a,VCardActions:_.a,VDialog:j.a,VForm:k.a,VSpacer:A.a,VTextField:D.a})}}]);