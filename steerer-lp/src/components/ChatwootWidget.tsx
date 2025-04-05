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
    // Определения только для использования внутри компонента
    gtag?: (...args: any[]) => void;
  }
}

const ChatwootWidget = () => {
  React.useEffect(() => {
    // Проверка, что мы на клиенте и что скрипт еще не загружен
    if (
      typeof window !== "undefined" &&
      !document.getElementById("chatwoot-script")
    ) {
      // Получаем переменные окружения или используем значения по умолчанию
      const baseUrl =
        process.env.NEXT_PUBLIC_CHATWOOT_URL || "https://app.chatwoot.com";
      const websiteToken =
        process.env.NEXT_PUBLIC_CHATWOOT_TOKEN || "CQcuhHgbtKbnc1XJW15aMLcG";

      // Создаем настройки
      window.chatwootSettings = {
        hideMessageBubble: false,
        position: "right",
        locale: "en",
        type: "standard",
      };

      // Создаем скрипт загрузки SDK - используем document.write для лучшей интеграции с Vercel
      const script = document.createElement("script");
      script.id = "chatwoot-script";
      script.type = "text/javascript";
      script.innerHTML = `
        window.chatwootSettings = {
          hideMessageBubble: false,
          position: "right",
          locale: "en", 
          type: "standard"
        };

        (function(d,t) {
          var BASE_URL="${baseUrl}";
          var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
          g.src=BASE_URL+"/packs/js/sdk.js";
          g.defer = true;
          g.async = true;
          if(s) {
            s.parentNode.insertBefore(g,s);
          } else {
            d.getElementsByTagName("head")[0].appendChild(g);
          }
          g.onload=function(){
            window.chatwootSDK.run({
              websiteToken: '${websiteToken}',
              baseUrl: BASE_URL
            })
          }
        })(document,"script");
      `;

      // Добавляем скрипт в head для избежания проблем с iframe
      document.head.appendChild(script);

      console.log("Chatwoot script added to the page");
    }

    return () => {
      // Удаляем скрипт при размонтировании компонента
      const scriptEl = document.getElementById("chatwoot-script");
      if (scriptEl) {
        scriptEl.remove();
      }

      // Также удаляем загруженный SDK скрипт
      const sdkScript = document.querySelector('script[src*="sdk.js"]');
      if (sdkScript && sdkScript.parentNode) {
        sdkScript.parentNode.removeChild(sdkScript);
      }
    };
  }, []);

  return null;
};

export default ChatwootWidget;
