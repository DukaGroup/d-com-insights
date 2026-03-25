import { Store, Users, AlertTriangle, TrendingUp } from "lucide-react";
import StatCard from "@/components/StatCard";
import { shops } from "@/data/shops";
import { staff } from "@/data/staff";
import { topPerformers, shopStats } from "@/data/statistics";

const Index = () => {
  const totalStaff = staff.filter((s) => !s.isVacant).length;
  const vacantPositions = staff.filter((s) => s.isVacant).length;
  const avgPerformance = Math.round(
    shopStats.reduce((sum, s) => sum + s.percentage, 0) / shopStats.length
  );

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Përmbledhje e përgjithshme e D-COM</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Gjithsej Shope" value={shops.length} subtitle="Dyqane aktive" icon={Store} />
        <StatCard title="Gjithsej Staf" value={totalStaff} subtitle="Punonjës aktivë" icon={Users} />
        <StatCard title="Vende Vakante" value={vacantPositions} subtitle="Pozicione të hapura" icon={AlertTriangle} />
        <StatCard title="Performanca Mesatare" value={`${avgPerformance}%`} subtitle="Nivel shopi" icon={TrendingUp} />
      </div>

      {/* Top 3 */}
      <div>
        <h2 className="mb-4 text-lg font-semibold text-foreground">🏆 Të Dalluarit — {topPerformers[0]?.month}</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {topPerformers.map((p) => (
            <div
              key={p.rank}
              className="relative overflow-hidden rounded-xl border bg-card p-5 shadow-sm"
            >
              <div className="absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                {p.rank}
              </div>
              <p className="text-lg font-bold text-card-foreground">{p.name}</p>
              <p className="text-sm text-muted-foreground">{p.shop}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground">{p.role}</span>
                <span className="text-xl font-bold text-primary">{p.score}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Shop Performance */}
      <div>
        <h2 className="mb-4 text-lg font-semibold text-foreground">Performanca e Shopeve</h2>
        <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Shopi</th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">Target</th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">Arritur</th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">%</th>
              </tr>
            </thead>
            <tbody>
              {shopStats.slice(0, 10).map((s) => (
                <tr key={s.shopName} className="border-b last:border-0">
                  <td className="px-4 py-3 font-medium text-card-foreground">{s.shopName}</td>
                  <td className="px-4 py-3 text-right text-muted-foreground">{s.target}</td>
                  <td className="px-4 py-3 text-right text-muted-foreground">{s.achieved}</td>
                  <td className="px-4 py-3 text-right">
                    <span
                      className={`inline-flex rounded-full px-2 py-0.5 text-xs font-semibold ${
                        s.percentage >= 90
                          ? "bg-accent text-accent-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {s.percentage}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Index;
