import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/admin/Dashboard";
import Shows from "./pages/admin/Shows";
import Tickets from "./pages/admin/Tickets";
import Users from "./pages/admin/Users";
import Finances from "./pages/admin/Finances";
import Settings from "./pages/admin/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/shows" element={<Shows />} />
          <Route path="/admin/tickets" element={<Tickets />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/finances" element={<Finances />} />
          <Route path="/admin/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
