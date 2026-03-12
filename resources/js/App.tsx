import "../css/app.css";
import { createInertiaApp, type ResolvedComponent } from "@inertiajs/react";
import { createRoot } from "react-dom/client";

createInertiaApp({
  title: (title) => `Baliserenetours - ${title}`,
  progress: {
    color: "#a88a5e",
    delay: 0,
  },
  resolve: (name) => {
    const pages = import.meta.glob<ResolvedComponent>("./Pages/**/*.tsx", {
      eager: true,
    });
    return pages[`./Pages/${name}.tsx`];
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});
