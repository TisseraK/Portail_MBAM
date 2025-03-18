'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7f23f4778cbff78c1d3e684d108d1879",
"version.json": "3844886f24532138b2cb89fdfc6f2854",
"index.html": "b9107744f5450e344f4a2655cefbcc61",
"/": "b9107744f5450e344f4a2655cefbcc61",
"main.dart.js": "02ffc87518085ca8b22d3c44a080c7d5",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cf6bee5b4096ba8ce5bb7f916e282ec6",
".git/ORIG_HEAD": "2384b06fa42302b334375ad726785b4e",
".git/config": "f09be3253a52aea0d8a1d6fd8c327be4",
".git/objects/59/40a249eda0b012f9e8458637b3e460bc27af87": "a9d952d4b82daca7cab270e1e1c587b1",
".git/objects/59/1c4b111adecd5a9ee0fafcbade121cd2505371": "ac84c428934bee8a8b018bb9c88da942",
".git/objects/92/17413155c6d24e6a13ac13fa1f6493e09e0f49": "138cd3827980c6d455d1993f84462caa",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/3b/60baa3dc38835597d2a870bc9663f271864599": "2c902d832d903311b0360a543695821d",
".git/objects/9b/9fa780e2ded17d0176434b1c8495cf69a9f2ca": "62e6aa6c4077a385187ab7d5d869db99",
".git/objects/58/c4664eb27211c4374b92eb09396a56684d2833": "28b086cb939e662450452a0b765b7819",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/5f/bbb20e9884a3ec498458d78027d48085d492d8": "e0157393a9b7b463c86d34ee78d63f84",
".git/objects/9d/374de68322e29ac592811094a388579f847fc1": "8335cd7a878541d8b80ff36c8a092b8a",
".git/objects/ac/064e05bff169f17b4c3c254ccf163a0caee39d": "b600713a915ce9ea75ecd872245c3152",
".git/objects/d0/588f83119005c997d8c34f591da8cc4fab27da": "43159537b97d916127f6b7e4c678251c",
".git/objects/b4/eb39d01dda00c3ae04841ad7569f71b63162c3": "1e59d377d0d4cd62e24fa64bd0c50303",
".git/objects/a2/632361c6887d271d6c1883dd733172872d4107": "919f57fe5a6e8f2dce9c4b8cd71a4b0e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f4/2de02e7db9a46dfdecafd3eae86876f6858b73": "ccb3c604423fb54ee71ab0e8beccbdfe",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e4/910d78294e033f9bdd2297ce234bdf70c5933c": "db3b5abe5c3eb8d30bc434439e433dcf",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/4e/3a1920df3c1f0a1d317af47bbddef64bcf9cb4": "f13b7a39a066eb57aa4c0507fb73e0c3",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/7d/0d53d0b31f0268ba51ac273c91b01b11b5049f": "8113e4e4cef6045fb48b3e99d28e50ba",
".git/objects/7d/c05e604578c0dec6a3d9a23411d2542ef24dfc": "1939958039cf88a06cd6313c39231216",
".git/objects/7d/0f5ac95bf2da10536d6c9a816c7285f9aefca4": "9068c9399de2cb6801c1fcb81083d284",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/87/79c85e481c0e358bb8f5cbdd1e297cff855baf": "e517a444130d997a4733490b2d4df4f6",
".git/objects/87/398f6e610f13d7fb213a873087173ff72e605d": "24378d917ff43ac47c893f0f280c65d7",
".git/objects/74/d45b671f0b9c8210e280e82c6898b9323951bd": "5d5d6be5729af530c81df3de15a23cd8",
".git/objects/7b/4bda37a3b8d0f4a0e17933a6a436ee39840e36": "59624fd53e994338b71b059c7ae50e5d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/44/01e5fbab3897da39ef21ca43a3c7e9c931ebf7": "4fed00cb4467067f54371658a97c14b2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/96/9c825fc64d1ba59b34e74463e7bc54c2c1c7c8": "d73295acb971e36ee5199ecd4dd7a970",
".git/objects/98/137b467bafc62653242a3fc2c5251684c8441b": "104fdf5340b5f24493c19279feac231b",
".git/objects/3f/1545a98da7c316196c3f5ff3e86be9e04fd014": "bdb57ecc73d6d08397c0fb8d40b21abd",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6c/e59a95ad3aca3e0d5fe7389710b73f247c5cb9": "c55ffd498f2a595c34971742682b105b",
".git/objects/97/265b057d1e23db815ab7b21a9a4c873b6b42c4": "c1f9c0741ea771fb802c965fdfe622f1",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/aa/9bc98ddc3687853f6abc61880c8463e492e89f": "294e728c1f1463cc7d7b043e1567fb96",
".git/objects/aa/264535df8eb9a0ea7d693bd595dc1f834c7ed1": "681fb77467a6ae608da5670c8ce97222",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/80f690d5a9393f77b520abf633ba04f1946390": "4706d6b6dbfa3edc257e4931b6e4463e",
".git/objects/b0/a2fb77840afdcee3d256b945f7ad25dfcd5182": "c3b3c2ca19132e533f2da7d2fc1c4b8f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/cd/90860b941331dba4c34dab24447c8bc631a2ec": "29e052874a490f943a26efd4e894a0aa",
".git/objects/fa/7565dc5165b1fdc1db7e8be708fd3049454e3f": "d446347be6401e687b6e0547ae10a333",
".git/objects/f1/34a94689c02612e830582114f83b0a17bd22db": "6dcad5e37e1700edacc5b19683cdcf13",
".git/objects/f8/8067c67e40645b38e74c9abfe0afa54f2572c8": "67475d67901ce7aea89cad54ab85e02d",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/69024736fb2b127bf742093ba918a1eff7d0cf": "2d56cb8216ec4c200dec9b3c67739e69",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/1e/baa26197d99cc157c503968d0cfd89963848e5": "6abb28256e31e90109e3d7ba0b5f1a69",
".git/objects/24/9f17b0e5c9a16e3a3d9b0eb29239b01dfa28b4": "2627f15efa632113afccb7d6fa19da45",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/49/7c66b90f247a8bf9788907ca970d6c08e86440": "7c8f0e19c85bc2857f23f6c545300420",
".git/objects/2b/7a5d9ba74081df7a26f3f583a9c736b165794a": "a71157e5c83b30938fda88683071fdfe",
".git/objects/14/708c0304423bd33ff991e118cb21fbe455c545": "4556d4280957b7d665d43332d58186dc",
".git/objects/25/21d86ba8053b35fcb61e0f0334ee268a4e1f4c": "2ee2a6b481bc51b94cd544b44812546f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "054d56af8c46bdb0a915446e521c8e3d",
".git/logs/refs/heads/main": "054d56af8c46bdb0a915446e521c8e3d",
".git/logs/refs/remotes/origin/main": "b632c184192cffb3db1ceb5b5db081e1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "2384b06fa42302b334375ad726785b4e",
".git/refs/remotes/origin/main": "2384b06fa42302b334375ad726785b4e",
".git/index": "4e0722bd9ecf4c268b93314ec80f4f85",
".git/COMMIT_EDITMSG": "d8e8fca2dc0f896fd7cb4cb0031ba249",
".git/FETCH_HEAD": "6492c5c3059ae9e086f5590bb9ed0bf0",
"assets/AssetManifest.json": "b5d57ba05a8f0736ba5e7196750311ed",
"assets/NOTICES": "190bdafe13a3b2007525f44f3e7e2c09",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "406de76ac67a1fde11f21a1dc8448ba1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "7076aa3c56c4c9510a9008aca5b05d62",
"assets/fonts/MaterialIcons-Regular.otf": "c0803083da755bbda0046dc1489b7a8b",
"assets/assets/img/co2.svg": "f5f8556af94dd1b9f1efa71f025a1f40",
"assets/assets/img/ok.png": "dfb599e860d8ca0f78f103e5e6875b91",
"assets/assets/img/logo_MBAM.svg": "89f8637b1b15c23793619ba3887e4a1f",
"assets/assets/img/pin.png": "355be2c5ace05ecc68bb9db0e7e6a254",
"assets/assets/img/trap.png": "f7613c7647223a0cb900d223752697a9",
"assets/assets/img/nok.png": "f89491be586f34425e335bbd9ce10751",
"assets/assets/img/favicon_MBAM.svg": "8d338fa8ced797458716a4498a069d6e",
"assets/assets/img/onoff.svg": "7837ecde6128c36252f8c08dd45d485e",
"assets/assets/img/footerLarge.png": "aa10400238ee1b88d38ba8aeafa1f3a3",
"assets/assets/img/pin.svg": "6791cfd0b6e2329116b5b59ae32eff9d",
"assets/assets/img/ok.svg": "43c9da8f778f8fad6d767dcb1e223f56",
"assets/assets/img/co2.png": "686c12427f1daf7f9b82aed7aa27d56d",
"assets/assets/img/pheromones.svg": "cad7d4a000a4a760d55a093629d54dd7",
"assets/assets/img/footerSmall.png": "a029cc23361ed98e803a2f5e45de185f",
"assets/assets/img/trash.svg": "6338500c5479e41451c76ab735694c22",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
