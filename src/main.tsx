import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

declare const __APP_BUILD_TS__: string;

const BUILD_TS_KEY = "lorenzoelorenzo:app-build-timestamp";

const getStoredTimestamp = (): string | null => {
  try {
    return globalThis.localStorage?.getItem(BUILD_TS_KEY) ?? null;
  } catch {
    return null;
  }
};

const setStoredTimestamp = (value: string) => {
  try {
    globalThis.localStorage?.setItem(BUILD_TS_KEY, value);
  } catch {
    // best effort only
  }
};

const clearBrowserCaches = async () => {
  if ("caches" in globalThis) {
    try {
      const cacheNames = await caches.keys();
      await Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName)));
    } catch {
      // ignore cache deletion failures
    }
  }

  if (typeof navigator !== "undefined" && "serviceWorker" in navigator) {
    try {
      const registrations = await navigator.serviceWorker.getRegistrations();
      await Promise.all(registrations.map((registration) => registration.unregister()));
    } catch {
      // ignore service worker cleanup failures
    }
  }
};

const reloadWithFreshAssets = async (buildTimestamp: string) => {
  await clearBrowserCaches();
  setStoredTimestamp(buildTimestamp);
  if (typeof window !== "undefined" && window.location) {
    window.location.reload();
  }
};

const bootstrap = async () => {
  const currentBuild = typeof __APP_BUILD_TS__ === "string" ? __APP_BUILD_TS__ : new Date().toISOString();
  const previousBuild = getStoredTimestamp();

  if (previousBuild && previousBuild !== currentBuild) {
    await reloadWithFreshAssets(currentBuild);
    return;
  }

  setStoredTimestamp(currentBuild);
  createRoot(document.getElementById("root")!).render(<App />);
};

void bootstrap();
