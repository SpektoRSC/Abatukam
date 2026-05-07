import { Wifi } from "lucide-react";

const Footer = () => (
  <footer id="about" className="border-t border-border py-10">
    <div className="container flex flex-col items-center gap-4 text-center">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Wifi className="h-4 w-4 text-primary" />
        <span className="text-sm font-medium">SpeedMap</span>
      </div>
      <p className="max-w-lg text-sm text-muted-foreground">
        SpeedMap — сервис, разработанный молодыми разработчиками КубГТУ. 
        Благодаря этой карте вы сможете отследить скорость интернета в разных районах Краснодара.
      </p>
      <p className="text-xs text-muted-foreground/60">© 2026 SpeedMap</p>
    </div>
  </footer>
);

export default Footer;
