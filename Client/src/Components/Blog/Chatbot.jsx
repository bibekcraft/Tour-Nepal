import { useEffect, useRef } from "react";

const Chatbot = () => {
  const isLoaded = useRef(false);

  useEffect(() => {
    if (isLoaded.current) return;

    console.log("Attempting to load OpenWidget script...");

    // Define window.__ow before loading the script
    window.__ow = window.__ow || {};
    window.__ow.organizationId = "cdd10f83-9041-4877-921e-9ffbd758ee33";
    window.__ow.template_id = "39a4c206-a0aa-4216-8beb-0c67944223b3";
    window.__ow.integration_name = "manual_settings";
    window.__ow.product_name = "chatbot";

    const script = document.createElement("script");
    script.async = true;
    script.type = "text/javascript";
    script.src = "https://cdn.openwidget.com/openwidget.js";

    script.onload = () => {
      console.log("OpenWidget script loaded successfully!");
      isLoaded.current = true;
    };

    script.onerror = (error) => {
      console.error("Failed to load OpenWidget script:", error);
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        console.log("Cleaning up OpenWidget script...");
        document.body.removeChild(script);
      }
    };
  }, []);

  return null;
};

export default Chatbot;