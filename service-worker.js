"use strict";var precacheConfig=[["/portfolio_2018/index.html","74a4e8caedbdd200ef747240d9cfba22"],["/portfolio_2018/static/css/main.b84b2b66.css","d0a89c39b975a62693f02d36a42e2586"],["/portfolio_2018/static/js/main.59010a9a.js","c878e912a94940fad7dcfb335ba50e6d"],["/portfolio_2018/static/media/cubiscan_2.105a4f39.png","105a4f3911649e2a3a81315585e00929"],["/portfolio_2018/static/media/cubiscan_3.8637f4a2.png","8637f4a2fd62d26c8bdc3541ed9edb22"],["/portfolio_2018/static/media/daily_featured.ee80cc05.png","ee80cc05438ac92fa4f4bc999a695cfe"],["/portfolio_2018/static/media/daily_finished.39733fa0.png","39733fa0535ffe97116d994fdaf02857"],["/portfolio_2018/static/media/daily_home.d3d5b577.png","d3d5b5777656898b27189621474cb82d"],["/portfolio_2018/static/media/daily_tasks.6fc40f34.png","6fc40f34d21ce42eafcce455381a4d6d"],["/portfolio_2018/static/media/featured_cubiscan.b456c2e4.png","b456c2e454ba101eb7a3fdb90a050d90"],["/portfolio_2018/static/media/ocean.032959bf.png","032959bf55641437dcd8569c0336d41f"],["/portfolio_2018/static/media/omen_dash-min.fa5a7540.png","fa5a754030800448dfd4920da99f0afb"],["/portfolio_2018/static/media/omen_desktop_4day.b9927468.png","b99274688a52a6069d64c531bf83d222"],["/portfolio_2018/static/media/omen_landing-min.fdadaa70.png","fdadaa700dd06135f9ca2a342f06cad5"],["/portfolio_2018/static/media/performant_1.ad08fb86.png","ad08fb863e8d08b12ef7827e563e7ecb"],["/portfolio_2018/static/media/performant_2.9b78b104.png","9b78b1049f0dd46901a3506e29d50c19"],["/portfolio_2018/static/media/performant_3.8b042f19.png","8b042f19ce57527047d01c0f15a62908"],["/portfolio_2018/static/media/performant_featured.fd2bae5f.png","fd2bae5f27bb88bb94beb86b4741fe73"],["/portfolio_2018/static/media/strat_1.49065a0f.png","49065a0fdf7a8334f09aa064c12432cb"],["/portfolio_2018/static/media/strat_2.d86f9a68.png","d86f9a6878d48b54619abe7a16015299"],["/portfolio_2018/static/media/strat_3.661f02ea.png","661f02ea0b62f2a54359dd5c6e5dd6e2"],["/portfolio_2018/static/media/strat_featured.4463d34f.png","4463d34f036446c5b437d421e4480319"],["/portfolio_2018/static/media/verti_1.3f13e885.png","3f13e885074cf941a31c4b6e04e22a58"],["/portfolio_2018/static/media/verti_2.d20b8b2b.png","d20b8b2bd4a90c1e96344db3a57d4988"],["/portfolio_2018/static/media/verti_3.6dd74864.png","6dd7486421ccce3c138e79713f0efdc9"],["/portfolio_2018/static/media/verti_featured.729225cd.png","729225cdace5eb34ccd3798b3618c40e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/portfolio_2018/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});