(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"2rMq":function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0===(r=function(){return i}.call(t,n,t,e))||(e.exports=r)}()},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("V+eJ"),n("bWfx"),n("f3/d"),n("/SS/"),n("hHhE");var o=n("q1tI"),i=r(o),a=r(n("2rMq")),u=r(n("Gytx"));e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c=[],s=void 0;function l(){s=e(c.map((function(e){return e.props}))),p.canUseDOM?t(s):n&&(s=n(s))}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.peek=function(){return s},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,c=[],e},t.prototype.shouldComponentUpdate=function(e){return!u(e,this.props)},t.prototype.componentWillMount=function(){c.push(this),l()},t.prototype.componentDidUpdate=function(){l()},t.prototype.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),l()},t.prototype.render=function(){return i.createElement(r,this.props)},t}(o.Component);return p.displayName="SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")",p.canUseDOM=a.canUseDOM,p}}},CnBM:function(e,t,n){"use strict";n("91GP"),n("VRzm"),n("XfO3"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("LK8F"),n("/SS/"),n("hHhE"),n("rE2o"),n("ioFf");var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n("q1tI"),c=n("17x9"),s=[],l=[];function p(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function f(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach((function(r){var o=p(e[r]);o.loading?t.loading=!0:(t.loaded[r]=o.loaded,t.error=o.error),n.push(o.promise),o.promise.then((function(e){t.loaded[r]=e})).catch((function(e){t.error=e}))}))}catch(r){t.error=r}return t.promise=Promise.all(n).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function d(e,t){return u.createElement((n=e)&&n.__esModule?n.default:n,t);var n}function E(e,t){var p,f;if(!t.loading)throw new Error("react-loadable requires a `loading` component");var E=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:d,webpack:null,modules:null},t),h=null;function T(){return h||(h=e(E.loader)),h.promise}return s.push(T),"function"==typeof E.webpack&&l.push((function(){if(e=E.webpack,"object"===r(n.m)&&e().every((function(e){return void 0!==e&&void 0!==n.m[e]})))return T();var e})),f=p=function(t){function n(r){o(this,n);var a=i(this,t.call(this,r));return a.retry=function(){a.setState({error:null,loading:!0,timedOut:!1}),h=e(E.loader),a._loadModule()},T(),a.state={error:h.error,pastDelay:!1,timedOut:!1,loading:h.loading,loaded:h.loaded},a}return a(n,t),n.preload=function(){return T()},n.prototype.componentWillMount=function(){this._mounted=!0,this._loadModule()},n.prototype._loadModule=function(){var e=this;if(this.context.loadable&&Array.isArray(E.modules)&&E.modules.forEach((function(t){e.context.loadable.report(t)})),h.loading){"number"==typeof E.delay&&(0===E.delay?this.setState({pastDelay:!0}):this._delay=setTimeout((function(){e.setState({pastDelay:!0})}),E.delay)),"number"==typeof E.timeout&&(this._timeout=setTimeout((function(){e.setState({timedOut:!0})}),E.timeout));var t=function(){e._mounted&&(e.setState({error:h.error,loaded:h.loaded,loading:h.loading}),e._clearTimeouts())};h.promise.then((function(){t()})).catch((function(e){t()}))}},n.prototype.componentWillUnmount=function(){this._mounted=!1,this._clearTimeouts()},n.prototype._clearTimeouts=function(){clearTimeout(this._delay),clearTimeout(this._timeout)},n.prototype.render=function(){return this.state.loading||this.state.error?u.createElement(E.loading,{isLoading:this.state.loading,pastDelay:this.state.pastDelay,timedOut:this.state.timedOut,error:this.state.error,retry:this.retry}):this.state.loaded?E.render(this.state.loaded,this.props):null},n}(u.Component),p.contextTypes={loadable:c.shape({report:c.func.isRequired})},f}function h(e){return E(p,e)}h.Map=function(e){if("function"!=typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return E(f,e)};var T=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.prototype.getChildContext=function(){return{loadable:{report:this.props.report}}},t.prototype.render=function(){return u.Children.only(this.props.children)},t}(u.Component);function m(e){for(var t=[];e.length;){var n=e.pop();t.push(n())}return Promise.all(t).then((function(){if(e.length)return m(e)}))}T.propTypes={report:c.func.isRequired},T.childContextTypes={loadable:c.shape({report:c.func.isRequired}).isRequired},h.Capture=T,h.preloadAll=function(){return new Promise((function(e,t){m(s).then(e,t)}))},h.preloadReady=function(){return new Promise((function(e,t){m(l).then(e,e)}))},e.exports=h},EH9Q:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Austin Nguyen\'s Portfolio","description":"Austin Nguyen\'s Portfolio Website","author":"Austin Nguyen"}}}}')},Gytx:function(e,t,n){n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var s=i[c];if(!u(s))return!1;var l=e[s],p=t[s];if(!1===(o=n?n.call(r,l,p,s):void 0)||void 0===o&&l!==p)return!1}return!0}},Oyvg:function(e,t,n){var r=n("dyZX"),o=n("Xbzi"),i=n("hswa").f,a=n("kJMx").f,u=n("quPj"),c=n("C/va"),s=r.RegExp,l=s,p=s.prototype,f=/a/g,d=/a/g,E=new s(f)!==f;if(n("nh4g")&&(!E||n("eeVq")((function(){return d[n("K0xU")("match")]=!1,s(f)!=f||s(d)==d||"/a/i"!=s(f,"i")})))){s=function(e,t){var n=this instanceof s,r=u(e),i=void 0===t;return!n&&r&&e.constructor===s&&i?e:o(E?new l(r&&!i?e.source:e,t):l((r=e instanceof s)?e.source:e,r&&i?c.call(e):t),n?this:p,s)};for(var h=function(e){e in s||i(s,e,{configurable:!0,get:function(){return l[e]},set:function(t){l[e]=t}})},T=a(l),m=0;T.length>m;)h(T[m++]);p.constructor=s,s.prototype=p,n("KroJ")(r,"RegExp",s)}n("elZq")("RegExp")},RXBc:function(e,t,n){"use strict";n.r(t);n("XfO3"),n("HEwt"),n("91GP"),n("Z2Ku"),n("L9s1"),n("KKXr");var r=n("q1tI"),o=n.n(r),i=n("YwZP");n("2Spj"),n("RW0V"),n("bWfx"),n("rGqo"),n("yt8O"),n("Btvt"),n("hhXQ");function a(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n("17x9");var l=o.a.createContext(null);n("8+KV"),n("hHhE");function p(e,t){var n=Object.create(null);return e&&r.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&Object(r.isValidElement)(e)?t(e):e}(e)})),n}function f(e,t,n){return null!=n[t]?n[t]:e.props[t]}function d(e,t,n){var o=p(e.children),i=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,o=Object.create(null),i=[];for(var a in e)a in t?i.length&&(o[a]=i,i=[]):i.push(a);var u={};for(var c in t){if(o[c])for(r=0;r<o[c].length;r++){var s=o[c][r];u[o[c][r]]=n(s)}u[c]=n(c)}for(r=0;r<i.length;r++)u[i[r]]=n(i[r]);return u}(t,o);return Object.keys(i).forEach((function(a){var u=i[a];if(Object(r.isValidElement)(u)){var c=a in t,s=a in o,l=t[a],p=Object(r.isValidElement)(l)&&!l.props.in;!s||c&&!p?s||!c||p?s&&c&&Object(r.isValidElement)(l)&&(i[a]=Object(r.cloneElement)(u,{onExited:n.bind(null,u),in:l.props.in,exit:f(u,"exit",e),enter:f(u,"enter",e)})):i[a]=Object(r.cloneElement)(u,{in:!1}):i[a]=Object(r.cloneElement)(u,{onExited:n.bind(null,u),in:!0,exit:f(u,"exit",e),enter:f(u,"enter",e)})}})),i}var E=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},h=function(e){function t(t,n){var r,o=(r=e.call(this,t,n)||this).handleExited.bind(s(s(r)));return r.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},r}c(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,o,i=t.children,a=t.handleExited;return{children:t.firstRender?(n=e,o=a,p(n.children,(function(e){return Object(r.cloneElement)(e,{onExited:o.bind(null,e),in:!0,appear:f(e,"appear",n),enter:f(e,"enter",n),exit:f(e,"exit",n)})}))):d(e,i,a),firstRender:!1}},n.handleExited=function(e,t){var n=p(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=u({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=a(e,["component","childFactory"]),i=this.state.contextValue,u=E(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?o.a.createElement(l.Provider,{value:i},u):o.a.createElement(l.Provider,{value:i},o.a.createElement(t,r,u))},t}(o.a.Component);h.propTypes={},h.defaultProps={component:"div",childFactory:function(e){return e}};var T=h;n("V+eJ");n("Oyvg"),n("pIFo");function m(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var y=n("i8i4"),v=n.n(y),A=!1,b="unmounted",g="exited",_="entering",S="entered",O=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var o,i=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(o=g,r.appearStatus=_):o=S:o=t.unmountOnExit||t.mountOnEnter?b:g,r.state={status:o},r.nextCallback=null,r}c(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===b?{status:g}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==_&&n!==S&&(t=_):n!==_&&n!==S||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=v.a.findDOMNode(this);t===_?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===g&&this.setState({status:b})},n.performEnter=function(e,t){var n=this,r=this.props.enter,o=this.context?this.context.isMounting:t,i=this.getTimeouts(),a=o?i.appear:i.enter;!t&&!r||A?this.safeSetState({status:S},(function(){n.props.onEntered(e)})):(this.props.onEnter(e,o),this.safeSetState({status:_},(function(){n.props.onEntering(e,o),n.onTransitionEnd(e,a,(function(){n.safeSetState({status:S},(function(){n.props.onEntered(e,o)}))}))})))},n.performExit=function(e){var t=this,n=this.props.exit,r=this.getTimeouts();n&&!A?(this.props.onExit(e),this.safeSetState({status:"exiting"},(function(){t.props.onExiting(e),t.onTransitionEnd(e,r.exit,(function(){t.safeSetState({status:g},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:g},(function(){t.props.onExited(e)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var r=null==t&&!this.props.addEndListener;e&&!r?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===b)return null;var t=this.props,n=t.children,r=a(t,["children"]);if(delete r.in,delete r.mountOnEnter,delete r.unmountOnExit,delete r.appear,delete r.enter,delete r.exit,delete r.timeout,delete r.addEndListener,delete r.onEnter,delete r.onEntering,delete r.onEntered,delete r.onExit,delete r.onExiting,delete r.onExited,"function"==typeof n)return o.a.createElement(l.Provider,{value:null},n(e,r));var i=o.a.Children.only(n);return o.a.createElement(l.Provider,{value:null},o.a.cloneElement(i,r))},t}(o.a.Component);function C(){}O.contextType=l,O.propTypes={},O.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:C,onEntering:C,onEntered:C,onExit:C,onExiting:C,onExited:C},O.UNMOUNTED=0,O.EXITED=1,O.ENTERING=2,O.ENTERED=3,O.EXITING=4;var R=O,P=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.remove(r):"string"==typeof n.className?n.className=m(n.className,r):n.setAttribute("class",m(n.className&&n.className.baseVal||"",r)));var n,r}))},w=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){t.removeClasses(e,"exit"),t.addClass(e,n?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var r=n?"appear":"enter";t.addClass(e,r,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var r=n?"appear":"enter";t.removeClasses(e,r),t.addClass(e,r,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){t.removeClasses(e,"appear"),t.removeClasses(e,"enter"),t.addClass(e,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){t.addClass(e,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){t.removeClasses(e,"exit"),t.addClass(e,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.getClassNames=function(e){var n=t.props.classNames,r="string"==typeof n,o=r?""+(r&&n?n+"-":"")+e:n[e];return{baseClassName:o,activeClassName:r?o+"-active":n[e+"Active"],doneClassName:r?o+"-done":n[e+"Done"]}},t}c(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var r=this.getClassNames(t)[n+"ClassName"];"appear"===t&&"done"===n&&(r+=" "+this.getClassNames("enter").doneClassName),"active"===n&&e&&e.scrollTop,this.appliedClasses[t][n]=r,function(e,t){e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.add(r):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,r)||("string"==typeof n.className?n.className=n.className+" "+r:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+r)));var n,r}))}(e,r)},n.removeClasses=function(e,t){var n=this.appliedClasses[t],r=n.base,o=n.active,i=n.done;this.appliedClasses[t]={},r&&P(e,r),o&&P(e,o),i&&P(e,i)},n.render=function(){var e=this.props,t=(e.classNames,a(e,["classNames"]));return o.a.createElement(R,u({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(o.a.Component);w.defaultProps={classNames:""},w.propTypes={};var x=w,M=n("EH9Q"),N=n("TJpk"),L=n.n(N);function I(e){var t=e.description,n=e.lang,r=e.meta,i=e.title,a=M.data.site,u=t||a.siteMetadata.description;return o.a.createElement(L.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+a.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:i},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:title",content:i},{name:"twitter:description",content:u}].concat(r)})}I.defaultProps={lang:"en",meta:[],description:""};var G=I,j=(n("8ypT"),n("CnBM")),k=n.n(j),H=k()({loader:function(){return n.e(7).then(n.bind(null,"Slua"))},loading:function(){return o.a.createElement("div",null,"Loading...")}}),U=k()({loader:function(){return n.e(8).then(n.bind(null,"7ijd"))},loading:function(){return o.a.createElement("div",null,"Loading...")}}),D=k()({loader:function(){return n.e(10).then(n.bind(null,"BlDy"))},loading:function(){return o.a.createElement("div",null,"Loading...")}}),B=k()({loader:function(){return n.e(9).then(n.bind(null,"OBPa"))},loading:function(){return o.a.createElement("div",null,"Loading...")}}),F=new Proxy((function(e,t){return{about:o.a.createElement(H,{page:t}),works:o.a.createElement(D,{page:t}),education:o.a.createElement(U,{page:t})}[e]}),{apply:function(e,t,n){var r=e.apply(t,n);return r||o.a.createElement(B,null)}}),q=function(e){return o.a.createElement("div",null,o.a.createElement("div",{id:"content__grid__page__header"},o.a.createElement("span",null,e.route),o.a.createElement("span",{id:"content__grid__page__header__page"},e.page,"/",e.pages)),F(e.route,e.page))};t.default=function(e){var t=null,n=null,a=/[/]+/;if("http://localhost:8000/"===e.location.href)t="1",n="about";else if(4===e.location.href.split(a).length){var u=e.location.href.split(a).reverse();t=u[0],n=u[1]}else t="0",n="Not Found";var c={about:2,works:1,education:1}[n],s=Object(r.useRef)(Object(r.createRef)()),l=function(){s.current.current.animate([{transform:"rotate(0deg)",top:"0vh"},{transform:"rotate(30deg)",top:"100vh"},{transform:"rotate(0deg)",top:"0vh"}],400)},p=function(e){return o.a.createElement(i.Link,Object.assign({},e,{getProps:function(e){return e.href.includes(n)?{className:"selected"}:null},onClick:function(){return l()}}))};Object(r.useEffect)((function(){return window.addEventListener("wheel",f),function(){window.removeEventListener("wheel",f)}}));var f=function(e){e.deltaY>0?d("inc"):d("dec")},d=function(r){var o=new Proxy({inc:1,dec:-1},{get:function(e,n){return n in e?e[n]+parseInt(t):n}});1<=o[r]&o[r]<=c&&(e.navigate(n+"/"+o[r]),l())};return o.a.createElement("main",{id:"app"},o.a.createElement(G,{title:""+n.charAt(0).toUpperCase()+n.slice(1)+" "+t+"/"+c}),o.a.createElement("section",{id:"header"},o.a.createElement("aside",{id:"note"},o.a.createElement("strong",null,"Welcome to my portfolio"),o.a.createElement("div",{style:{marginTop:"1.5vmin"}},"Email: austinnguyen01@gmail.com"),o.a.createElement("div",null,"Discord: KyneticDerpcake#2878")),o.a.createElement("section",{id:"header__title"},o.a.createElement("div",{id:"header__title__first"},"Austin"),o.a.createElement("div",{id:"header__title__last"},"Nguyen",o.a.createElement("div",{id:"header__title__number"},"01"))),o.a.createElement("nav",{id:"header__navigation"},o.a.createElement(p,{to:"about/1"},"About"),o.a.createElement(p,{to:"works/1"},"Works"),o.a.createElement(p,{to:"education/1"},"Education"))),o.a.createElement("article",{id:"content"},o.a.createElement("nav",{id:"content__navigation"},o.a.createElement("div",{onClick:function(){return d("dec")},id:"content__navigation__dec"},"^"),Array.from({length:c},(function(e,t){return t+1})).map((function(e){return o.a.createElement("span",{onClick:function(){return d(e)},style:e==t?{backgroundColor:"white"}:{},className:"content__navigation__item",for:"page"+e})})),o.a.createElement("div",{onClick:function(){return d("inc")},id:"content__navigation__inc"},"^")),o.a.createElement("section",{id:"content__grid"},o.a.createElement("svg",{id:"content__grid__folder--top",viewBox:"0 0 3940 100"},o.a.createElement("path",{fill:"#f2d187",d:"M0,0 L0,100 L 3940,100 L 3940,0 L0,100 Z"})),o.a.createElement("div",{id:"content__grid__page"},o.a.createElement("section",{ref:s.current},o.a.createElement(i.Location,null,(function(e){var r=e.location;return o.a.createElement(T,null,o.a.createElement(x,{key:r.key,classNames:"delay",timeout:200},o.a.createElement(i.Router,null,o.a.createElement(q,{path:"*/*",page:t,route:n,pages:c}))))})))),o.a.createElement("svg",{id:"content__grid__folder--left",viewBox:"0 0 100 2000"},o.a.createElement("path",{fill:"#edbf59",d:"M0,0 L100,100 L 100,2000 L 0,2000 Z"})))))}},TJpk:function(e,t,n){n("LK8F"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("/SS/"),n("hHhE"),n("V+eJ"),n("HAE/"),n("91GP"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=p(n("q1tI")),a=p(n("17x9")),u=p(n("8+s/")),c=p(n("bmMU")),s=n("v1p5"),l=n("hFT/");function p(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var d,E,h,T=(0,u.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),m=(d=T,h=E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case l.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,o=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return r({},o,((t={})[n.type]=[].concat(o[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,o=e.child,i=e.newProps,a=e.newChildProps,u=e.nestedChildren;switch(o.type){case l.TAG_NAMES.TITLE:return r({},i,((t={})[o.type]=u,t.titleAttributes=r({},a),t));case l.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},a)});case l.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},a)})}return r({},i,((n={})[o.type]=r({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var o;n=r({},n,((o={})[t]=e[t],o))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=f(o,["children"]),u=(0,s.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(e,i),e.type){case l.TAG_NAMES.LINK:case l.TAG_NAMES.META:case l.TAG_NAMES.NOSCRIPT:case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:u,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=f(e,["children"]),o=r({},n);return t&&(o=this.mapChildrenToProps(t,o)),i.default.createElement(d,o)},o(t,null,[{key:"canUseDOM",set:function(e){d.canUseDOM=e}}]),t}(i.default.Component),E.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},E.defaultProps={defer:!0,encodeSpecialCharacters:!0},E.peek=d.peek,E.rewind=function(){var e=d.rewind();return e||(e=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},h);m.renderStatic=m.rewind,t.Helmet=m,t.default=m},UExd:function(e,t,n){var r=n("nh4g"),o=n("DVgA"),i=n("aCFj"),a=n("UqcF").f;e.exports=function(e){return function(t){for(var n,u=i(t),c=o(u),s=c.length,l=0,p=[];s>l;)n=c[l++],r&&!a.call(u,n)||p.push(e?[n,u[n]]:u[n]);return p}}},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var u,c,s,l=r(t),p=r(n);if(l&&p){if((c=t.length)!=n.length)return!1;for(u=c;0!=u--;)if(!e(t[u],n[u]))return!1;return!0}if(l!=p)return!1;var f=t instanceof Date,d=n instanceof Date;if(f!=d)return!1;if(f&&d)return t.getTime()==n.getTime();var E=t instanceof RegExp,h=n instanceof RegExp;if(E!=h)return!1;if(E&&h)return t.toString()==n.toString();var T=o(t);if((c=T.length)!==o(n).length)return!1;for(u=c;0!=u--;)if(!i.call(n,T[u]))return!1;if(a&&t instanceof Element&&n instanceof Element)return t===n;for(u=c;0!=u--;)if(!("_owner"===(s=T[u])&&t.$$typeof||e(t[s],n[s])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t,n){n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},o=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(o).reduce((function(e,t){return e[o[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},hhXQ:function(e,t,n){var r=n("XKFU"),o=n("UExd")(!1);r(r.S,"Object",{values:function(e){return o(e)}})},v1p5:function(e,t,n){(function(e){n("dZ+Y"),n("KKXr"),n("eM6i"),n("8+KV"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("bWfx"),n("DNiP"),n("pIFo"),n("91GP"),n("rE2o"),n("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=c(n("q1tI")),a=c(n("MgzW")),u=n("hFT/");function c(e){return e&&e.__esModule?e:{default:e}}var s,l=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},p=function(e){var t=T(e,u.TAG_NAMES.TITLE),n=T(e,u.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=T(e,u.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},f=function(e){return T(e,u.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},d=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return o({},e,t)}),{})},E=function(e,t){return t.filter((function(e){return void 0!==e[u.TAG_NAMES.BASE]})).map((function(e){return e[u.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},h=function(e,t,n){var o={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&b("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],s=c.toLowerCase();-1===t.indexOf(s)||n===u.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||s===u.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==u.TAG_PROPERTIES.INNER_HTML&&c!==u.TAG_PROPERTIES.CSS_TEXT&&c!==u.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][l]&&(r[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),c=0;c<i.length;c++){var s=i[c],l=(0,a.default)({},o[s],r[s]);o[s]=l}return e}),[]).reverse()},T=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},m=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout((function(){m(e)}),0)}),y=function(e){return clearTimeout(e)},v="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||m:e.requestAnimationFrame||m,A="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||y:e.cancelAnimationFrame||y,b=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},g=null,_=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,p=e.styleTags,f=e.title,d=e.titleAttributes;C(u.TAG_NAMES.BODY,r),C(u.TAG_NAMES.HTML,o),O(f,d);var E={baseTag:R(u.TAG_NAMES.BASE,n),linkTags:R(u.TAG_NAMES.LINK,i),metaTags:R(u.TAG_NAMES.META,a),noscriptTags:R(u.TAG_NAMES.NOSCRIPT,c),scriptTags:R(u.TAG_NAMES.SCRIPT,l),styleTags:R(u.TAG_NAMES.STYLE,p)},h={},T={};Object.keys(E).forEach((function(e){var t=E[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(T[e]=E[e].oldTags)})),t&&t(),s(e,h,T)},S=function(e){return Array.isArray(e)?e.join(""):e},O=function(e,t){void 0!==e&&document.title!==e&&(document.title=S(e)),C(u.TAG_NAMES.TITLE,t)},C=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(u.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var s=a[c],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===o.indexOf(s)&&o.push(s);var p=i.indexOf(s);-1!==p&&i.splice(p,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(u.HELMET_ATTRIBUTE):n.getAttribute(u.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(u.HELMET_ATTRIBUTE,a.join(","))}},R=function(e,t){var n=document.head||document.querySelector(u.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+u.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===u.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===u.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(u.HELMET_ATTRIBUTE,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},P=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[u.REACT_TAG_MAP[n]||n]=e[n],t}),t)},x=function(e,t,n){switch(e){case u.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[u.HELMET_ATTRIBUTE]=!0,o=w(n,r),[i.default.createElement(u.TAG_NAMES.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=P(n),i=S(t);return o?"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+o+">"+l(i,r)+"</"+e+">":"<"+e+" "+u.HELMET_ATTRIBUTE+'="true">'+l(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case u.ATTRIBUTE_NAMES.BODY:case u.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return w(t)},toString:function(){return P(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[u.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=u.REACT_TAG_MAP[e]||e;if(n===u.TAG_PROPERTIES.INNER_HTML||n===u.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),i.default.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===u.TAG_PROPERTIES.INNER_HTML||e===u.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+l(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===u.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[u.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){g&&A(g),e.defer?g=v((function(){_(e,(function(){g=null}))})):(_(e),g=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,p=e.title,f=void 0===p?"":p,d=e.titleAttributes;return{base:x(u.TAG_NAMES.BASE,t,r),bodyAttributes:x(u.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:x(u.ATTRIBUTE_NAMES.HTML,o,r),link:x(u.TAG_NAMES.LINK,i,r),meta:x(u.TAG_NAMES.META,a,r),noscript:x(u.TAG_NAMES.NOSCRIPT,c,r),script:x(u.TAG_NAMES.SCRIPT,s,r),style:x(u.TAG_NAMES.STYLE,l,r),title:x(u.TAG_NAMES.TITLE,{title:f,titleAttributes:d},r)}},t.reducePropsToState=function(e){return{baseTag:E([u.TAG_PROPERTIES.HREF],e),bodyAttributes:d(u.ATTRIBUTE_NAMES.BODY,e),defer:T(e,u.HELMET_PROPS.DEFER),encode:T(e,u.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:d(u.ATTRIBUTE_NAMES.HTML,e),linkTags:h(u.TAG_NAMES.LINK,[u.TAG_PROPERTIES.REL,u.TAG_PROPERTIES.HREF],e),metaTags:h(u.TAG_NAMES.META,[u.TAG_PROPERTIES.NAME,u.TAG_PROPERTIES.CHARSET,u.TAG_PROPERTIES.HTTPEQUIV,u.TAG_PROPERTIES.PROPERTY,u.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:h(u.TAG_NAMES.NOSCRIPT,[u.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:h(u.TAG_NAMES.SCRIPT,[u.TAG_PROPERTIES.SRC,u.TAG_PROPERTIES.INNER_HTML],e),styleTags:h(u.TAG_NAMES.STYLE,[u.TAG_PROPERTIES.CSS_TEXT],e),title:p(e),titleAttributes:d(u.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=v,t.warn=b}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=component---src-pages-index-js-bffbd8ac4531c96c75d6.js.map