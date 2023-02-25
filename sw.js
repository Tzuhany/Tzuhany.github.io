/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/01/23/myFirstPost/index.html","113d2a3dd82b78617223c08bf36e5162"],["/2023/01/30/Go数据结构/index.html","acfc6abc7be6709404e58f116b45d5a0"],["/2023/01/30/快排-归并-二分/index.html","9d2db044ab89c9bf7813d77b8b21f81b"],["/2023/02/09/DFS-BFS/index.html","b615707eea28dd3c0041fd4b65d11410"],["/2023/02/09/Trie树-并查集/index.html","1900754704862f04e19f03b702d049b8"],["/2023/02/09/哈希/index.html","1490517b4cd8dbb88d974601b0bd474a"],["/2023/02/09/堆/index.html","2dfd618eaceb849a274db5926b261236"],["/2023/02/09/怂/index.html","19023288387575e49aca31891eb4d211"],["/2023/02/09/树-图/index.html","58c413f1b2f0386268b7db430d3a3869"],["/2023/02/09/留言板/index.html","5eee1f369163c0c4dad43a02ba87aa97"],["/2023/02/09/链表-栈-队列/index.html","bbcd3dbc3778869e149948a73a1be013"],["/2023/02/09/高精度-前缀和-差分/index.html","f4a50df958437c89823d77baf9f44e81"],["/2023/02/10/01背包问题/index.html","3be444554937dd601c73dc5358346ddf"],["/2023/02/10/失败经历/index.html","a2bdd36a50c07e81905345726ed93bd9"],["/2023/02/11/分割链表/index.html","93cc257bddec603ca32297a01c7dcb0c"],["/2023/02/11/排序链表/index.html","a7a629de3de659f991261bdc42f9f72d"],["/2023/02/12/剑指offer30-包含min函数的栈/index.html","b10d5d955a7285160294a5eb453c9992"],["/2023/02/13/C-杂语（一）/index.html","abcf29447f7a132f51a8a4a5666de3c6"],["/2023/02/13/二叉树路径问题/index.html","fcb7df89978978daa972fc9818f7e8d0"],["/2023/02/13/八股文（C-语言部分）/index.html","5bb1de4e921965c6bc9907d7f82dae0b"],["/2023/02/20/回溯/index.html","38aecc8a64429f8eef26dac1af944d90"],["/2023/02/25/Shell/index.html","5aaa44af9b3a4a7e94cb9ebec75e6af2"],["/about/index.html","407d09fcac4d3259d0bdac7cbf966f1c"],["/archives/2023/01/index.html","88d762e80e796c1f42217072435ad290"],["/archives/2023/02/index.html","8d1782f642726f1a33e49e1feb7881d5"],["/archives/2023/02/page/2/index.html","8d1782f642726f1a33e49e1feb7881d5"],["/archives/2023/index.html","e05b789b7de0561cfd09ddc257244d85"],["/archives/2023/page/2/index.html","e05b789b7de0561cfd09ddc257244d85"],["/archives/2023/page/3/index.html","e05b789b7de0561cfd09ddc257244d85"],["/archives/index.html","c38ca27f7dff372408ac50d332de8904"],["/archives/page/2/index.html","c38ca27f7dff372408ac50d332de8904"],["/archives/page/3/index.html","c38ca27f7dff372408ac50d332de8904"],["/categories/C-杂语/index.html","ed9b4a677c0203a59efc061956a820af"],["/categories/Go基础复习/index.html","d09edd895eb04c10b06217ba81a4c6fd"],["/categories/Linux/index.html","2117d360db27f8f245123aa35c52561c"],["/categories/index.html","3f04c043dfe4b8d319c512b10c6ca58c"],["/categories/刷题日记/index.html","2f6de54dba68c0a722a4d1a883e674fd"],["/categories/基础算法复习/index.html","a1f7228f10cec23f8371ee98be4ff6b7"],["/categories/日记/index.html","77766fd07b3d48fdc94260d4318a181d"],["/categories/杂语/index.html","7f54325b94ed89022c2535eb6c358474"],["/categories/留言板/index.html","48efcf99fbac3363a7f0629ae6ac48cb"],["/categories/面试集锦/index.html","954fc30facfe1ef3179f050248a26602"],["/css/common/animated.css","f4a61883e957a3cc1d6257e45f52b190"],["/css/common/basic.css","de9976a4d44c23963282d69688463020"],["/css/common/code-block/code-block.css","37e75a5e1f82e86246f8da33e665f27d"],["/css/common/code-block/code-theme.css","6a1932de5e77259612691837ca132af8"],["/css/common/code-block/highlight.css","381d787398f3bcbdba79e9153e46def5"],["/css/common/keep-theme.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/common/markdown.css","9caaad5f8e9369d618f49fb689838650"],["/css/common/variables.css","998fbc57562875aea36a8a255e57c372"],["/css/layout/archive-content.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/layout/article-content.css","ac030c2ea12610e45ab58def5d4d1dfd"],["/css/layout/category-content.css","635a6c53af5d9c51559ea8962ef23301"],["/css/layout/category-list.css","3b4c038ae710a027ba239aa4e9a505ea"],["/css/layout/home-content.css","677cfc63f63e4e08ea754227fd15d934"],["/css/layout/page.css","546ee15212b2114bf130d938d9f7d6d6"],["/css/layout/tag-content.css","579054ee16654b9f28e54aec3a728d73"],["/css/style.css","8a566045227c9575254ee545e9426cc2"],["/font/css/brands.min.css","bffe02773aade3c41e4362a10ef5bc23"],["/font/css/fontawesome.min.css","d318f674308800c356f650173502cf6d"],["/font/css/regular.min.css","dd643a612d14573859f0d310a06cc638"],["/font/css/solid.min.css","4abb638a78928d84ba5a3f0f220e7feb"],["/font/webfonts/fa-brands-400.ttf","9d2bbde416583cfa5cb30c995b41f732"],["/font/webfonts/fa-brands-400.woff2","f4bdd85a576812f553ec3cfea8b1a2b5"],["/font/webfonts/fa-regular-400.ttf","f417567703b4fcfbf750952bd2db8a44"],["/font/webfonts/fa-regular-400.woff2","83e2813a8fe0229d916c5b63fa9eab5e"],["/font/webfonts/fa-solid-900.ttf","dd5e5b90ca8ee986b13b04310f9aef9d"],["/font/webfonts/fa-solid-900.woff2","3e50e269ee627bb2279f91d18c085167"],["/font/webfonts/fa-v4compatibility.ttf","d4a14b7a210bc8b5c2fe661a18e7e8db"],["/font/webfonts/fa-v4compatibility.woff2","1f9db9971c2d69b78e7425a012a5e486"],["/images/avatar.svg","97722a7e825fbe4b82629c20b54a62e4"],["/images/bg.svg","2cfdbb338a1d44d700b493d7ecbe65d3"],["/images/deploy-provider/aliyun.png","76a0420ed71a3fe7da06e024a0e7d893"],["/images/deploy-provider/gitee.png","1a1adc2570010a96efc5eea48e851c4d"],["/images/deploy-provider/github.png","9ff51e3e791b92646e64fea4097e6362"],["/images/deploy-provider/netlify.png","eb9e367355615cdeb909dd535bfc2202"],["/images/deploy-provider/tencent_cloud.png","9693e72d12f581715dffcaf5fe7be3f5"],["/images/deploy-provider/upyun.png","425d4a9c861d892e8a8e0defe38f840d"],["/images/deploy-provider/vercel.png","ada1daa9ef523662dea0cab3f6276762"],["/images/logo.svg","e2e718bdc4c411aa8712d931c620cca8"],["/index.html","28748acffd4dd3fba2ba6444769ad7e1"],["/js/back2top.js","139ceb05396f1aa211941fa9fd44937c"],["/js/code-block.js","63706df46d93b3c5412009e1c60b1e99"],["/js/dark-light-toggle.js","f21816b0720cf183847c55f251302ba1"],["/js/header-shrink.js","0418df63d78de6f9c9b5e4f3a3efda57"],["/js/lazyload.js","f1e4b68ec3901ea8fe09b3ea38fb2ddb"],["/js/libs/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/js/libs/pjax.min.js","cdf1c08dca678e919d1a3f3cc891277d"],["/js/local-search.js","0ce0b1d637a4fffd5835b231075263fc"],["/js/main.js","caf924d076d815b65f52b1b5997add22"],["/js/post-helper.js","34bd3800c9ae253841bf580ddd4c002f"],["/js/toc.js","037238356c263902486a082bd24f403d"],["/js/utils.js","cbd27e85693cb8c2b3c25c8b75860264"],["/page/2/index.html","bb2506e746ba3a5ffbaa1ef69b3bbe6f"],["/page/3/index.html","ad0a1c0392d4934d2336891f2f5bb6bd"],["/sw-register.js","eba92078c4de8e33801c031d0c9295a3"],["/tags/C/index.html","4ffacadbb4de6b0a423f031621a50b8c"],["/tags/Go/index.html","5470344dd0c2b1566f4b69b5fe002b21"],["/tags/Linux/index.html","596350cf36033e373fc934563b1e9b51"],["/tags/index.html","3217697d6dcd02eb999c270f24b253c9"],["/tags/八股文/index.html","f7cab1bfa3b7891cbff12b3d4005a78d"],["/tags/刷题日记/index.html","389c72e75ffa2be5ef54ef45e76beb13"],["/tags/杂语/index.html","24cac2e4c61b2538d9076f528ba7050e"],["/tags/算法/index.html","2e54cfdf47e59070e94be8f724a0eb76"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
