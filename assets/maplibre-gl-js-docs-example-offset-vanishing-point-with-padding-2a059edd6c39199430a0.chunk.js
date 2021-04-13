(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{EmN9:function(e,t,n){var r=n("SMQJ");r=r.default||r,e.exports={component:r,props:{frontMatter:{title:"Offset the vanishing point using padding",description:"Offset the center or vanishing point of the map to reduce distortion when floating elements are displayed over the map.",topics:["Camera"],thumbnail:"offset-vanishing-point-with-padding",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["Mapbox GL JS"],prependJs:["import Example from '../../components/example';","import html from './offset-vanishing-point-with-padding.html';"]}}}},M4Oy:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=((r=n("fG8n"))&&r.__esModule?r:{default:r}).default;t.default=o},SMQJ:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(n("q1tI")),i=(n("yr+R"),n("cQZ0"),c(n("uLm5"))),a=c(n("u7aT")),s=c(n("1wO5"));function c(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b={title:"Offset the vanishing point using padding",description:"Offset the center or vanishing point of the map to reduce distortion when floating elements are displayed over the map.",topics:["Camera"],thumbnail:"offset-vanishing-point-with-padding",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["Mapbox GL JS"],headings:[]},y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(h,e);var t,n,r,c=d(h);function h(){return p(this,h),c.apply(this,arguments)}return t=h,(n=[{key:"render",value:function(){var e=this.props;return o.default.createElement(s.default,l({},e,{frontMatter:b}),o.default.createElement("div",null,o.default.createElement("p",null,"Offset the center or ",o.default.createElement("a",{href:"https://en.wikipedia.org/wiki/Vanishing_point"},"vanishing point")," of the map to reduce distortion when floating elements are displayed over the map."),o.default.createElement(i.default,l({html:a.default},this.props))))}}])&&u(t.prototype,n),r&&u(t,r),h}(o.default.PureComponent);t.default=y},mOgX:function(e,t,n){"use strict";n.r(t);var r=n("f4rJ");n("yr+R");function o(e,t){return t&&t.local,"https://unpkg.com/maplibre-gl@".concat(r.a,"/dist/maplibre-gl.").concat(e)}t.default={js:function(e){return o("js",e)},css:function(e){return o("css",e)}}},u7aT:function(e,t,n){"use strict";n.r(t),t.default="<style>\n    .rounded-rect {\n        background: white;\n        border-radius: 10px;\n        box-shadow: 0 0 50px -25px black;\n    }\n\n    .flex-center {\n        position: absolute;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .flex-center.left {\n        left: 0px;\n    }\n\n    .flex-center.right {\n        right: 0px;\n    }\n\n    .sidebar-content {\n        position: absolute;\n        width: 95%;\n        height: 95%;\n        font-family: Arial, Helvetica, sans-serif;\n        font-size: 32px;\n        color: gray;\n    }\n\n    .sidebar-toggle {\n        position: absolute;\n        width: 1.3em;\n        height: 1.3em;\n        overflow: visible;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .sidebar-toggle.left {\n        right: -1.5em;\n    }\n\n    .sidebar-toggle.right {\n        left: -1.5em;\n    }\n\n    .sidebar-toggle:hover {\n        color: #0aa1cf;\n        cursor: pointer;\n    }\n\n    .sidebar {\n        transition: transform 1s;\n        z-index: 1;\n        width: 300px;\n        height: 100%;\n    }\n\n    /*\n  The sidebar styling has them \"expanded\" by default, we use CSS transforms to push them offscreen\n  The toggleSidebar() function removes this class from the element in order to expand it.\n*/\n    .left.collapsed {\n        transform: translateX(-295px);\n    }\n\n    .right.collapsed {\n        transform: translateX(295px);\n    }\n</style>\n\n<div id=\"map\">\n    <div id=\"left\" class=\"sidebar flex-center left collapsed\">\n        <div class=\"sidebar-content rounded-rect flex-center\">\n            Left Sidebar\n            <div\n                class=\"sidebar-toggle rounded-rect left\"\n                onclick=\"toggleSidebar('left')\"\n            >\n                &rarr;\n            </div>\n        </div>\n    </div>\n    <div id=\"right\" class=\"sidebar flex-center right collapsed\">\n        <div class=\"sidebar-content rounded-rect flex-center\">\n            Right Sidebar\n            <div\n                class=\"sidebar-toggle rounded-rect right\"\n                onclick=\"toggleSidebar('right')\"\n            >\n                &larr;\n            </div>\n        </div>\n    </div>\n</div>\n\n<script>\n    var center = [-77.01866, 38.888];\n    var map = new maplibregl.Map({\n        container: 'map',\n        zoom: 12.5,\n        center: center,\n        pitch: 60,\n        style:\n            'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL'\n    });\n\n    new maplibregl.Marker().setLngLat(center).addTo(map);\n\n    function toggleSidebar(id) {\n        var elem = document.getElementById(id);\n        var classes = elem.className.split(' ');\n        var collapsed = classes.indexOf('collapsed') !== -1;\n\n        var padding = {};\n\n        if (collapsed) {\n            // Remove the 'collapsed' class from the class list of the element, this sets it back to the expanded state.\n            classes.splice(classes.indexOf('collapsed'), 1);\n\n            padding[id] = 300; // In px, matches the width of the sidebars set in .sidebar CSS class\n            map.easeTo({\n                padding: padding,\n                duration: 1000 // In ms, CSS transition duration property for the sidebar matches this value\n            });\n        } else {\n            padding[id] = 0;\n            // Add the 'collapsed' class to the class list of the element\n            classes.push('collapsed');\n\n            map.easeTo({\n                padding: padding,\n                duration: 1000\n            });\n        }\n\n        // Update the class list on the element\n        elem.className = classes.join(' ');\n    }\n\n    map.on('load', function () {\n        toggleSidebar('left');\n    });\n<\/script>\n"},uLm5:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return P}));var r=n("q1tI"),o=n.n(r),i=(n("17x9"),n("mOgX")),a=n("v8ZZ"),s=n.n(a),c=n("irdr"),l=n.n(c),p=n("M4Oy"),u=n.n(p),f=n("umIL"),d=n("wdKx");function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w(this,n)}}function w(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j='<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />',S="\tbody { margin: 0; padding: 0; }\n\t#map { position: absolute; top: 0; bottom: 0; width: 100%; }",P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(c,e);var t,n,r,a=v(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=a.call(this,e)).state={unsupported:!1},t}return t=c,(n=[{key:"displayHTML",value:function(e){return'<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8" />\n<title>'.concat(this.props.frontMatter.title,"</title>\n").concat(j,'\n<script src="').concat(i.default.js(),'"><\/script>\n<link href="').concat(i.default.css(),'" rel="stylesheet" />\n<style>\n').concat(S,"\n</style>\n</head>\n<body>\n").concat(e,"\n</body>\n</html>")}},{key:"renderHTML",value:function(e){return"<!DOCTYPE html>\n<html>\n<head>\n<meta charset=utf-8 />\n<title>".concat(this.props.frontMatter.title,"</title>\n").concat(j,"\n<script src='https://js.sentry-cdn.com/b4e18cb1943f46289f67ca6a771bd341.min.js' crossorigin=\"anonymous\"><\/script>\n<script src='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-instrumentile/v3.0.0/mapbox-gl-instrumentile.js' crossorigin=\"anonymous\"><\/script>\n\n<script src='").concat(i.default.js({local:!0}),"'><\/script>\n<link href='").concat(i.default.css({local:!0}),"' rel='stylesheet' />\n<style>\n    ").concat(S,"\n</style>\n</head>\n<body>\n").concat(e,"\n</body>\n<script>\nif (window.map instanceof mapboxgl.Map) {\n    var i = new instrumentile(map, {\n        token: '").concat(MapboxPageShell.getMapboxAccessToken(),"',\n        api: 'https://api.tiles.mapbox.com',\n        source: 'docs-examples'\n    });\n}\n<\/script>\n</html>")}},{key:"renderSnippet",value:function(){var e=this.props,t=e.html,n=e.location,r=this.displayHTML(t),i=d.extractor(r);return o.a.createElement("div",{className:"bg-white"},o.a.createElement("div",{id:"code",className:"relative"},o.a.createElement(l.a,{code:this.displayHTML(t),highlighter:function(){return f.highlightHtml},edit:{frontMatter:b(b({},this.props.frontMatter),{},{pathname:n.pathname}),head:j,js:i.js,html:i.html,css:i.css,resources:i.resources}})))}},{key:"render",value:function(){var e=this,t=this.props,n=t.frontMatter,r=t.height;return o.a.createElement("div",{className:"prose"},this.state.unsupported&&o.a.createElement(u.a,{title:"Mapbox GL unsupported",theme:"warning"},"Mapbox GL requires"," ",o.a.createElement("a",{className:"link",href:"https://caniuse.com/#feat=webgl"},"WebGL support"),". Please check that you are using a supported browser and that"," ",o.a.createElement("a",{className:"link",href:"https://get.webgl.org/"},"WebGL is enabled"),"."),s()()&&o.a.createElement("iframe",{id:"demo",style:{height:r},className:"w-full mt18",allowFullScreen:!0,mozallowfullscreen:"true",webkitallowfullscreen:"true",ref:function(t){e.iframe=t},title:"".concat(n.title," example")}),this.props.displaySnippet&&this.renderSnippet())}},{key:"componentDidMount",value:function(){if(s()()||this.setState({unsupported:!0}),this.iframe){var e=this.iframe.contentWindow.document;e.open(),e.write(this.renderHTML(this.props.html)),e.close()}}}])&&y(t.prototype,n),r&&y(t,r),c}(o.a.Component);x(P,"defaultProps",{displaySnippet:!0,height:400})},v8ZZ:function(e,t,n){"use strict";function r(e){return!o(e)}function o(e){return"undefined"==typeof window||"undefined"==typeof document?"not a browser":Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray?Function.prototype&&Function.prototype.bind?Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions?"JSON"in window&&"parse"in JSON&&"stringify"in JSON?function(){if(!("Worker"in window&&"Blob"in window&&"URL"in window))return!1;var e,t,n=new Blob([""],{type:"text/javascript"}),r=URL.createObjectURL(n);try{t=new Worker(r),e=!0}catch(t){e=!1}t&&t.terminate();return URL.revokeObjectURL(r),e}()?"Uint8ClampedArray"in window?ArrayBuffer.isView?function(){const e=document.createElement("canvas");e.width=e.height=1;const t=e.getContext("2d");if(!t)return!1;const n=t.getImageData(0,0,1,1);return n&&n.width===e.width}()?function(e){void 0===i[e]&&(i[e]=function(e){const t=function(e){var t=document.createElement("canvas"),n=Object.create(r.webGLContextAttributes);return n.failIfMajorPerformanceCaveat=e,t.probablySupportsContext?t.probablySupportsContext("webgl",n)||t.probablySupportsContext("experimental-webgl",n):t.supportsContext?t.supportsContext("webgl",n)||t.supportsContext("experimental-webgl",n):t.getContext("webgl",n)||t.getContext("experimental-webgl",n)}(e);if(!t)return!1;const n=t.createShader(t.VERTEX_SHADER);if(!n||t.isContextLost())return!1;return t.shaderSource(n,"void main() {}"),t.compileShader(n),!0===t.getShaderParameter(n,t.COMPILE_STATUS)}(e));return i[e]}(e&&e.failIfMajorPerformanceCaveat)?void 0:"insufficient WebGL support":"insufficient Canvas/getImageData support":"insufficient ArrayBuffer support":"insufficient Uint8ClampedArray support":"insufficient worker support":"insufficient JSON support":"insufficient Object support":"insufficient Function support":"insufficent Array support"}e.exports?e.exports=r:window&&(window.mapboxgl=window.mapboxgl||{},window.mapboxgl.supported=r,window.mapboxgl.notSupportedReason=o);var i={};r.webGLContextAttributes={antialias:!1,alpha:!0,stencil:!0,depth:!0}},wdKx:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extractor=function(e){var t="",n={js:[],css:[]},r=/src=("|')([^']*?)("|')/g,o=/href=("|')([^']*?)("|')/g,i=/<script>((.|\n)*)<\/script>/,a=/<style\b[^>]*>([\s\S]*?)<\/style>/g,s=/<body[\s\S]*?>((.|\n)*)<\/body>/,c=e.match(a),l="".concat(e.replace(i,"")),p=e.match(i)[1];c&&(c.forEach((function(e){t+=e.replace(/<[^>]*>/g,"")})),l="".concat(l.replace(a,"")));if(e.match(r)){var u=e.match(r).map((function(e){return e.replace("src=","").replace(/["']/g,"")}));n.js=n.js.concat(u),l="".concat(l.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/g,""))}if(e.match(o)){var f=e.match(o).map((function(e){return e.replace("href=","").replace(/["']/g,"")}));n.css=n.css.concat(f),l="".concat(l.replace(/<link[\s\S]*?>/g,""))}l.match(s)&&(l=l.match(s)[1]);return{html:l,css:t,js:p,resources:n}}}}]);
//# sourceMappingURL=maplibre-gl-js-docs-example-offset-vanishing-point-with-padding-2a059edd6c39199430a0.chunk.js.map