import { useState } from "react";
import { shopStats, smStats, srStats, topPerformers } from "@/data/statistics";
import { Trophy, Upload } from "lucide-react";

type Tab = "shops" | "sm" | "sr" | "top3";

const Statistics = () => {
  const [tab, setTab] = useState<Tab>("shops");

  const tabs: { key: Tab; label: string }[] = [
    { key: "shops", label: "Arritjet në Nivel Shopi" },
    { key: "sm", label: "Store Managers" },
    { key: "sr", label: "Sales Reps" },
    { key: "top3", label: "Të Dalluarit" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Arritjet e Targeteve</h1>
          <p className="text-muted-foreground">Arritjet e targeteve dhe performanca mujore</p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          <Upload className="h-4 w-4" />
          Ngarko Excel
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 rounded-lg bg-muted p-1">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              tab === t.key
                ? "bg-card text-card-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Shop Stats */}
      {tab === "shops" && (
        <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">#</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Shopi</th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">Target</th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">Arritur</th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">%</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Progres</th>
              </tr>
            </thead>
            <tbody>
              {shopStats.map((s, i) => (
                <tr key={s.shopName} className="border-b last:border-0">
                  <td className="px-4 py-3 text-muted-foreground">{i + 1}</td>
                  <td className="px-4 py-3 font-medium text-card-foreground">{s.shopName}</td>
                  <td className="px-4 py-3 text-right text-muted-foreground">{s.target}</td>
                  <td className="px-4 py-3 text-right text-muted-foreground">{s.achieved}</td>
                  <td className="px-4 py-3 text-right font-semibold text-card-foreground">{s.percentage}%</td>
                  <td className="px-4 py-3">
                    <div className="h-2 w-24 rounded-full bg-muted">
                      <div className="h-full rounded-full bg-primary" style={{ width: `${s.percentage}%` }} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* SM Stats */}
      {tab === "sm" && (
        <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">#</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Emri</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Shopi</th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">Target</th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">Arritur</th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">%</th>
              </tr>
            </thead>
            <tbody>
              {smStats.map((s, i) => (
                <tr key={s.name} className="border-b last:border-0">
                  <td className="px-4 py-3 text-muted-foreground">{i + 1}</td>
                  <td className="px-4 py-3 font-medium text-card-foreground">{s.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{s.shop}</td>
                  <td className="px-4 py-3 text-right text-muted-foreground">{s.target}</td>
                  <td className="px-4 py-3 text-right text-muted-foreground">{s.achieved}</td>
                  <td className="px-4 py-3 text-right font-semibold text-card-foreground">{s.percentage}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* SR Stats */}
      {tab === "sr" && (
        <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">#</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Emri</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Shopi</th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">Target</th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">Arritur</th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">%</th>
              </tr>
            </thead>
            <tbody>
              {srStats.map((s, i) => (
                <tr key={s.name} className="border-b last:border-0">
                  <td className="px-4 py-3 text-muted-foreground">{i + 1}</td>
                  <td className="px-4 py-3 font-medium text-card-foreground">{s.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{s.shop}</td>
                  <td className="px-4 py-3 text-right text-muted-foreground">{s.target}</td>
                  <td className="px-4 py-3 text-right text-muted-foreground">{s.achieved}</td>
                  <td className="px-4 py-3 text-right font-semibold text-card-foreground">{s.percentage}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Top 3 */}
      {tab === "top3" && (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground">🏆 Të Dalluarit — {topPerformers[0]?.month}</h3>
          <div className="grid gap-6 sm:grid-cols-3">
            {topPerformers.map((p) => (
              <div
                key={p.rank}
                className="relative overflow-hidden rounded-2xl border bg-card p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  <Trophy className="h-8 w-8" />
                </div>
                <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                  {p.rank}
                </div>
                <h4 className="text-lg font-bold text-card-foreground">{p.name}</h4>
                <p className="text-sm text-muted-foreground">{p.shop}</p>
                <p className="mt-1 text-xs text-muted-foreground">{p.role}</p>
                <p className="mt-3 text-3xl font-bold text-primary">{p.score}%</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Statistics;
