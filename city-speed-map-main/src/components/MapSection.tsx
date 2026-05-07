import { motion } from "framer-motion";
import { MapPin, Gauge, Signal } from "lucide-react";

const MapSection = () => (
  <section id="map" className="py-16">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
          Интерактивная карта
        </h2>
        <p className="mb-8 text-muted-foreground">
          Нажмите на район, чтобы узнать среднюю скорость интернета
        </p>
      </motion.div>

      {/* Map container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl border border-border bg-card"
      >
        {/* Map placeholder */}
        <div className="flex aspect-[16/9] min-h-[400px] items-center justify-center lg:min-h-[550px]">
          {/* Grid overlay simulating map */}
          <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.04)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

          {/* Simulated heatmap zones */}
          <div className="absolute left-[15%] top-[25%] h-32 w-32 rounded-full bg-speed-fast/20 blur-3xl" />
          <div className="absolute right-[20%] top-[30%] h-40 w-40 rounded-full bg-speed-medium/15 blur-3xl" />
          <div className="absolute bottom-[20%] left-[40%] h-36 w-36 rounded-full bg-speed-slow/20 blur-3xl" />
          <div className="absolute left-[60%] top-[20%] h-28 w-28 rounded-full bg-speed-fast/15 blur-3xl" />
          <div className="absolute bottom-[35%] left-[25%] h-24 w-24 rounded-full bg-primary/10 blur-2xl" />

          {/* Pin markers */}
          <div className="speed-marker absolute left-[20%] top-[30%] flex flex-col items-center">
            <div className="rounded-lg border border-speed-fast/30 bg-card/90 px-2 py-1 text-xs font-mono text-speed-fast backdrop-blur-sm">
              95 Мбит/с
            </div>
            <MapPin className="mt-1 h-5 w-5 text-speed-fast" />
          </div>

          <div className="speed-marker absolute right-[25%] top-[40%] flex flex-col items-center">
            <div className="rounded-lg border border-speed-medium/30 bg-card/90 px-2 py-1 text-xs font-mono text-speed-medium backdrop-blur-sm">
              42 Мбит/с
            </div>
            <MapPin className="mt-1 h-5 w-5 text-speed-medium" />
          </div>

          <div className="speed-marker absolute bottom-[25%] left-[45%] flex flex-col items-center">
            <div className="rounded-lg border border-speed-slow/30 bg-card/90 px-2 py-1 text-xs font-mono text-speed-slow backdrop-blur-sm">
              12 Мбит/с
            </div>
            <MapPin className="mt-1 h-5 w-5 text-speed-slow" />
          </div>

          {/* Center label */}
          <div className="relative z-10 flex flex-col items-center gap-3 text-muted-foreground">
            <div className="rounded-xl border border-border bg-card/80 px-6 py-4 text-center backdrop-blur-sm">
              <p className="text-sm font-medium text-foreground">Здесь будет интерактивная карта</p>
              <p className="mt-1 text-xs text-muted-foreground">Подключите API карт (Yandex Maps, 2GIS, OpenStreetMap)</p>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-6 border-t border-border px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-speed-fast" />
            <span className="text-sm text-muted-foreground">Быстрый (&gt;50 Мбит/с)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-speed-medium" />
            <span className="text-sm text-muted-foreground">Средний (20–50 Мбит/с)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-speed-slow" />
            <span className="text-sm text-muted-foreground">Медленный (&lt;20 Мбит/с)</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default MapSection;
