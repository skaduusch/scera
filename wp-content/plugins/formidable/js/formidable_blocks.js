!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.updateAttribute=function(e,t,n){n(function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}({},e,t))},t.setTextAttribute=function(e,t){if(e)return" "+t+'="'+e+'"';return""},t.getSubDir=function(){var e=window.location.pathname,t=e.indexOf("wp-admin"),n="/";t>-1&&(n=e.substr(0,t));return n};t.cssHideAdvancedSettings="\n    .components-panel__body.editor-block-inspector__advanced {\n        display:none;\n    }\n"},function(e,t,n){e.exports=n(7)()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0);function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var a=function(e){function t(){return i(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){return wp.element.createElement("div",null,"[formidable",(e=this.props,t=e.formId,n=e.title,r=e.description,i=e.minimize,l="",l+=(0,o.setTextAttribute)(t,"id"),l+=(0,o.setTextAttribute)(n,"title"),l+=(0,o.setTextAttribute)(r,"description"),l+=(0,o.setTextAttribute)(i,"minimize")),"]");var e,t,n,r,i,l}}]),t}(wp.element.Component);t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n(9)),i=l(n(1));function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=wp.i18n.__,f=function(e){function t(){return a(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=this.props,t=e.formId,n=e.setAttributes,r=e.forms;return wp.element.createElement(o.default,{selected:t,itemName:c("form","formidable"),itemNamePlural:c("forms","formidable"),items:r,onChange:function(e){n({formId:e})}})}}]),t}(wp.element.Component);t.default=f,f.propTypes={formId:i.default.string,setAttributes:i.default.func.isRequired}},function(e,t,n){"use strict";n(5)},function(e,t,n){"use strict";var r=u(n(2)),o=u(n(6)),i=u(n(10)),l=u(n(3)),a=n(0);function u(e){return e&&e.__esModule?e:{default:e}}var c=wp.element.Fragment,f=wp.i18n.__,s=wp.blocks.registerBlockType,p=wp.components,m=p.ServerSideRender,b=p.Notice;s("formidable/simple-form",{title:formidable_form_selector.name,description:f("Display a Form","formidable"),icon:i.default,category:"widgets",keywords:[f("contact forms","formidable"),"formidable"],edit:function(e){var t=e.setAttributes,n=e.attributes,r=e.isSelected,u=n.formId,s=formidable_form_selector.forms;return 0===s.length?wp.element.createElement(b,{status:"warning",isDismissible:!1},f("This site does not have any forms.","formidable")):u?wp.element.createElement(c,null,wp.element.createElement(o.default,{attributes:n,setAttributes:t,forms:s}),r&&wp.element.createElement("style",null,a.cssHideAdvancedSettings),wp.element.createElement(m,{block:"formidable/simple-form",attributes:n})):wp.element.createElement("div",{className:"frm-block-intro-screen"},wp.element.createElement("div",{className:"frm-block-intro-content"},wp.element.createElement(i.default,null),wp.element.createElement("div",{className:"frm-block-title"},formidable_form_selector.name),wp.element.createElement("div",{className:"frm-block-selector-screen"},wp.element.createElement(l.default,{formId:u,setAttributes:t,forms:s}))))},save:function(e){var t=e.attributes;return void 0===t.formId?"":wp.element.createElement(c,null,wp.element.createElement(r.default,t))}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=u(n(1)),i=u(n(3)),l=u(n(2)),a=n(0);function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=wp.i18n.__,p=wp.element.Component,m=wp.editor.InspectorControls,b=wp.components,d=b.PanelBody,y=b.PanelRow,w=b.ToggleControl,h=b.ExternalLink,_=function(e){function t(){return c(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=this.props,t=e.setAttributes,n=e.attributes,r=e.forms,o=n.formId,u=n.title,c=n.description,f=n.minimize;return wp.element.createElement(m,null,wp.element.createElement(d,{title:s("Select Form","formidable"),initialOpen:!0},wp.element.createElement(y,null,wp.element.createElement(i.default,{formId:o,setAttributes:t,forms:r})),o&&wp.element.createElement(y,null,wp.element.createElement(h,{href:(0,a.getSubDir)()+"wp-admin/admin.php?page=formidable&frm_action=edit&id="+o},s("Go to form","formidable")))),wp.element.createElement(d,{title:s("Options","formidable"),initialOpen:!1},wp.element.createElement(w,{label:s("Show Form Title","formidable"),checked:u,onChange:function(e){(0,a.updateAttribute)("title",e?"1":"",t)}}),wp.element.createElement(w,{label:s("Show Form Description","formidable"),checked:c,onChange:function(e){(0,a.updateAttribute)("description",e?"1":"",t)}}),wp.element.createElement(w,{label:s("Minimize HTML","formidable"),checked:f,onChange:function(e){(0,a.updateAttribute)("minimize",e?"1":"",t)}})),wp.element.createElement(d,{title:s("Shortcode","formidable"),initialOpen:!1},wp.element.createElement(y,null,wp.element.createElement(l.default,this.props.attributes))))}}]),t}(p);t.default=_,_.propTypes={attributes:o.default.object,setAttributes:o.default.func}},function(e,t,n){"use strict";var r=n(8);function o(){}e.exports=function(){function e(e,t,n,o,i,l){if(l!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),l=(r=i)&&r.__esModule?r:{default:r};function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=wp.i18n,f=c.__,s=c.sprintf,p=wp.element.Component,m=wp.components.SelectControl,b=function(e){function t(){return a(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"createOptions",value:function(e,t){var n=e.map((function(e){return{label:e.label,value:e.value}}));return[{label:s(f("Select a %s","formidable"),t),value:""}].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(n))}},{key:"render",value:function(){var e=this.props,t=e.selected,n=e.items,r=e.onChange,o=e.itemName,i=e.itemNamePlural,l=e.label,a=e.help;return n&&0!==n.length?wp.element.createElement(m,{value:t,options:this.createOptions(n,o),label:l,help:a,onChange:r}):wp.element.createElement("p",{className:"frm-block-select-no-items"},s(f("Currently, there are no %s","formidable"),i))}}]),t}(p);t.default=b,b.defaultProps={itemName:"item",itemNamePlural:"items"},b.propTypes={selected:l.default.oneOfType([l.default.string,l.default.number]),items:l.default.array,onChange:l.default.func,itemName:l.default.string,itemNamePlural:l.default.string,label:l.default.string,help:l.default.string}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=wp.element.Component,a=wp.components.Dashicon,u=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){return"svg"!==formidable_form_selector.icon?wp.element.createElement(a,{icon:formidable_form_selector.icon,size:"120"}):wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 599.68 601.37",width:"120",height:"120"},wp.element.createElement("path",{className:"cls-1 orange",d:"M289.6 384h140v76h-140z"}),wp.element.createElement("path",{className:"cls-1",d:"M400.2 147h-200c-17 0-30.6 12.2-30.6 29.3V218h260v-71zM397.9 264H169.6v196h75V340H398a32.2 32.2 0 0 0 30.1-21.4 24.3 24.3 0 0 0 1.7-8.7V264z"}),wp.element.createElement("path",{className:"cls-1",d:"M299.8 601.4A300.3 300.3 0 0 1 0 300.7a299.8 299.8 0 1 1 511.9 212.6 297.4 297.4 0 0 1-212 88zm0-563A262 262 0 0 0 38.3 300.7a261.6 261.6 0 1 0 446.5-185.5 259.5 259.5 0 0 0-185-76.8z"}))}}]),t}(l);t.default=u}]);