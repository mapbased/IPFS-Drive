(this["webpackJsonp@rclone/rclone-webui-react"]=this["webpackJsonp@rclone/rclone-webui-react"]||[]).push([[13],{330:function(e,t,n){"use strict";var a=n(4);a.oneOfType([a.shape({Features:a.object.isRequired,Hashes:a.array.isRequired,Name:a.string.isRequired,Precision:a.number.isRequired,String:a.string.isRequired}),a.object]),a.shape({remoteName:a.string.isRequired,remotePath:a.string.isRequired}),a.string,a.bool,a.bool,a.shape({Path:a.string.isRequired,Name:a.string.isRequired,Size:a.number,MimeType:a.string,ModTime:a.string.isRequired,IsDir:a.bool.isRequired}),a.shape({rate:a.string.isRequired})},333:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"h",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"g",(function(){return s})),n.d(t,"l",(function(){return c})),n.d(t,"k",(function(){return p})),n.d(t,"j",(function(){return d})),n.d(t,"i",(function(){return m})),n.d(t,"f",(function(){return f})),n.d(t,"a",(function(){return g})),n.d(t,"n",(function(){return A})),n.d(t,"m",(function(){return E})),n.d(t,"e",(function(){return y}));var a=n(3),r=n(339),o=function(e,t,n){return function(r){r({type:a.j,id:e,remoteName:t,remotePath:n}),r(u(e))}},i=function(e,t){return function(n){n({type:a.k,remoteName:t,id:e,remotePath:""}),n(u(e))}},u=function(e){return function(t,n){var a=n().explorer.currentPaths[e],o=a.remoteName,i=a.remotePath;o&&""!==o&&t(Object(r.e)(o,i))}},l=function(e,t){return function(n){n({type:a.l,id:e,remotePath:t}),n(u(e))}},s=function(e){return function(t){t({type:a.q,id:e})}},c=function(e){return function(t){t({type:a.I,id:e})}},p=function(e){return function(t){t({type:a.F,id:e}),t(u(e))}},d=function(e){return function(t){t({type:a.E,id:e}),t(u(e))}},m=function(e){return function(t){t({type:a.D,id:e}),t(u(e))}},f=function(e,t){return function(n){n({type:a.o,id:e,filter:t})}},g=function(e,t){return function(n){n({type:a.f,id:e,mode:t})}},A=function(e,t){return function(n){n({type:a.m,id:e,searchQuery:t})}},E=function(e,t){return function(n){n({type:a.i,id:e,payload:t})}},y=function(e,t,n){return function(r){r({type:a.n,id:e,payload:{sortFilter:t,sortFilterAscending:n}})}}},339:function(e,t,n){"use strict";n.d(t,"f",(function(){return l})),n.d(t,"g",(function(){return s})),n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return p})),n.d(t,"a",(function(){return d})),n.d(t,"h",(function(){return m})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return g}));var a=n(9),r=n(3),o=n(84),i=n(333),u=n(334),l=function(e){return function(t){Object(u.getRemoteInfo)(e).then((function(n){t({type:r.v,status:r.L,payload:Object(a.a)({},e.split(":")[0],n)})}),(function(e){return t({type:r.v,status:r.J,payload:e})}))}},s=function(){return function(e,t){Object(u.getAllRemoteNames)().then((function(t){return e({type:r.A,status:r.L,payload:t.remotes})}),(function(t){return e({type:r.A,status:r.J,payload:t})}))}},c=function(e,t){return function(n){if(""!==e){var a="".concat(e,"-").concat(t);Object(u.getFilesList)(e,t).then((function(e){return n({type:r.w,status:r.L,payload:{path:a,filesList:e.list}})}),(function(e){return n({type:r.w,status:r.J,payload:{path:a,error:e}})}))}}},p=function(e,t){return function(n){if(!e||e<0)throw new Error("Invalid number of cols:".concat(e));n({type:r.h,payload:{numCols:e,mode:t}})}},d=function(e){return function(t){var n=Object(o.l)(3);t(Object(i.g)(n)),t(f(n,e)),t({type:r.a,payload:{containerID:n,paneID:e}})}},m=function(e,t){return function(n){n(Object(i.l)(e)),n({type:r.G,payload:{containerID:e,paneID:t}})}},f=function(e,t){return function(n){n({type:r.b,payload:{containerID:e,paneID:t}})}},g=function(e){return function(t){t({type:r.e,payload:e})}}},358:function(e,t,n){"use strict";var a=n(6),r=n(12),o=n(322),i=n(22),u=n(0),l=n.n(u),s=n(4),c=n.n(s),p=n(37),d=n.n(p),m=n(29),f={children:c.a.node,inline:c.a.bool,tag:m.q,innerRef:c.a.oneOfType([c.a.object,c.a.func,c.a.string]),className:c.a.string,cssModule:c.a.object},g=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(o.a)(n)),n.submit=n.submit.bind(Object(o.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.submit=function(){this.ref&&this.ref.submit()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,o=e.inline,i=e.tag,u=e.innerRef,s=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),c=Object(m.m)(d()(t,!!o&&"form-inline"),n);return l.a.createElement(i,Object(a.a)({},s,{ref:u,className:c}))},t}(u.Component);g.propTypes=f,g.defaultProps={tag:"form"},t.a=g},401:function(e,t,n){"use strict";var a=n(6),r=n(12),o=n(0),i=n.n(o),u=n(4),l=n.n(u),s=n(37),c=n.n(s),p=n(29),d={children:l.a.node,tag:p.q,className:l.a.string,cssModule:l.a.object,valid:l.a.bool,tooltip:l.a.bool},m={tag:"div",valid:void 0},f=function(e){var t=e.className,n=e.cssModule,o=e.valid,u=e.tooltip,l=e.tag,s=Object(r.a)(e,["className","cssModule","valid","tooltip","tag"]),d=u?"tooltip":"feedback",m=Object(p.m)(c()(t,o?"valid-"+d:"invalid-"+d),n);return i.a.createElement(l,Object(a.a)({},s,{className:m}))};f.propTypes=d,f.defaultProps=m,t.a=f},402:function(e,t){e.exports="data:image/png;base64,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"},403:function(e,t){e.exports="data:image/png;base64,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"},428:function(e,t,n){"use strict";var a=n(31),r=n(32),o=n(68),i=n(67),u=n(0),l=n.n(u),s=n(379),c=n.n(s),p=function(e,t){var n=t.trim().toLowerCase(),a=n.length;return 0===a?e:0===a?[]:e.filter((function(e){return e.toLowerCase().slice(0,a)===n}))},d=function(e){return e},m=function(e){return l.a.createElement("div",null,l.a.createElement("i",{className:"fa fa-lg fa-hdd-o"})," ",e)},f=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).onSuggestionsFetchRequested=function(e){var t=e.value;r.setState({suggestions:p(r.props.suggestions,t)})},r.onSuggestionsClearRequested=function(){r.setState({suggestions:[]})},r.state={suggestions:[]},r}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t={placeholder:"Type the name of remote you want to open",value:e.value,onChange:e.onChange};return l.a.createElement(c.a,{suggestions:this.state.suggestions,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,getSuggestionValue:d,renderSuggestion:m,alwaysRenderSuggestions:!0,highlightFirstSuggestion:!0,inputProps:t,style:{width:"100%"}})}}]),n}(l.a.Component),g=n(107),A=n(339),E=n(333),y=n(358),b=n(50),I=n(360),h=(n(330),function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).shouldUpdateRemoteName=function(e,t){var n=t.newValue;0===n.indexOf("/")?r.setState({remoteName:n,openButtonText:"Open local path"}):r.setState({remoteName:n,openButtonText:"Open"})},r.openRemote=function(e){e.preventDefault(),(0,r.props.handleChangeRemoteName)(r.state.remoteName)},r.state={isEmpty:!1,remoteName:e.remoteName,openEnabled:!1,openButtonText:"Open"},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.getRemoteNames()}},{key:"render",value:function(){var e=this.state,t=e.isEmpty,n=e.remoteName,a=this.props.remotes;return this.props.hasError?l.a.createElement("div",null,"Error loading remotes. Please try again."):t?l.a.createElement("div",null,"Add some remotes to see them here ",l.a.createElement("span",{role:"img","aria-label":"sheep"},"\ud83d\udc11"),"."):l.a.createElement(y.a,{onSubmit:this.openRemote,className:"row"},l.a.createElement(b.a,{xs:12,sm:10,lg:10},l.a.createElement(f,{value:n,onChange:this.shouldUpdateRemoteName,suggestions:a})),l.a.createElement(b.a,{xs:12,sm:2,lg:2},l.a.createElement(I.a,{className:"btn-lg",color:"success"},this.state.openButtonText)))}}]),n}(l.a.Component));h.defaultProps={};t.a=Object(g.b)((function(e,t){return{remotes:e.remote.remotes,hasError:!1,error:e.remote.error,currentPath:e.explorer.currentPaths[t.containerID]}}),{getRemoteNames:A.g,getFsInfo:A.f,changeRemoteName:E.c})(h)},779:function(e,t,n){"use strict";var a=n(6),r=n(12),o=n(0),i=n.n(o),u=n(4),l=n.n(u),s=n(37),c=n.n(s),p=n(29),d={className:l.a.string,cssModule:l.a.object,size:l.a.string,bordered:l.a.bool,borderless:l.a.bool,striped:l.a.bool,dark:l.a.bool,hover:l.a.bool,responsive:l.a.oneOfType([l.a.bool,l.a.string]),tag:p.q,responsiveTag:p.q,innerRef:l.a.oneOfType([l.a.func,l.a.string,l.a.object])},m=function(e){var t=e.className,n=e.cssModule,o=e.size,u=e.bordered,l=e.borderless,s=e.striped,d=e.dark,m=e.hover,f=e.responsive,g=e.tag,A=e.responsiveTag,E=e.innerRef,y=Object(r.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),b=Object(p.m)(c()(t,"table",!!o&&"table-"+o,!!u&&"table-bordered",!!l&&"table-borderless",!!s&&"table-striped",!!d&&"table-dark",!!m&&"table-hover"),n),I=i.a.createElement(g,Object(a.a)({},y,{ref:E,className:b}));if(f){var h=Object(p.m)(!0===f?"table-responsive":"table-responsive-"+f,n);return i.a.createElement(A,{className:h},I)}return I};m.propTypes=d,m.defaultProps={tag:"table",responsiveTag:"div"},t.a=m},831:function(e,t,n){"use strict";n.r(t);var a=n(31),r=n(32),o=n(68),i=n(67),u=n(0),l=n.n(u),s=n(107),c=n(83),p=n(50),d=n(360),m=n(779),f=n(85),g=n(51),A=n(3),E=function(){return function(e){f.a.post(g.a.listMounts).then((function(t){console.log(t),e({type:A.x,status:A.L,payload:t.data})}),(function(t){e({type:A.x,status:A.J,payload:t})}))}},y=n(9),b=n(326),I=n(1),h=n(456),v=n(457),R=n(350),B=n(401),k=n(833),O=n(823),S=n(824),N=n(825),T=n(428),D={CacheMaxAge:{Type:"int",Default:36e11},CacheMaxSize:{Type:"int",Default:-1,Help:""},CacheMode:{Type:"int",Options:[{value:"off",key:0},{value:"minimal",key:1},{value:"writes",key:2},{value:"full",key:3}],Default:0,Help:""},CachePollInterval:{Type:"int",Default:6e10,Help:""},CaseInsensitive:{Type:"bool",Default:!1,Help:""},ChunkSize:{Type:"int",Default:134217728,Help:""},ChunkSizeLimit:{Type:"int",Default:-1,Help:""},DirCacheTime:{Type:"int",Default:3e11,Help:""},DirPerms:{Type:"int",Default:511,Help:""},FilePerms:{Type:"int",Default:438,Help:""},GID:{Type:"int",Default:1e3,Help:""},NoChecksum:{Type:"bool",Default:!1,Help:""},NoModTime:{Type:"bool",Default:!1,Help:""},NoSeek:{Type:"bool",Default:!1,Help:""},PollInterval:{Type:"int",Default:6e10,Help:""},ReadAhead:{Type:"int",Default:0,Help:""},ReadOnly:{Type:"bool",Default:!1,Help:""},ReadWait:{Type:"int",Default:2e7,Help:""},UID:{Type:"int",Default:1e3,Help:""},Umask:{Type:"int",Default:2,Help:""},WriteBack:{Type:"int",Default:5e9,Help:""},WriteWait:{Type:"int",Default:1e9,Help:""}},C={AllowNonEmpty:{Type:"bool",Default:!1,Help:""},AllowOther:{Type:"bool",Default:!1,Help:""},AllowRoot:{Type:"bool",Default:!1,Help:""},AsyncRead:{Type:"bool",Default:!0,Help:""},AttrTimeout:{Type:"int",Default:1e9,Help:""},Daemon:{Type:"bool",Default:!1,Help:""},DaemonTimeout:{Type:"int",Default:0,Help:""},DebugFUSE:{Type:"bool",Default:!1,Help:""},DefaultPermissions:{Type:"bool",Default:!1,Help:""},ExtraFlags:{Type:"array",Default:[],Help:""},ExtraOptions:{Type:"array",Default:[],Help:""},MaxReadAhead:{Type:"int",Default:131072,Help:""},NoAppleDouble:{Type:"bool",Default:!0,Help:""},NoAppleXattr:{Type:"bool",Default:!1,Help:""},VolumeName:{Type:"string",Default:"",Help:""},WritebackCache:{Type:"bool",Default:!1,Help:""}},M=n(84),P=(n(403),n(402),function(e){var t=e.attr,n=e.changeHandler,a=e.currentValues,r=e.isValidMap,o=e.errorsMap,i="".concat(t.Name),u=t.Required?l.a.createElement("i",{className:"text-red"},"*"):null,s=!Object(M.j)(t.Examples),c=null,d="";return t.Options||"options"===d?(d="select",c=t.Options.map((function(e){return l.a.createElement("option",{key:e.key,value:e.key},e.value)}))):t.IsPassword?d="password":s?d="string":"bool"===t.Type?(d="select",c=[l.a.createElement("option",{key:1,value:!0},"Yes"),l.a.createElement("option",{key:2,value:!1},"No")]):d="int"===t.Type?"number":(t.Type,"text"),l.a.createElement(h.a,{row:!0},l.a.createElement(v.a,{for:t.Name,sm:5},i,u),l.a.createElement(p.a,{sm:7},l.a.createElement(R.a,{type:d,value:a[t.Name]||t.Default,name:t.Name,valid:r[t.Name],invalid:!r[t.Name],id:t.Name,onChange:n,required:t.Required},c),l.a.createElement(B.a,null,o[t.Name])))}),Q=function(e){var t=e.changeHandler,n=e.currentValues,a=e.isValidMap,r=e.errorsMap,o=e.options,i=e.setCurrentValues,u=[],s=function(e){o.hasOwnProperty(e)&&u.push(l.a.createElement(P,{key:e,attr:Object(I.a)({Name:e},o[e]),changeHandler:function(a){a&&a.preventDefault(),t(a,o[e],n,i)},currentValues:n,errorsMap:r,isValidMap:a}))};for(var c in o)s(c);return u},J=function(e){var t=e.buttonLabel,n=e.className,a=e.okHandle,r=Object(u.useState)(!1),o=Object(b.a)(r,2),i=o[0],s=o[1],m=Object(u.useState)(!1),f=Object(b.a)(m,2),g=f[0],A=f[1],E=Object(u.useState)(""),P=Object(b.a)(E,2),J=P[0],j=P[1],Z=Object(u.useState)(""),x=Object(b.a)(Z,2),H=x[0],G=x[1],V=Object(u.useState)(function(){var e={};for(var t in D)e[t]="";for(var n in C)e[n]="";return e}()),w=Object(b.a)(V,2),z=w[0],Y=w[1],L=Object(u.useState)(function(){var e={};for(var t in D)e[t]=!0;for(var n in C)e[n]=!0;return e}()),W=Object(b.a)(L,2),F=W[0],K=W[1],U=Object(u.useState)({}),q=Object(b.a)(U,2),X=q[0],$=q[1],_=Object(u.useState)({}),ee=Object(b.a)(_,2),te=ee[0],ne=ee[1],ae=function(){return A(!g)},re=function(e,t,n,a){var r=e.target.name,o=e.target.value,i=t.Type;"bool"===i?o="true"===o:"int"===i&&(o=parseInt(o)),a(Object(I.a)(Object(I.a)({},n),{},Object(y.a)({},r,o)));var u=!0,l="";"SizeSuffix"===i?(u=Object(M.q)(o))||(l="The valid input is size( off | {unit}{metric} eg: 10G, 100M, 10G100M etc.)"):"Duration"===i?(u=Object(M.o)(o))||(l="The valid input is time ({unit}{metric} eg: 10ms, 100m, 10h15ms etc.)"):"int"===i&&((u=Object(M.p)(o))||(l="The valid input is int (100,200,300 etc)")),!t.Required||o&&""!==o||(u=!1)||(l+=" This field is required"),Y(Object(I.a)(Object(I.a)({},z),{},Object(y.a)({},r,l))),K(Object(I.a)(Object(I.a)({},F),{},Object(y.a)({},r,u)))};return l.a.createElement("div",{"data-test":"newMountModalComponent"},l.a.createElement(d.a,{color:"primary",onClick:ae},t),l.a.createElement(k.a,{isOpen:g,toggle:ae,className:n},l.a.createElement(O.a,{toggle:ae},"New Mount"),l.a.createElement(S.a,null,l.a.createElement(h.a,{row:!0},l.a.createElement(v.a,{for:"mountFs",sm:5},"Fs"),l.a.createElement(p.a,{sm:7},l.a.createElement(T.a,{remoteName:J,handleChangeRemoteName:j}),l.a.createElement(B.a,null))),!!J&&l.a.createElement(h.a,{row:!0},l.a.createElement(v.a,{for:"mountPoint",sm:5},"Mount Point"),l.a.createElement(p.a,{sm:7},l.a.createElement(R.a,{type:"text",value:H,name:"mountPoint",id:"mountPoint",onChange:function(e){return G(e.target.value)},required:!0}),l.a.createElement(B.a,null))),l.a.createElement("div",null,i&&l.a.createElement("i",{className:"icon-arrow-down"}),!i&&l.a.createElement("i",{className:"icon-arrow-right"}),l.a.createElement(d.a,{color:"link",onClick:function(){return s(!i)}},"Advanced")),i&&l.a.createElement(c.a,null,l.a.createElement(p.a,{lg:6},l.a.createElement("p",null,"Mount Options"),l.a.createElement(Q,{isValidMap:F,errorsMap:z,currentValues:te,setCurrentValues:ne,changeHandler:re,options:C})),l.a.createElement(p.a,{lg:6},l.a.createElement("p",null,"VFS Options"),l.a.createElement(Q,{isValidMap:F,errorsMap:z,currentValues:X,setCurrentValues:$,changeHandler:re,options:D})))),l.a.createElement(N.a,null,l.a.createElement(d.a,{"data-test":"ok-button",color:"primary",onClick:function(){if(!a)throw new Error("Ok handle is null");a(J,H,X,te)},disabled:!J||!H},"Create")," ",l.a.createElement(d.a,{"data-test":"cancel-button",color:"secondary",onClick:ae},"Cancel"))))},j=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(e,r){var o;return Object(a.a)(this,n),(o=t.call(this,e,r)).handleRemoveMount=function(e){(0,o.props.unmount)(e.MountPoint)},o.handleCreateNewMount=function(e,t,n,a){(0,o.props.addMount)(e,t,"",n,a)},o.handleUnmountAll=function(){(0,o.props.unmountAll)()},o.onDownloadClick=function(e){window.require("electron").shell.openExternal("http://www.secfs.net/winfsp/rel/"),e.preventDefault()},o.state={showNewMountCard:!1},o}return Object(r.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.getMountList)()}},{key:"render",value:function(){var e=this,t=this.props.currentMounts;return l.a.createElement("div",{"data-test":"mountDashboardComponent"},l.a.createElement(c.a,null,l.a.createElement(p.a,{lg:12,className:"mb-4 d-flex justify-content-between"},l.a.createElement(J,{buttonLabel:"Create new mount",okHandle:this.handleCreateNewMount}),l.a.createElement(d.a,{className:"float-right",color:"danger",onClick:this.handleUnmountAll},"Unmount all"))),l.a.createElement(m.a,{responsive:!0,className:"table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"No."),l.a.createElement("th",null,"Mount Point"),l.a.createElement("th",null,"Mounted since"),l.a.createElement("th",null,"Fs"),l.a.createElement("th",null,"Actions"))),l.a.createElement("tbody",null,t&&t.map((function(t,n){return l.a.createElement("tr",{key:t.MountPoint},l.a.createElement("td",null,n),l.a.createElement("td",null,t.MountPoint),l.a.createElement("td",null,new Date(t.MountedOn).toLocaleTimeString()),l.a.createElement("td",null,t.Fs),l.a.createElement("td",null,l.a.createElement(d.a,{color:"danger",onClick:function(){return e.handleRemoveMount(t)}},"Unmount")))})))),l.a.createElement("div",null,"Tip: Windows Needs To Install ",l.a.createElement("a",{href:"#",onClick:function(t){return e.onDownloadClick(t)}},"WinFSP")," To Mount Successfully"))}}]),n}(l.a.Component);t.default=Object(s.b)((function(e){return{currentMounts:e.mount.currentMounts}}),{getMountList:E,addMount:function(e,t,n,a,r){e.endsWith(":")||(e+=":");var o=A.p;return function(i){f.a.post(g.a.createMount,{fs:e,mountPoint:t,mountType:n,vfsOpt:a,mountOpt:r}).then((function(e){i({type:o,status:A.L,payload:e.data})}),(function(e){i({type:o,status:A.J,payload:e})})),i(E())}},unmount:function(e){var t=A.H;return function(n){f.a.post(g.a.removeMount,{mountPoint:e}).then((function(e){n({type:t,status:A.L,payload:e.data})}),(function(e){n({type:t,status:A.J,payload:e})})),n(E())}},unmountAll:function(){var e=A.H;return function(t){f.a.post(g.a.unmountAll).then((function(n){t({type:e,status:A.L,payload:n.data})}),(function(n){t({type:e,status:A.J,payload:n})})),t(E())}}})(j)}}]);
//# sourceMappingURL=13.6897219b.chunk.js.map