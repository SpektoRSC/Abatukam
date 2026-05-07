import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => (
  <section className="relative flex min-h-[50vh] flex-col items-center justify-center pt-16 text-center">
    {/* Background grid effect */}
    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative z-10 px-4"
    >
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
        <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
        Данные обновляются в реальном времени
      </div>

      <h1 className="mb-4 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
        Карта скорости
        <br />
        <span className="text-primary">интернета</span> в городе
      </h1>

      <p className="mx-auto max-w-xl text-lg text-muted-foreground">
        Узнайте реальную скорость подключения в любом районе.
        Данные собраны от тысяч пользователей.
      </p>
    </motion.div>

    <motion.a
      href="#map"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="mt-10 flex flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-primary"
    >
      <span className="text-xs">Смотреть карту</span>
      <ArrowDown className="h-4 w-4 animate-bounce" />
    </motion.a>
  </section>
);

export default HeroSection;
