(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{allF:function(e,a,t){"use strict";t.r(a);t("+L6B");var n=t("2/Rp"),c=(t("14J3"),t("BMrR")),r=(t("T2oS"),t("W9HT")),l=(t("jCWc"),t("kPKH")),i=(t("y8nQ"),t("Vl3Y")),s=(t("5NDa"),t("5rEg")),o=t("k1fw"),m=(t("miYZ"),t("tsqr")),u=t("WmNS"),p=t.n(u),f=t("9og8"),g=t("tJVT"),b=(t("Znn+"),t("ZTPi")),d=t("R+Pm"),h=t("cJ7L"),E=t("MGYb"),y=t("cGnJ"),j=t("q1tI"),_=t.n(j),O=t("9kvl"),x=t("x1+w"),k=t.n(x),w=t("anxO"),v=t("+n12"),I=b["a"].TabPane,z=Object(d["a"])({scriptUrl:"//at.alicdn.com/t/font_1873282_onfaq4da0nb.js"}),C=function(e){var a=e.userLogin,t=void 0===a?{}:a,u=(e.submitting,Object(j["useState"])(!1)),d=Object(g["a"])(u,2),O=d[0],x=d[1],C=(t.status,t.type,t.errors),N=Object(j["useState"])(!0),T=Object(g["a"])(N,2),S=(T[0],T[1],Object(j["useState"])("key")),q=Object(g["a"])(S,2),B=q[0],F=q[1],J=Object(j["useState"])(null),L=Object(g["a"])(J,2),Z=L[0],A=L[1],P=Object(j["useState"])(!0),R=Object(g["a"])(P,2),V=R[0],W=R[1],D=Object(j["useRef"])(),G=Object(j["useRef"])();Object(j["useCallback"])(function(){var a=Object(f["a"])(p.a.mark((function a(t){var n,c;return p.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:n=e.onGetEmail,c=n(t),console.log("ret"),console.log(c),x(!0);case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),[]);Object(j["useEffect"])((function(){Y()}),[C]);var Y=function(){Object(w["b"])().then((function(e){A(e&&e.image_url),F(e&&e.key),W(!1)})).catch((function(e){console.log(e)}))},H=function(e){Object(w["c"])(e).then((function(e){m["b"].success("\u53d1\u9001\u6210\u529f\uff0c\u8bf7\u524d\u5f80\u90ae\u7bb1\u67e5\u770b")})).catch((function(e){Object(v["f"])(e,G)}))},K=function(a){var t=e.dispatch,n=t({type:"login/login",payload:Object(o["a"])(Object(o["a"])({},a),{},{type:"account",key:B})});n.then((function(e){console.log("\u6709\u95ee\u9898\u54271"),console.log(e),e.data&&e.data instanceof Object&&"fields_errors"in e.data&&Object(v["f"])(e,D)}))},M=function(a){var t=e.dispatch,n=t({type:"login/login",payload:Object(o["a"])(Object(o["a"])({},a),{},{type:"email",key:B})});n.then((function(e){e.data&&e.data instanceof Object&&"fields_errors"in e.data&&Object(v["f"])(e,G)}))};return _.a.createElement("div",{className:k.a.main},_.a.createElement(b["a"],{defaultActiveKey:"account"},_.a.createElement(I,{key:"account",tab:"\u8d26\u6237\u5bc6\u7801\u767b\u5f55"},_.a.createElement(i["a"],{ref:D,onFinish:K},_.a.createElement(i["a"].Item,{initialValue:"mtianyan",style:{marginBottom:24},name:"userName",placeholder:"\u7528\u6237\u540d",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d!"}]},_.a.createElement(s["a"],{size:"large",placeholder:"\u4f53\u9a8c\u8d26\u53f7: mtianyan",prefix:_.a.createElement(h["a"],{style:{color:"#1890ff"},className:k.a.prefixIcon})})),_.a.createElement(i["a"].Item,{style:{marginBottom:24},name:"password",placeholder:"\u5bc6\u7801",initialValue:"123456",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801\uff01"}]},_.a.createElement(s["a"].Password,{size:"large",placeholder:"\u4f53\u9a8c\u5bc6\u7801: 123456",prefix:_.a.createElement(E["a"],{className:k.a.prefixIcon})})),_.a.createElement(c["a"],{gutter:8},_.a.createElement(l["a"],{span:16},_.a.createElement(i["a"].Item,{name:"pic_captcha",placeholder:"\u9a8c\u8bc1\u7801",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801\uff01"}]},_.a.createElement(s["a"],{size:"large",placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",prefix:_.a.createElement(z,{type:"iconyanzhengma",className:k.a.prefixIcon})}))),_.a.createElement(l["a"],{span:8},_.a.createElement(r["a"],{spinning:V},_.a.createElement("img",{alt:"Captcha",style:{width:"100%",height:35,marginTop:2.5,marginLeft:10},src:Z,onClick:Y})))),_.a.createElement(i["a"].Item,null,_.a.createElement(n["a"],{size:"large",type:"primary",className:k.a.submit,htmlType:"submit"},"\u767b\u5f55")))),_.a.createElement(I,{key:"email",tab:"\u90ae\u7bb1\u9a8c\u8bc1\u7801\u767b\u5f55"},_.a.createElement(i["a"],{ref:G,onFinish:M},_.a.createElement(i["a"].Item,{name:"email",placeholder:"\u90ae\u7bb1",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u90ae\u7bb1\u5730\u5740\uff01"},{pattern:/^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/,message:"\u90ae\u7bb1\u5730\u5740\u683c\u5f0f\u9519\u8bef\uff01"}]},_.a.createElement(s["a"],{size:"large",placeholder:"\u8bf7\u8f93\u5165\u90ae\u7bb1",prefix:_.a.createElement(y["a"],{className:k.a.prefixIcon})})),_.a.createElement(c["a"],{gutter:8},_.a.createElement(l["a"],{span:16},_.a.createElement(i["a"].Item,{name:"captcha",placeholder:"\u9a8c\u8bc1\u7801",countDown:120,getCaptchaButtonText:"",getCaptchaSecondText:"\u79d2",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u90ae\u7bb1\u9a8c\u8bc1\u7801\uff01"}]},_.a.createElement(s["a"],{size:"large",placeholder:"\u8bf7\u8f93\u5165\u90ae\u7bb1\u9a8c\u8bc1\u7801",prefix:_.a.createElement(z,{type:"iconyanzhengma",className:k.a.prefixIcon})}))),_.a.createElement(l["a"],{span:8},_.a.createElement(n["a"],{disabled:O,className:k.a.getCaptcha,size:"large",onClick:function(){var e=G.current.getFieldValue("email");if(e){var a=G.current.getFieldError("email");0!==a.length?m["b"].error("\u8bf7\u5148\u4fee\u6b63\u90ae\u7bb1\uff0c\u518d\u53d1\u9001"):H(e)}else m["b"].error("\u8bf7\u5148\u8f93\u5165\u90ae\u7bb1\uff0c\u518d\u53d1\u9001")}},O?"".concat(count," \u79d2"):"\u83b7\u53d6\u9a8c\u8bc1\u7801"))),_.a.createElement(i["a"].Item,null,_.a.createElement(n["a"],{size:"large",type:"primary",className:k.a.submit,htmlType:"submit"},"\u767b\u5f55"))))))};a["default"]=Object(O["c"])((function(e){var a=e.login,t=e.loading;return{userLogin:a,submitting:t.effects["login/login"],codeLoading:t.effects["login/getcode"]}}))(C)},"x1+w":function(e,a,t){e.exports={main:"main___34rpC",icon:"icon___Wd0FC",other:"other___SWkac",register:"register___1uCrf",getCaptcha:"getCaptcha___14BQ_",prefixIcon:"prefixIcon___2g6De",submit:"submit___2h-AD"}}}]);