/// <reference types="vite/client" />

interface Window {
  Calendly: {
    initInlineWidget: (options: {
      url: string;
      parentElement: HTMLElement | null;
      prefill?: Record<string, unknown>;
      utm?: Record<string, unknown>;
    }) => void;
  };
}

