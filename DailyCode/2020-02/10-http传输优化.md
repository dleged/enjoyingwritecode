# http传输优化
1. 合并http请求；
2. 使用dns-prefetch预加载<link rel="dns-prefetch" href="//https://developer.mozilla.org/.com">,跳转到https://developer.mozilla.org/就无需在解析域名了；
3. 使用prefetch,preload加载静态文件，会在浏览器空闲的时候去加载资源；
4. 使用游标的方式传递接口返回；
5. 使用http缓存;

>缓存
```
 1.如果请求强缓存(expires/catch-control)有效，不会向服务器发起请求；
 2.若无强缓存或强缓存过期，会检查协商缓存(last-midified/If-Modified-Since/etag)，回向服务器发送请求，检查缓存是否过期
 3.共同点如果命中缓存，服务器都不会返回资源；
 4.不同点强缓存不会对服务器发送请求，但是协商缓存会；
 5.当协商缓存也没命中时，服务器就会将资源发送回客户端。
 6.当 ctrl+f5 强制刷新网页时，直接从服务器加载，跳过强缓存和协商缓存；
 7.当 f5 刷新网页时，跳过强缓存，但是会检查协商缓存；
```
