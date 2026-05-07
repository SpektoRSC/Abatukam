import { Wifi } from "lucide-react";

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
    <div className="container flex h-16 items-center justify-between">
      <div className="flex items-center gap-2.5">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 shadow-glow">
          <Wifi className="h-5 w-5 text-primary" />
        </div>
        <span className="text-lg font-bold tracking-tight text-foreground">
          Speed<span className="text-primary">Map</span>
        </span>
      </div>
      <nav className="hidden gap-6 sm:flex">
        <a href="#map" className="text-sm text-muted-foreground transition-colors hover:text-primary">Карта</a>
        <a href="#stats" className="text-sm text-muted-foreground transition-colors hover:text-primary">Статистика</a>
        <a href="#about" className="text-sm text-muted-foreground transition-colors hover:text-primary">О проекте</a>
      </nav>
    </div>
  </header>
);

export default Header;
