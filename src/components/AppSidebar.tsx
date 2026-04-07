import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Store,
  Users,
  BarChart3,
  Network,
  Info,
  LogOut,
  Upload,
  FileText,
  ClipboardList,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/about", icon: Info, label: "Rreth D-COM" },
  { to: "/shops", icon: Store, label: "Database Shop" },
  { to: "/organogram", icon: Network, label: "Organograma" },
  { to: "/staff", icon: Users, label: "Stafi" },
  { to: "/statistics", icon: BarChart3, label: "Arritjet e Targeteve" },
  { to: "/financial-reports", icon: FileText, label: "Raportet Financiar" },
  { to: "/procedures", icon: ClipboardList, label: "Procedurat" },
  { to: "/protokolli", icon: FileText, label: "Protokolli" },
  { to: "/admin", icon: Upload, label: "Admin Panel" },
];

const AppSidebar = () => {
  const location = useLocation();
  const { logout, user } = useAuth();

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col bg-sidebar text-sidebar-foreground">
      {/* Logo */}
      <div className="border-b border-sidebar-border px-4 py-3">
        <div className="overflow-hidden rounded-md border border-sidebar-border/40 bg-white p-1.5">
          <img
            src="/branding/dcom-logo-clean.png"
            alt="D-COM logo"
            className="h-12 w-full object-contain"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <item.icon className="h-4 w-4 shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* User & Logout */}
      <div className="border-t border-sidebar-border p-4">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sidebar-accent text-xs font-semibold text-sidebar-accent-foreground">
            {user?.name?.[0]?.toUpperCase() || "U"}
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-sidebar-foreground">{user?.name || "User"}</p>
            <p className="truncate text-xs text-sidebar-muted">{user?.email}</p>
          </div>
        </div>
        <button
          onClick={logout}
          className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-sidebar-foreground/70 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        >
          <LogOut className="h-4 w-4" />
          Dil
        </button>
      </div>
    </aside>
  );
};

export default AppSidebar;
