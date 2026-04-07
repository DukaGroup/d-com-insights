import { ReactNode } from "react";
import AppSidebar from "./AppSidebar";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />
      <main className="relative ml-64 min-h-screen overflow-hidden p-6 lg:p-8">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <img
            src="/branding/dcom-background.jpg"
            alt=""
            className="h-full w-full object-cover opacity-[0.25]"
          />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
