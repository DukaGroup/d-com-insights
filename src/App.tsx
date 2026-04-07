import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import AppLayout from "@/components/AppLayout";
import Login from "@/pages/Login";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Shops from "@/pages/Shops";
import Organogram from "@/pages/Organogram";
import Staff from "@/pages/Staff";
import Statistics from "@/pages/Statistics";
import Admin from "@/pages/Admin";
import FinancialReports from "@/pages/FinancialReports";
import Procedures from "@/pages/Procedures";
import Protokolli from "@/pages/Protokolli";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const ProtectedRoutes = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Login />;

  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/organogram" element={<Organogram />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/financial-reports" element={<FinancialReports />} />
        <Route path="/procedures" element={<Procedures />} />
        <Route path="/protokolli" element={<Protokolli />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppLayout>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<ProtectedRoutes />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
