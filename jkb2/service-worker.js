importScripts("precache-manifest.2bd9b0645167cd6ec9ca9592e805b72e.js", "workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});
/* ========================================
 *  company : Dilusense
 *   author : Kuangch
 *     date : 2019/8/22
 * ======================================== */

// set the prefix and suffix of our sw's name
workbox.core.setCacheNameDetails({
    prefix: '3d-face',
    suffix: 'v1.0.0',
});
// have our sw update and control a web page as soon as possible.
workbox.core.skipWaiting();
workbox.core.clientsClaim();

// workbox.expiration.Plugin({
//     purgeOnQuotaError: true
// });

// vue-cli3.0 supports pwa with the help of workbox-webpack-plugin, we need to get the precacheing list through this sentence.
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// cache our data, and use networkFirst strategy.
workbox.routing.registerRoute(
    new RegExp('.*experiments\?.*'),
    new workbox.strategies.NetworkFirst()
);
workbox.routing.registerRoute(
    new RegExp('.*experiments/\\d'),
    new workbox.strategies.NetworkFirst()
)
workbox.routing.registerRoute(
    new RegExp('.*experiment_types.*'),
    new workbox.strategies.NetworkFirst()
)
