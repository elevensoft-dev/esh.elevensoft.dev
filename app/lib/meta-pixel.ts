/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

/**
 * Função auxiliar para disparar eventos no Meta Pixel.
 *
 * @param eventName Nome do evento (ex: "PageView", "Lead", "Purchase")
 * @param params (opcional) Objeto com parâmetros adicionais
 */
export function trackPixel(eventName: string) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", eventName);
  } else {
    if (import.meta.env.DEV) {
      console.warn("fbq não encontrado. Evento ignorado:", eventName);
    }
  }
}

