import { ReactNode, useState } from "react";
import { Menu } from "lucide-react";
import AppSidebar from "./AppSidebar";

const AppLayout = ({ children }: { children: ReactNode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <AppSidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      <div className="fixed left-0 right-0 top-0 z-30 flex h-16 items-center justify-between border-b border-border/60 bg-background/95 px-4 backdrop-blur-sm lg:hidden">
        <button
          onClick={() => setMobileOpen(true)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border/70 bg-card text-foreground"
          aria-label="Hap menune"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="rounded-md border border-border/50 bg-white px-2 py-1">
          <img src="/branding/dcom-logo-clean.png" alt="D-COM logo" className="h-8 w-28 object-contain" />
        </div>
      </div>

      <main className="relative min-h-screen overflow-hidden p-4 pt-20 sm:p-6 sm:pt-24 lg:ml-64 lg:p-8 lg:pt-8">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <img src="/branding/dcom-background.jpg" alt="" className="h-full w-full object-cover opacity-[0.16]" />
          <div className="absolute inset-0 bg-background/86" />
          <div className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute right-8 top-24 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="absolute -bottom-28 left-1/3 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="relative z-10 rounded-3xl border border-border/60 bg-card/92 p-4 shadow-sm backdrop-blur-sm lg:p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
