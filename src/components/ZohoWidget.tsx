"use client";

import * as React from "react";

// Add window augmentation for TypeScript
declare global {
  interface Window {
    $zoho: {
      salesiq: {
        ready: () => void;
        [key: string]: unknown;
      };
      [key: string]: unknown;
    };
    // Definitions only for use within the component
    gtag?: (...args: unknown[]) => void;
  }
}

const ZohoWidget = () => {
  React.useEffect(() => {
    // Check if we're on the client and the script isn't loaded yet
    if (
      typeof window !== "undefined" &&
      !document.getElementById("zsiqscript")
    ) {
      // Initialize Zoho object
      window.$zoho = window.$zoho || {};
      window.$zoho.salesiq = window.$zoho.salesiq || { ready: function () {} };

      // Create script for Zoho SalesIQ
      const script = document.createElement("script");
      script.id = "zsiqscript";
      script.src = `https://salesiq.zohopublic.com/widget?wc=${process.env.NEXT_PUBLIC_ZOHO_WIDGET_ID}`;
      script.defer = true;

      // Add script to the document
      document.head.appendChild(script);

      console.log("Zoho SalesIQ script added to the page");
    }

    return () => {
      // Remove script when component unmounts
      const scriptEl = document.getElementById("zsiqscript");
      if (scriptEl) {
        scriptEl.remove();
      }
    };
  }, []);

  return null;
};

export default ZohoWidget;
