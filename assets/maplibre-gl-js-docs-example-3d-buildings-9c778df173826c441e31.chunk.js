(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{KYrD:function(t,e,n){"use strict";n.r(e),e.default="<div id=\"map\"></div>\n<script>\n    var map = new maplibregl.Map({\n        style:\n            'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',\n        center: [-74.0066, 40.7135],\n        zoom: 15.5,\n        pitch: 45,\n        bearing: -17.6,\n        container: 'map',\n        antialias: true\n    });\n\n    // The 'building' layer in the streets vector source contains building-height\n    // data from OpenStreetMap.\n    map.on('load', function () {\n        // Insert the layer beneath any symbol layer.\n        var layers = map.getStyle().layers;\n\n        var labelLayerId;\n        for (var i = 0; i < layers.length; i++) {\n            if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {\n                labelLayerId = layers[i].id;\n                break;\n            }\n        }\n\n        map.addLayer(\n            {\n                'id': '3d-buildings',\n                'source': 'composite',\n                'source-layer': 'building',\n                'filter': ['==', 'extrude', 'true'],\n                'type': 'fill-extrusion',\n                'minzoom': 15,\n                'paint': {\n                    'fill-extrusion-color': '#aaa',\n\n                    // use an 'interpolate' expression to add a smooth transition effect to the\n                    // buildings as the user zooms in\n                    'fill-extrusion-height': [\n                        'interpolate',\n                        ['linear'],\n                        ['zoom'],\n                        15,\n                        0,\n                        15.05,\n                        ['get', 'height']\n                    ],\n                    'fill-extrusion-base': [\n                        'interpolate',\n                        ['linear'],\n                        ['zoom'],\n                        15,\n                        0,\n                        15.05,\n                        ['get', 'min_height']\n                    ],\n                    'fill-extrusion-opacity': 0.6\n                }\n            },\n            labelLayerId\n        );\n    });\n<\/script>\n"},"Lph/":function(t,e,n){var r=n("ME6n");r=r.default||r,t.exports={component:r,props:{frontMatter:{title:"Display buildings in 3D",description:"Use extrusions to display buildings' height in 3D.",topics:["Layers"],thumbnail:"3d-buildings",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["Mapbox GL JS","Mapbox Streets tileset"],prependJs:["import Example from '../../components/example';","import html from './3d-buildings.html';"]}}}},M4Oy:function(t,e,n){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=((r=n("fG8n"))&&r.__esModule?r:{default:r}).default;e.default=o},ME6n:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=s(n("q1tI")),i=(n("yr+R"),n("cQZ0"),s(n("uLm5"))),a=s(n("KYrD")),c=s(n("1wO5"));function s(t){return t&&t.__esModule?t:{default:t}}function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=m(t);if(e){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var b={title:"Display buildings in 3D",description:"Use extrusions to display buildings' height in 3D.",topics:["Layers"],thumbnail:"3d-buildings",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["Mapbox GL JS","Mapbox Streets tileset"],headings:[]},h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(d,t);var e,n,r,s=y(d);function d(){return u(this,d),s.apply(this,arguments)}return e=d,(n=[{key:"render",value:function(){var t=this.props;return o.default.createElement(c.default,l({},t,{frontMatter:b}),o.default.createElement("div",null,o.default.createElement("p",null,"Use ",o.default.createElement("a",{href:"https://maplibre.org/maplibre-gl-js-docs/style-spec/layers/#fill-extrusion"},"extrusions")," to display buildings' height in 3D."),o.default.createElement(i.default,l({html:a.default},this.props))))}}])&&p(e.prototype,n),r&&p(e,r),d}(o.default.PureComponent);e.default=h},mOgX:function(t,e,n){"use strict";n.r(e);var r=n("f4rJ");n("yr+R");function o(t,e){return e&&e.local,"https://unpkg.com/maplibre-gl@".concat(r.a,"/dist/maplibre-gl.").concat(t)}e.default={js:function(t){return o("js",t)},css:function(t){return o("css",t)}}},uLm5:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return P}));var r=n("q1tI"),o=n.n(r),i=(n("17x9"),n("mOgX")),a=n("v8ZZ"),c=n.n(a),s=n("irdr"),l=n.n(s),u=n("M4Oy"),p=n.n(u),f=n("umIL"),y=n("wdKx");function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){x(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=O(t);if(e){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(t,e){return!e||"object"!==d(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var j='<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />',S="\tbody { margin: 0; padding: 0; }\n\t#map { position: absolute; top: 0; bottom: 0; width: 100%; }",P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(s,t);var e,n,r,a=w(s);function s(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(e=a.call(this,t)).state={unsupported:!1},e}return e=s,(n=[{key:"displayHTML",value:function(t){return'<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8" />\n<title>'.concat(this.props.frontMatter.title,"</title>\n").concat(j,'\n<script src="').concat(i.default.js(),'"><\/script>\n<link href="').concat(i.default.css(),'" rel="stylesheet" />\n<style>\n').concat(S,"\n</style>\n</head>\n<body>\n").concat(t,"\n</body>\n</html>")}},{key:"renderHTML",value:function(t){return"<!DOCTYPE html>\n<html>\n<head>\n<meta charset=utf-8 />\n<title>".concat(this.props.frontMatter.title,"</title>\n").concat(j,"\n<script src='https://js.sentry-cdn.com/b4e18cb1943f46289f67ca6a771bd341.min.js' crossorigin=\"anonymous\"><\/script>\n<script src='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-instrumentile/v3.0.0/mapbox-gl-instrumentile.js' crossorigin=\"anonymous\"><\/script>\n\n<script src='").concat(i.default.js({local:!0}),"'><\/script>\n<link href='").concat(i.default.css({local:!0}),"' rel='stylesheet' />\n<style>\n    ").concat(S,"\n</style>\n</head>\n<body>\n").concat(t,"\n</body>\n<script>\nif (window.map instanceof mapboxgl.Map) {\n    var i = new instrumentile(map, {\n        token: '").concat(MapboxPageShell.getMapboxAccessToken(),"',\n        api: 'https://api.tiles.mapbox.com',\n        source: 'docs-examples'\n    });\n}\n<\/script>\n</html>")}},{key:"renderSnippet",value:function(){var t=this.props,e=t.html,n=t.location,r=this.displayHTML(e),i=y.extractor(r);return o.a.createElement("div",{className:"bg-white"},o.a.createElement("div",{id:"code",className:"relative"},o.a.createElement(l.a,{code:this.displayHTML(e),highlighter:function(){return f.highlightHtml},edit:{frontMatter:b(b({},this.props.frontMatter),{},{pathname:n.pathname}),head:j,js:i.js,html:i.html,css:i.css,resources:i.resources}})))}},{key:"render",value:function(){var t=this,e=this.props,n=e.frontMatter,r=e.height;return o.a.createElement("div",{className:"prose"},this.state.unsupported&&o.a.createElement(p.a,{title:"Mapbox GL unsupported",theme:"warning"},"Mapbox GL requires"," ",o.a.createElement("a",{className:"link",href:"https://caniuse.com/#feat=webgl"},"WebGL support"),". Please check that you are using a supported browser and that"," ",o.a.createElement("a",{className:"link",href:"https://get.webgl.org/"},"WebGL is enabled"),"."),c()()&&o.a.createElement("iframe",{id:"demo",style:{height:r},className:"w-full mt18",allowFullScreen:!0,mozallowfullscreen:"true",webkitallowfullscreen:"true",ref:function(e){t.iframe=e},title:"".concat(n.title," example")}),this.props.displaySnippet&&this.renderSnippet())}},{key:"componentDidMount",value:function(){if(c()()||this.setState({unsupported:!0}),this.iframe){var t=this.iframe.contentWindow.document;t.open(),t.write(this.renderHTML(this.props.html)),t.close()}}}])&&h(e.prototype,n),r&&h(e,r),s}(o.a.Component);x(P,"defaultProps",{displaySnippet:!0,height:400})},v8ZZ:function(t,e,n){"use strict";function r(t){return!o(t)}function o(t){return"undefined"==typeof window||"undefined"==typeof document?"not a browser":Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray?Function.prototype&&Function.prototype.bind?Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions?"JSON"in window&&"parse"in JSON&&"stringify"in JSON?function(){if(!("Worker"in window&&"Blob"in window&&"URL"in window))return!1;var t,e,n=new Blob([""],{type:"text/javascript"}),r=URL.createObjectURL(n);try{e=new Worker(r),t=!0}catch(e){t=!1}e&&e.terminate();return URL.revokeObjectURL(r),t}()?"Uint8ClampedArray"in window?ArrayBuffer.isView?function(){const t=document.createElement("canvas");t.width=t.height=1;const e=t.getContext("2d");if(!e)return!1;const n=e.getImageData(0,0,1,1);return n&&n.width===t.width}()?function(t){void 0===i[t]&&(i[t]=function(t){const e=function(t){var e=document.createElement("canvas"),n=Object.create(r.webGLContextAttributes);return n.failIfMajorPerformanceCaveat=t,e.probablySupportsContext?e.probablySupportsContext("webgl",n)||e.probablySupportsContext("experimental-webgl",n):e.supportsContext?e.supportsContext("webgl",n)||e.supportsContext("experimental-webgl",n):e.getContext("webgl",n)||e.getContext("experimental-webgl",n)}(t);if(!e)return!1;const n=e.createShader(e.VERTEX_SHADER);if(!n||e.isContextLost())return!1;return e.shaderSource(n,"void main() {}"),e.compileShader(n),!0===e.getShaderParameter(n,e.COMPILE_STATUS)}(t));return i[t]}(t&&t.failIfMajorPerformanceCaveat)?void 0:"insufficient WebGL support":"insufficient Canvas/getImageData support":"insufficient ArrayBuffer support":"insufficient Uint8ClampedArray support":"insufficient worker support":"insufficient JSON support":"insufficient Object support":"insufficient Function support":"insufficent Array support"}t.exports?t.exports=r:window&&(window.mapboxgl=window.mapboxgl||{},window.mapboxgl.supported=r,window.mapboxgl.notSupportedReason=o);var i={};r.webGLContextAttributes={antialias:!1,alpha:!0,stencil:!0,depth:!0}},wdKx:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.extractor=function(t){var e="",n={js:[],css:[]},r=/src=("|')([^']*?)("|')/g,o=/href=("|')([^']*?)("|')/g,i=/<script>((.|\n)*)<\/script>/,a=/<style\b[^>]*>([\s\S]*?)<\/style>/g,c=/<body[\s\S]*?>((.|\n)*)<\/body>/,s=t.match(a),l="".concat(t.replace(i,"")),u=t.match(i)[1];s&&(s.forEach((function(t){e+=t.replace(/<[^>]*>/g,"")})),l="".concat(l.replace(a,"")));if(t.match(r)){var p=t.match(r).map((function(t){return t.replace("src=","").replace(/["']/g,"")}));n.js=n.js.concat(p),l="".concat(l.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/g,""))}if(t.match(o)){var f=t.match(o).map((function(t){return t.replace("href=","").replace(/["']/g,"")}));n.css=n.css.concat(f),l="".concat(l.replace(/<link[\s\S]*?>/g,""))}l.match(c)&&(l=l.match(c)[1]);return{html:l,css:e,js:u,resources:n}}}}]);
//# sourceMappingURL=maplibre-gl-js-docs-example-3d-buildings-9c778df173826c441e31.chunk.js.map