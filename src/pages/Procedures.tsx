import { Download, ExternalLink, FileCheck2 } from "lucide-react";
import { procedures, type ProcedureCategory } from "@/data/procedures";

const categories: ProcedureCategory[] = ["Kompani", "Shitje", "Inventar"];

const Procedures = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Procedurat</h1>
        <p className="text-muted-foreground">Procedurat e kompanisë, shitjes dhe inventarit</p>
      </div>

      <div className="space-y-5">
        {categories.map((category) => {
          const items = procedures.filter((procedure) => procedure.category === category);

          return (
            <section key={category} className="rounded-xl border bg-card p-5 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold text-card-foreground">{category}</h2>
              <div className="space-y-3">
                {items.map((procedure) => (
                  <div
                    key={procedure.id}
                    className="flex flex-col gap-3 rounded-lg border bg-background/60 p-3 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <FileCheck2 className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-card-foreground">{procedure.title}</span>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={procedure.documentUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Hap
                      </a>
                      <a
                        href={procedure.documentUrl}
                        download
                        className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90"
                      >
                        <Download className="h-3.5 w-3.5" />
                        Shkarko
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Procedures;
