"use strict";var precacheConfig=[["/portoflio/index.html","a36140ef0ba248b4027afdeb83760b42"],["/portoflio/static/css/main.cb1619e3.css","00bb2c4513acbf6e1b8896c2c36e885c"],["/portoflio/static/js/main.24fcd900.js","ea2ecefe293f1c67ab2a7a40c03884ea"],["/portoflio/static/media/BGFB.2238c2aa.jpg","2238c2aaa287c68afc08d0e3ba617951"],["/portoflio/static/media/Eu2.52b6d4a8.jpg","52b6d4a8b815b0d0c63c1f19a5190fed"],["/portoflio/static/media/bilheteriapp.b21e6883.png","b21e688396390c35022d94d26da4fcdc"],["/portoflio/static/media/caetano.8696fbd8.png","8696fbd83feeac63f0ca224ecd3a07be"],["/portoflio/static/media/cleansea.6d52fcad.png","6d52fcadcb27d872e802d4e294b8b7d6"],["/portoflio/static/media/concir.fd075ffe.png","fd075ffe1c8afb4ebac8750f2e16d8f3"],["/portoflio/static/media/congresso.44fac49c.png","44fac49c89f6165baf517635d5af2b7a"],["/portoflio/static/media/pks.b203f3ce.png","b203f3ce95822a0a58af526e787d6d08"],["/portoflio/static/media/portfolio.0c281a44.png","0c281a44f12317df71d6e5e4ef40470c"],["/portoflio/static/media/udacity.e6f46ae9.png","e6f46ae9d4ea295de00f58e197253303"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/portoflio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});