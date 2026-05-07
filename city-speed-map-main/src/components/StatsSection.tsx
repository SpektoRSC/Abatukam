import { motion } from "framer-motion";

const stats = [
  { label: "Средняя скорость", value: "64", unit: "Мбит/с", color: "text-primary" },
  { label: "Замеров сделано", value: "12.4K", unit: "", color: "text-foreground" },
  { label: "Районов покрыто", value: "47", unit: "", color: "text-foreground" },
  { label: "Провайдеров", value: "8", unit: "", color: "text-foreground" },
];

const StatsSection = () => (
  <section id="stats" className="border-t border-border py-16">
    <div className="container">
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="stat-card-cyber"
          >
            <div className={`font-mono text-3xl font-bold ${stat.color} sm:text-4xl`}>
              {stat.value}
              {stat.unit && <span className="ml-1 text-base font-normal text-muted-foreground">{stat.unit}</span>}
            </div>
            <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
