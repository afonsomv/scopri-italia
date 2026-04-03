const CACHE_NAME = "scopri-italia-v4";

const PRECACHE_URLS = [
  "/",
  "/badges",
  "/profile",
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png",
  // City pages
  "/city/pisa",
  "/city/lucca",
  "/city/siena",
  "/city/san-gimignano",
  "/city/rome",
  // Pisa spots & quizzes
  "/spot/pisa-torre", "/quiz/pisa-torre",
  "/spot/pisa-duomo", "/quiz/pisa-duomo",
  "/spot/pisa-battistero", "/quiz/pisa-battistero",
  "/spot/pisa-camposanto", "/quiz/pisa-camposanto",
  "/spot/pisa-cavalieri", "/quiz/pisa-cavalieri",
  "/spot/pisa-spina", "/quiz/pisa-spina",
  // Lucca spots & quizzes
  "/spot/lucca-muralhas", "/quiz/lucca-muralhas",
  "/spot/lucca-anfiteatro", "/quiz/lucca-anfiteatro",
  "/spot/lucca-guinigi", "/quiz/lucca-guinigi",
  "/spot/lucca-san-michele", "/quiz/lucca-san-michele",
  "/spot/lucca-duomo", "/quiz/lucca-duomo",
  "/spot/lucca-san-frediano", "/quiz/lucca-san-frediano",
  // Siena spots & quizzes
  "/spot/siena-campo", "/quiz/siena-campo",
  "/spot/siena-torre-mangia", "/quiz/siena-torre-mangia",
  "/spot/siena-palazzo-pubblico", "/quiz/siena-palazzo-pubblico",
  "/spot/siena-duomo", "/quiz/siena-duomo",
  "/spot/siena-cripta", "/quiz/siena-cripta",
  "/spot/siena-opera-duomo", "/quiz/siena-opera-duomo",
  "/spot/siena-san-domenico", "/quiz/siena-san-domenico",
  "/spot/siena-fortezza", "/quiz/siena-fortezza",
  // San Gimignano spots & quizzes
  "/spot/sg-cisterna", "/quiz/sg-cisterna",
  "/spot/sg-collegiata", "/quiz/sg-collegiata",
  "/spot/sg-torre-grossa", "/quiz/sg-torre-grossa",
  // Rome spots & quizzes
  "/spot/rome-trastevere", "/quiz/rome-trastevere",
  "/spot/rome-trevi", "/quiz/rome-trevi",
  "/spot/rome-pantheon", "/quiz/rome-pantheon",
  "/spot/rome-navona", "/quiz/rome-navona",
  "/spot/rome-colosseo", "/quiz/rome-colosseo",
  "/spot/rome-arco-constantino", "/quiz/rome-arco-constantino",
  "/spot/rome-foro-romano", "/quiz/rome-foro-romano",
  "/spot/rome-palatino", "/quiz/rome-palatino",
  "/spot/rome-circo-massimo", "/quiz/rome-circo-massimo",
  "/spot/rome-giardino-aranci", "/quiz/rome-giardino-aranci",
  "/spot/rome-buco-serratura", "/quiz/rome-buco-serratura",
  "/spot/rome-santa-sabina", "/quiz/rome-santa-sabina",
  "/spot/rome-piramide", "/quiz/rome-piramide",
  "/spot/rome-gianicolo", "/quiz/rome-gianicolo",
  "/spot/rome-piazza-san-pietro", "/quiz/rome-piazza-san-pietro",
  "/spot/rome-san-pietro", "/quiz/rome-san-pietro",
  "/spot/rome-castel-santangelo", "/quiz/rome-castel-santangelo",
  "/spot/rome-ponte-santangelo", "/quiz/rome-ponte-santangelo",
  "/spot/rome-isola-tiberina", "/quiz/rome-isola-tiberina",
  "/spot/rome-santa-maria-maggiore", "/quiz/rome-santa-maria-maggiore",
  "/spot/rome-san-clemente", "/quiz/rome-san-clemente",
];

// Install: precache all pages, then cache all JS/CSS chunks
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      // Precache all page HTML
      await cache.addAll(PRECACHE_URLS);

      // Parse the homepage HTML to find and cache all JS/CSS chunk URLs
      const homeResponse = await cache.match("/");
      if (homeResponse) {
        const html = await homeResponse.clone().text();
        const assetUrls = [];
        // Match all /_next/static/ references in the HTML
        const regex = /\/_next\/static\/[^"'\s)]+/g;
        let match;
        while ((match = regex.exec(html)) !== null) {
          assetUrls.push(match[0]);
        }
        if (assetUrls.length > 0) {
          await cache.addAll([...new Set(assetUrls)]);
        }
      }
    })
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// Fetch: cache-first for everything (fully static app)
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Skip non-GET and non-http requests
  if (request.method !== "GET" || !request.url.startsWith("http")) return;

  event.respondWith(
    caches.match(request).then(
      (cached) =>
        cached ||
        fetch(request)
          .then((response) => {
            if (response.ok && new URL(request.url).origin === self.location.origin) {
              const clone = response.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
            }
            return response;
          })
          .catch(() => {
            // Offline fallback for navigation: try matching by pathname
            if (request.mode === "navigate") {
              const pathname = new URL(request.url).pathname;
              return caches.match(pathname).then((r) => r || caches.match("/"));
            }
            return new Response("Offline", { status: 503 });
          })
    )
  );
});
