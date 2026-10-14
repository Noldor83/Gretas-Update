// Minimaler Service Worker: macht die Seite installierbar, speichert nichts zwischen.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (e) => {
  if (e.request.mode !== "navigate") return;
  e.respondWith(fetch(e.request).catch(() => new Response(
    "<meta charset=utf-8><meta name=viewport content='width=device-width'><p style='font:18px sans-serif;padding:24px'>Keine Internetverbindung. Bitte WLAN oder mobile Daten einschalten und neu laden.</p>",
    { headers: { "Content-Type": "text/html; charset=utf-8" } })));
});
