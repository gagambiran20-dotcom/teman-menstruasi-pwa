if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js")
      .then(() => console.log("Service Worker aktif"))
      .catch(error => console.log("Service Worker gagal:", error));
  });
}
