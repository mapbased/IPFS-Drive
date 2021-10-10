(this["webpackJsonp@rclone/rclone-webui-react"]=this["webpackJsonp@rclone/rclone-webui-react"]||[]).push([[19],{330:function(e,t,a){"use strict";var n=a(4);n.oneOfType([n.shape({Features:n.object.isRequired,Hashes:n.array.isRequired,Name:n.string.isRequired,Precision:n.number.isRequired,String:n.string.isRequired}),n.object]),n.shape({remoteName:n.string.isRequired,remotePath:n.string.isRequired}),n.string,n.bool,n.bool,n.shape({Path:n.string.isRequired,Name:n.string.isRequired,Size:n.number,MimeType:n.string,ModTime:n.string.isRequired,IsDir:n.bool.isRequired}),n.shape({rate:n.string.isRequired})},350:function(e,t,a){"use strict";var n=a(6),s=a(12),i=a(322),r=a(22),o=a(0),c=a.n(o),l=a(4),d=a.n(l),u=a(37),h=a.n(u),f=a(29),b={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:f.q,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},p=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(i.a)(a)),a.focus=a.focus.bind(Object(i.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,i=e.type,r=e.bsSize,o=e.valid,l=e.invalid,d=e.tag,u=e.addon,b=e.plaintext,p=e.innerRef,m=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(i)>-1,v=new RegExp("\\D","g"),w=d||("select"===i||"textarea"===i?i:"input"),j="form-control";b?(j+="-plaintext",w=d||"input"):"file"===i?j+="-file":"range"===i?j+="-range":g&&(j=u?null:"form-check-input"),m.size&&v.test(m.size)&&(Object(f.t)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=m.size,delete m.size);var O=Object(f.m)(h()(t,l&&"is-invalid",o&&"is-valid",!!r&&"form-control-"+r,j),a);return("input"===w||d&&"function"===typeof d)&&(m.type=i),m.children&&!b&&"select"!==i&&"string"===typeof w&&"select"!==w&&(Object(f.t)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete m.children),c.a.createElement(w,Object(n.a)({},m,{ref:p,className:O,"aria-invalid":l}))},t}(c.a.Component);p.propTypes=b,p.defaultProps={type:"text"},t.a=p},358:function(e,t,a){"use strict";var n=a(6),s=a(12),i=a(322),r=a(22),o=a(0),c=a.n(o),l=a(4),d=a.n(l),u=a(37),h=a.n(u),f=a(29),b={children:d.a.node,inline:d.a.bool,tag:f.q,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},p=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(i.a)(a)),a.submit=a.submit.bind(Object(i.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,i=e.inline,r=e.tag,o=e.innerRef,l=Object(s.a)(e,["className","cssModule","inline","tag","innerRef"]),d=Object(f.m)(h()(t,!!i&&"form-inline"),a);return c.a.createElement(r,Object(n.a)({},l,{ref:o,className:d}))},t}(o.Component);p.propTypes=b,p.defaultProps={tag:"form"},t.a=p},401:function(e,t,a){"use strict";var n=a(6),s=a(12),i=a(0),r=a.n(i),o=a(4),c=a.n(o),l=a(37),d=a.n(l),u=a(29),h={children:c.a.node,tag:u.q,className:c.a.string,cssModule:c.a.object,valid:c.a.bool,tooltip:c.a.bool},f={tag:"div",valid:void 0},b=function(e){var t=e.className,a=e.cssModule,i=e.valid,o=e.tooltip,c=e.tag,l=Object(s.a)(e,["className","cssModule","valid","tooltip","tag"]),h=o?"tooltip":"feedback",f=Object(u.m)(d()(t,i?"valid-"+h:"invalid-"+h),a);return r.a.createElement(c,Object(n.a)({},l,{className:f}))};b.propTypes=h,b.defaultProps=f,t.a=b},456:function(e,t,a){"use strict";var n=a(6),s=a(12),i=a(0),r=a.n(i),o=a(4),c=a.n(o),l=a(37),d=a.n(l),u=a(29),h={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:u.q,className:c.a.string,cssModule:c.a.object},f=function(e){var t=e.className,a=e.cssModule,i=e.row,o=e.disabled,c=e.check,l=e.inline,h=e.tag,f=Object(s.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),b=Object(u.m)(d()(t,!!i&&"row",c?"form-check":"form-group",!(!c||!l)&&"form-check-inline",!(!c||!o)&&"disabled"),a);return"fieldset"===h&&(f.disabled=o),r.a.createElement(h,Object(n.a)({},f,{className:b}))};f.propTypes=h,f.defaultProps={tag:"div"},t.a=f},457:function(e,t,a){"use strict";var n=a(6),s=a(12),i=a(0),r=a.n(i),o=a(4),c=a.n(o),l=a(37),d=a.n(l),u=a(29),h=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:h,order:h,offset:h})]),b={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:u.q,className:c.a.string,cssModule:c.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:c.a.array},p={tag:"label",widths:["xs","sm","md","lg","xl"]},m=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},g=function(e){var t=e.className,a=e.cssModule,i=e.hidden,o=e.widths,c=e.tag,l=e.check,h=e.size,f=e.for,b=Object(s.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),p=[];o.forEach((function(t,n){var s=e[t];if(delete b[t],s||""===s){var i,r=!n;if(Object(u.k)(s)){var o,c=r?"-":"-"+t+"-";i=m(r,t,s.size),p.push(Object(u.m)(d()(((o={})[i]=s.size||""===s.size,o["order"+c+s.order]=s.order||0===s.order,o["offset"+c+s.offset]=s.offset||0===s.offset,o))),a)}else i=m(r,t,s),p.push(i)}}));var g=Object(u.m)(d()(t,!!i&&"sr-only",!!l&&"form-check-label",!!h&&"col-form-label-"+h,p,!!p.length&&"col-form-label"),a);return r.a.createElement(c,Object(n.a)({htmlFor:f},b,{className:g}))};g.propTypes=b,g.defaultProps=p,t.a=g},835:function(e,t,a){"use strict";a.r(t);var n=a(31),s=a(32),i=a(68),r=a(67),o=a(0),c=a.n(o),l=a(83),d=a(50),u=a(438),h=a(534),f=a(84),b=a(39),p=a(356),m=a(666),g=a(357),v=a(358),w=a(456),j=a(457),O=a(350),E=a(401),y=a(360),N=a(107),R=a(455),M=(a(330),function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(e,s){var i;return Object(n.a)(this,a),(i=t.call(this,e,s)).getBandwidth=function(){(0,i.props.getBandwidth)()},i.setBandwidth=function(e){e.preventDefault();var t=i.state,a=t.bandwidthText;if(t.hasError)b.b.error("Please check the errors before submitting");else{var n=i.props.setBandwidth;a?(n(a),i.toggleShowChangeBandwidth()):n("0M")}},i.changeBandwidthInput=function(e){var t=e.target.value,a=!1;if(""===t)a=!0;else if(t){var n=t.split(":");if(1===n.length)a=Object(f.q)(n[0]);else if(2===n.length){var s=Object(f.q)(n[0]),r=Object(f.q)(n[1]);a=s&&r}}i.setState({bandwidthText:t,hasError:!a})},i.toggleShowChangeBandwidth=function(){i.setState((function(e){return{showChangeBandwidth:!e.showChangeBandwidth}}))},i.state={bandwidthText:"",hasError:!1,showChangeBandwidth:!1},i}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getBandwidth()}},{key:"render",value:function(){var e=this.state,t=e.bandwidthText,a=e.hasError,n=e.showChangeBandwidth,s=this.props.bandwidth;return c.a.createElement(p.a,null,c.a.createElement(m.a,null,"Bandwidth ",c.a.createElement("button",{className:"btn btn-white float-right",onClick:this.toggleShowChangeBandwidth},"Modify")),c.a.createElement(g.a,null,c.a.createElement("p",null,c.a.createElement("span",{className:"card-subtitle"},"Current Max speed: ","  "),c.a.createElement("span",{className:"card-text"},"off"!==s.rate?s.rate:"Unlimited")),c.a.createElement(v.a,{onSubmit:this.setBandwidth,className:n?"":"d-none"},c.a.createElement(w.a,{row:!0},c.a.createElement(j.a,{for:"bandwidthValue",sm:5},"Enter new max speed (upload:download)"),c.a.createElement(d.a,{sm:7},c.a.createElement(O.a,{type:"text",value:t,valid:!a,invalid:a,id:"bandwidthValue",onChange:this.changeBandwidthInput}),c.a.createElement(E.a,{valid:!0},"Keep empty to reset."),c.a.createElement(E.a,null,"The bandwidth should be of the form 1M|2M|1G|1K|1.1K etc. Can also be specified as (upload:download)"))),c.a.createElement(y.a,{className:"float-right",color:"success",type:"submit"},"Set"))))}}]),a}(c.a.Component)),k=Object(N.b)((function(e){return{isConnected:e.status.isConnected,bandwidth:e.status.bandwidth}}),{getBandwidth:R.b,setBandwidth:R.d})(M),x=a(38),q=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.checkStatus,t=localStorage.getItem(x.c);return c.a.createElement("div",{"data-test":"homeComponent"},c.a.createElement(l.a,null,c.a.createElement(d.a,{lg:6,sm:12},c.a.createElement(u.a,{ipAddress:t,mode:"card"})),c.a.createElement(d.a,{lg:6,sm:12},c.a.createElement(k,null))),c.a.createElement("h2",null,"Jobs"),e?c.a.createElement(h.a,{mode:"full-status"}):c.a.createElement("p",null,"Not Monitoring"))}}]),a}(c.a.Component);t.default=Object(N.b)((function(e){return{checkStatus:e.status.checkStatus}}),{})(q)}}]);
//# sourceMappingURL=19.6f67d927.chunk.js.map