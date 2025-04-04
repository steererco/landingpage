"use client";

import * as React from "react";

// Add window augmentation for TypeScript
declare global {
  interface Window {
    chatwootSettings: {
      hideMessageBubble: boolean;
      position: string;
      locale: string;
      type: string;
    };
    chatwootSDK: {
      run: (config: { websiteToken: string; baseUrl: string }) => void;
    };
  }
}

const ChatwootWidget = () => {
  React.useEffect(() => {
    // Add Chatwoot Settings
    window.chatwootSettings = {
      hideMessageBubble: false,
      position: "right",
      locale: "en",
      type: "standard",
    };

    // Скрипт Chatwoot из пользовательского кода
    (function (d: Document, t: string) {
      var BASE_URL = "https://app.chatwoot.com";
      var g = d.createElement(t) as HTMLScriptElement;
      var s = d.getElementsByTagName(t)[0];
      g.src = BASE_URL + "/packs/js/sdk.js";
      g.defer = true;
      g.async = true;
      if (s && s.parentNode) {
        s.parentNode.insertBefore(g, s);
      }
      g.onload = function () {
        window.chatwootSDK.run({
          websiteToken: process.env.NEXT_PUBLIC_CHATWOOT_KEY || "",
          baseUrl: BASE_URL,
        });
      };
    })(document, "script");

    return () => {
      // Очистка при размонтировании компонента
      if (window.chatwootSDK) {
        // Удаляем скрипт при необходимости
        const scriptElement = document.querySelector('script[src*="sdk.js"]');
        if (scriptElement && scriptElement.parentNode) {
          scriptElement.parentNode.removeChild(scriptElement);
        }
      }
    };
  }, []);

  return null;
};

export default ChatwootWidget;
