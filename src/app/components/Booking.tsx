import { useEffect } from "react";

export function Booking() {
  useEffect(() => {
    // Replicate the Cal.com IIFE queue setup exactly as provided
    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) { a.q.push(ar); };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          const cal = C.Cal;
          const ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () { p(api, arguments); };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else {
              p(cal, ar);
            }
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    const Cal = (window as any).Cal;

    Cal("init", "in-person-consultation-estimate", { origin: "https://app.cal.com" });

    Cal.ns["in-person-consultation-estimate"]("inline", {
      elementOrSelector: "#my-cal-inline-in-person-consultation-estimate",
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
      calLink: "cleanqueens/in-person-consultation-estimate",
    });

    Cal.ns["in-person-consultation-estimate"]("ui", {
      cssVarsPerTheme: { light: { "cal-brand": "#64a0e6" } },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1E5DB8] to-[#1a4da0] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Book a Service</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Schedule your free in-person consultation and estimate with Clean Queens.
          </p>
        </div>
      </section>

      {/* Cal.com Embed */}
      <section className="bg-white py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            id="my-cal-inline-in-person-consultation-estimate"
            style={{ width: "100%", minHeight: "800px", overflow: "visible" }}
          />
        </div>
      </section>
    </div>
  );
}
