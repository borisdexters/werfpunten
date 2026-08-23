/* Werfpunten service worker — alles wat de app nodig heeft staat in de cache,
   zodat ze op de werf ook zonder netwerk opent. */
const CACHE = "werfpunten-v65";
const BESTANDEN = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", e => {
  // cache:"reload" is hier niet optioneel: zonder dat haalt addAll de bestanden uit de gewone
  // browsercache, en die mag ze van GitHub Pages tien minuten oud serveren. Dan stopt een
  // gloednieuwe service worker de vórige versie in zijn cache en blijft de app hangen, hoe vaak
  // je ze ook opnieuw opent.
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.all(BESTANDEN.map(u =>
        fetch(new Request(u, {cache: "reload"})).then(r => {
          if (!r.ok) throw new Error("kon " + u + " niet ophalen");
          return c.put(u, r);
        })
      )))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(namen => Promise.all(namen.filter(n => n !== CACHE).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

/* cache-first: op de werf telt zekerheid, niet versheid.
   Een nieuwe versie komt binnen zodra er weer netwerk is. */
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  // Externe verzoeken (weer-API) met rust laten: die moeten bij geen netwerk gewoon falen,
  // zodat de app zelf kan beslissen het later opnieuw te proberen.
  if (new URL(e.request.url).origin !== self.location.origin) return;
  e.respondWith(
    caches.match(e.request).then(hit => {
      if (hit) {
        fetch(e.request).then(vers => {
          if (vers && vers.ok) caches.open(CACHE).then(c => c.put(e.request, vers));
        }).catch(() => {});
        return hit;
      }
      return fetch(e.request).catch(() => caches.match("./index.html"));
    })
  );
});
