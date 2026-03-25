import { Upload, Database, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const uploadCards = [
  {
    title: "Database Shopeve",
    description: "Ngarko Excel me të dhënat e shopeve (emri, adresa, statusi)",
    icon: Database,
    accepts: "Shop Data (.xlsx)",
  },
  {
    title: "Të Dhënat e Stafit",
    description: "Ngarko Excel me listën e stafit, rolet dhe kontaktet",
    icon: Users,
    accepts: "Staff Data (.xlsx)",
  },
  {
    title: "Statistikat",
    description: "Ngarko Excel me performancën mujore të shopeve dhe stafit",
    icon: BarChart3,
    accepts: "Statistics (.xlsx)",
  },
];

const Admin = () => {
  return (
    <div className="max-w-3xl space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Admin Panel</h1>
        <p className="text-muted-foreground">Menaxho të dhënat e portalit</p>
      </div>

      <div className="grid gap-6">
        {uploadCards.map((card) => (
          <div key={card.title} className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <card.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-card-foreground">{card.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{card.description}</p>
                <div className="mt-4 flex items-center gap-3">
                  <Button variant="outline" className="gap-2">
                    <Upload className="h-4 w-4" />
                    Zgjidh Skedarin
                  </Button>
                  <span className="text-xs text-muted-foreground">{card.accepts}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-dashed border-muted-foreground/30 bg-muted/30 p-8 text-center">
        <p className="text-sm text-muted-foreground">
          Funksioni i ngarkimit do të aktivizohet kur të lidhet me Supabase.
          <br />
          Aktualisht portali përdor të dhëna demo.
        </p>
      </div>
    </div>
  );
};

export default Admin;
