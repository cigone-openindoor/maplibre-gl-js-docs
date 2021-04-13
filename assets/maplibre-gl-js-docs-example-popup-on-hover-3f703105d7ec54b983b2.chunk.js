(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{E60i:function(e,t,n){"use strict";n.r(t),t.default="<style>\n    .mapboxgl-popup {\n        max-width: 400px;\n        font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;\n    }\n</style>\n<div id=\"map\"></div>\n<script>\n    var map = new maplibregl.Map({\n        container: 'map',\n        style:\n            'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',\n        center: [-77.04, 38.907],\n        zoom: 11.15\n    });\n\n    map.on('load', function () {\n        map.loadImage(\n            'https://maplibre.org/maplibre-gl-js-docs/assets/custom_marker.png',\n            // Add an image to use as a custom marker\n            function (error, image) {\n                if (error) throw error;\n                map.addImage('custom-marker', image);\n\n                map.addSource('places', {\n                    'type': 'geojson',\n                    'data': {\n                        'type': 'FeatureCollection',\n                        'features': [\n                            {\n                                'type': 'Feature',\n                                'properties': {\n                                    'description':\n                                        '<strong>Make it Mount Pleasant</strong><p>Make it Mount Pleasant is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>'\n                                },\n                                'geometry': {\n                                    'type': 'Point',\n                                    'coordinates': [-77.038659, 38.931567]\n                                }\n                            },\n                            {\n                                'type': 'Feature',\n                                'properties': {\n                                    'description':\n                                        '<strong>Mad Men Season Five Finale Watch Party</strong><p>Head to Lounge 201 (201 Massachusetts Avenue NE) Sunday for a Mad Men Season Five Finale Watch Party, complete with 60s costume contest, Mad Men trivia, and retro food and drink. 8:00-11:00 p.m. $10 general admission, $20 admission and two hour open bar.</p>'\n                                },\n                                'geometry': {\n                                    'type': 'Point',\n                                    'coordinates': [-77.003168, 38.894651]\n                                }\n                            },\n                            {\n                                'type': 'Feature',\n                                'properties': {\n                                    'description':\n                                        '<strong>Big Backyard Beach Bash and Wine Fest</strong><p>EatBar (2761 Washington Boulevard Arlington VA) is throwing a Big Backyard Beach Bash and Wine Fest on Saturday, serving up conch fritters, fish tacos and crab sliders, and Red Apron hot dogs. 12:00-3:00 p.m. $25.</p>'\n                                },\n                                'geometry': {\n                                    'type': 'Point',\n                                    'coordinates': [-77.090372, 38.881189]\n                                }\n                            },\n                            {\n                                'type': 'Feature',\n                                'properties': {\n                                    'description':\n                                        '<strong>Ballston Arts & Crafts Market</strong><p>The Ballston Arts & Crafts Market sets up shop next to the Ballston metro this Saturday for the first of five dates this summer. Nearly 35 artists and crafters will be on hand selling their wares. 10:00-4:00 p.m.</p>'\n                                },\n                                'geometry': {\n                                    'type': 'Point',\n                                    'coordinates': [-77.111561, 38.882342]\n                                }\n                            },\n                            {\n                                'type': 'Feature',\n                                'properties': {\n                                    'description':\n                                        \"<strong>Seersucker Bike Ride and Social</strong><p>Feeling dandy? Get fancy, grab your bike, and take part in this year's Seersucker Social bike ride from Dandies and Quaintrelles. After the ride enjoy a lawn party at Hillwood with jazz, cocktails, paper hat-making, and more. 11:00-7:00 p.m.</p>\"\n                                },\n                                'geometry': {\n                                    'type': 'Point',\n                                    'coordinates': [-77.052477, 38.943951]\n                                }\n                            },\n                            {\n                                'type': 'Feature',\n                                'properties': {\n                                    'description':\n                                        '<strong>Capital Pride Parade</strong><p>The annual Capital Pride Parade makes its way through Dupont this Saturday. 4:30 p.m. Free.</p>'\n                                },\n                                'geometry': {\n                                    'type': 'Point',\n                                    'coordinates': [-77.043444, 38.909664]\n                                }\n                            },\n                            {\n                                'type': 'Feature',\n                                'properties': {\n                                    'description':\n                                        '<strong>Muhsinah</strong><p>Jazz-influenced hip hop artist Muhsinah plays the Black Cat (1811 14th Street NW) tonight with Exit Clov and Gods’illa. 9:00 p.m. $12.</p>'\n                                },\n                                'geometry': {\n                                    'type': 'Point',\n                                    'coordinates': [-77.031706, 38.914581]\n                                }\n                            },\n                            {\n                                'type': 'Feature',\n                                'properties': {\n                                    'description':\n                                        \"<strong>A Little Night Music</strong><p>The Arlington Players' production of Stephen Sondheim's <em>A Little Night Music</em> comes to the Kogod Cradle at The Mead Center for American Theater (1101 6th Street SW) this weekend and next. 8:00 p.m.</p>\"\n                                },\n                                'geometry': {\n                                    'type': 'Point',\n                                    'coordinates': [-77.020945, 38.878241]\n                                }\n                            },\n                            {\n                                'type': 'Feature',\n                                'properties': {\n                                    'description':\n                                        '<strong>Truckeroo</strong><p>Truckeroo brings dozens of food trucks, live music, and games to half and M Street SE (across from Navy Yard Metro Station) today from 11:00 a.m. to 11:00 p.m.</p>'\n                                },\n                                'geometry': {\n                                    'type': 'Point',\n                                    'coordinates': [-77.007481, 38.876516]\n                                }\n                            }\n                        ]\n                    }\n                });\n\n                // Add a layer showing the places.\n                map.addLayer({\n                    'id': 'places',\n                    'type': 'symbol',\n                    'source': 'places',\n                    'layout': {\n                        'icon-image': 'custom-marker',\n                        'icon-allow-overlap': true\n                    }\n                });\n            }\n        );\n\n        // Create a popup, but don't add it to the map yet.\n        var popup = new maplibregl.Popup({\n            closeButton: false,\n            closeOnClick: false\n        });\n\n        map.on('mouseenter', 'places', function (e) {\n            // Change the cursor style as a UI indicator.\n            map.getCanvas().style.cursor = 'pointer';\n\n            var coordinates = e.features[0].geometry.coordinates.slice();\n            var description = e.features[0].properties.description;\n\n            // Ensure that if the map is zoomed out such that multiple\n            // copies of the feature are visible, the popup appears\n            // over the copy being pointed to.\n            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {\n                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;\n            }\n\n            // Populate the popup and set its coordinates\n            // based on the feature found.\n            popup.setLngLat(coordinates).setHTML(description).addTo(map);\n        });\n\n        map.on('mouseleave', 'places', function () {\n            map.getCanvas().style.cursor = '';\n            popup.remove();\n        });\n    });\n<\/script>\n"},GNcr:function(e,t,n){var r=n("R35c");r=r.default||r,e.exports={component:r,props:{frontMatter:{title:"Display a popup on hover",description:"When a user hovers over a custom marker, show a popup containing more information.",topics:["Controls and overlays"],thumbnail:"popup-on-hover",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["Mapbox GL JS"],prependJs:["import Example from '../../components/example';","import html from './popup-on-hover.html';"]}}}},M4Oy:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=((r=n("fG8n"))&&r.__esModule?r:{default:r}).default;t.default=o},R35c:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(n("q1tI")),a=(n("yr+R"),n("cQZ0"),c(n("uLm5"))),i=c(n("E60i")),s=c(n("1wO5"));function c(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h={title:"Display a popup on hover",description:"When a user hovers over a custom marker, show a popup containing more information.",topics:["Controls and overlays"],thumbnail:"popup-on-hover",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["Mapbox GL JS"],headings:[]},b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(m,e);var t,n,r,c=d(m);function m(){return u(this,m),c.apply(this,arguments)}return t=m,(n=[{key:"render",value:function(){var e=this.props;return o.default.createElement(s.default,p({},e,{frontMatter:h}),o.default.createElement("div",null,o.default.createElement("p",null,"When a user hovers over a custom marker, show a ",o.default.createElement("a",{href:"https://maplibre.org/maplibre-gl-js-docs/api/markers/#popup"},o.default.createElement("code",null,"Popup"))," containing more information."),o.default.createElement(a.default,p({html:i.default},this.props))))}}])&&l(t.prototype,n),r&&l(t,r),m}(o.default.PureComponent);t.default=b},mOgX:function(e,t,n){"use strict";n.r(t);var r=n("f4rJ");n("yr+R");function o(e,t){return t&&t.local,"https://unpkg.com/maplibre-gl@".concat(r.a,"/dist/maplibre-gl.").concat(e)}t.default={js:function(e){return o("js",e)},css:function(e){return o("css",e)}}},uLm5:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var r=n("q1tI"),o=n.n(r),a=(n("17x9"),n("mOgX")),i=n("v8ZZ"),s=n.n(i),c=n("irdr"),p=n.n(c),u=n("M4Oy"),l=n.n(u),f=n("umIL"),d=n("wdKx");function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w(this,n)}}function w(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S='<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />',x="\tbody { margin: 0; padding: 0; }\n\t#map { position: absolute; top: 0; bottom: 0; width: 100%; }",k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(c,e);var t,n,r,i=v(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e)).state={unsupported:!1},t}return t=c,(n=[{key:"displayHTML",value:function(e){return'<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8" />\n<title>'.concat(this.props.frontMatter.title,"</title>\n").concat(S,'\n<script src="').concat(a.default.js(),'"><\/script>\n<link href="').concat(a.default.css(),'" rel="stylesheet" />\n<style>\n').concat(x,"\n</style>\n</head>\n<body>\n").concat(e,"\n</body>\n</html>")}},{key:"renderHTML",value:function(e){return"<!DOCTYPE html>\n<html>\n<head>\n<meta charset=utf-8 />\n<title>".concat(this.props.frontMatter.title,"</title>\n").concat(S,"\n<script src='https://js.sentry-cdn.com/b4e18cb1943f46289f67ca6a771bd341.min.js' crossorigin=\"anonymous\"><\/script>\n<script src='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-instrumentile/v3.0.0/mapbox-gl-instrumentile.js' crossorigin=\"anonymous\"><\/script>\n\n<script src='").concat(a.default.js({local:!0}),"'><\/script>\n<link href='").concat(a.default.css({local:!0}),"' rel='stylesheet' />\n<style>\n    ").concat(x,"\n</style>\n</head>\n<body>\n").concat(e,"\n</body>\n<script>\nif (window.map instanceof mapboxgl.Map) {\n    var i = new instrumentile(map, {\n        token: '").concat(MapboxPageShell.getMapboxAccessToken(),"',\n        api: 'https://api.tiles.mapbox.com',\n        source: 'docs-examples'\n    });\n}\n<\/script>\n</html>")}},{key:"renderSnippet",value:function(){var e=this.props,t=e.html,n=e.location,r=this.displayHTML(t),a=d.extractor(r);return o.a.createElement("div",{className:"bg-white"},o.a.createElement("div",{id:"code",className:"relative"},o.a.createElement(p.a,{code:this.displayHTML(t),highlighter:function(){return f.highlightHtml},edit:{frontMatter:h(h({},this.props.frontMatter),{},{pathname:n.pathname}),head:S,js:a.js,html:a.html,css:a.css,resources:a.resources}})))}},{key:"render",value:function(){var e=this,t=this.props,n=t.frontMatter,r=t.height;return o.a.createElement("div",{className:"prose"},this.state.unsupported&&o.a.createElement(l.a,{title:"Mapbox GL unsupported",theme:"warning"},"Mapbox GL requires"," ",o.a.createElement("a",{className:"link",href:"https://caniuse.com/#feat=webgl"},"WebGL support"),". Please check that you are using a supported browser and that"," ",o.a.createElement("a",{className:"link",href:"https://get.webgl.org/"},"WebGL is enabled"),"."),s()()&&o.a.createElement("iframe",{id:"demo",style:{height:r},className:"w-full mt18",allowFullScreen:!0,mozallowfullscreen:"true",webkitallowfullscreen:"true",ref:function(t){e.iframe=t},title:"".concat(n.title," example")}),this.props.displaySnippet&&this.renderSnippet())}},{key:"componentDidMount",value:function(){if(s()()||this.setState({unsupported:!0}),this.iframe){var e=this.iframe.contentWindow.document;e.open(),e.write(this.renderHTML(this.props.html)),e.close()}}}])&&b(t.prototype,n),r&&b(t,r),c}(o.a.Component);j(k,"defaultProps",{displaySnippet:!0,height:400})},v8ZZ:function(e,t,n){"use strict";function r(e){return!o(e)}function o(e){return"undefined"==typeof window||"undefined"==typeof document?"not a browser":Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray?Function.prototype&&Function.prototype.bind?Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions?"JSON"in window&&"parse"in JSON&&"stringify"in JSON?function(){if(!("Worker"in window&&"Blob"in window&&"URL"in window))return!1;var e,t,n=new Blob([""],{type:"text/javascript"}),r=URL.createObjectURL(n);try{t=new Worker(r),e=!0}catch(t){e=!1}t&&t.terminate();return URL.revokeObjectURL(r),e}()?"Uint8ClampedArray"in window?ArrayBuffer.isView?function(){const e=document.createElement("canvas");e.width=e.height=1;const t=e.getContext("2d");if(!t)return!1;const n=t.getImageData(0,0,1,1);return n&&n.width===e.width}()?function(e){void 0===a[e]&&(a[e]=function(e){const t=function(e){var t=document.createElement("canvas"),n=Object.create(r.webGLContextAttributes);return n.failIfMajorPerformanceCaveat=e,t.probablySupportsContext?t.probablySupportsContext("webgl",n)||t.probablySupportsContext("experimental-webgl",n):t.supportsContext?t.supportsContext("webgl",n)||t.supportsContext("experimental-webgl",n):t.getContext("webgl",n)||t.getContext("experimental-webgl",n)}(e);if(!t)return!1;const n=t.createShader(t.VERTEX_SHADER);if(!n||t.isContextLost())return!1;return t.shaderSource(n,"void main() {}"),t.compileShader(n),!0===t.getShaderParameter(n,t.COMPILE_STATUS)}(e));return a[e]}(e&&e.failIfMajorPerformanceCaveat)?void 0:"insufficient WebGL support":"insufficient Canvas/getImageData support":"insufficient ArrayBuffer support":"insufficient Uint8ClampedArray support":"insufficient worker support":"insufficient JSON support":"insufficient Object support":"insufficient Function support":"insufficent Array support"}e.exports?e.exports=r:window&&(window.mapboxgl=window.mapboxgl||{},window.mapboxgl.supported=r,window.mapboxgl.notSupportedReason=o);var a={};r.webGLContextAttributes={antialias:!1,alpha:!0,stencil:!0,depth:!0}},wdKx:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extractor=function(e){var t="",n={js:[],css:[]},r=/src=("|')([^']*?)("|')/g,o=/href=("|')([^']*?)("|')/g,a=/<script>((.|\n)*)<\/script>/,i=/<style\b[^>]*>([\s\S]*?)<\/style>/g,s=/<body[\s\S]*?>((.|\n)*)<\/body>/,c=e.match(i),p="".concat(e.replace(a,"")),u=e.match(a)[1];c&&(c.forEach((function(e){t+=e.replace(/<[^>]*>/g,"")})),p="".concat(p.replace(i,"")));if(e.match(r)){var l=e.match(r).map((function(e){return e.replace("src=","").replace(/["']/g,"")}));n.js=n.js.concat(l),p="".concat(p.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/g,""))}if(e.match(o)){var f=e.match(o).map((function(e){return e.replace("href=","").replace(/["']/g,"")}));n.css=n.css.concat(f),p="".concat(p.replace(/<link[\s\S]*?>/g,""))}p.match(s)&&(p=p.match(s)[1]);return{html:p,css:t,js:u,resources:n}}}}]);
//# sourceMappingURL=maplibre-gl-js-docs-example-popup-on-hover-3f703105d7ec54b983b2.chunk.js.map